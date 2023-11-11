import { createAction, props } from "@ngrx/store";
import { SeriesType } from "../types/series.types";

export const allSeries = createAction(SeriesType.SERIES);
export const allSeriesSuccess = createAction(SeriesType.SERIES_SUCCESS, props<{ payload: any[]}>());
export const allSeriesError = createAction(SeriesType.SERIES_ERROR, props<{ payload: any}>());