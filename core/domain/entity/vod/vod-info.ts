import Vod from "./vod";
import VodInformation from "./vod-information";

export default class VodInfo {
	constructor(
		readonly info: VodInformation,
		readonly movie_data: Vod
	) { }
}