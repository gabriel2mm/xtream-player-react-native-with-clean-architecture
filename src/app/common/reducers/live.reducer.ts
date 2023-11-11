import { createReducer, on } from "@ngrx/store"
import { LiveInitialState } from "../store/state"
import { allLives, allLivesError, allLivesSuccess } from "@actions/live.action"

const initialState: LiveInitialState = {
    live: [],
    error: undefined
}

export const liveReducer = createReducer(
    initialState,
    on(allLives, (state) => ({ ...initialState })),
    on(allLivesSuccess, (state, { payload }) => ({ ...state, live: payload, error: undefined})),
    on(allLivesError, (state, { payload }) => ({ ...state, live: [], error: payload })),
)