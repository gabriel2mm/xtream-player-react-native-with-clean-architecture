import IUseCase from "@core/domain/interface/usecase/usecase.interface";
import Category from "@core/domain/entity/category/category";
import ICategoryService from "@core/domain/interface/category/category-service.interface";
import { ActionEnum } from "@core/domain/enumerator/action.enum";

/**
 * A use case class responsible for retrieving categories based on a specified action.
 * This class implements the IUseCase interface with ActionEnum as input and an array of Category objects as output.
 */
export default class GetCategories implements IUseCase<ActionEnum, Category[]> {

	/**
	 * Creates an instance of the GetCategories use case.
	 * @param categoryService The service responsible for category-related operations.
	 * */
	constructor(readonly categoryService: ICategoryService) { }

	/**
	 * Executes the retrieval of categories based on the specified action.
	 * @param action The action for which categories need to be retrieved.
	 * @returns An array of categories associated with the specified action.
	 * */
	execute(action: ActionEnum): Promise<Category[]> {
		return this.categoryService.getCategoriesByAction(action);
	}

}