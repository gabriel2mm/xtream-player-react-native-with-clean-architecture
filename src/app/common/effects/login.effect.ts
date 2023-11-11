import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LoginService } from "@services/login.service";
import { LoginType } from "../types/login.types";
import { catchError, exhaustMap, map, of, tap } from "rxjs";
import { AccountInfo } from "@models/login/account-info.model";
import { sigInError, sigInSuccess } from "@actions/login.actions";

@Injectable()
export class LoginEffect {

    userInfo$ = createEffect(() =>
        this.actions$.pipe(
            ofType(LoginType.LOGIN),            
            exhaustMap((action: any) =>
                this.loginService.login(action.payload).pipe(
                    map((accountInfo: AccountInfo) => sigInSuccess({ payload: accountInfo })),
                    catchError(error => of(sigInError({ payload: error })))
                )
            )),
        { useEffectsErrorHandler: false }
    );

    constructor(
        private actions$: Actions,
        private loginService: LoginService
    ) { }
}