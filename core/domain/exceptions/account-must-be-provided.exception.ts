export default class AccountMustBeProvidedException extends Error {
	constructor() {
		super("Account must be provided");
	}
}