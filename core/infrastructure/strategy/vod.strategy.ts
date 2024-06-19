import Strategy from "@core/domain/interface/strategy/strategy..interface";
import AccountContext from "../context/account.context";
import VodInfo from "@core/domain/entity/vod/vod-info";

export default class VodStrategy implements Strategy {

	constructor(readonly instance: VodInfo) { }

	getURL(): string {
		const account = AccountContext.getInstance().getAccount();
		return `${account?.url}/movie/${account?.username}/${account?.password}/${this.instance.movie_data.stream_id}.${this.instance.movie_data.container_extension}`;
	}

}