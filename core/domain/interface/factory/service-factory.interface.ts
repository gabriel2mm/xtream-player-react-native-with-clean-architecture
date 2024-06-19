import IAccountService from "./account/account-service.interface";
import ICategoryService from "./category/category-service.interface";

export default interface IServiceFactory {
	createAccountService(): IAccountService;
	createCategoryService(): ICategoryService;
}