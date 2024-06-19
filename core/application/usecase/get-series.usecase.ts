import Serie from "@core/domain/entity/serie/serie";
import CategoryMustBeProvidedException from "@core/domain/exceptions/category-must-be-provided.exception";
import ISerieService from "@core/domain/interface/serie/serie-service.interface";
import IUseCase from "@core/domain/interface/usecase/usecase.interface";

export default class GetSeries implements IUseCase<string, Serie[]> {

	constructor(readonly serieService: ISerieService) { }

	execute(categoryId: string): Promise<Serie[]> {
		if (!categoryId)
			throw new CategoryMustBeProvidedException();

		return this.serieService.getStreams(categoryId);
	}

}