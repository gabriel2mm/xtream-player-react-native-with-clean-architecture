import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AppState } from "src/app/common/store/state";
import { Store, select } from "@ngrx/store";
import { LoginModel } from "@models/login/login.model";
import { getValue } from "../utils/getValue";

@Injectable({
    providedIn: 'root'
})
export class VodService {

    baseUrl: string = "";
    loginInfo: LoginModel | undefined;

    constructor(
        private httpClient: HttpClient,
        private store: Store<AppState>
    ) {} 

    getAllVods() {
        this.fillValues();
        return this.httpClient.get(`${this.baseUrl}&action=get_vod_streams`);
    }

    getVodsByCategory(categoryId: string) {
        this.fillValues();
        return this.httpClient.get(`${this.baseUrl}&action=get_vod_streams&action=get_vod_streams&category_id=${categoryId}`);
    }

    getVodInfo(vodId: string | number) {
        this.fillValues();
        return this.httpClient.get<any>(`${this.baseUrl}&action=get_vod_info&vod_id=${vodId}`);
    }

    private fillValues(){
        this.loginInfo = getValue(this.store.pipe(select(state => state.login.loginInfo)));
        this.baseUrl = `${this.loginInfo?.url}/player_api.php?username=${this.loginInfo?.username}&password=${this.loginInfo?.password}`;
    }

}