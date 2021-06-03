const client = new (require('websocket').client);
const fetch = require('node-fetch');
let cache = new (require('node-cache'));

// 1 Open a stream to wss://stream.binance.com:9443/ws/bnbbtc@depth.
// 2 Buffer the events you receive from the stream.
// 3 Get a depth snapshot from https://api.binance.com/api/v3/depth?symbol=BNBBTC&limit=1000 .
// 4 Drop any event where u is <= lastUpdateId in the snapshot.
// 5 The first processed event should have U <= lastUpdateId+1 AND u >= lastUpdateId+1.
// 6 While listening to the stream, each new event's U should be equal to the previous event's u+1.
// 7 The data in each event is the absolute quantity for a price level.
// 8 If the quantity is 0, remove the price level.
// 9 Receiving an event that removes a price level that is not in your local order book can happen and is normal.

const MS = 2000;

setTimeout(async () => {
    let result = await fetch('https://api.binance.com/api/v3/depth?symbol=BTCUSDT&limit=1000', { method: 'get' });
    let depth = await result.json();
    if (cache.has('events')) {
        cache.get('events').forEach((event, index) => {
            if (event.U <= depth.lastUpdateId + 1 && event.u >= depth.lastUpdateId + 1) {
                console.log(`${index}: yes!`);
            } else {
                console.log(`${index}: no!`);
            }
        });
    }
}, MS);

(() => {
    client.connect('wss://stream.binance.com:9443/ws');
    client.on('connect', (connection) => {

        connection.send(JSON.stringify({
            "method": "SUBSCRIBE",
            "params": [
            "btcusdt@depth"
            ],
            "id": 1
        }));

        connection.on('message', ({ type, utf8Data }) => {
            const event = JSON.parse(utf8Data);
            if (cache.has('events')) {
                let events = cache.get('events');
                cache.set('events', events.concat([event]));
            } else {
                cache.set('events', [event]);
            }
        });

    });
})();