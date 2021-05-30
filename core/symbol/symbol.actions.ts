import { SYMBOL_ACTION_TYPES } from './symbol.types';
import { TPriceAndQuantity } from '../../main/binance';

export const setDepthSymbolAction = (symbol: string) => ({
    type: SYMBOL_ACTION_TYPES.SET_SYMBOL,
    payload: { symbol }
});

export const addDepthAction = (asks: TPriceAndQuantity[], bids: TPriceAndQuantity[]) => ({
    type: SYMBOL_ACTION_TYPES.ADD_DEPTHS,
    payload: { asks,  bids }
}); 

export const resetDepthAction = () => ({
    type: SYMBOL_ACTION_TYPES.RESET_DEPTHS
});