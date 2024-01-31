﻿## MockBalancerVault


### slippage

```solidity
uint256 slippage
```

### transferDisabled

```solidity
bool transferDisabled
```

### slippageErrorDisabled

```solidity
bool slippageErrorDisabled
```

### swap

```solidity
function swap(struct IBalancerVault.SingleSwap singleSwap, struct IBalancerVault.FundManagement funds, uint256 minAmountOut, uint256) external returns (uint256 amountCalculated)
```







### setSlippage

```solidity
function setSlippage(uint256 _slippage) external
```







### getPoolTokenInfo

```solidity
function getPoolTokenInfo(bytes32 poolId, address token) external view returns (uint256, uint256, uint256, address)
```







### disableTransfer

```solidity
function disableTransfer() external
```







### disableSlippageError

```solidity
function disableSlippageError() external
```







