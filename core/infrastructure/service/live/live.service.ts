import StreamBaseService from "../abstract/stream-base.service";
import { AxiosResponse } from "axios";
import StreamLoadFailureException from "@core/domain/exceptions/stream-load-failure.exception";
import { LiveTypeEnum } from "@core/domain/enumerator/live.enum";
import Live from "@core/domain/entity/live/live";
import IHttpCacheClient from "@core/domain/interface/adapter/http-cache.adapter";
import IHttpClient from "@core/domain/interface/adapter/http.interface";
import ILiveService from "@core/domain/interface/live/live-service.interface";

export default class LiveService extends StreamBaseService<Live[], any> implements ILiveService {

	constructor(http: IHttpClient, httpCacheClient: IHttpCacheClient) {
		super(http, httpCacheClient);
	}

	async getLives(): Promise<Live[]> {
		return await super.getAllStreams(LiveTypeEnum.GET_LIVE_STREAMS);
	}

	async getStreams(categoryId: string): Promise<Live[]> {
		return await super.getStreamByCategory(categoryId, LiveTypeEnum.GET_LIVE_STREAMS);
	}

	async getEPGShort(liveId: string, limit: number): Promise<any> {
		const response: AxiosResponse<any[]> = await this.httpCacheClient.useQuery<AxiosResponse<any[]>>(
			['epg_short', liveId, limit],
			() => this.http.get('', { params: { "action": LiveTypeEnum.GET_SHORT_EPG, limit, [LiveTypeEnum.LIVE_ID]: liveId } })
		);

		const { status, data } = response;
		if (status >= 200 && status < 300)
			return data;

		throw new StreamLoadFailureException('EPG load failure');
	}

	async getStream(streamId: string): Promise<any> {
		throw new Error('method not exist for this type');
	}
}