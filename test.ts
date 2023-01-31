import {Client} from './dist';

import {DirectSecp256k1HdWallet} from '@cosmjs/proto-signing'

(async () => {
const mnemonic = "surround miss nominee dream gap cross assault thank captain prosper drop duty group candy wealth weather scale put";
const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic);

const client = new Client({ 
        apiURL: "http://localhost:1317",
        rpcURL: "http://localhost:26657",
        prefix: "neutron"
    },
    wallet
);
})();