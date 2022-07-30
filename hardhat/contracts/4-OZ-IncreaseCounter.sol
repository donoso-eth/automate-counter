//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "hardhat/console.sol";
import {IncreaseCounter} from "./IncreaseCounter.sol";

contract OZIncreaseContract is IncreaseCounter {


  constructor(uint256 updateInterval)IncreaseCounter(updateInterval) {
    console.log("Deploying a OZ Automatic Counter");
  
  }

  function increaseCounterPublic() public {
    increaseCounter();
  }


  receive() external payable {}
}
