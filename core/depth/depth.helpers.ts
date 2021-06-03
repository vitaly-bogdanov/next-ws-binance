import { TPriceAndQuantity } from '../../main/binance';
import { DIGITS_NUMBER_AFTER_DECIMAL_POINT } from './depth.constants';

export const fixDigitsNumberAfterDecimalPointHelper = (value: number): string => {
    return value.toFixed(DIGITS_NUMBER_AFTER_DECIMAL_POINT);
};