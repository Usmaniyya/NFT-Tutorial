

require("@nomiclabs/hardhat-waffle");

require("dotenv").config();

module.exports = {
  solidity: "0.8.4",

  //how do we define which test network to deploy to
  networks:{
    rinkeby:{
      url: process.env.ALCHEMY_API_KEY_URL,
      accounts: [process.env.PRIVATE_KEY]
    },
  },

  //how do we define which account to use for deployment
};
