export default class CategoryMustBeProvidedException extends Error {

	constructor() {
		super("Category must be provided");
	}

}