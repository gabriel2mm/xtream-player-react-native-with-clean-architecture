import LoginParams from "@core/application/dtos/login-params.dto";
import IUseCase from "@core/domain/interface/usecase.interface";
import IAccountService from "@core/domain/interface/account-service.interface";
import Account from "@core/domain/entity/account";

export default class Sigin implements IUseCase<LoginParams, Account> {

	constructor(readonly accountService: IAccountService) { }

	async execute(loginInfo: LoginParams): Promise<Account> {
		return await this.accountService.login(loginInfo.url, loginInfo.username, loginInfo.password);
	}

}