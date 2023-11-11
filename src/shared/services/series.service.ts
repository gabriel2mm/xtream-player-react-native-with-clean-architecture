import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginModel } from "@models/login/login.model";
import { getValue } from "../utils/getValue";
import { Store, select } from "@ngrx/store";
import { AppState } from "src/app/common/store/state";

@Injectable({
    providedIn: 'root'
})
export class SeriesService {

    baseUrl: string = "";
    loginInfo: LoginModel | undefined;

    constructor(
        private httpClient: HttpClient,
        private store: Store<AppState>
    ) { }

    getAllSeries() {
        this.fillValues();
        return this.httpClient.get(`${this.baseUrl}&action=get_series`);
    }

    getSeriesByCategoryId(categoryId: string) {
        this.fillValues();
        return this.httpClient.get(`${this.baseUrl}&action=get_series&category_id=${categoryId}`)
    }

    getSerieInfo(seriesId: string) {
        this.fillValues();
        return this.httpClient.get(`${this.baseUrl}&action=get_series_info&series_id=${seriesId}`)
    }

    private fillValues(){
        this.loginInfo = getValue(this.store.pipe(select(state => state.login.loginInfo)));
        this.baseUrl = `${this.loginInfo?.url}/player_api.php?username=${this.loginInfo?.username}&password=${this.loginInfo?.password}`;
    }
}