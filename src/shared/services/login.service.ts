import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AccountInfo } from "@models/login/account-info.model";
import { LoginModel } from "@models/login/login.model";

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    constructor(private httpClient: HttpClient) { }

    login({url, username, password}: LoginModel) {       
        return this.httpClient.get<AccountInfo>(url + `/player_api.php?username=${username}&password=${password}`);
    }
} 