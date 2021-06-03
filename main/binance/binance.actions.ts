import { BINANCE_ACTION_TYPES, TDepthEvent } from './binance.type';
import { HttpGetDepthBySymbol } from './binance.methods';

export const binanceBufferActions = (event: TDepthEvent) => ({
    type: BINANCE_ACTION_TYPES.BUFFER,
    payload: { event }
});

export const binanceBufferReset = () => ({
    type: BINANCE_ACTION_TYPES.RESET,
    payload: {}
});

export const binanceBufferError = (error) => ({
    type:  BINANCE_ACTION_TYPES.ERROR,
    payload: { error }
});

export const binanceSnupshotAction = (snapshot) => ({
    type: BINANCE_ACTION_TYPES.SNAPSHOT,
    payload: { snapshot }
});

export const binanceSyncAction = () => ({
    type: BINANCE_ACTION_TYPES.SYNC,
    payload: {}
});

export const binanceSnapshotActionThunk = (symbol: string) => async (dispatch) => {
    try {
        const snapshot = await HttpGetDepthBySymbol(symbol);
        console.log('response');
        dispatch(binanceSnupshotAction(snapshot));
    } catch(error) {
        dispatch(binanceBufferError(error.message));
    }
};