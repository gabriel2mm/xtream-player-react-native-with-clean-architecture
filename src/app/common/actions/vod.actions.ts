import { createAction, props } from "@ngrx/store";
import { VodsType } from "../types/vod.types";

export const allVods = createAction(VodsType.VOD);
export const allVodsSuccess = createAction(VodsType.VOD_SUCCESS, props<{payload: any}>());
export const allVodsError = createAction(VodsType.VOD_ERROR,  props<{payload: any}>());