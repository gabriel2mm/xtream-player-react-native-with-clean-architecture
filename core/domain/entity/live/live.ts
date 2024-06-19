import Stream from "../abstract/stream";

export default class Live extends Stream {
	constructor(
		num: number,
		name: string,
		stream_type: string,
		stream_id: number,
		category_id: string,
		category_ids: Array<number>,
		readonly stream_icon: string,
		readonly epg_channel_id: string,
		readonly added: string,
		readonly custom_sid: string,
		readonly tv_archive: number,
		readonly direct_source: string,
		readonly tv_archive_duration: number,
		readonly thumbnail: string,
	) {
		super(num, name, name, '', stream_type, stream_id, category_id, category_ids, "0", "0");
	}
}