import Account from "@core/domain/entity/account";

export default class LoginResult {
	constructor(readonly user_info: Account, readonly server_info: any) { }
}