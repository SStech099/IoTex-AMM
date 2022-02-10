require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-ethers');
const { mnemonic } = require('./secrets.json');

module.exports = {
  networks: {
    dev: {
      url: "https://babel-api.testnet.iotex.io",
      accounts: ['PRIVATE_KEY'],
      chainId: 4690,
      gas: 8500000,
      gasPrice: 1000000000000
    },
  },
  solidity: {
    version: "0.6.12",
    settings: {
      optimizer: {
        enabled: true
      }
     }
    },
};