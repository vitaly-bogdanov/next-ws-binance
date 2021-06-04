import { FC, ChangeEvent } from 'react';
import styled from 'styled-components';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { SYMBOL_LIST } from '../../main/binance';
import { LayoutContent } from '../../lib/layouts';

interface Props {
    currentSymbol: string,
    selectSymbolHandler(event: ChangeEvent<{ value: string }>): void
}

export const SymbolView: FC<Props> = (props) => {
    console.log(props);
    return (
        <LayoutContent>
            <LayoutDropDown>
                <LayoutText>
                    <Text>Выберете символ</Text>
                </LayoutText>
                <Select value={props.currentSymbol} onChange={props.selectSymbolHandler}>
                    { SYMBOL_LIST.map((symbol, index) => <MenuItem key={`${symbol}-${index}`} value={symbol}>{symbol}</MenuItem>) }
                </Select>
            </LayoutDropDown>
        </LayoutContent>
    );
};

const LayoutDropDown = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const LayoutText = styled.div`
    padding: 40px;
`;

const Text = styled.p`
    font-size: 18px;
`;