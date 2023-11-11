import { createAction, props } from "@ngrx/store";
import { LiveType } from "../types/live.types";

export const allLives = createAction(LiveType.LIVE);
export const allLivesSuccess = createAction(LiveType.LIVE_SUCCESS, props<{ payload: any[]}>());
export const allLivesError = createAction(LiveType.LIVE_ERROR, props<{ payload: any}>());