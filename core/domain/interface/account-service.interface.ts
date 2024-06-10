import Account from "../entity/account";

export default interface IAccountService { 
	login(url: string, username: string, password: string): Promise<Account>;
}