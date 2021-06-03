import { FC } from 'react';
import { DepthView } from './depth.view';
import { useSelector } from 'react-redux';
import { RootState } from '../../main/redux';

export const DepthContainer: FC = () => {
    const { bids, asks } = useSelector((state: RootState) => state.depthReducer.pairs);

    return <DepthView bids={bids} asks={asks} />;
};