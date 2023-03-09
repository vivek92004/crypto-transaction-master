

require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.9",
  networks: {
    goeril: {
      url: 'https://eth-goerli.g.alchemy.com/v2/XP0Ewk5DkDo-ytwz98LDIFNerryz2bUf',
      accounts: ['b386a423473eca36d16e23d8f730fb8e0818dc3dcd65ee6c109355cfd9f03db5'],
    },
  },
};
