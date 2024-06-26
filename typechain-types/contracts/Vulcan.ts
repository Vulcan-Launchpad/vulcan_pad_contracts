/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export declare namespace Vulcan {
  export type HISTORYStruct = {
    investor: AddressLike;
    contributor: AddressLike;
    amount: BigNumberish;
    timestamp: BigNumberish;
  };

  export type HISTORYStructOutput = [
    investor: string,
    contributor: string,
    amount: bigint,
    timestamp: bigint
  ] & {
    investor: string;
    contributor: string;
    amount: bigint;
    timestamp: bigint;
  };
}

export interface VulcanInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "contributions"
      | "contributors"
      | "creator"
      | "daoAddress"
      | "distribution"
      | "endTime"
      | "ethdByTokens"
      | "finish"
      | "fundsAddress"
      | "fundsRaised"
      | "getContributorAmount"
      | "getContributors"
      | "getHistory"
      | "getICOState"
      | "getInvestAmount"
      | "getInvestors"
      | "getTokenAmountForInvestor"
      | "hardcap"
      | "history"
      | "invest"
      | "investments"
      | "investors"
      | "lister"
      | "maxAmountToPurchase"
      | "minEthAvailable"
      | "owner"
      | "projectURI"
      | "refund"
      | "softcap"
      | "startTime"
      | "token"
      | "tokenInfo"
      | "tokensAvailable"
      | "tokensAvailableByEth"
      | "tokensByEth"
      | "tokensFullyCharged"
      | "totalCap"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "FeeDistributed" | "FundsRefunded" | "Invest"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "contributions",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "contributors",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "creator", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "daoAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "distribution",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "endTime", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ethdByTokens",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "finish", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "fundsAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fundsRaised",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getContributorAmount",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getContributors",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getHistory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getICOState",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getInvestAmount",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getInvestors",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenAmountForInvestor",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "hardcap", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "history",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "invest",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "investments",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "investors",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "lister", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "maxAmountToPurchase",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minEthAvailable",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "projectURI",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "refund", values?: undefined): string;
  encodeFunctionData(functionFragment: "softcap", values?: undefined): string;
  encodeFunctionData(functionFragment: "startTime", values?: undefined): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(functionFragment: "tokenInfo", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokensAvailable",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokensAvailableByEth",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokensByEth",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokensFullyCharged",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "totalCap", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "contributions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "contributors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "creator", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "daoAddress", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "distribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "endTime", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ethdByTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "finish", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fundsAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fundsRaised",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getContributorAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getContributors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getHistory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getICOState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getInvestAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getInvestors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenAmountForInvestor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hardcap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "history", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "invest", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "investments",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "investors", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lister", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maxAmountToPurchase",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minEthAvailable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "projectURI", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "refund", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "softcap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "startTime", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenInfo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokensAvailable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokensAvailableByEth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokensByEth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokensFullyCharged",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "totalCap", data: BytesLike): Result;
}

export namespace FeeDistributedEvent {
  export type InputTuple = [
    ico: AddressLike,
    distributor: AddressLike,
    fundsRaised: BigNumberish,
    daoFee: BigNumberish,
    listerFee: BigNumberish,
    creatorFee: BigNumberish,
    timestamp: BigNumberish
  ];
  export type OutputTuple = [
    ico: string,
    distributor: string,
    fundsRaised: bigint,
    daoFee: bigint,
    listerFee: bigint,
    creatorFee: bigint,
    timestamp: bigint
  ];
  export interface OutputObject {
    ico: string;
    distributor: string;
    fundsRaised: bigint;
    daoFee: bigint;
    listerFee: bigint;
    creatorFee: bigint;
    timestamp: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FundsRefundedEvent {
  export type InputTuple = [
    ico: AddressLike,
    caller: AddressLike,
    timestamp: BigNumberish
  ];
  export type OutputTuple = [ico: string, caller: string, timestamp: bigint];
  export interface OutputObject {
    ico: string;
    caller: string;
    timestamp: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InvestEvent {
  export type InputTuple = [
    ico: AddressLike,
    investor: AddressLike,
    contributor: AddressLike,
    amount: BigNumberish,
    timestamp: BigNumberish
  ];
  export type OutputTuple = [
    ico: string,
    investor: string,
    contributor: string,
    amount: bigint,
    timestamp: bigint
  ];
  export interface OutputObject {
    ico: string;
    investor: string;
    contributor: string;
    amount: bigint;
    timestamp: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Vulcan extends BaseContract {
  connect(runner?: ContractRunner | null): Vulcan;
  waitForDeployment(): Promise<this>;

  interface: VulcanInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  contributions: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  contributors: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  creator: TypedContractMethod<[], [string], "view">;

  daoAddress: TypedContractMethod<[], [string], "view">;

  distribution: TypedContractMethod<
    [],
    [
      [boolean, string, bigint] & {
        distributed: boolean;
        distributor: string;
        timestamp: bigint;
      }
    ],
    "view"
  >;

  endTime: TypedContractMethod<[], [bigint], "view">;

  ethdByTokens: TypedContractMethod<[amount_: BigNumberish], [bigint], "view">;

  finish: TypedContractMethod<[], [void], "payable">;

  fundsAddress: TypedContractMethod<[], [string], "view">;

  fundsRaised: TypedContractMethod<[], [bigint], "view">;

  getContributorAmount: TypedContractMethod<
    [from: AddressLike],
    [bigint],
    "view"
  >;

  getContributors: TypedContractMethod<[], [string[]], "view">;

  getHistory: TypedContractMethod<[], [Vulcan.HISTORYStructOutput[]], "view">;

  getICOState: TypedContractMethod<[], [bigint], "view">;

  getInvestAmount: TypedContractMethod<[from: AddressLike], [bigint], "view">;

  getInvestors: TypedContractMethod<[], [string[]], "view">;

  getTokenAmountForInvestor: TypedContractMethod<
    [from: AddressLike],
    [bigint],
    "view"
  >;

  hardcap: TypedContractMethod<[], [bigint], "view">;

  history: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, string, bigint, bigint] & {
        investor: string;
        contributor: string;
        amount: bigint;
        timestamp: bigint;
      }
    ],
    "view"
  >;

  invest: TypedContractMethod<
    [amount_: BigNumberish, contributor_: AddressLike],
    [void],
    "payable"
  >;

  investments: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  investors: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  lister: TypedContractMethod<[], [string], "view">;

  maxAmountToPurchase: TypedContractMethod<[], [bigint], "view">;

  minEthAvailable: TypedContractMethod<[], [bigint], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  projectURI: TypedContractMethod<[], [string], "view">;

  refund: TypedContractMethod<
    [],
    [
      [boolean, string, bigint] & {
        refunded: boolean;
        refunder: string;
        timestamp: bigint;
      }
    ],
    "view"
  >;

  softcap: TypedContractMethod<[], [bigint], "view">;

  startTime: TypedContractMethod<[], [bigint], "view">;

  token: TypedContractMethod<[], [string], "view">;

  tokenInfo: TypedContractMethod<
    [],
    [
      [string, string, bigint, string, bigint, bigint] & {
        name: string;
        symbol: string;
        totalSupply: bigint;
        tokenAddress: string;
        decimal: bigint;
        price: bigint;
      }
    ],
    "view"
  >;

  tokensAvailable: TypedContractMethod<[], [bigint], "view">;

  tokensAvailableByEth: TypedContractMethod<
    [eth_: BigNumberish],
    [bigint],
    "view"
  >;

  tokensByEth: TypedContractMethod<[amount_: BigNumberish], [bigint], "view">;

  tokensFullyCharged: TypedContractMethod<[], [boolean], "view">;

  totalCap: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "contributions"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "contributors"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "creator"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "daoAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "distribution"
  ): TypedContractMethod<
    [],
    [
      [boolean, string, bigint] & {
        distributed: boolean;
        distributor: string;
        timestamp: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "endTime"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "ethdByTokens"
  ): TypedContractMethod<[amount_: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "finish"
  ): TypedContractMethod<[], [void], "payable">;
  getFunction(
    nameOrSignature: "fundsAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "fundsRaised"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getContributorAmount"
  ): TypedContractMethod<[from: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getContributors"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "getHistory"
  ): TypedContractMethod<[], [Vulcan.HISTORYStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "getICOState"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getInvestAmount"
  ): TypedContractMethod<[from: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getInvestors"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "getTokenAmountForInvestor"
  ): TypedContractMethod<[from: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "hardcap"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "history"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, string, bigint, bigint] & {
        investor: string;
        contributor: string;
        amount: bigint;
        timestamp: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "invest"
  ): TypedContractMethod<
    [amount_: BigNumberish, contributor_: AddressLike],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "investments"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "investors"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "lister"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "maxAmountToPurchase"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "minEthAvailable"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "projectURI"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "refund"
  ): TypedContractMethod<
    [],
    [
      [boolean, string, bigint] & {
        refunded: boolean;
        refunder: string;
        timestamp: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "softcap"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "startTime"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "token"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "tokenInfo"
  ): TypedContractMethod<
    [],
    [
      [string, string, bigint, string, bigint, bigint] & {
        name: string;
        symbol: string;
        totalSupply: bigint;
        tokenAddress: string;
        decimal: bigint;
        price: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "tokensAvailable"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "tokensAvailableByEth"
  ): TypedContractMethod<[eth_: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "tokensByEth"
  ): TypedContractMethod<[amount_: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "tokensFullyCharged"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "totalCap"
  ): TypedContractMethod<[], [bigint], "view">;

  getEvent(
    key: "FeeDistributed"
  ): TypedContractEvent<
    FeeDistributedEvent.InputTuple,
    FeeDistributedEvent.OutputTuple,
    FeeDistributedEvent.OutputObject
  >;
  getEvent(
    key: "FundsRefunded"
  ): TypedContractEvent<
    FundsRefundedEvent.InputTuple,
    FundsRefundedEvent.OutputTuple,
    FundsRefundedEvent.OutputObject
  >;
  getEvent(
    key: "Invest"
  ): TypedContractEvent<
    InvestEvent.InputTuple,
    InvestEvent.OutputTuple,
    InvestEvent.OutputObject
  >;

  filters: {
    "FeeDistributed(address,address,uint256,uint256,uint256,uint256,uint256)": TypedContractEvent<
      FeeDistributedEvent.InputTuple,
      FeeDistributedEvent.OutputTuple,
      FeeDistributedEvent.OutputObject
    >;
    FeeDistributed: TypedContractEvent<
      FeeDistributedEvent.InputTuple,
      FeeDistributedEvent.OutputTuple,
      FeeDistributedEvent.OutputObject
    >;

    "FundsRefunded(address,address,uint256)": TypedContractEvent<
      FundsRefundedEvent.InputTuple,
      FundsRefundedEvent.OutputTuple,
      FundsRefundedEvent.OutputObject
    >;
    FundsRefunded: TypedContractEvent<
      FundsRefundedEvent.InputTuple,
      FundsRefundedEvent.OutputTuple,
      FundsRefundedEvent.OutputObject
    >;

    "Invest(address,address,address,uint256,uint256)": TypedContractEvent<
      InvestEvent.InputTuple,
      InvestEvent.OutputTuple,
      InvestEvent.OutputObject
    >;
    Invest: TypedContractEvent<
      InvestEvent.InputTuple,
      InvestEvent.OutputTuple,
      InvestEvent.OutputObject
    >;
  };
}
