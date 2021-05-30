import { FC, ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../main/redux';
import { SymbolView } from './symbol.view';
import { setDepthSymbolAction } from './symbol.actions';

export const SymbolContainer: FC = () => {
    const currentSymbol = useSelector((state: RootState) => state.depthReducer.symbol);
    const dispatch = useDispatch();

    const selectSymbolHandler = (event: ChangeEvent<{ value: string }>): void => {
        dispatch(setDepthSymbolAction(event.target.value));
    };

    return <SymbolView currentSymbol={currentSymbol} selectSymbolHandler={selectSymbolHandler} />;
}