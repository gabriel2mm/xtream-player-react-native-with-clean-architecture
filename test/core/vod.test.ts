import HttpMock from "../mock/http.mock";
import HttpCacheAdapterMock from "../mock/http-cache.mock";
import CategoryService from "@core/infrastructure/service/category.service";
import { categories as categoriesFixture } from "../fixture/category.fixture";
import { ActionEnum } from "@core/domain/enumerator/action.enum";
import VodService from "@core/infrastructure/service/vod.service";
import GetVods from "@core/application/usecase/get-vods.usecase";
import { vodsFixture } from "../fixture/vod.fixture";
import IVodService from "@core/domain/interface/vod-service.interface";

describe("[usecase/vods]", () => {

	test("Dado que o usuário está navegando na lita de filmes, quando selecionar uma categoria, então deve trazer os filmes desta categoria", async () => {
		const http = new HttpMock(categoriesFixture);
		const cache = new HttpCacheAdapterMock();
		const categoryService = new CategoryService(http, cache);
		const categories = await categoryService.getCategoriesByAction(ActionEnum.GET_VOD_CATEGORIES);

		const httpVods = new HttpMock(vodsFixture);
		const vodService: IVodService = new VodService(httpVods, cache);
		const getVods = new GetVods(vodService);

		const vods = await getVods.execute(categories[0].category_id);

		expect(vods).toBeDefined();
		expect(vods.length).toBeGreaterThan(0)
		expect(vods[0].stream_id).toBe(252972);
	});
});