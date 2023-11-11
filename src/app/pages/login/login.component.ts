import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from './snack/snackbar';
import { CONSTANTS } from '@constants/constants';
import { VersionType } from '@enums/version.enum';
import { LoginService } from '@services/login.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/common/store/state';
import { LoginModel } from '@models/login/login.model';
import { sigIn, sigInSuccess } from '@actions/login.actions';
import { ROUTES } from '@constants/routes';
import { finalize } from 'rxjs';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    durationInSeconds = 5;
    loading: boolean = false;
    
    readonly appVersion = VersionType

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private loginService: LoginService,
        private _snackBar: MatSnackBar,
        private store: Store<AppState>
    ) { }

    ngOnInit(): void {
        this.route.queryParams.subscribe((params: any) => {
            if (params.error) {
                this.openSnackBar();
            }
        });
    }

    onLogin(loginData: { value: LoginModel, event: MouseEvent }) {
        this.loading = true;
        this.store.dispatch(sigIn({ payload: loginData.value }));
        this.loginService.login(loginData.value)
            .pipe(finalize(() => this.loading = false))
            .subscribe({
                next: (response) => {
                    this.store.dispatch(sigInSuccess({ payload: response }));
                    localStorage.setItem(CONSTANTS.USERINFO, JSON.stringify(loginData.value));
                    this.router.navigateByUrl(ROUTES.LOADCONTENT.redirect);
                },
                error: (err) => this.openSnackBar(),
                complete: () => this.loading = false
            })
    }

    private openSnackBar() {
        this._snackBar.openFromComponent(SnackBarComponent, {
            duration: this.durationInSeconds * 1000,
        });
    }
}
