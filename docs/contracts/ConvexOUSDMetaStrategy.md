﻿## ConvexOUSDMetaStrategy


### constructor

```solidity
constructor(struct InitializableAbstractStrategy.BaseStrategyConfig _stratConfig) public
```







### _lpDepositAll

```solidity
function _lpDepositAll() internal
```







### _lpWithdraw

```solidity
function _lpWithdraw(uint256 num3CrvTokens) internal
```

Withdraw the specified amount of tokens from the gauge. And use all the resulting tokens
to remove liquidity from metapool



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| num3CrvTokens | uint256 | Number of 3CRV tokens to withdraw from metapool |


### _lpWithdrawAll

```solidity
function _lpWithdrawAll() internal
```







