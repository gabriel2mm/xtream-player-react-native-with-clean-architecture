import CategoriesLoadFailureException from "@core/domain/exceptions/categories-load-failure.exception";
import { AxiosResponse } from "axios";
import { ActionEnum } from "@core/domain/enumerator/action.enum";
import Category from "@core/domain/entity/category/category";
import IHttpCacheClient from "@core/domain/interface/adapter/http-cache.adapter";
import IHttpClient from "@core/domain/interface/adapter/http.interface";
import ICategoryService from "@core/domain/interface/category/category-service.interface";

/**
 * A service class responsible for fetching categories based on a specified action.
 * */
export default class CategoryService implements ICategoryService {

	/**
	 * Creates an instance of CategoryService.
	 * @param http The HTTP client used for making requests.
	 * @param httpCacheClient The HTTP cache client used for caching requests.
	 * */
	constructor(
		private readonly http: IHttpClient,
		private readonly httpCacheClient: IHttpCacheClient
	) { }

	/**
	 * Retrieves categories based on a specified action.
	 * @param action The action to retrieve categories for.
	 * @returns An array of categories associated with the specified action.
	 * @throws CategoriesLoadFailureException If the categories fail to load.
	 * */
	async getCategoriesByAction(action: ActionEnum): Promise<Category[]> {
		const categories: AxiosResponse<Category[]> = await this.httpCacheClient.useQuery<AxiosResponse<Category[]>>(
			`categories_${action}`,
			() => this.http.get('', { params: { "action": action } })
		);

		if (categories.status >= 200 && categories.status < 300 && categories.data.length > 0)
			return categories.data;

		throw new CategoriesLoadFailureException();
	}
}