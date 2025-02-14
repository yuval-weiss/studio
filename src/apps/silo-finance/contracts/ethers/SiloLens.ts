/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export interface SiloLensInterface extends utils.Interface {
  functions: {
    'balanceOfUnderlying(uint256,address,address)': FunctionFragment;
    'borrowAPY(address,address)': FunctionFragment;
    'borrowShare(address,address,address)': FunctionFragment;
    'calcFee(uint256)': FunctionFragment;
    'calculateBorrowValue(address,address,address)': FunctionFragment;
    'calculateCollateralValue(address,address,address)': FunctionFragment;
    'collateralBalanceOfUnderlying(address,address,address)': FunctionFragment;
    'collateralOnlyDeposits(address,address)': FunctionFragment;
    'debtBalanceOfUnderlying(address,address,address)': FunctionFragment;
    'depositAPY(address,address)': FunctionFragment;
    'getBorrowAmount(address,address,address,uint256)': FunctionFragment;
    'getModel(address,address)': FunctionFragment;
    'getUserLTV(address,address)': FunctionFragment;
    'getUserLiquidationThreshold(address,address)': FunctionFragment;
    'getUserMaximumLTV(address,address)': FunctionFragment;
    'getUtilization(address,address)': FunctionFragment;
    'hasPosition(address,address)': FunctionFragment;
    'inDebt(address,address)': FunctionFragment;
    'lensPing()': FunctionFragment;
    'liquidity(address,address)': FunctionFragment;
    'protocolFees(address,address)': FunctionFragment;
    'siloRepository()': FunctionFragment;
    'totalBorrowAmount(address,address)': FunctionFragment;
    'totalBorrowAmountWithInterest(address,address)': FunctionFragment;
    'totalBorrowShare(address,address)': FunctionFragment;
    'totalDeposits(address,address)': FunctionFragment;
    'totalDepositsWithInterest(address,address)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'balanceOfUnderlying'
      | 'borrowAPY'
      | 'borrowShare'
      | 'calcFee'
      | 'calculateBorrowValue'
      | 'calculateCollateralValue'
      | 'collateralBalanceOfUnderlying'
      | 'collateralOnlyDeposits'
      | 'debtBalanceOfUnderlying'
      | 'depositAPY'
      | 'getBorrowAmount'
      | 'getModel'
      | 'getUserLTV'
      | 'getUserLiquidationThreshold'
      | 'getUserMaximumLTV'
      | 'getUtilization'
      | 'hasPosition'
      | 'inDebt'
      | 'lensPing'
      | 'liquidity'
      | 'protocolFees'
      | 'siloRepository'
      | 'totalBorrowAmount'
      | 'totalBorrowAmountWithInterest'
      | 'totalBorrowShare'
      | 'totalDeposits'
      | 'totalDepositsWithInterest',
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'balanceOfUnderlying',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(functionFragment: 'borrowAPY', values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'borrowShare',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(functionFragment: 'calcFee', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(
    functionFragment: 'calculateBorrowValue',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'calculateCollateralValue',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'collateralBalanceOfUnderlying',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'collateralOnlyDeposits',
    values: [PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'debtBalanceOfUnderlying',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(functionFragment: 'depositAPY', values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'getBorrowAmount',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'getModel', values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'getUserLTV', values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'getUserLiquidationThreshold',
    values: [PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'getUserMaximumLTV',
    values: [PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'getUtilization',
    values: [PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(functionFragment: 'hasPosition', values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'inDebt', values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'lensPing', values?: undefined): string;
  encodeFunctionData(functionFragment: 'liquidity', values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'protocolFees',
    values: [PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(functionFragment: 'siloRepository', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'totalBorrowAmount',
    values: [PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'totalBorrowAmountWithInterest',
    values: [PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'totalBorrowShare',
    values: [PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'totalDeposits',
    values: [PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'totalDepositsWithInterest',
    values: [PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;

  decodeFunctionResult(functionFragment: 'balanceOfUnderlying', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'borrowAPY', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'borrowShare', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'calcFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'calculateBorrowValue', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'calculateCollateralValue', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'collateralBalanceOfUnderlying', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'collateralOnlyDeposits', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'debtBalanceOfUnderlying', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'depositAPY', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getBorrowAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getModel', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getUserLTV', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getUserLiquidationThreshold', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getUserMaximumLTV', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getUtilization', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'hasPosition', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'inDebt', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lensPing', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'liquidity', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'protocolFees', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'siloRepository', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalBorrowAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalBorrowAmountWithInterest', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalBorrowShare', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalDeposits', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalDepositsWithInterest', data: BytesLike): Result;

  events: {};
}

export interface SiloLens extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SiloLensInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    balanceOfUnderlying(
      _assetTotalDeposits: PromiseOrValue<BigNumberish>,
      _shareToken: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    borrowAPY(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    borrowShare(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    calcFee(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;

    calculateBorrowValue(
      _silo: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    calculateCollateralValue(
      _silo: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    collateralBalanceOfUnderlying(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    collateralOnlyDeposits(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    debtBalanceOfUnderlying(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    depositAPY(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    getBorrowAmount(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    getModel(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[string]>;

    getUserLTV(
      _silo: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { userLTV: BigNumber }>;

    getUserLiquidationThreshold(
      _silo: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { liquidationThreshold: BigNumber }>;

    getUserMaximumLTV(
      _silo: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { maximumLTV: BigNumber }>;

    getUtilization(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    hasPosition(
      _silo: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;

    inDebt(_silo: PromiseOrValue<string>, _user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;

    lensPing(overrides?: CallOverrides): Promise<[string]>;

    liquidity(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    protocolFees(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    siloRepository(overrides?: CallOverrides): Promise<[string]>;

    totalBorrowAmount(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    totalBorrowAmountWithInterest(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { _totalBorrowAmount: BigNumber }>;

    totalBorrowShare(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    totalDeposits(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    totalDepositsWithInterest(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { _totalDeposits: BigNumber }>;
  };

  balanceOfUnderlying(
    _assetTotalDeposits: PromiseOrValue<BigNumberish>,
    _shareToken: PromiseOrValue<string>,
    _user: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  borrowAPY(
    _silo: PromiseOrValue<string>,
    _asset: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  borrowShare(
    _silo: PromiseOrValue<string>,
    _asset: PromiseOrValue<string>,
    _user: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  calcFee(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

  calculateBorrowValue(
    _silo: PromiseOrValue<string>,
    _user: PromiseOrValue<string>,
    _asset: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  calculateCollateralValue(
    _silo: PromiseOrValue<string>,
    _user: PromiseOrValue<string>,
    _asset: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  collateralBalanceOfUnderlying(
    _silo: PromiseOrValue<string>,
    _asset: PromiseOrValue<string>,
    _user: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  collateralOnlyDeposits(
    _silo: PromiseOrValue<string>,
    _asset: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  debtBalanceOfUnderlying(
    _silo: PromiseOrValue<string>,
    _asset: PromiseOrValue<string>,
    _user: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  depositAPY(
    _silo: PromiseOrValue<string>,
    _asset: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  getBorrowAmount(
    _silo: PromiseOrValue<string>,
    _asset: PromiseOrValue<string>,
    _user: PromiseOrValue<string>,
    _timestamp: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  getModel(_silo: PromiseOrValue<string>, _asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;

  getUserLTV(
    _silo: PromiseOrValue<string>,
    _user: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  getUserLiquidationThreshold(
    _silo: PromiseOrValue<string>,
    _user: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  getUserMaximumLTV(
    _silo: PromiseOrValue<string>,
    _user: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  getUtilization(
    _silo: PromiseOrValue<string>,
    _asset: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  hasPosition(
    _silo: PromiseOrValue<string>,
    _user: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  inDebt(_silo: PromiseOrValue<string>, _user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

  lensPing(overrides?: CallOverrides): Promise<string>;

  liquidity(
    _silo: PromiseOrValue<string>,
    _asset: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  protocolFees(
    _silo: PromiseOrValue<string>,
    _asset: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  siloRepository(overrides?: CallOverrides): Promise<string>;

  totalBorrowAmount(
    _silo: PromiseOrValue<string>,
    _asset: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  totalBorrowAmountWithInterest(
    _silo: PromiseOrValue<string>,
    _asset: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  totalBorrowShare(
    _silo: PromiseOrValue<string>,
    _asset: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  totalDeposits(
    _silo: PromiseOrValue<string>,
    _asset: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  totalDepositsWithInterest(
    _silo: PromiseOrValue<string>,
    _asset: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  callStatic: {
    balanceOfUnderlying(
      _assetTotalDeposits: PromiseOrValue<BigNumberish>,
      _shareToken: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    borrowAPY(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    borrowShare(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    calcFee(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    calculateBorrowValue(
      _silo: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    calculateCollateralValue(
      _silo: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    collateralBalanceOfUnderlying(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    collateralOnlyDeposits(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    debtBalanceOfUnderlying(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    depositAPY(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getBorrowAmount(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getModel(_silo: PromiseOrValue<string>, _asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;

    getUserLTV(
      _silo: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getUserLiquidationThreshold(
      _silo: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getUserMaximumLTV(
      _silo: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getUtilization(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    hasPosition(
      _silo: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    inDebt(_silo: PromiseOrValue<string>, _user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

    lensPing(overrides?: CallOverrides): Promise<string>;

    liquidity(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    protocolFees(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    siloRepository(overrides?: CallOverrides): Promise<string>;

    totalBorrowAmount(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    totalBorrowAmountWithInterest(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    totalBorrowShare(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    totalDeposits(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    totalDepositsWithInterest(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    balanceOfUnderlying(
      _assetTotalDeposits: PromiseOrValue<BigNumberish>,
      _shareToken: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    borrowAPY(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    borrowShare(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    calcFee(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    calculateBorrowValue(
      _silo: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    calculateCollateralValue(
      _silo: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    collateralBalanceOfUnderlying(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    collateralOnlyDeposits(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    debtBalanceOfUnderlying(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    depositAPY(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getBorrowAmount(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getModel(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getUserLTV(
      _silo: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getUserLiquidationThreshold(
      _silo: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getUserMaximumLTV(
      _silo: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getUtilization(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    hasPosition(
      _silo: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    inDebt(_silo: PromiseOrValue<string>, _user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    lensPing(overrides?: CallOverrides): Promise<BigNumber>;

    liquidity(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    protocolFees(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    siloRepository(overrides?: CallOverrides): Promise<BigNumber>;

    totalBorrowAmount(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    totalBorrowAmountWithInterest(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    totalBorrowShare(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    totalDeposits(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    totalDepositsWithInterest(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceOfUnderlying(
      _assetTotalDeposits: PromiseOrValue<BigNumberish>,
      _shareToken: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    borrowAPY(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    borrowShare(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    calcFee(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    calculateBorrowValue(
      _silo: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    calculateCollateralValue(
      _silo: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    collateralBalanceOfUnderlying(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    collateralOnlyDeposits(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    debtBalanceOfUnderlying(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    depositAPY(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getBorrowAmount(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getModel(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getUserLTV(
      _silo: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getUserLiquidationThreshold(
      _silo: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getUserMaximumLTV(
      _silo: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getUtilization(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    hasPosition(
      _silo: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    inDebt(
      _silo: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    lensPing(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    liquidity(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    protocolFees(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    siloRepository(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalBorrowAmount(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    totalBorrowAmountWithInterest(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    totalBorrowShare(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    totalDeposits(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    totalDepositsWithInterest(
      _silo: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}
