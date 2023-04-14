require('@openzeppelin/hardhat-upgrades');
require('@nomiclabs/hardhat-etherscan');

const { privateKey } = require('./secrets.json');

module.exports = {
  networks: {
    testnet: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [privateKey],
    },
  },
  solidity: '0.8.3',
  etherscan: {
    apiKey: "<SUZP4KBJKKA4Y9DCD731UUQU7WART4FKWM>"
  }
};
