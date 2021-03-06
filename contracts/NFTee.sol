// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

//import the standard implementation of ERC721
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// GameItem is  ERC721 signifies that the contract we are creating imports ERC721 and follows ERC721 contract from openzeppelin

//Contract NFTee is an ERC721 Contract
contract GameItem is ERC721 {
    constructor() ERC721("GameItem", "ITM") {
        //mint an NFT to yourself
        _mint(msg.sender, 1);
    }
}