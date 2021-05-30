import { FC } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../main/redux';
import { SymbolContainer } from './symbol.container';
import { LayoutClientPage } from '../../lib/layouts';


export const SymbolPage: FC = () => {
    const symbol = useSelector((state: RootState) => state.depthReducer.symbol);

    return (
        <LayoutClientPage title={symbol}>
            <SymbolContainer />
        </LayoutClientPage>
    );
}