I tested this repo using version `1.3.0` of `web3`

I believe the error for [this issue](https://github.com/ethereum/web3.js/issues/3806) is a result from [this commented code](https://github.com/spacesailor24/web3-3806/blob/main/index.js#L14). Looking at the all the [event logs](https://etherscan.io/tx/0xd340d085fd0b6d1e206ac67c2667a45417e372425765f779d4688ef816644a59#eventlog) for the transaction (`0xd340d085fd0b6d1e206ac67c2667a45417e372425765f779d4688ef816644a59`), there are no events with named properties `dst` and `wad`

Removing:

```javascript
{
            "indexed": true,
            "name": "dst",
            "type": "address"
        },
```

from the inputs array makes `decodeFirstLog` equal:

```javascript
{
            "indexed": true,
            "name": "dst",
            "type": "address"
        },
```

## Running this repo

1. Clone and run `npm i`
2. `node index.js`
