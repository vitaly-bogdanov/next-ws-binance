import { FC, useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { 
    WssGetConnection, 
    subscribeDepthRequestHelper, 
    unsubscribeDepthRequestHelper
} from '../binance';
import { resetDepthAction,depthSuccessAction } from '../../core/depth';
import { RootState } from './redux.types';

export const SymbolObserver: FC = () => {
    const { current, prev } = useSelector((state: RootState) => state.symbolReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        const ws = WssGetConnection();

        ws.onopen = () => {
            if (prev) {
                ws.send(unsubscribeDepthRequestHelper(prev));
                dispatch(resetDepthAction()); // reset
            }
            ws.send(subscribeDepthRequestHelper(current));
        };

        ws.onmessage = (message) => {
            const { a, b } = JSON.parse(message.data);
            if (a && b) dispatch(depthSuccessAction(a, b));
        };

        ws.onerror = (error) => {};

        return () => {
            ws.send(unsubscribeDepthRequestHelper(current));
        };

    }, [current]);

    return null;
};