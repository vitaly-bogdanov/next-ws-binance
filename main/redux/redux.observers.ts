import { FC, useEffect, useRef } from 'react';
import {  useDispatch } from 'react-redux';

import { WssSubscribeDepth, subscribeDepthRequestHelper, unsubscribeDepthRequestHelper } from '../binance';
import { addDepthAction, resetDepthAction } from '../../core/symbol';

interface Props {
    symbol: string
}

export const SymbolObserver: FC<Props> = ({ symbol }) => {
    const dispatch = useDispatch();
    const prevSymbol = useRef(undefined);

    useEffect(() => {
        const ws = WssSubscribeDepth(symbol);

        ws.onopen = () => {
            if (prevSymbol.current) {
                ws.send(unsubscribeDepthRequestHelper(prevSymbol.current));
                dispatch(resetDepthAction()); // reset
            }
            prevSymbol.current = symbol;
            ws.send(subscribeDepthRequestHelper(symbol));
        };

        ws.onmessage = (message) => {
            const { a, b } = JSON.parse(message.data);
            if (a && b) {
                dispatch(addDepthAction(a, b)); // add
            }
        };

        ws.onerror = (error) => {};
        
        return () => {
            ws.send(unsubscribeDepthRequestHelper(prevSymbol.current));
        };
    }, [symbol]);

    return null;
}