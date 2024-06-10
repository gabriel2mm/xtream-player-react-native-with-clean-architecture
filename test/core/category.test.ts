import Category from "@core/domain/entity/category";
import HttpCacheAdapterMock from "../mock/http-cache.mock";
import HttpMock from "../mock/http.mock";
import GetCategories from "@core/application/usecase/ get-categories.usecase";
import CategoryService from "@core/infrastructure/service/category.service";
import { CategoryEnum } from "@core/domain/enumerator/category.enum";
import { ActionEnum } from "@core/domain/enumerator/action.enum";
import AccountContext from "@core/infrastructure/context/account.context";
import { accountFixture } from "../fixture/account.fixture";

describe("[usecase/categories]", () => {

	beforeEach(() => {
		AccountContext.getInstance().setAccount(accountFixture);
	});

	test('Dado que estou na sessão de stream, quando selecionar um tipo de stream, então deve carregar as categorias corretamente', async () => {
		const categoriesMock = [new Category("1234", "teste", 1234, CategoryEnum.LIVE)];
		const http = new HttpMock(categoriesMock);
		const cache = new HttpCacheAdapterMock();
		const categoryService = new CategoryService(http, cache);
		const categoriesCase = new GetCategories(categoryService);

		const categories: Category[] = await categoriesCase.execute(ActionEnum.GET_LIVE_CATEGORIES);

		expect(categories).toBeDefined();
		expect(categories.length).toBeGreaterThanOrEqual(1);
	});

	test('Dado que estou na sessão de stream, quando selecionar um tipo de stream quando der um erro na consulta, então deve retornar uma exception', async () => {
		const categoriesMock = new Array<Category>;
		const http = new HttpMock(categoriesMock);
		const cache = new HttpCacheAdapterMock();
		const categoryService = new CategoryService(http, cache);
		const categoriesCase = new GetCategories(categoryService);

		await expect(categoriesCase.execute(ActionEnum.GET_LIVE_CATEGORIES)).rejects.toThrow('Load categories failure');
	});
});