import Account from "@core/domain/entity/account";
import LoginResult from "@core/application/dtos/login-result.dto";
import LoginFailureException from "@core/domain/exceptions/login-failure.exception";
import IAccountService from "@core/domain/interface/account-service.interface";
import IHttpCacheClient from "@core/domain/interface/http-cache.adapter";
import IHttpClient from "@core/domain/interface/http.interface";
import { AxiosResponse } from "axios";

export default class AccountServiceMock implements IAccountService {

	constructor(readonly http: IHttpClient, readonly httpCacheClient: IHttpCacheClient) { }

	async login(url: string, username: string, password: string): Promise<Account> {
		if (username === "teste")
			throw new LoginFailureException();

		const response = await this.httpCacheClient.useQuery<AxiosResponse<LoginResult, any>>("account", () => this.http.get(url, {}));
		return response.data.user_info as Account;
	}

}