import { createReducer, on } from "@ngrx/store";
import { VodInitialState } from "../store/state";
import { allVods, allVodsError, allVodsSuccess } from "@actions/vod.actions";

const initialState: VodInitialState = {
    vods: [],
    error: undefined
}

export const vodReducer = createReducer(
    initialState,
    on(allVods, (state) => ({ ...initialState })),
    on(allVodsSuccess, (state, { payload }) => ({ ...state, vods: payload, error: undefined})),
    on(allVodsError, (state, { payload }) => ({ ...state, vods: [], error: payload })),
)