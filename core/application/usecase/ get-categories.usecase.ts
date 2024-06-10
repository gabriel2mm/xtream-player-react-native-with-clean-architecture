import Category from "@core/domain/entity/category";
import ICategoryService from "@core/domain/interface/category-service.interface";
import IUseCase from "@core/domain/interface/usecase.interface";
import { ActionEnum } from "@core/domain/enumerator/action.enum";

export default class GetCategories implements IUseCase<ActionEnum, Category[]> {

	constructor(readonly categoryService: ICategoryService) { }

	execute(action: ActionEnum): Promise<Category[]> {
		return this.categoryService.getCategoriesByAction(action);
	}

}