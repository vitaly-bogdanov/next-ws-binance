export enum SYMBOL_ACTION_TYPES {
    SET_SYMBOL = 'SYMBOL_ACTION_TYPES.SET_SYMBOL',
};

export type TSymbolState = {
    current: string,
    prev: string
};