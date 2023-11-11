import { createAction, props } from "@ngrx/store";
import { CategoryType } from "../types/category.types";
import { CategoryModel } from "@models/category/category-model";

export const allCategories = createAction(CategoryType.CATEGORY_LOAD);
export const allCategoriesSuccess = createAction(CategoryType.CATEGORY_SUCCESS, props<{ payload: CategoryModel[]}>());
export const allCategoriesError = createAction(CategoryType.CATEGORY_ERROR, props<{ payload: any}>());