import Serie from "./serie";
import SerieEpisodes from "./serie-episodes";
import SerieSeasons from "./serie-seasons";

export default class SerieInfo {
	constructor(
		readonly info: Serie,
		readonly episodes: Record<string, SerieEpisodes[]>,
		readonly seasons: Array<SerieSeasons>,
	) { }
}