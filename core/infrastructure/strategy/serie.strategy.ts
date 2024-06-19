import Strategy from "@core/domain/interface/strategy/strategy..interface";
import AccountContext from "../context/account.context";
import SerieEpisodes from "@core/domain/entity/serie/serie-episodes";

export default class SerieStrategy implements Strategy {

	constructor(readonly instance: SerieEpisodes) { }

	getURL(): string {
		const account = AccountContext.getInstance().getAccount();
		return `${account?.url}/movie/${account?.username}/${account?.password}/${this.instance.id}.${this.instance.container_extension}`;
	}
}