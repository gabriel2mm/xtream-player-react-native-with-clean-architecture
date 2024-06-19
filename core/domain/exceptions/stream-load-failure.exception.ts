export default class StreamLoadFailureException extends Error {
	constructor(message: string = "streams load failure", err?: Error) {
		super(message, err);
	}
}