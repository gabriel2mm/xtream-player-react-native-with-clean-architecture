import { sigIn, sigInSuccess, sigInError, logout } from "@actions/login.actions";
import { createReducer, on } from "@ngrx/store";
import { LoginInitialState } from "../store/state";
import { LoginModel } from "@models/login/login.model";

const initialState: LoginInitialState = {
    accountInfo: undefined,
    loginInfo: new LoginModel(),
    error: undefined,
}

export const loginReducer = createReducer(
    initialState,
    on(sigIn, (state, { payload }) => ({ ...initialState, loginInfo: payload })),
    on(sigInSuccess, (state, { payload }) => ({ ...state, accountInfo: payload, error: undefined })),
    on(sigInError, (state, { payload }) => ({ ...state, accountInfo: undefined, error: payload })),
    on(logout, (state) => ({ ...initialState })),
)