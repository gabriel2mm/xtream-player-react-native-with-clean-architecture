import IHttpCacheClient from "@core/domain/interface/http-cache.adapter";

export default class HttpCacheAdapterMock implements IHttpCacheClient {

	useQuery<T>(queryKey: any, queryFn: Function, params?: any): Promise<T> {
		return new Promise<T>(async resolve => {
			const result = await queryFn();
			resolve(result);
		});
	}

}