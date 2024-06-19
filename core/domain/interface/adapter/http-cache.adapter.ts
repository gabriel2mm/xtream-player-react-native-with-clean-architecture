export default interface IHttpCacheClient {
	useQuery<T>(queryKey: any, queryFn: any, params?: any): Promise<T>;
}