export default class SerieEpisodes {
	constructor(
		readonly added: string,
		readonly container_extension: string,
		readonly custom_sid: string,
		readonly direct_source: string,
		readonly episode_num: string,
		readonly id: string,
		readonly info: object,
		readonly season: number,
		readonly title: string,
	) { }
}