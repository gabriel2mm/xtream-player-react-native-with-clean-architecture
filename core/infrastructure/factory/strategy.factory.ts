import Strategy from "@core/domain/interface/strategy/strategy..interface";
import VodStrategy from "../strategy/vod.strategy";
import SerieStrategy from "../strategy/serie.strategy";
import SerieEpisodes from "@core/domain/entity/serie/serie-episodes";
import VodInfo from "@core/domain/entity/vod/vod-info";

export default class StrategyFactory {

	static createStrategy(instance: VodInfo | SerieEpisodes): Strategy {
		if (instance instanceof VodInfo) {
			return new VodStrategy(instance);
		} else if (instance instanceof SerieEpisodes) {
			return new SerieStrategy(instance);
		} else {
			throw new Error("Invalid content type");
		}
	}
}