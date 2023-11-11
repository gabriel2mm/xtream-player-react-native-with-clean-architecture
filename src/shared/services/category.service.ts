import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginModel } from "@models/login/login.model";
import { getValue } from "../utils/getValue";
import { AppState } from "src/app/common/store/state";
import { Store, select } from "@ngrx/store";
import { CategoryModel } from "@models/category/category-model";

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    baseUrl: string = "";
    loginInfo: LoginModel | undefined;

    constructor(
        private httpClient: HttpClient,
        private store: Store<AppState>
    ) {}

    getCategories(action: 'get_live_categories' | 'get_vod_categories' | 'get_series_categories') {
        this.fillValues();
        return this.httpClient.get<Array<CategoryModel>>(`${this.baseUrl}&action=${action}`);
    }

    private fillValues() {
        this.loginInfo = getValue(this.store.pipe(select(state => state.login.loginInfo)));
        this.baseUrl = `${this.loginInfo?.url}/player_api.php?username=${this.loginInfo?.username}&password=${this.loginInfo?.password}`;
    }
}