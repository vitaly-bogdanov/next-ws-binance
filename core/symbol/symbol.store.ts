import { TSymbolState } from './symbol.types';

import { SYMBOL_ACTION_TYPES } from './symbol.types';
import { DEFAULT_SYMBOL } from '../../main/binance';

const initialState: TSymbolState = {
    current: DEFAULT_SYMBOL,
    prev: null
};

const reducer = (state: TSymbolState = initialState, action): TSymbolState => {
    switch (action.type) {
        case SYMBOL_ACTION_TYPES.SET_SYMBOL:
            return {
                current: action.payload.sybmbol,
                prev: state.current
            };
        default:
            return state;
    }
};

export const symbolStore = { reducer, initialState };