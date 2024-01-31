﻿## ILens


### MAX_BASIS_POINTS

```solidity
function MAX_BASIS_POINTS() external view returns (uint256)
```

STORAGE ///





### WAD

```solidity
function WAD() external view returns (uint256)
```







### morpho

```solidity
function morpho() external view returns (contract IMorpho)
```







### comptroller

```solidity
function comptroller() external view returns (contract IComptroller)
```







### getTotalSupply

```solidity
function getTotalSupply() external view returns (uint256 p2pSupplyAmount, uint256 poolSupplyAmount, uint256 totalSupplyAmount)
```

GENERAL ///





### getTotalBorrow

```solidity
function getTotalBorrow() external view returns (uint256 p2pBorrowAmount, uint256 poolBorrowAmount, uint256 totalBorrowAmount)
```







### isMarketCreated

```solidity
function isMarketCreated(address _poolToken) external view returns (bool)
```

MARKETS ///





### isMarketCreatedAndNotPaused

```solidity
function isMarketCreatedAndNotPaused(address _poolToken) external view returns (bool)
```







### isMarketCreatedAndNotPausedNorPartiallyPaused

```solidity
function isMarketCreatedAndNotPausedNorPartiallyPaused(address _poolToken) external view returns (bool)
```







### getAllMarkets

```solidity
function getAllMarkets() external view returns (address[] marketsCreated_)
```







### getMainMarketData

```solidity
function getMainMarketData(address _poolToken) external view returns (uint256 avgSupplyRatePerBlock, uint256 avgBorrowRatePerBlock, uint256 p2pSupplyAmount, uint256 p2pBorrowAmount, uint256 poolSupplyAmount, uint256 poolBorrowAmount)
```







### getAdvancedMarketData

```solidity
function getAdvancedMarketData(address _poolToken) external view returns (uint256 p2pSupplyIndex, uint256 p2pBorrowIndex, uint256 poolSupplyIndex, uint256 poolBorrowIndex, uint32 lastUpdateBlockNumber, uint256 p2pSupplyDelta, uint256 p2pBorrowDelta)
```







### getMarketConfiguration

```solidity
function getMarketConfiguration(address _poolToken) external view returns (address underlying, bool isCreated, bool p2pDisabled, bool isPaused, bool isPartiallyPaused, uint16 reserveFactor, uint16 p2pIndexCursor, uint256 collateralFactor)
```







### getTotalMarketSupply

```solidity
function getTotalMarketSupply(address _poolToken) external view returns (uint256 p2pSupplyAmount, uint256 poolSupplyAmount)
```







### getTotalMarketBorrow

```solidity
function getTotalMarketBorrow(address _poolToken) external view returns (uint256 p2pBorrowAmount, uint256 poolBorrowAmount)
```







### getCurrentP2PSupplyIndex

```solidity
function getCurrentP2PSupplyIndex(address _poolToken) external view returns (uint256)
```

INDEXES ///





### getCurrentP2PBorrowIndex

```solidity
function getCurrentP2PBorrowIndex(address _poolToken) external view returns (uint256)
```







### getCurrentPoolIndexes

```solidity
function getCurrentPoolIndexes(address _poolToken) external view returns (uint256 currentPoolSupplyIndex, uint256 currentPoolBorrowIndex)
```







### getIndexes

```solidity
function getIndexes(address _poolToken, bool _computeUpdatedIndexes) external view returns (uint256 p2pSupplyIndex, uint256 p2pBorrowIndex, uint256 poolSupplyIndex, uint256 poolBorrowIndex)
```







### getEnteredMarkets

```solidity
function getEnteredMarkets(address _user) external view returns (address[] enteredMarkets)
```

USERS ///





### getUserHealthFactor

```solidity
function getUserHealthFactor(address _user, address[] _updatedMarkets) external view returns (uint256)
```







### getUserBalanceStates

```solidity
function getUserBalanceStates(address _user, address[] _updatedMarkets) external view returns (uint256 collateralValue, uint256 debtValue, uint256 maxDebtValue)
```







### getCurrentSupplyBalanceInOf

```solidity
function getCurrentSupplyBalanceInOf(address _poolToken, address _user) external view returns (uint256 balanceOnPool, uint256 balanceInP2P, uint256 totalBalance)
```







### getCurrentBorrowBalanceInOf

```solidity
function getCurrentBorrowBalanceInOf(address _poolToken, address _user) external view returns (uint256 balanceOnPool, uint256 balanceInP2P, uint256 totalBalance)
```







### getUserMaxCapacitiesForAsset

```solidity
function getUserMaxCapacitiesForAsset(address _user, address _poolToken) external view returns (uint256 withdrawable, uint256 borrowable)
```







### getUserHypotheticalBalanceStates

```solidity
function getUserHypotheticalBalanceStates(address _user, address _poolToken, uint256 _withdrawnAmount, uint256 _borrowedAmount) external view returns (uint256 debtValue, uint256 maxDebtValue)
```







### getUserLiquidityDataForAsset

```solidity
function getUserLiquidityDataForAsset(address _user, address _poolToken, bool _computeUpdatedIndexes, contract ICompoundOracle _oracle) external view returns (struct Types.AssetLiquidityData assetData)
```







### isLiquidatable

```solidity
function isLiquidatable(address _user, address[] _updatedMarkets) external view returns (bool)
```







### computeLiquidationRepayAmount

```solidity
function computeLiquidationRepayAmount(address _user, address _poolTokenBorrowed, address _poolTokenCollateral, address[] _updatedMarkets) external view returns (uint256 toRepay)
```







### getAverageSupplyRatePerBlock

```solidity
function getAverageSupplyRatePerBlock(address _poolToken) external view returns (uint256 avgSupplyRatePerBlock, uint256 p2pSupplyAmount, uint256 poolSupplyAmount)
```

RATES ///





### getAverageBorrowRatePerBlock

```solidity
function getAverageBorrowRatePerBlock(address _poolToken) external view returns (uint256 avgBorrowRatePerBlock, uint256 p2pBorrowAmount, uint256 poolBorrowAmount)
```







### getNextUserSupplyRatePerBlock

```solidity
function getNextUserSupplyRatePerBlock(address _poolToken, address _user, uint256 _amount) external view returns (uint256 nextSupplyRatePerBlock, uint256 balanceOnPool, uint256 balanceInP2P, uint256 totalBalance)
```







### getNextUserBorrowRatePerBlock

```solidity
function getNextUserBorrowRatePerBlock(address _poolToken, address _user, uint256 _amount) external view returns (uint256 nextBorrowRatePerBlock, uint256 balanceOnPool, uint256 balanceInP2P, uint256 totalBalance)
```







### getCurrentUserSupplyRatePerBlock

```solidity
function getCurrentUserSupplyRatePerBlock(address _poolToken, address _user) external view returns (uint256)
```







### getCurrentUserBorrowRatePerBlock

```solidity
function getCurrentUserBorrowRatePerBlock(address _poolToken, address _user) external view returns (uint256)
```







### getRatesPerBlock

```solidity
function getRatesPerBlock(address _poolToken) external view returns (uint256 p2pSupplyRate, uint256 p2pBorrowRate, uint256 poolSupplyRate, uint256 poolBorrowRate)
```







### getUserUnclaimedRewards

```solidity
function getUserUnclaimedRewards(address[] _poolTokens, address _user) external view returns (uint256 unclaimedRewards)
```

REWARDS ///





### getAccruedSupplierComp

```solidity
function getAccruedSupplierComp(address _supplier, address _poolToken, uint256 _balance) external view returns (uint256)
```







### getAccruedBorrowerComp

```solidity
function getAccruedBorrowerComp(address _borrower, address _poolToken, uint256 _balance) external view returns (uint256)
```







### getCurrentCompSupplyIndex

```solidity
function getCurrentCompSupplyIndex(address _poolToken) external view returns (uint256)
```







### getCurrentCompBorrowIndex

```solidity
function getCurrentCompBorrowIndex(address _poolToken) external view returns (uint256)
```







