import { HttpGetDepthBySymbol, DEFAULT_SYMBOL } from '../binance';
import { depthSuccessAction, depthErrorAction } from '../../core/depth';
import { initializeStore } from './redux.core';

export const reduxSsr = async (ctx) => {
    const reduxStore = initializeStore();
    const { dispatch } = reduxStore;
    try {
        const { asks, bids } = await HttpGetDepthBySymbol(DEFAULT_SYMBOL);
        dispatch(depthSuccessAction(asks, bids));
    } catch (error) {
        dispatch(depthErrorAction(error.message));
    }
    return { props: { initialReduxState: reduxStore.getState() } }
};