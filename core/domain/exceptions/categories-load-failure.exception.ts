export default class CategoriesLoadFailureException extends Error { 
		constructor() { 
			super("Load categories failure");
		}
}