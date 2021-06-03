export type TPriceAndQuantity = [string, string];

export type TPairs = {
    bids: TPriceAndQuantity[],
    asks: TPriceAndQuantity[]
};

export enum BINANCE_ACTION_TYPES {
    SYNC = 'BINANCE_ACTION_TYPES.SYNC',
    SNAPSHOT = 'BINANCE_ACTION_TYPES.SNAPSHOT',
    PENDING = 'BINANCE_ACTION_TYPES.BUFFER',
    BUFFER = 'BINANCE_ACTION_TYPES.BUFFER',
    RESET = 'BINANCE_ACTION_TYPES.RESET',
    ERROR = 'BINANCE_ACTION_TYPES.ERROR'
}

export type TDepthEvent = {
    E: number,
    U: number,
    a: TPriceAndQuantity[],
    b: TPriceAndQuantity[],
    e: string,
    s: string
}

export type TBinaneState = {
    sync: boolean,
    snapshot: any,
    error: string,
    events: TDepthEvent[]
};