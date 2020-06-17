const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "fc7c6efca1834a799fb910e32342db17";

const mnemonic = "whale worth then topic photo later cruel print purity legend glance decade";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
        network_id: 4,       // rinkeby's id
        gas: 4500000,        // rinkeby has a lower block limit than mainnet
        gasPrice: 10000000000
    }
  },
  compilers: {
    solc: {
      version: "^0.4.24", // A version or constraint - Ex. "^0.5.0"
                         // Can also be set to "native" to use a native solc
      docker: false, // Use a version obtained through docker
    }
  }
};