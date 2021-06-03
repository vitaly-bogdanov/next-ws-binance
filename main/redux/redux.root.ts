import { combineReducers } from 'redux';

import { depthStore } from '../../core/depth';
import { symbolStore } from '../../core/symbol';
import { binanceStore } from '../binance';

// Тут регистрируем редьюсеры
export const reduxRoot = { reducer: combineReducers({
    depthReducer: depthStore.reducer,
    symbolReducer: symbolStore.reducer,
    binanceReducer: binanceStore.reducer

    // ...
}), initialState: {
    depthReducer: depthStore.initialState,
    symbolReducer: symbolStore.initialState,
    binanceReducer: binanceStore.initialState

    // ... 
}};