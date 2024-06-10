import Account from "@core/domain/entity/account";
import AccountMustBeProvidedException from "@core/domain/exceptions/account-must-be-provided.exception";

/**
 * A singleton class representing the current account context.
 * This class stores and provides access to the currently logged-in account.
 */
export default class AccountContext {

	private account: Account | undefined;

	private static instance: AccountContext | null = null;

	// Private constructor to prevent direct instantiation
	private constructor() { }

	/**
		* Returns the Singleton instance of AccountContext.
		* @returns The Singleton instance of AccountContext.
	*/
	static getInstance(): AccountContext {
		if (!this.instance) this.instance = new AccountContext();
		return this.instance as AccountContext;
	}

	/**
	* Sets the account in the current context.
	* @param account The account to set.
	*/
	setAccount(account: Account): void {
		if (!account)
			throw new AccountMustBeProvidedException();
		this.account = account;
	}

	/**
	 * Returns the account from the current context.
	 * @returns The account from the current context, or undefined if not set.
	 * @throws AccountNotFoundException if the account is not set.
	 */
	getAccount(): Account | undefined {
		return this.account;
	}
}