export default class VodInformation {
	constructor(
		readonly kinopoisk_url: string,
		readonly tmdb_id: string,
		readonly name: string,
		readonly o_name: string,
		readonly cover_big: string,
		readonly movie_image: string,
		readonly release_date: string,
		readonly episode_run_time: string,
		readonly youtube_trailer: string,
		readonly director: string,
		readonly actors: string,
		readonly cast: string,
		readonly description: string,
		readonly plot: string,
		readonly age: string,
		readonly mpaa_rating: string,
		readonly rating_count_kinopoisk: string,
		readonly country: string,
	) { }
}