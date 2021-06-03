import { BINANCE_ACTION_TYPES, TBinaneState } from './binance.type';

const initialState: TBinaneState = {
    sync: false,
    error: null,
    snapshot: null,
    events: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BINANCE_ACTION_TYPES.BUFFER:
            return {
                ...state,
                events: [action.payload.event].concat(state.events)
            };
        case BINANCE_ACTION_TYPES.SYNC:
            return {
                ...state,
                sync: true
            }
        case BINANCE_ACTION_TYPES.ERROR:
            return {
                ...state,
                error: action.error
            };
        case BINANCE_ACTION_TYPES.SNAPSHOT:
            return {
                ...state,
                snapshot: action.payload.snapshot
            };
        case BINANCE_ACTION_TYPES.RESET:
            return initialState;
        default:
            return state;
    };
};

export const binanceStore = { reducer, initialState };