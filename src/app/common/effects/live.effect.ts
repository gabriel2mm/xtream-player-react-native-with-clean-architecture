import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of, switchMap, tap } from "rxjs";
import { LivesService } from "@services/live.service";
import { LiveType } from "../types/live.types";
import { allLivesError, allLivesSuccess } from "@actions/live.action";

@Injectable()
export class LiveEffect {

    lives$ = createEffect(() =>
        this.actions$.pipe(
            ofType(LiveType.LIVE),
            exhaustMap((action: any) =>
                this.liveService.getAllLives().pipe(
                    map((vods: any) => allLivesSuccess({ payload: vods })),
                    catchError(error => of(allLivesError({ payload: error })))
                )
            )),
        { useEffectsErrorHandler: false }
    );

    constructor(
        private actions$: Actions,
        private liveService: LivesService
    ) { }
}