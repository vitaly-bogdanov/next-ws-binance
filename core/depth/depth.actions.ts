import { DEPTH_ACTION_TYPES } from './depth.types';
import { TPriceAndQuantity } from '../../main/binance';
import { depthZeroValueFilterHelper } from '../../main/binance';

export const depthSuccessAction = (_asks: TPriceAndQuantity[], _bids: TPriceAndQuantity[]) => {
    const asks = depthZeroValueFilterHelper(_asks);
    const bids = depthZeroValueFilterHelper(_bids);
    return {
        type: DEPTH_ACTION_TYPES.SUCCESS,
        payload: { asks, bids }
    };
};

export const depthErrorAction = (error: string) => ({
    type: DEPTH_ACTION_TYPES.ERROR,
    payload: { error }
});

export const depthPendingAction = () => ({
    type: DEPTH_ACTION_TYPES.PENDING,
    payload: {}
});

export const resetDepthAction = () => ({
    type: DEPTH_ACTION_TYPES.RESET,
    payload: {}
});