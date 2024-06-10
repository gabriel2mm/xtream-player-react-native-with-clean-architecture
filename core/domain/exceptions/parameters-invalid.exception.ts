export default class ParametersInvalidException extends Error {
	constructor(message: string) {
		super(`Parameters invalid: ${message}`);
	}
}