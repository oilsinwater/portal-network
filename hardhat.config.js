require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/PiCmv9JGCOQXO0eLksXPVGvonHepdoBw",
      accounts: ["0912346e34a3bc9f54b4caa3cf3dc24167a99ac70c825941723c7740d5e2d316"],
    },
  },
};