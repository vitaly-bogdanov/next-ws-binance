import { REST_API_V3, DEPTH_LIMIT, WSS } from './binance.constants';

export const getDepthHttpUrlWithSymbolHelper = (symbol) => {
    return `${REST_API_V3.BASE_URL}/${REST_API_V3.METHODS.ORDER_BOOK.PATH}?symbol=${symbol}&limit=${DEPTH_LIMIT}`;
};

export const subscribeDepthRequestHelper = (symbol) => {
    const streamnName = `${symbol?.toLowerCase()}@${WSS.STREAMS.DEPTH}@${WSS.MS}`;
    return JSON.stringify({
        method: "SUBSCRIBE",
        params: [streamnName],
        id: 1
    });
};

export const unsubscribeDepthRequestHelper = (symbol) => {
    const streamnName = `${symbol?.toLowerCase()}@${WSS.STREAMS.DEPTH}@${WSS.MS}`;
    return JSON.stringify({
        method: "UNSUBSCRIBE",
        params: [streamnName],
        id: 312
    });
}