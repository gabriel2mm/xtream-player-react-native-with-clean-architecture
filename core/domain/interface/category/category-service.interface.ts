import Category from "../../entity/category/category";
import { ActionEnum } from "../../enumerator/action.enum";

export default interface ICategoryService {
	getCategoriesByAction(action: ActionEnum): Promise<Category[]>;
}