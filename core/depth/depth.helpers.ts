import { DIGITS_NUMBER_AFTER_DECIMAL_POINT } from './depth.constants';

export const fixDigitsNumberAfterDecimalPoint = (number: number): string => {
    return number.toFixed(DIGITS_NUMBER_AFTER_DECIMAL_POINT);
};