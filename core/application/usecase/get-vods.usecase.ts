import Vod from "@core/domain/entity/vod/vod";
import CategoryMustBeProvidedException from "@core/domain/exceptions/category-must-be-provided.exception";
import IUseCase from "@core/domain/interface/usecase/usecase.interface";
import IVodService from "@core/domain/interface/vod/vod-service.interface";

export default class GetVods implements IUseCase<string, Vod[]> {

	constructor(readonly vodService: IVodService) { }

	execute(categoryId: string): Promise<Vod[]> {
		if (!categoryId)
			throw new CategoryMustBeProvidedException();
		return this.vodService.getStreams(categoryId);
	}

}