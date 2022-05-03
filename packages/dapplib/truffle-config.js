require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'gesture brand tail tooth blanket crater remain unknown give private flee spike'; 
let testAccounts = [
"0xe4d5f759517d62db9b265f462abfc11daaf941011fbd0538e97522799b573648",
"0xc14073f39f2ce29898b4d7eafda4188df56a5504b7de23aace32974175940ba8",
"0xdd50e439e028cd63cc586e2cbffb989655e7c811c16c2fcff699a00b204cf232",
"0xd46b36f515fea71e806e14e74e4395ff3664d37a5028acd69008e41740e0105c",
"0x91fa5da0a8e61824a2f2c76d5678aa3621bf07fd9a7995deca69d4696542a72f",
"0x0e6bee54231aa7f99fc1bb4cc449e2cd57924a7bcec98ef598c96faacf4f7c59",
"0xb2f6389d0c33dc18531ac7fa1f197f6abaf6cf93399f741efe70b4e6e465e4ca",
"0xd3ac49525799fae81b54895aa3983826dad1dac2eb353f9ef9a97b4d83fec840",
"0x03c604fdf9413f335bf82ffba8f635e4afba81219bd98bde00f91b305d12b588",
"0xd40fe22dab65040b890224c73766d9c0022e8d4bc33ce1ef58fc55258d49a131"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


