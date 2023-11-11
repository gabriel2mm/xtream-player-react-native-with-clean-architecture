import { Component, OnInit } from '@angular/core';
import { CONSTANTS } from '@constants/constants';
import { AppState } from './common/store/state';
import { Store } from '@ngrx/store';
import { sigIn, sigInSuccess } from '@actions/login.actions';
import { Router } from '@angular/router';
import { ROUTES } from '@constants/routes';
import { LoginService } from '@services/login.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(
        private router: Router,
        private store: Store<AppState>,
        private loginService: LoginService,
    ) { }

    ngOnInit(): void {
        const loginInfoStr = localStorage.getItem(CONSTANTS.USERINFO);
        if (loginInfoStr) {
            const loginInfo = JSON.parse(loginInfoStr);
            this.store.dispatch(sigIn({ payload: loginInfo }));
            this.loginService.login(loginInfo)
                .subscribe({
                    next: (response) => {
                        this.store.dispatch(sigInSuccess({ payload: response }))
                        this.router.navigateByUrl(ROUTES.LOADCONTENT.redirect);
                    }
                });
        }
    }
}
