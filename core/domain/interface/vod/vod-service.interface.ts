import Vod from "../../entity/vod/vod";
import VodInfo from "../../entity/vod/vod-info";
import IStreamService from "../factory/stream-service.interface";

export default interface IVodService extends IStreamService<Vod[], VodInfo> {
	getVods(): Promise<Vod[]>;
}