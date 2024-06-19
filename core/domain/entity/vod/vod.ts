import Stream from "../abstract/stream";

export default class Vod extends Stream {
	constructor(
		readonly added: string,
		category_id: string,
		category_ids: Array<number>,
		readonly container_extension: string,
		readonly custom_sid: string,
		readonly direct_source: string,
		name: string,
		num: number = 0,
		rating: number = 0,
		rating_5based: number = 0,
		readonly stream_icon: string,
		stream_id: number = 0,
		stream_type: string,
		title: string,
		year: string,
	) {
		super(num, name, title, year, stream_type, stream_id, category_id, category_ids, rating.toString(), rating_5based.toString());
	}
}