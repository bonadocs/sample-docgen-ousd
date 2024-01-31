﻿## EchidnaTestAccounting


### testOptInBalance

```solidity
function testOptInBalance(uint8 targetAcc) public
```

After opting in, balance should not increase. (Ok to lose rounding funds doing this)



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| targetAcc | uint8 | Account to opt in |


### testOptOutBalance

```solidity
function testOptOutBalance(uint8 targetAcc) public
```

After opting out, balance should remain the same



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| targetAcc | uint8 | Account to opt out |


### testOptInBalanceRounding

```solidity
function testOptInBalanceRounding(uint8 targetAcc) public
```

Account balance should remain the same after opting in minus rounding error



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| targetAcc | uint8 | Account to opt in |


### testOptInTotalSupply

```solidity
function testOptInTotalSupply(uint8 targetAcc) public
```

After opting in, total supply should remain the same



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| targetAcc | uint8 | Account to opt in |


### testOptOutTotalSupply

```solidity
function testOptOutTotalSupply(uint8 targetAcc) public
```

After opting out, total supply should remain the same



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| targetAcc | uint8 | Account to opt out |


### testAutoConvertBalance

```solidity
function testAutoConvertBalance(uint8 targetAcc) public
```

Account balance should remain the same when a smart contract auto converts



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| targetAcc | uint8 | Account to auto convert |


### testBalanceOfShouldNotRevert

```solidity
function testBalanceOfShouldNotRevert(uint8 targetAcc) public
```

The `balanceOf` function should never revert



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| targetAcc | uint8 | Account to check balance of |


