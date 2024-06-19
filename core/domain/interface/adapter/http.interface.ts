import IHttpObserver from "../observer/http-observer.interface";

export default interface IHttpClient extends IHttpObserver {
	get<T>(url: string, config?: any): Promise<T>;
}