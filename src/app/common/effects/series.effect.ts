import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of, tap } from "rxjs";
import { SeriesService } from "@services/series.service";
import { SeriesType } from "../types/series.types";
import { allSeriesError, allSeriesSuccess } from "@actions/series.action";

@Injectable()
export class SeriesEffect {

    series$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SeriesType.SERIES),
            exhaustMap((action: any) =>
                this.seriesService.getAllSeries().pipe(
                    map((vods: any) => allSeriesSuccess({ payload: vods })),
                    catchError(error => of(allSeriesError({ payload: error })))
                )
            )),
        { useEffectsErrorHandler: false }
    );

    constructor(
        private actions$: Actions,
        private seriesService: SeriesService
    ) { }
}