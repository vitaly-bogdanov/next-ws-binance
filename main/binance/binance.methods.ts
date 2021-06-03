import fetch from 'node-fetch';

import { getDepthHttpUrlWithSymbolHelper } from './binance.helpers';
import { REST_API_V3, WSS } from './binance.constants';

export const HttpGetDepthBySymbol = async (symbol) => {
    const response = await fetch(getDepthHttpUrlWithSymbolHelper(symbol), { method: REST_API_V3.METHODS.ORDER_BOOK.METHOD });
    return await response.json();
}

export const WssGetConnection = () => {
    return new WebSocket(WSS.BASE_ENDPOINT + '/ws');
}