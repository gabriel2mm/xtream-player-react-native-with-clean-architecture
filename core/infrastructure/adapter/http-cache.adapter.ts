import IHttpCacheClient from '@core/domain/interface/adapter/http-cache.adapter';
import ReactQueryFactory from '../factory/react-query.factory';
import { QueryFunction } from '@tanstack/react-query';
/**
 * An adapter class implementing the IHttpCacheAdapter interface.
 * This class provides caching functionality for HTTP requests using React Query library.
 */
export default class HttpCacheAdapter implements IHttpCacheClient {

	private RETRY_ATTEMPT: number = 3;
	private CACHE_EXP_IN_MILIS: number = 1000 * 60 * 60; //1 hour

	/**
	 * Executes a query function with caching using React Query.
	 * @param queryKey The key to identify the query in React Query cache.
	 * @param queryFn The function to execute for the query.
	 * @param params Optional parameters for the query.
	 * @returns A Promise resolving to the query result.
	 * */
	useQuery<T>(queryKey: any, queryFn: QueryFunction, params?: any): Promise<T> {
		const queryClient = ReactQueryFactory.getInstance();
		return queryClient.fetchQuery({ queryKey: [queryKey], queryFn, retry: this.RETRY_ATTEMPT, staleTime: this.CACHE_EXP_IN_MILIS });
	}

	/**
	 * Sets the number of retry attempts for cached queries.
	 * @param retry The number of retry attempts to set.
	 * */
	setRetryAttempt(retry: number = 3) {
		this.RETRY_ATTEMPT = retry;
	}

	/**
	 * Sets the cache expiration time in milliseconds.
	 * @param exp The cache expiration time in milliseconds.
	 */
	setCacheExp(exp: number) {
		this.CACHE_EXP_IN_MILIS = exp;
	}
}