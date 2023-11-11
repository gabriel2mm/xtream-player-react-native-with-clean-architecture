import { createAction, props } from "@ngrx/store";
import { LoginType } from "../types/login.types";
import { LoginModel } from "@models/login/login.model";
import { AccountInfo } from "@models/login/account-info.model";

export const sigIn = createAction(LoginType.LOGIN, props<{ payload: LoginModel }>());
export const sigInSuccess = createAction(LoginType.LOGIN_SUCCESS, props<{ payload: AccountInfo }>());
export const sigInError = createAction(LoginType.LOGIN_ERROR, props<{ payload: any }>());
export const logout = createAction(LoginType.LOGOUT);