import { FC } from 'react';
import { useSelector } from 'react-redux';

import { SymbolObserver } from '../../main/redux';
import { RootState } from '../../main/redux';
import { LayoutClientPage } from '../../lib/layouts';
import { DepthContainer } from './depth.container';

export const DepthPage: FC = () => {
    const symbol = useSelector((state: RootState) => state.depthReducer.symbol);
    return (
        <LayoutClientPage title={symbol}>
            <SymbolObserver symbol={symbol} />
            <DepthContainer />
        </LayoutClientPage>
    );
}