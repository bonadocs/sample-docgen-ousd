﻿## Types

_Common types and structs used in Moprho contracts._


### PositionType

```solidity
enum PositionType {
  SUPPLIERS_IN_P2P,
  SUPPLIERS_ON_POOL,
  BORROWERS_IN_P2P,
  BORROWERS_ON_POOL
}
```
### SupplyBalance

```solidity
struct SupplyBalance {
  uint256 inP2P;
  uint256 onPool;
}
```
### BorrowBalance

```solidity
struct BorrowBalance {
  uint256 inP2P;
  uint256 onPool;
}
```
### MaxGasForMatching

```solidity
struct MaxGasForMatching {
  uint64 supply;
  uint64 borrow;
  uint64 withdraw;
  uint64 repay;
}
```
### Delta

```solidity
struct Delta {
  uint256 p2pSupplyDelta;
  uint256 p2pBorrowDelta;
  uint256 p2pSupplyAmount;
  uint256 p2pBorrowAmount;
}
```
### AssetLiquidityData

```solidity
struct AssetLiquidityData {
  uint256 collateralValue;
  uint256 maxDebtValue;
  uint256 debtValue;
  uint256 underlyingPrice;
  uint256 collateralFactor;
}
```
### LiquidityData

```solidity
struct LiquidityData {
  uint256 collateralValue;
  uint256 maxDebtValue;
  uint256 debtValue;
}
```
### LastPoolIndexes

```solidity
struct LastPoolIndexes {
  uint32 lastUpdateBlockNumber;
  uint112 lastSupplyPoolIndex;
  uint112 lastBorrowPoolIndex;
}
```
### MarketParameters

```solidity
struct MarketParameters {
  uint16 reserveFactor;
  uint16 p2pIndexCursor;
}
```
### MarketStatus

```solidity
struct MarketStatus {
  bool isCreated;
  bool isPaused;
  bool isPartiallyPaused;
}
```
