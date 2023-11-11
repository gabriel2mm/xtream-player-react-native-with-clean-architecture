import { createReducer, on } from "@ngrx/store"
import { CategoryInitialState } from "../store/state"
import { allCategoriesError, allCategories, allCategoriesSuccess } from "@actions/category.action"
import { CategoryModel } from "@models/category/category-model"

const initialState: CategoryInitialState = {
    categories: new Array<CategoryModel>(),
    error: undefined
}

export const categoryReducer = createReducer(
    initialState,
    on(allCategories, (state) => ({ ...state })),
    on(allCategoriesSuccess, (state, { payload }) => ({ ...state, categories: [...state.categories, ...payload], error: undefined})),
    on(allCategoriesError, (state, { payload }) => ({ ...state, categories: [], error: payload })),
)