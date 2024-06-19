import AccountService from "../service/account/account.service";
import CategoryService from "../service/category/category.service";
import HttpAdapter from "../adapter/http.adapter";
import HttpCacheAdapter from "../adapter/http-cache.adapter";
import HttpSubject from "../subject/http.subject";
import VodService from "../service/vod/vod.service";
import LiveService from "../service/live/live.service";
import SerieService from "../service/serie/serie.service";
import IAccountService from "@core/domain/interface/account/account-service.interface";
import IHttpCacheClient from "@core/domain/interface/adapter/http-cache.adapter";
import IHttpClient from "@core/domain/interface/adapter/http.interface";
import ICategoryService from "@core/domain/interface/category/category-service.interface";
import IServiceFactory from "@core/domain/interface/factory/service-factory.interface";
import ILiveService from "@core/domain/interface/live/live-service.interface";
import ISerieService from "@core/domain/interface/serie/serie-service.interface";
import IVodService from "@core/domain/interface/vod/vod-service.interface";

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
	 * */
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
	 * */
	static getInstance(http: IHttpClient = new HttpAdapter(), httpCache: IHttpCacheClient = new HttpCacheAdapter()): ServiceFactory {
		if (!this.instance) {
			this.instance = new ServiceFactory(http, httpCache);
		}
		return this.instance;
	}

	/**
	 * Creates an instance of AccountService using the configured HTTP client and cache client.
	 * @returns An instance of AccountService.
	 * */
	createAccountService(): IAccountService {
		return new AccountService(this.http, this.httpCache);
	}

	/**
	 * Creates an instance of CategoryService using the configured HTTP client and cache client.
	 * @returns An instance of CategoryService.
	 * */
	createCategoryService(): ICategoryService {
		return new CategoryService(this.http, this.httpCache);
	}

	/**
	 * Creates an instance of VodService using the configured HTTP client and cache client.
	 * @returns An instance of VodService.
	 * */
	createVodService(): IVodService {
		return new VodService(this.http, this.httpCache);
	}

	/**
	 * Creates an instance of LiveService using the configured HTTP client and cache client.
	 * @returns An instance of LiveService.
	 * */
	createLiveService(): ILiveService {
		return new LiveService(this.http, this.httpCache);
	}

	/**
	 * Creates an instance of SerieService using the configured HTTP client and cache client.
	 * @returns An instance of SerieService.
	 * */
	createSerieService(): ISerieService {
		return new SerieService(this.http, this.httpCache);
	}
}