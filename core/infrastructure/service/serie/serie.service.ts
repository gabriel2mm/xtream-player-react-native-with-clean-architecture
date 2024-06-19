import Serie from "@core/domain/entity/serie/serie";
import SerieInfo from "@core/domain/entity/serie/serie-info";
import IHttpCacheClient from "@core/domain/interface/adapter/http-cache.adapter";
import IHttpClient from "@core/domain/interface/adapter/http.interface";
import ISerieService from "@core/domain/interface/serie/serie-service.interface";
import StreamBaseService from "../abstract/stream-base.service";
import { SerieTypeEnum } from "@core/domain/enumerator/serie.enum";

export default class SerieService extends StreamBaseService<Serie[], SerieInfo> implements ISerieService {

	constructor(http: IHttpClient, httpCacheClient: IHttpCacheClient) {
		super(http, httpCacheClient);
	}

	async getSeries(): Promise<any> {
		return await super.getAllStreams(SerieTypeEnum.GET_SERIES);
	}

	async getStreams(categoryId: string): Promise<any> {
		return await super.getStreamByCategory(categoryId, SerieTypeEnum.GET_SERIES);
	}

	async getStream(streamId: string): Promise<any> {
		return await super.getStreamInfo({ key: SerieTypeEnum.SERIE_ID, value: streamId }, SerieTypeEnum.GEGT_SERIES_INFO);
	}
}