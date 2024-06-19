import IHttpClient from "@core/domain/interface/http.interface";
import { AxiosResponse } from "axios";

export default class HttpMock implements IHttpClient {

	constructor(readonly objectReturn: any) { }
	
	async get(url: string, headers?: any): Promise<any> {
		return { data: this.objectReturn, status: 200, statusText: "OK", headers: {} } as AxiosResponse;
	}

	update(url: string, config?: any): void {
		return;
	}

}