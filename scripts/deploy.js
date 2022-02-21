//import ethers from Hardhat package
const {ethers} = require("hardhat");



async function main() {
    /*
A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
so nftContract here is a factory for instances of our GameItem contract.
*/
    //1. Somehow tell the script we want to deploy the NFTee.sol contract
    const nftContract = await ethers.getContractFactory("GameItem");

    //2. Here we deploy the contract
    const deployedNFTContract = await nftContract.deploy();

    //3. wait for deployment to finish
    await deployedNFTContract.deployed();
    
    //print the address of the deployed contract\
    console.log("NFT Contract Address.", deployedNFTContract.address);

}

// Call the main function and catch if there is any error
main().then(() => process.exit(0)).catch((error) => {
    console.error(error);
    process.exit(1);
})