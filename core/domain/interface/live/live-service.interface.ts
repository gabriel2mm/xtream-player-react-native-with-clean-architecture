import Live from "@core/domain/entity/live/live";
import IStreamService from "../factory/stream-service.interface";

export default interface ILiveService extends IStreamService<Live[], any> {
	getLives(): Promise<Live[]>;
	getEPGShort(liveId: string, limit: number): Promise<any>;
}