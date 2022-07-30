/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
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

export interface K3rIncreaseContractInterface extends utils.Interface {
  functions: {
    "counter()": FunctionFragment;
    "interval()": FunctionFragment;
    "lastTimestamp()": FunctionFragment;
    "taskIdByUser(address)": FunctionFragment;
    "work()": FunctionFragment;
    "workable()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "counter", values?: undefined): string;
  encodeFunctionData(functionFragment: "interval", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "lastTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "taskIdByUser",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "work", values?: undefined): string;
  encodeFunctionData(functionFragment: "workable", values?: undefined): string;

  decodeFunctionResult(functionFragment: "counter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "interval", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "taskIdByUser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "work", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "workable", data: BytesLike): Result;

  events: {};
}

export interface K3rIncreaseContract extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: K3rIncreaseContractInterface;

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
    counter(overrides?: CallOverrides): Promise<[BigNumber]>;

    interval(overrides?: CallOverrides): Promise<[BigNumber]>;

    lastTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    taskIdByUser(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    work(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    workable(overrides?: CallOverrides): Promise<[boolean]>;
  };

  counter(overrides?: CallOverrides): Promise<BigNumber>;

  interval(overrides?: CallOverrides): Promise<BigNumber>;

  lastTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  taskIdByUser(arg0: string, overrides?: CallOverrides): Promise<string>;

  work(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  workable(overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    counter(overrides?: CallOverrides): Promise<BigNumber>;

    interval(overrides?: CallOverrides): Promise<BigNumber>;

    lastTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    taskIdByUser(arg0: string, overrides?: CallOverrides): Promise<string>;

    work(overrides?: CallOverrides): Promise<void>;

    workable(overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    counter(overrides?: CallOverrides): Promise<BigNumber>;

    interval(overrides?: CallOverrides): Promise<BigNumber>;

    lastTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    taskIdByUser(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    work(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    workable(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    counter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    interval(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    taskIdByUser(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    work(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    workable(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}