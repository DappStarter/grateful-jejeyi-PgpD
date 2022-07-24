require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow fringe skull guard render remember erosion heavy cloth fog giggle'; 
let testAccounts = [
"0xd2b67eedfcda359c92cafd68670326a822256fd6a051c2a312e9468b18f27f3d",
"0xee4450bdc2657db4248476be9a9ece6e5f49da4254997e2f5ac7c40d91074a35",
"0x1f3187ce78fe8428f02930bcda3620828fce47471c5000b3274c868d14043acb",
"0x1a483b1749ac5373ad008090d277903d2f20436977b2702865b8aff143bf302c",
"0x9914066c996d890e727b979d41c7a5d7de612905b5386a910355ac73ccfe5ebb",
"0xdcd1ab074bec88e89251fc5f1bb742bd57a0a6bb6f68df055d290b1b7920dc44",
"0x24eff79a5a8b0388bb574a84f769fc5600efa821532d7a73e0fa90c81cf7e0b0",
"0xf6c904a21fc4c4da8b4ca7b92d0ace4abe2d228df56cf378572f453f288bddb6",
"0x28903c5e3dec812ae999ae549e660923db91e50e84efaa0224ce4f1e52471bf9",
"0x8e391287511a2daa77ce9a5b8741e81ebd2ec34fb97a16909b79ea90e4faf774"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

