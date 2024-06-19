import IStreamService from "../factory/stream-service.interface";

export default interface ISerieService extends IStreamService<any, any> {
	getSeries(): Promise<any>;
}