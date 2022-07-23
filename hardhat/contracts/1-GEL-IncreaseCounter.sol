//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import {IncreaseCounter} from "./IncreaseCounter.sol";
import {OpsReady} from "./gelato/OpsReady.sol";
import {IOps} from "./gelato/IOps.sol";

contract GekatoIncreaseContract is OpsReady,  IncreaseCounter {
 

  mapping (address=> bytes32) public taskIdByUser;

  constructor(uint256 updateInterval, address payable _ops
  )IncreaseCounter(updateInterval) OpsReady(_ops) {
    console.log("Deploying a GELATO Automatation Task");
  
  }

  // #region Create Simple Task With NO Prepayment Use Case Business Logic

  /**************************************************************************
   * Create Increase counter
   *
   *
   * Step 1 : createTask() function
   *          - optional,  
   *          - requiere the contract to have funds or to receive funds
   *          - will create the task, we add ETH as the feetoken 
   *
   * Step 2 : checkerCondition() Function.
   *          - Check If the task can be executed , in this case if we do not have headache
   *          - returns the execPayload of startPartyNoPrepayment()
   *
   * Step 3 : Executable Function: executeIncreaseCounter()
   *          - get Fee Details and transfer the requiered funds to Gelato
   *          - will Start the party setting lastPartyStart to block.timestamp
   *          - will cause a headache
   *************************************************************************/

  function createTask() public payable {
    require(taskIdByUser[msg.sender] == bytes32(0), "TASK_STILL_ACTIVE");

    require(
      msg.value >= 0.05 ether || address(this).balance > 0.05 ether,
      "NO_FUNDING"
    );

    bytes32 taskId = IOps(ops).createTaskNoPrepayment(
      address(this),
      this.executeIncreaseCounter.selector,
      address(this),
      abi.encodeWithSelector(this.checkerCondition.selector),
      ETH
    );
    taskIdByUser[msg.sender] = taskId;
  }

  function checkerCondition()
    external
    view
    returns (bool canExec, bytes memory execPayload)
  {
      canExec = false;
     if (block.timestamp - lastTimestamp >= interval) {
      canExec = true;
     }

    execPayload = abi.encodeWithSelector(this.executeIncreaseCounter.selector);
  }

  function executeIncreaseCounter() external onlyOps {
    require(block.timestamp - lastTimestamp >= interval);

    //// every task will be payed with a transfer of funds to gelato

    uint256 fee;
    address feeToken;

    (fee, feeToken) = IOps(ops).getFeeDetails();

    _transfer(fee, feeToken);
    increaseCounter();
  }

  // #endregion Create Simple Task Without Prepayment Use Case Business Logic




  receive() external payable {}
}
