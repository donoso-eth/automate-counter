//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import {IncreaseCounter} from "./IncreaseCounter.sol";

import './keep3r/IKeep3rV1.sol';
contract K3rIncreaseContract is IncreaseCounter {
 
 address keep3r = 0xEd05BcB3b77F6Ef70B12BE931F98b6EFf2Ef6e1c;
  error NoKeeper();

  constructor(uint256 updateInterval )IncreaseCounter(updateInterval)  {
    console.log("Deploying a Keep3R");

  }

  function workable() public view returns (bool) {
    return (block.timestamp - lastTimestamp) > interval;
  }

  function work() external validateAndPayKeeper(msg.sender) {
    require (workable(), 'NOT READY');
    increaseCounter();
  }

  modifier validateAndPayKeeper(address _keeper) {
    if (!IKeep3rV1(keep3r).isKeeper(_keeper)) revert NoKeeper();
    _;
    IKeep3rV1(keep3r).worked(_keeper);
  }


  receive() external payable {}
}
