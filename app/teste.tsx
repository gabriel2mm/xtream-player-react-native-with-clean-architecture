import { ActionEnum } from "@core/domain/enumerator/action.enum";
import { ServiceFactory } from "@core/infrastructure/factory/service-factory.factory";
import React from "react";
import { Button } from "react-native";

export class TesteComponent extends React.Component {

	accountService =  ServiceFactory.getInstance().createAccountService();
	categoryService = ServiceFactory.getInstance().createCategoryService();

	async teste(e: any) {
		const account = await this.accountService.login("http://bdta.pro", "226858", "xP6jF2");
		const categories = await this.categoryService.getCategoriesByAction(ActionEnum.GET_LIVE_CATEGORIES);
	}

	render() {
		return (
			<>
				<span>Olá mundo</span>
				<Button title="Teste" onPress={(e: any) => this.teste(e)}></Button>
			</>
		)
	}
}