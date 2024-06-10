import { QueryClient } from "@tanstack/react-query";

export default abstract class ReactQueryFactory {
	private static instance: QueryClient;

	private constructor() { }

	static getInstance(): QueryClient {
		if (!this.instance)
			this.instance = new QueryClient();

		return this.instance;
	}
}