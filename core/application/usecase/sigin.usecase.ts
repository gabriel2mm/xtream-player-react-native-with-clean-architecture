import LoginParams from "@core/application/dtos/login-params.dto";
import IUseCase from "@core/domain/interface/usecase/usecase.interface";
import Account from "@core/domain/entity/account/account";
import IAccountService from "@core/domain/interface/account/account-service.interface";

/**
 * A use case class responsible for handling user sign-in functionality.
 * This class implements the IUseCase interface with LoginParams as input and Account as output.
 */
export default class Sigin implements IUseCase<LoginParams, Account> {

	/**
	 * Creates an instance of the Sigin use case.
	 * @param accountService The service responsible for user account-related operations.
	 * */
	constructor(readonly accountService: IAccountService) { }

	/**
	 * Executes the sign-in process using the provided login information.
	 * @param loginInfo The login information containing URL, username, and password.
	 * @returns The account information upon successful sign-in.
	 * */
	async execute(loginInfo: LoginParams): Promise<Account> {
		return await this.accountService.login(loginInfo.url, loginInfo.username, loginInfo.password);
	}

}