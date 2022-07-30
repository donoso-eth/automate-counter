//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

abstract contract IncreaseCounter {
  /**
   * Public counter variable
   */
  uint256 public counter;

  /**
   * Use an interval in seconds and a timestamp to slow execution of Upkeep
   */
  uint256 public immutable interval;
  uint256 public lastTimestamp;

  mapping (address=> bytes32) public taskIdByUser;

  constructor(uint256 updateInterval) {
    interval = updateInterval;
    lastTimestamp = block.timestamp;

    counter = 0;
  }

  function increaseCounter() internal virtual {
    lastTimestamp = block.timestamp;
    counter = counter + 1;
  }
}
