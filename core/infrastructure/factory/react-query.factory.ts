import { QueryClient } from "@tanstack/react-query";

/**
 * A factory class for creating and managing instances of React Query's QueryClient.
 * This class follows the Singleton design pattern, ensuring there's only one instance of QueryClient throughout the application.
 */
export default abstract class ReactQueryFactory {
	// Private static instance of QueryClient
	private static instance: QueryClient;

	// Private constructor to prevent direct instantiation
	private constructor() { }
	/**
	 * Returns the Singleton instance of QueryClient.
	 * If an instance does not exist, a new one is created and returned.
	 * @returns The Singleton instance of QueryClient.
	 * */
	static getInstance(): QueryClient {
		if (!this.instance)
			this.instance = new QueryClient();

		return this.instance;
	}
}