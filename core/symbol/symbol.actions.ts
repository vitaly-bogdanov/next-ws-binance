import { SYMBOL_ACTION_TYPES } from './symbol.types';

export const setDepthSymbolAction = (symbol: string) => ({
    type: SYMBOL_ACTION_TYPES.SET_SYMBOL,
    payload: { symbol }
});