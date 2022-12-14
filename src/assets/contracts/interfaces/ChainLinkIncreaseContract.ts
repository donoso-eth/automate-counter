/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ChainLinkIncreaseContractInterface extends utils.Interface {
  functions: {
    "ERC677_LINK_ADDRESS()": FunctionFragment;
    "REGISTRY_ADDRESS()": FunctionFragment;
    "SOURCE()": FunctionFragment;
    "cancelUpkeep()": FunctionFragment;
    "cancelUpkeepByHash(bytes32)": FunctionFragment;
    "cancelUpkeepById(uint256)": FunctionFragment;
    "checkUpkeep(bytes)": FunctionFragment;
    "counter()": FunctionFragment;
    "createUpkeep()": FunctionFragment;
    "interval()": FunctionFragment;
    "lastTimestamp()": FunctionFragment;
    "minFundingAmount()": FunctionFragment;
    "performUpkeep(bytes)": FunctionFragment;
    "taskId()": FunctionFragment;
    "taskIdByUser(address)": FunctionFragment;
    "withdraw()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "ERC677_LINK_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "REGISTRY_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "SOURCE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "cancelUpkeep",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "cancelUpkeepByHash",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelUpkeepById",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkUpkeep",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "counter", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "createUpkeep",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "interval", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "lastTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minFundingAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "performUpkeep",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "taskId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "taskIdByUser",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "ERC677_LINK_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "REGISTRY_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "SOURCE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cancelUpkeep",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelUpkeepByHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelUpkeepById",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkUpkeep",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "counter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createUpkeep",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "interval", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minFundingAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "performUpkeep",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "taskId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "taskIdByUser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {};
}

export interface ChainLinkIncreaseContract extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ChainLinkIncreaseContractInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    ERC677_LINK_ADDRESS(overrides?: CallOverrides): Promise<[string]>;

    REGISTRY_ADDRESS(overrides?: CallOverrides): Promise<[string]>;

    SOURCE(overrides?: CallOverrides): Promise<[number]>;

    cancelUpkeep(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cancelUpkeepByHash(
      hash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cancelUpkeepById(
      id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    checkUpkeep(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { upkeepNeeded: boolean }>;

    counter(overrides?: CallOverrides): Promise<[BigNumber]>;

    createUpkeep(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    interval(overrides?: CallOverrides): Promise<[BigNumber]>;

    lastTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    minFundingAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    performUpkeep(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    taskId(overrides?: CallOverrides): Promise<[string]>;

    taskIdByUser(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  ERC677_LINK_ADDRESS(overrides?: CallOverrides): Promise<string>;

  REGISTRY_ADDRESS(overrides?: CallOverrides): Promise<string>;

  SOURCE(overrides?: CallOverrides): Promise<number>;

  cancelUpkeep(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cancelUpkeepByHash(
    hash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cancelUpkeepById(
    id: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  checkUpkeep(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<[boolean, string] & { upkeepNeeded: boolean }>;

  counter(overrides?: CallOverrides): Promise<BigNumber>;

  createUpkeep(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  interval(overrides?: CallOverrides): Promise<BigNumber>;

  lastTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  minFundingAmount(overrides?: CallOverrides): Promise<BigNumber>;

  performUpkeep(
    arg0: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  taskId(overrides?: CallOverrides): Promise<string>;

  taskIdByUser(arg0: string, overrides?: CallOverrides): Promise<string>;

  withdraw(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    ERC677_LINK_ADDRESS(overrides?: CallOverrides): Promise<string>;

    REGISTRY_ADDRESS(overrides?: CallOverrides): Promise<string>;

    SOURCE(overrides?: CallOverrides): Promise<number>;

    cancelUpkeep(overrides?: CallOverrides): Promise<void>;

    cancelUpkeepByHash(
      hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    cancelUpkeepById(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    checkUpkeep(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { upkeepNeeded: boolean }>;

    counter(overrides?: CallOverrides): Promise<BigNumber>;

    createUpkeep(overrides?: CallOverrides): Promise<void>;

    interval(overrides?: CallOverrides): Promise<BigNumber>;

    lastTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    minFundingAmount(overrides?: CallOverrides): Promise<BigNumber>;

    performUpkeep(arg0: BytesLike, overrides?: CallOverrides): Promise<void>;

    taskId(overrides?: CallOverrides): Promise<string>;

    taskIdByUser(arg0: string, overrides?: CallOverrides): Promise<string>;

    withdraw(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    ERC677_LINK_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

    REGISTRY_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

    SOURCE(overrides?: CallOverrides): Promise<BigNumber>;

    cancelUpkeep(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cancelUpkeepByHash(
      hash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cancelUpkeepById(
      id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    checkUpkeep(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    counter(overrides?: CallOverrides): Promise<BigNumber>;

    createUpkeep(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    interval(overrides?: CallOverrides): Promise<BigNumber>;

    lastTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    minFundingAmount(overrides?: CallOverrides): Promise<BigNumber>;

    performUpkeep(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    taskId(overrides?: CallOverrides): Promise<BigNumber>;

    taskIdByUser(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ERC677_LINK_ADDRESS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    REGISTRY_ADDRESS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    SOURCE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cancelUpkeep(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cancelUpkeepByHash(
      hash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cancelUpkeepById(
      id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    checkUpkeep(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    counter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createUpkeep(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    interval(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minFundingAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    performUpkeep(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    taskId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    taskIdByUser(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
