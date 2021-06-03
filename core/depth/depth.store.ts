import { DEPTH_ACTION_TYPES, TDepthState } from './depth.types';
import { DEPTH_LIMIT } from '../../main/binance';

const initialState: TDepthState = {
    pending: false,
    success: false,
    error: null,
    pairs: {
        bids: [],
        asks: []
    }
};

const reducer = (state: TDepthState = initialState, action): TDepthState => {
    switch (action.type) {
        case DEPTH_ACTION_TYPES.PENDING:
            return {
                ...state,
                pending: true
            };
        case DEPTH_ACTION_TYPES.SUCCESS:
            return {
                ...state,
                pending: false,
                success: true,
                error: null,
                pairs: { 
                    bids: action.payload.bids.concat(state.pairs.bids).slice(0, DEPTH_LIMIT),
                    asks: action.payload.asks.concat(state.pairs.asks).slice(0, DEPTH_LIMIT)
                }
            };
        case DEPTH_ACTION_TYPES.ERROR:
            return {
                ...state,
                pending: false,
                success: false,
                error: action.payload.error
            };
        case DEPTH_ACTION_TYPES.RESET:
            return initialState;
        default:
            return state;
    }
};

export const depthStore = { reducer, initialState };