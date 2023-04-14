const { ethers } = require('hardhat');
const { upgrades } = require('@openzeppelin/hardhat-upgrades');

async function main() {
  const MyContract = await ethers.getContractFactory('MyContract');
  const myContract = await upgrades.deployProxy(MyContract, [], { initializer: 'initialize' });

  console.log('MyContract deployed to:', myContract.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

const { upgrades } = require('@openzeppelin/hardhat-upgrades');
const { privateKey } = require('./secrets.json');

async function main() {
  const MyContract = await ethers.getContractFactory('MyContract');
  const myContract = await upgrades.upgradeProxy(
    '<0x5e22c0f0125F15c3e13e8865D84D3dC776BBCB92>',
    MyContractV2,
    { initializer: 'initialize' }
  );

  console.log('MyContract upgraded to:', myContract.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
