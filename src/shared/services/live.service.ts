import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { getValue } from "../utils/getValue";
import { Store, select } from "@ngrx/store";
import { AppState } from "src/app/common/store/state";
import { LoginModel } from "@models/login/login.model";

@Injectable({
    providedIn: 'root'
})
export class LivesService {

    baseUrl: string = "";
    loginInfo: LoginModel | undefined;
    
    constructor(
        private httpClient: HttpClient,
        private store: Store<AppState>
    ) { }

    getAllLives() {
        this.fillValues();
        return this.httpClient.get(`${this.baseUrl}&action=get_live_streams`);
    }

    getLivesByCategoryId(categoryId: string) {
        this.fillValues();
        return this.httpClient.get(`${this.baseUrl}&action=get_live_streams&category_id=${categoryId}`);
    }

    getLiveInfo(liveId: string) {
        this.fillValues();
        return this.httpClient.get(`${this.baseUrl}&action=get_live_streams&stream_id=${liveId}`);
    }

    getEPGShort(liveId: string, limit: number = 1) {
        this.fillValues();
        return this.httpClient.get(`${this.baseUrl}&action=get_short_epg&stream_id=${liveId}&limit=${limit}`);
    }

    private fillValues(){
        this.loginInfo = getValue(this.store.pipe(select(state => state.login.loginInfo)));
        this.baseUrl = `${this.loginInfo?.url}/player_api.php?username=${this.loginInfo?.username}&password=${this.loginInfo?.password}`;
    }
}