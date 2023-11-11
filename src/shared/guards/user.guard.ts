import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable, catchError, of, switchMap } from "rxjs";
import { Injectable } from "@angular/core";
import { AppState } from "src/app/common/store/state";
import { Store } from "@ngrx/store";
import { AccountInfo } from "@models/login/account-info.model";

@Injectable({
    providedIn: 'root'
})
export class UserGuard implements CanActivate {

    userInfo$: Observable<AccountInfo | undefined>

    constructor(
        private router: Router,
        private store: Store<AppState>
    ) {
        this.userInfo$ = this.store.select(state => state.login.accountInfo);
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.userInfo$.pipe(
            switchMap((response) => {
                console.log(response);
                if(!response?.user_info){
                    this.router.navigateByUrl('');
                    return of(false);
                }

                return of(!!response?.user_info)
            }),
            catchError((err) => of(false))
        );
    }

}