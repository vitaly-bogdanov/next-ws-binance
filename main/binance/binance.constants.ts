export const REST_API_V3 = {
    BASE_URL: "https://api3.binance.com",
    METHODS: {
        ORDER_BOOK: {
            METHOD: 'get',
            PATH: 'api/v3/depth'
        }
    }
};

export const WSS = {
    BASE_ENDPOINT: 'wss://stream.binance.com:9443',
    MS: '1000ms',
    STREAMS: {
        DEPTH: 'depth'
    }
}

export const DEFAULT_SYMBOL = 'BTCUSDT';
export const SYMBOL_LIST = [DEFAULT_SYMBOL, 'ETHUSDT'];
export const DEPTH_LIMIT = 500;