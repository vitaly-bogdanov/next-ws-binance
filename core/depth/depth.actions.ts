import { DEPTH_ACTION_TYPES } from './depth.types';

export const depthSuccessAction = (depth, symbol: string) => ({
    type: DEPTH_ACTION_TYPES.SUCCESS,
    payload: { depth, symbol }
});

export const depthErrorAction = (error: string) => ({
    type: DEPTH_ACTION_TYPES.ERROR,
    payload: { error }
});