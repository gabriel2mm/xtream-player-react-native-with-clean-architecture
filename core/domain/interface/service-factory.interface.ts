import IAccountService from "./account-service.interface";
import ICategoryService from "./category-service.interface";

export default interface IServiceFactory {
	createAccountService(): IAccountService;
	createCategoryService(): ICategoryService;
}