import { CategoryModel } from "@models/category/category-model";
import { AccountInfo } from "@models/login/account-info.model";
import { LoginModel } from "@models/login/login.model";

export interface AppState {
    login: LoginInitialState,
    category: CategoryInitialState,
    vod: VodInitialState,
    live: LiveInitialState,
    series: SeriesInitialState
}

export interface LoginInitialState {
    accountInfo: AccountInfo | undefined;
    loginInfo: LoginModel | undefined;
    error: any | undefined;
}

export interface VodInitialState {
    vods: Array<any> | [];
    error: any
}

export interface SeriesInitialState {
    series: Array<any> | [];
    error: any
}

export interface LiveInitialState {
    live: Array<any> | [];
    error: any
}

export interface CategoryInitialState {
    categories: CategoryModel[] | [];
    error: any | undefined;
}