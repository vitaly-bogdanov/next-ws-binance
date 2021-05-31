import { FC, useMemo } from 'react';
import styled from 'styled-components';

import { LayoutContent } from '../../lib/layouts';
import { TPriceAndQuantity } from '../../main/binance';
import { getTotal } from '../../main/binance';
import { fixDigitsNumberAfterDecimalPoint } from './depth.helpers';
import { RESPONSIVE } from './depth.theme';

interface IProps {
    bids: TPriceAndQuantity[]
    asks: TPriceAndQuantity[]
};

export const DepthView: FC<IProps> = ({ bids, asks }) => (
    <LayoutContent>
        <ContainerHead>
            <Table><TableHead /></Table>
            <Table><TableHead /></Table>
        </ContainerHead>
        <ContainerScroll>
            <Table>
                { bids?.map((value: TPriceAndQuantity, index) => <MemoTableLine key={`${value[0]}-${index}`} value={value} />) }
            </Table>
            <Table>
                { asks?.map((value: TPriceAndQuantity, index) => <MemoTableLine key={`${value[0]}-${index}`} value={value} />) }
            </Table>
        </ContainerScroll>
    </LayoutContent>
);

const Cell = styled.div`
    padding: 20px;
    @media (max-width: ${RESPONSIVE.LAPTOP.WIDTH}) {
        padding: ${RESPONSIVE.LAPTOP.TABLE_GRID.CELL_PADDING};
    }
    @media (max-width: ${RESPONSIVE.TABLET.WIDTH}) {
        padding: ${RESPONSIVE.TABLET.TABLE_GRID.CELL_PADDING}
    }
    @media (max-width: ${RESPONSIVE.MOBILE.WIDTH}) {
        padding: ${RESPONSIVE.MOBILE.TABLE_GRID.CELL_PADDING};
    }
`;

const TitleCell = styled(Cell)`
    font-weight: bold;
    font-size: 25px;
    text-align: center;
    @media (max-width: ${RESPONSIVE.LAPTOP.WIDTH}) {
        font-size: ${RESPONSIVE.LAPTOP.TABLE_GRID.TITLE_CELL_FONT_SIZE};
    }
    @media (max-width: ${RESPONSIVE.TABLET.WIDTH}) {
        font-size: ${RESPONSIVE.TABLET.TABLE_GRID.TITLE_CELL_FONT_SIZE};
    }
`;

const ValueCell = styled(Cell)`
    font-size: 16px;
    text-align: right;
    border: 2px solid black;
    border-radius: 15px;
    @media (max-width: ${RESPONSIVE.LAPTOP.WIDTH}) {
        border: ${RESPONSIVE.LAPTOP.TABLE_GRID.VALUE_CELL_BORDER} solid black;
        font-size: ${RESPONSIVE.LAPTOP.TABLE_GRID.VALUE_CELL_FONT_SIZE};
    }
    @media (max-width: ${RESPONSIVE.TABLET.WIDTH}) {
        font-size: ${RESPONSIVE.TABLET.TABLE_GRID.VALUE_CELL_FONT_SIZE};
    }
    @media (max-width: ${RESPONSIVE.MOBILE.WIDTH}) {
        font-size: ${RESPONSIVE.MOBILE.TABLE_GRID.VALUE_CELL_FONT_SIZE};
        border-radius: ${RESPONSIVE.MOBILE.TABLE_GRID.CELL_BORDER_RADIUS};
    }
`;

const Container = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;
    padding: 10px;
    max-height: 80vh;
    @media (max-width: ${RESPONSIVE.LAPTOP.WIDTH}) {
        padding: ${RESPONSIVE.LAPTOP.TABLE_GRID.CONTAINER_PADDING};
        grid-gap: ${RESPONSIVE.LAPTOP.TABLE_GRID.TAPBLE_GAP};
    }
    @media (max-width: ${RESPONSIVE.TABLET.WIDTH}) {
        grid-template-columns: ${RESPONSIVE.TABLET.TABLE_GRID.TABLE_GRID_TEMPLATE_COLUMNS};
    }
`;

const ContainerScroll = styled(Container)`
    overflow-y: scroll;
    overflow-x: hidden;
`;

const ContainerHead = styled(Container)`
    padding-right: 30px;
    @media (max-width: ${RESPONSIVE.LAPTOP.WIDTH}) {
        padding-right: ${RESPONSIVE.LAPTOP.TABLE_GRID.CONTAINER_HEAD_PADDING_RIGHT};
    }
`;

const Table = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr;
    max-height: 1000px;
    @media (max-width: ${RESPONSIVE.LAPTOP.WIDTH}) {
        grid-gap: ${RESPONSIVE.LAPTOP.TABLE_GRID.TAPBLE_GAP};
    }
    @media (max-width: ${RESPONSIVE.TABLET.WIDTH}) {
        grid-gap: ${RESPONSIVE.TABLET.TABLE_GRID.TAPBLE_GAP};
        &:last-child {
            display: ${RESPONSIVE.TABLET.TABLE_GRID.TABLE_DISPLAY_SECOND_PART};
        }
    }
`;

const TableHead: FC = () => (
    <>
        <TitleCell>Amount</TitleCell>
        <TitleCell>Price</TitleCell>
        <TitleCell>Total</TitleCell>
    </>
);

const MemoTableLine: FC<{value: TPriceAndQuantity}> = ({ value }) => {
    const bid = Number(value[0]);
    const ask = Number(value[1]);
    const memoTotal = useMemo(() => getTotal(bid, ask), value);
    return (
        <>
            <ValueCell>{ fixDigitsNumberAfterDecimalPoint(bid) }</ValueCell>
            <ValueCell>{ fixDigitsNumberAfterDecimalPoint(ask) }</ValueCell>
            <ValueCell>{ fixDigitsNumberAfterDecimalPoint(memoTotal) }</ValueCell>
        </>
    );
};