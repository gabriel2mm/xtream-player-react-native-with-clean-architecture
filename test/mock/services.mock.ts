import IHttpCacheClient from "@core/domain/interface/http-cache.adapter";
import IHttpClient from "@core/domain/interface/http.interface";
import { AxiosResponse } from "axios";

export default abstract class MockServices {
	constructor(readonly http: IHttpClient, readonly httpCacheClient: IHttpCacheClient) { }

	async mock<T>() {
		const response = await this.httpCacheClient.useQuery<AxiosResponse<T, any>>("account", () => this.http.get("", {}));
		return response.data;
	}
}