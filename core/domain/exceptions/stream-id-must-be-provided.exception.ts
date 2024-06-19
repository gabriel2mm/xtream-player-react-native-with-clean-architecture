export default class StreamIdMustBeProvidedException extends Error {
	constructor() {
		super("Stream id must be provided");
	}
}