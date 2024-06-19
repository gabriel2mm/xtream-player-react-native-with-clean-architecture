import Stream from "../abstract/stream";

export default class Serie extends Stream {
	constructor(
		num: number,
		name: string,
		title: string,
		year: string,
		stream_type: string,
		series_id: number,
		rating: string,
		rating_5based: number,
		category_id: string,
		category_ids: Array<number>,
		readonly cover: string,
		readonly plot: string,
		readonly cast: string,
		readonly director: string,
		readonly genre: string,
		readonly release_date: string,
		readonly releaseDate: string,
		readonly last_modified: string,
		readonly backdrop_path: Array<string>,
		readonly youtube_trailer: string,
		readonly episode_run_time: string,
	) {
		super(num, name, title, year, stream_type, series_id, category_id, category_ids, rating, rating_5based.toString());
	}
}