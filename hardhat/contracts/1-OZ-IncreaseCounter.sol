//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import {IncreaseCounter} from "./IncreaseCounter.sol";

contract OZIncreaseContract is IncreaseCounter {

  event SetPurpose(uint256 purpose, address sender);
  constructor(uint256 updateInterval)IncreaseCounter(updateInterval) {
    console.log("Deploying a OZ Automatic Counter");
  
  }


  receive() external payable {}
}
