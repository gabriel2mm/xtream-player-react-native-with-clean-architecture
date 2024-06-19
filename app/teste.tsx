import GetCategories from "@core/application/usecase/ get-categories.usecase";
import GetLives from "@core/application/usecase/get-lives.usecase";
import GetSerie from "@core/application/usecase/get-serie.usecase";
import GetSeries from "@core/application/usecase/get-series.usecase";
import GetVodInfo from "@core/application/usecase/get-vod-info.usecase";
import GetVods from "@core/application/usecase/get-vods.usecase";
import UsecaseExecutor from "@core/application/usecase/usecase-executor";
import Stream from "@core/domain/entity/abstract/stream";
import Category from "@core/domain/entity/category/category";
import Live from "@core/domain/entity/live/live";
import Serie from "@core/domain/entity/serie/serie";
import SerieInfo from "@core/domain/entity/serie/serie-info";
import Vod from "@core/domain/entity/vod/vod";
import VodInfo from "@core/domain/entity/vod/vod-info";
import { ActionEnum } from "@core/domain/enumerator/action.enum";
import { ServiceFactory } from "@core/infrastructure/factory/service-factory.factory";
import StrategyFactory from "@core/infrastructure/factory/strategy.factory";
import { useState, Dispatch, SetStateAction, Suspense } from "react";
import { Button, StyleSheet } from "react-native";


const TesteComponent: React.FC<any> = (): React.ReactNode => {

	const accountService = ServiceFactory.getInstance().createAccountService();
	const categoryService = ServiceFactory.getInstance().createCategoryService();
	const liveService = ServiceFactory.getInstance().createLiveService();
	const serieService = ServiceFactory.getInstance().createSerieService();
	const vodService = ServiceFactory.getInstance().createVodService();

	const [type, setType] = useState(ActionEnum.GET_LIVE_CATEGORIES);
	const [urlStream, setUrlStream]: [string, Dispatch<SetStateAction<string>>] = useState("");
	const [categories, setCategories]: [Array<Category>, Dispatch<SetStateAction<Array<Category>>>] = useState(new Array<Category>());
	const [streams, setStreams]: [Serie[] | Vod[] | Live[], Dispatch<SetStateAction<Serie[] | Vod[] | Live[]>>] = useState(new Array<any>());

	async function loadingAccount() {
		const account = await accountService.login("http://bdta.pro", "226858", "xP6jF2");
		return account;
	}

	async function loadCategories() {
		const categories = await new UsecaseExecutor<ActionEnum, Category[]>().execute(GetCategories, categoryService, type);
		return categories;
	}

	async function teste(e: any) {
		await Promise.all([loadingAccount(), loadCategories()]).then(data => {
			setCategories(data[1]);
		}).catch(err => console.error("erro ao carregar página", err));
	}

	async function selectVod(categoryId: string) {
		switch (type) {
			case ActionEnum.GET_LIVE_CATEGORIES:
				const lives = await new UsecaseExecutor<string, Live[]>().execute(GetLives, liveService, categoryId);
				if (lives)
					setStreams(lives);
				break;
			case ActionEnum.GET_VOD_CATEGORIES:
				const vods = await new UsecaseExecutor<string, Vod[]>().execute(GetVods, vodService, categoryId);
				if (vods)
					setStreams(vods);
				break;
			case ActionEnum.GET_SERIES_CATEGORIES:
				const series = await new UsecaseExecutor<string, Serie[]>().execute(GetSeries, serieService, categoryId);
				if (series)
					setStreams(series);
				break;
		}
	}

	async function playVod(stream: Stream) {
		let response: VodInfo | SerieInfo;
		switch (type) {
			case ActionEnum.GET_LIVE_CATEGORIES:
			case ActionEnum.GET_VOD_CATEGORIES:
				response = await new UsecaseExecutor<string, VodInfo>().execute(GetVodInfo, vodService, stream.stream_id.toString());
				if (response)
					setUrlStream(StrategyFactory.createStrategy(response).getURL());
				break;
			case ActionEnum.GET_SERIES_CATEGORIES:
				response = await new UsecaseExecutor<string, SerieInfo>().execute(GetSerie, serieService, stream.stream_id.toString());
				setUrlStream("");
				break;
		}
	}

	async function selectType(type: ActionEnum) {
		setType(type);
	}

	return (
		<>
			<div style={{ display: "flex", flexDirection: "row" }}>
				<Button title="Live" onPress={() => selectType(ActionEnum.GET_LIVE_CATEGORIES)}></Button>
				<Button title="Video" onPress={() => selectType(ActionEnum.GET_VOD_CATEGORIES)}></Button>
				<Button title="Serie" onPress={() => selectType(ActionEnum.GET_SERIES_CATEGORIES)}></Button>
			</div>
			<Button title="teste" onPress={teste}></Button>
			<Suspense fallback={<span>Loading...</span>}>
				<div style={{ display: "grid", "gridColumn": 4, gridTemplateColumns: "1fr 1fr 1fr" }}>

					<ul>
						{categories && categories.length > 0 && categories.map(cat => <li style={styles.li} onClick={() => selectVod(cat.category_id)} key={cat.category_id}>{cat.category_name}</li>)}
					</ul>

					<ul>

					</ul>
				

					{urlStream && <video controls src={urlStream} />}
				</div>
			</Suspense>
		</>
	)
}

const styles = StyleSheet.create({
	li: {
		color: "white"
	},
	container: {
		display: 'flex'
	}
});

export default TesteComponent;