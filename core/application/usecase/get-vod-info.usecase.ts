import VodInfo from "@core/domain/entity/vod/vod-info";
import StreamIdMustBeProvidedException from "@core/domain/exceptions/stream-id-must-be-provided.exception";
import IUseCase from "@core/domain/interface/usecase/usecase.interface";
import IVodService from "@core/domain/interface/vod/vod-service.interface";

export default class GetVodInfo implements IUseCase<String, VodInfo> {

	constructor(readonly vodService: IVodService) { }

	execute(streamId: string): Promise<VodInfo> {
		if (!streamId)
			throw new StreamIdMustBeProvidedException();
		return this.vodService.getStream(streamId);
	}

}