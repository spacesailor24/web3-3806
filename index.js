const Web3 = require('web3');

(async () => {
    const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/456d6e674dc24b97913ad5619873a415'))
    const txAddress = '0xd340d085fd0b6d1e206ac67c2667a45417e372425765f779d4688ef816644a59';
    let receipt = await web3.eth.getTransactionReceipt(txAddress);

    let logData = receipt.logs[0];

    // Contract ABI is taken from here https://etherscan.io/address/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2#code

    // then I found the matching event signature via web3.eth.abi.encodeEventSignature(...)
    let inputs = [
        // {
        //     "indexed": true,
        //     "name": "dst",
        //     "type": "address"
        // },
        {
            "indexed": false,
            "name": "wad",
            "type": "uint256"
        }
    ];
    let hexString = logData.data; // "0x000000000000000000000000000000000000000000000000047b83940ab20763"
    let topics = logData.topics; // [ "0xe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c", "0x0000000000000000000000007a250d5630b4cf539739df2c5dacb4c659f2488d" ]
    const decodedFirstLog = web3.eth.abi.decodeLog(
        inputs,
        hexString,
        topics
    );
    console.log(decodedFirstLog)
})()