import IHttpClient from "@core/domain/interface/http.interface";
import AccountService from "../service/account.service";
import IHttpCacheClient from "@core/domain/interface/http-cache.adapter";
import ICategoryService from "@core/domain/interface/category-service.interface";
import CategoryService from "../service/category.service";
import IAccountService from "@core/domain/interface/account-service.interface";
import { HttpAdapter } from "../adapter/http.adapter";
import HttpCacheAdapter from "../adapter/http-cache.adapter";
import IServiceFactory from "@core/domain/interface/service-factory.interface";
import HttpSubject from "../subject/http.subject";

/**
 * A factory class responsible for creating service instances.
 * This class follows the Singleton pattern to ensure that only one instance exists throughout the application.
 */
export class ServiceFactory implements IServiceFactory {

	private http: IHttpClient;
	private httpCache: IHttpCacheClient;
	private httpSubject: HttpSubject = HttpSubject.getInstance();

	private static instance: ServiceFactory | null = null;

	/**
	 * Private constructor to prevent external instantiation.
	 * @param http The HTTP client used by the services.
	 * @param httpCache The HTTP cache client used by the services.
	 */
	private constructor(http: IHttpClient, httpCache: IHttpCacheClient) {
		this.http = http;
		this.httpCache = httpCache;
		this.httpSubject.addObserver(this.http);
	}

	/**
	* Gets the singleton instance of the ServiceFactory.
	* If no instance exists, creates a new one.
	* @param http The HTTP client to use. Defaults to a new instance of HttpAdapter.
	* @param httpCache The HTTP cache client to use. Defaults to a new instance of HttpCacheAdapter.
	* @returns The singleton instance of ServiceFactory.
	*/
	static getInstance(http: IHttpClient = new HttpAdapter(), httpCache: IHttpCacheClient = new HttpCacheAdapter()): ServiceFactory {
		if (!this.instance) {
			this.instance = new ServiceFactory(http, httpCache);
		}
		return this.instance;
	}

	/**
	* Creates an instance of AccountService using the configured HTTP client and cache client.
	* @returns An instance of AccountService.
	*/
	createAccountService(): IAccountService {
		return new AccountService(this.http, this.httpCache);
	}

	/**
	 * Creates an instance of CategoryService using the configured HTTP client and cache client.
	 * @returns An instance of CategoryService.
	 */
	createCategoryService(): ICategoryService {
		return new CategoryService(this.http, this.httpCache);
	}
}