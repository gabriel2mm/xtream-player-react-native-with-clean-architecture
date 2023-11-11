import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { CONSTANTS } from '@constants/constants';
import { VersionType } from '@enums/version.enum';
import { Observable } from 'rxjs';
import { AccountInfo } from '@models/login/account-info.model';
import { AppState, LoginInitialState } from 'src/app/common/store/state';
import { Store } from '@ngrx/store';
import { logout } from '@actions/login.actions';
import { LoginModel } from '@models/login/login.model';


@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss'],
})
export class AccountComponent {

    userInfo$: Observable<LoginInitialState>

    readonly appVersion = VersionType

    constructor(
        private router: Router,
        private store: Store<AppState>
    ) {
        this.userInfo$ = store.select(state => state.login);
    }

    onExit() {
        localStorage.clear();
        this.store.dispatch(logout());
        this.router.navigate(['/']);
    }
}
