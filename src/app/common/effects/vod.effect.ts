import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { VodsType } from "../types/vod.types";
import { catchError, exhaustMap, map, of, tap } from "rxjs";
import { VodService } from "@services/vods.service";
import { allVodsError, allVodsSuccess } from "@actions/vod.actions";

@Injectable()
export class VodEffect {

    vods$ = createEffect(() =>
        this.actions$.pipe(
            ofType(VodsType.VOD),
            exhaustMap((action: any) =>
                this.vodService.getAllVods().pipe(
                    map((vods: any) => allVodsSuccess({ payload: vods })),
                    catchError(error => of(allVodsError({ payload: error })))
                )
            )),
        { useEffectsErrorHandler: false }
    );

    constructor(
        private actions$: Actions,
        private vodService: VodService
    ) { }
}