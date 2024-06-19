
import Live from "@core/domain/entity/live/live";
import ILiveService from "@core/domain/interface/live/live-service.interface";
import CategoryMustBeProvidedException from "@core/domain/exceptions/category-must-be-provided.exception";
import IUseCase from "@core/domain/interface/usecase/usecase.interface";

export default class GetLives implements IUseCase<string, Live[]> {

	constructor(readonly liveService: ILiveService) { }

	execute(categoryId: string): Promise<Live[]> {
		if (!categoryId)
			throw new CategoryMustBeProvidedException();

		return this.liveService.getStreams(categoryId);
	}

}