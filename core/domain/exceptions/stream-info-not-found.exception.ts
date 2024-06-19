export default class StreamInfoNotFoundException extends Error {
	constructor() {
		super("stream info not found");
	}
}