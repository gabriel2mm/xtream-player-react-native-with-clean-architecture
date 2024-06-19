import Vod from "@core/domain/entity/vod/vod";
import VodInfo from "@core/domain/entity/vod/vod-info";
import IHttpCacheClient from "@core/domain/interface/adapter/http-cache.adapter";
import IHttpClient from "@core/domain/interface/adapter/http.interface";
import IVodService from "@core/domain/interface/vod/vod-service.interface";
import StreamBaseService from "../abstract/stream-base.service";
import { VodTypeEnum } from "@core/domain/enumerator/vod.enum";

export default class VodService extends StreamBaseService<Vod[], VodInfo> implements IVodService {

	constructor(http: IHttpClient, httpCacheClient: IHttpCacheClient) {
		super(http, httpCacheClient);
	}

	async getVods(): Promise<Vod[]> {
		return await super.getAllStreams(VodTypeEnum.GET_VODS);
	}

	async getStreams(categoryId: string): Promise<Vod[]> {
		return await super.getStreamByCategory(categoryId, VodTypeEnum.GET_VOD_STREAMS);
	}

	async getStream(streamId: string): Promise<VodInfo> {
		return await super.getStreamInfo({ key: VodTypeEnum.VOD_ID, value: streamId }, VodTypeEnum.GET_VOD_INFO);
	}
}