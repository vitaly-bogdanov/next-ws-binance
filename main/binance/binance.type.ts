export type TPriceAndQuantity = [string, string];

export type TDepthResponseData = {
    lastUpdateId: number,
    bids: TPriceAndQuantity[],
    asks: TPriceAndQuantity[]
}