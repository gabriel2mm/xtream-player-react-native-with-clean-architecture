export default class LoginFailureException extends Error {
	constructor() {
		super("login failure");
	}
}