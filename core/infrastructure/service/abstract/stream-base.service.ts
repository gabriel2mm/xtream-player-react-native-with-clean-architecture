import StreamIdMustBeProvidedException from "@core/domain/exceptions/stream-id-must-be-provided.exception";
import StreamInfoNotFoundException from "@core/domain/exceptions/stream-info-not-found.exception";
import StreamLoadFailureException from "@core/domain/exceptions/stream-load-failure.exception";
import IHttpCacheClient from "@core/domain/interface/adapter/http-cache.adapter";
import IHttpClient from "@core/domain/interface/adapter/http.interface";
import { AxiosResponse } from "axios";

type Params = {
	action: string,
	category_id?: string,
	streamKey?: string,
	streamId?: string,
}

export default abstract class StreamBaseService<T, I> {

	constructor(protected readonly http: IHttpClient, protected readonly httpCacheClient: IHttpCacheClient) { }

	protected async getAllStreams(action: string): Promise<T> {
		return await this.getbyAction<T>(['streams', action], { action });
	}

	protected async getStreamByCategory(categoryId: string, action: string): Promise<any> {
		return await this.getbyAction<T>(['stream', categoryId, action], { action, "category_id": categoryId });
	}

	protected async getStreamInfo(streamId: { key: string, value: string }, action: string): Promise<I> {
		if (!streamId)
			throw new StreamIdMustBeProvidedException();

		return await this.getbyAction<I>(['stream', 'info', action, streamId.value], { action: action, streamKey: streamId.key, streamId: streamId.value });
	}

	private async getbyAction<O>(keys: Array<string>, params: Params, optionalMessageError = "Load stream failure") {
		const response: AxiosResponse<O> = await this.httpCacheClient.useQuery<AxiosResponse<O>>(
			keys,
			() => this.http.get('', { params: this.retriveParams(params) })
		);

		const { status, data } = response;
		if (status >= 200 && status < 300)
			return data as O;

		throw params.streamId ? new StreamInfoNotFoundException() : new StreamLoadFailureException(optionalMessageError);
	}

	private retriveParams(params: Params) {
		const { action, category_id, streamKey, streamId } = params;
		let param: any = { action };
		if (category_id)
			param = { ...param, "category_id": category_id };
		if (streamKey && streamId)
			param = { ...param, [streamKey]: streamId };

		return param;
	}
}