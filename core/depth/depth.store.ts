import { DEPTH_ACTION_TYPES, TDepthState } from './depth.types';
import { SYMBOL_ACTION_TYPES } from '../symbol';

const initialState: TDepthState = {
    symbol: '',
    pending: false,
    success: false,
    error: null,
    depth: {
        lastUpdateId: null,
        bids: [],
        asks: []
    }
};

const reducer = (state: TDepthState = initialState, action) => {
    switch (action.type) {
        case DEPTH_ACTION_TYPES.PENDING:
            return {
                ...state,
                pending: true
            };
        case DEPTH_ACTION_TYPES.SUCCESS:
            return {
                ...state,
                symbol: action.payload.symbol,
                pending: false,
                success: true,
                error: null,
                depth: action.payload.depth
            };
        case DEPTH_ACTION_TYPES.ERROR:
            return {
                ...state,
                pending: false,
                success: false,
                error: action.payload.error
            };
        case SYMBOL_ACTION_TYPES.SET_SYMBOL:
            return {
                ...state,
                symbol: action.payload.symbol
            };
        case SYMBOL_ACTION_TYPES.ADD_DEPTHS:
            return {
                ...state,
                depth: {
                    ...state.depth,
                    asks: action.payload.asks,
                    bids: action.payload.bids
                }
            };
        case SYMBOL_ACTION_TYPES.RESET_DEPTHS:
            return {
                ...initialState,
                symbol: state.symbol
            };
        default:
            return state;
    }
};

export const depthStore = { reducer, initialState, name: 'depthReducer' }