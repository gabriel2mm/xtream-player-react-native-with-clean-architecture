import { createReducer, on } from "@ngrx/store"
import { SeriesInitialState } from "../store/state"
import { allSeries, allSeriesError, allSeriesSuccess } from "@actions/series.action"

const initialState: SeriesInitialState = {
    series: [],
    error: undefined
}

export const seriesReducer = createReducer(
    initialState,
    on(allSeries, (state) => ({ ...initialState })),
    on(allSeriesSuccess, (state, { payload }) => ({ ...state, series: payload, error: undefined})),
    on(allSeriesError, (state, { payload }) => ({ ...state, series: [], error: payload })),
)