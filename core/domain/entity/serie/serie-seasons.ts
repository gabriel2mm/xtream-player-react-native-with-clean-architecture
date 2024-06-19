export default class SerieSeasons {
	constructor(
		readonly air_date: string,
		readonly cover: string,
		readonly cover_big: string,
		readonly episode_count: number,
		readonly id: number,
		readonly name: string,
		readonly overview: string,
		readonly season_number: number,
		readonly vote_average: number,
	) { }
}