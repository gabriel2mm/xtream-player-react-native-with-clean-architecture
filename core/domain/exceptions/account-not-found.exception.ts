export default class AccountNotFoundException extends Error {
	constructor() {
		super("Account not found");
	}
}