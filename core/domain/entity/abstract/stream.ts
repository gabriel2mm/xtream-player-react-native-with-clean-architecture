export default abstract class Stream {
	constructor(
		readonly num: number = 0,
		readonly name: string,
		readonly title: string,
		readonly year: string,
		readonly stream_type: string,
		readonly stream_id: number,
		readonly category_id: string,
		readonly category_ids: Array<number>,
		readonly rating: string,
		readonly rating_5based: string,
	) { }
}