import Account from "../../entity/account/account";

export default interface IAccountService { 
	login(url: string, username: string, password: string): Promise<Account>;
}