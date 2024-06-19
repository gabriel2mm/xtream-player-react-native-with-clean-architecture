import Account from "@core/domain/entity/account/account";
import LoginResult from "@core/application/dtos/login-result.dto";
import LoginFailureException from "@core/domain/exceptions/login-failure.exception";
import IAccountService from "@core/domain/interface/account-service.interface";
import IHttpCacheClient from "@core/domain/interface/http-cache.adapter";
import IHttpClient from "@core/domain/interface/http.interface";
import { AxiosResponse } from "axios";
import MockServices from "./services.mock";

export default class AccountServiceMock extends MockServices implements IAccountService {

	constructor(readonly http: IHttpClient, readonly httpCacheClient: IHttpCacheClient) {
		super(http, httpCacheClient);
	}

	async login(url: string, username: string, password: string): Promise<Account> {
		if (username === "teste")
			throw new LoginFailureException();

		const response = await this.mock<LoginResult>();
		return response.user_info;
	}

}