import { HttpGetDepthBySymbol, SYMBOL_LIST } from '../binance';
import { depthSuccessAction, depthErrorAction } from '../../core/depth';
import { initializeStore } from './redux.core';

export const reduxSsr = async (ctx) => {
    const reduxStore = initializeStore();
    const { dispatch, depthReducer } = reduxStore;
    try {
        const depth = await HttpGetDepthBySymbol(SYMBOL_LIST[0]);
        dispatch(depthSuccessAction(depth, SYMBOL_LIST[0]));
    } catch (error) {
        dispatch(depthErrorAction(error.message));
    }

    return { props: { initialReduxState: reduxStore.getState() } }
};