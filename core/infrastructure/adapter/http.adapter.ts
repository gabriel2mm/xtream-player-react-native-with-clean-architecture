import IHttp from "@core/domain/interface/http.interface";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

/**
 * An adapter class implementing the IHttp interface.
 * This class provides HTTP request functionality using Axios library.
 */
export class HttpAdapter implements IHttp {

	private axiosInstance: AxiosInstance;

	constructor() {
		this.axiosInstance = axios.create();
	}

	/**
	 * Sends an HTTP GET request using the configured Axios instance.
	 * @param url The URL to send the request to.
	 * @param config Optional request configuration.
	 * @returns A Promise resolving to the response data.
	 * */
	get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
		return this.axiosInstance.get(url, config);
	}

	/**
	 * Updates the Axios instance with a new base URL and configuration.
	 * @param url The new base URL to update the Axios instance with.
	 * @param config Optional new configuration to update the Axios instance with.
	 * */
	update(url: string, config?: any): void {
		this.axiosInstance = axios.create({ baseURL: url, ...config });
	}
}