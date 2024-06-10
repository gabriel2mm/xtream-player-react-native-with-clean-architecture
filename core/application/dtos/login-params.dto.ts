import ParametersInvalidException from "@core/domain/exceptions/parameters-invalid.exception";

export default class LoginParams {
	constructor(
		readonly url: string,
		readonly username: string,
		readonly password: string,
	) {
		this.validateParameters();
	}

	private validateParameters() {
		if (!this.url || !this.username || !this.password)
			throw new ParametersInvalidException("Login parameters invalid");
	}
}