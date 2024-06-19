import SerieInfo from "@core/domain/entity/serie/serie-info";
import StreamIdMustBeProvidedException from "@core/domain/exceptions/stream-id-must-be-provided.exception";
import IUseCase from "@core/domain/interface/usecase/usecase.interface";
import SerieService from "@core/infrastructure/service/serie/serie.service";


export default class GetSerie implements IUseCase<string, SerieInfo> {

	constructor(readonly serieService: SerieService) { }

	execute(streamId: string): Promise<SerieInfo> {
		if (!streamId)
			throw new StreamIdMustBeProvidedException();

		return this.serieService.getStream(streamId);
	}
}