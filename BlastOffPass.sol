// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title BlastOffPass
 * @dev ERC721 NFT Pass for Blast off game. Minting this pass unlocks full game access.
 */
contract BlastOffPass is ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;
    
    // Constant Mint Price: 0.000003 ETH (~$0.01 USD)
    uint256 public constant MINT_PRICE = 0.000003 ether;
    
    // Pinata IPFS Metadata CID for the Blast off Access Pass
    string public constant PASS_METADATA_URI = "ipfs://QmYwAPjzv5CZ1A269stQTUc1gN4294spA3u1X9uBN9v3Gf";

    event PassMinted(address indexed minter, uint256 indexed tokenId);

    constructor(address initialOwner) ERC721("Blast Off Access Pass", "BOPASS") Ownable(initialOwner) {
        _nextTokenId = 1;
    }

    /**
     * @dev Mint a new Blast off Mission Access Pass
     */
    function mintPass() public payable returns (uint256) {
        require(msg.value >= MINT_PRICE, "Insufficient ETH sent for mint fee");

        uint256 tokenId = _nextTokenId;
        _nextTokenId++;

        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, PASS_METADATA_URI);

        emit PassMinted(msg.sender, tokenId);
        return tokenId;
    }

    /**
     * @dev Withdraw mint fees gathered in the contract to the treasury wallet
     */
    function withdrawFees(address payable treasury) public onlyOwner {
        require(treasury != address(0), "Invalid treasury address");
        uint256 balance = address(this).balance;
        require(balance > 0, "No fees to withdraw");
        
        (bool success, ) = treasury.call{value: balance}("");
        require(success, "Transfer failed");
    }
}
