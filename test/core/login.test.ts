import LoginParams from "@core/application/dtos/login-params.dto";
import Sigin from "@core/application/usecase/sigin.usecase";
import AccountServiceMock from "../mock/account.mock";
import HttpMock from "../mock/http.mock";
import HttpCacheAdapterMock from "../mock/http-cache.mock";
import { loginParams, loginResult } from "../fixture/account.fixture";

describe("[usecase/login]", () => {
	test('Dado que o fomulário de login tenha sido submetido, quando fornecer os dados corretamente de login, então deve realiza-lo', async () => {
		const http = new HttpMock(loginResult);
		const cache = new HttpCacheAdapterMock();
		const accountService = new AccountServiceMock(http, cache);

		const sigin = new Sigin(accountService);

		const accountInfo = await sigin.execute(loginParams);

		expect(accountInfo.url).toBe(loginParams.url);
		expect(accountInfo.username).toBe(loginParams.username);
		expect(accountInfo.password).toBe(loginParams.password);
	});

	test('Dado que o formulário de login foi submetido, quando fornecer os dados inválidos ou apresentar uma falha, então deverá retornar um erro', async () => {
		const http = new HttpMock(loginResult);
		const cache = new HttpCacheAdapterMock();
		const accountService = new AccountServiceMock(http, cache);
		const sigin = new Sigin(accountService);

		await expect(sigin.execute({ ...loginParams, username: "teste" } as LoginParams)).rejects.toThrow('login failure');
	});
});
