import { TPairs } from '../../main/binance';

export enum DEPTH_ACTION_TYPES {
    PENDING = 'DEPTH_ACTION_TYPES.DEPTH_PENDING',
    SUCCESS = 'DEPTH_ACTION_TYPES.DEPTH_SUCCESS',
    ERROR = 'DEPTH_ACTION_TYPES.DEPTH_ERROR',
    RESET = 'DEPTH_ACTION_TYPES.ERROR',
};

export type TPriceAndQuantity = [string, string];

export type TDepthState = {
    pending: boolean,
    success: boolean,
    error: string,
    pairs: TPairs
};