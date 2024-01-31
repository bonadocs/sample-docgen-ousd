﻿## EchidnaTestTransfer


### testTransferBalanceReceivedLess

```solidity
function testTransferBalanceReceivedLess(uint8 fromAcc, uint8 toAcc, uint256 amount) public
```

The receiving account's balance after a transfer must not increase by
less than the amount transferred



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| fromAcc | uint8 | Account to transfer from |
| toAcc | uint8 | Account to transfer to |
| amount | uint256 | Amount to transfer |


### testTransferBalanceReceivedMore

```solidity
function testTransferBalanceReceivedMore(uint8 fromAcc, uint8 toAcc, uint256 amount) public
```

The receiving account's balance after a transfer must not
increase by more than the amount transferred



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| fromAcc | uint8 | Account to transfer from |
| toAcc | uint8 | Account to transfer to |
| amount | uint256 | Amount to transfer |


### testTransferBalanceSentLess

```solidity
function testTransferBalanceSentLess(uint8 fromAcc, uint8 toAcc, uint256 amount) public
```

The sending account's balance after a transfer must not
decrease by less than the amount transferred



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| fromAcc | uint8 | Account to transfer from |
| toAcc | uint8 | Account to transfer to |
| amount | uint256 | Amount to transfer |


### testTransferBalanceSentMore

```solidity
function testTransferBalanceSentMore(uint8 fromAcc, uint8 toAcc, uint256 amount) public
```

The sending account's balance after a transfer must not
decrease by more than the amount transferred



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| fromAcc | uint8 | Account to transfer from |
| toAcc | uint8 | Account to transfer to |
| amount | uint256 | Amount to transfer |


### testTransferBalanceReceivedLessRounding

```solidity
function testTransferBalanceReceivedLessRounding(uint8 fromAcc, uint8 toAcc, uint256 amount) public
```

The receiving account's balance after a transfer must not
increase by less than the amount transferred (minus rounding error)



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| fromAcc | uint8 | Account to transfer from |
| toAcc | uint8 | Account to transfer to |
| amount | uint256 | Amount to transfer |


### testTransferBalanceSentLessRounding

```solidity
function testTransferBalanceSentLessRounding(uint8 fromAcc, uint8 toAcc, uint256 amount) public
```

The sending account's balance after a transfer must
not decrease by less than the amount transferred (minus rounding error)



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| fromAcc | uint8 | Account to transfer from |
| toAcc | uint8 | Account to transfer to |
| amount | uint256 | Amount to transfer |


### testTransferWithinBalanceDoesNotRevert

```solidity
function testTransferWithinBalanceDoesNotRevert(uint8 fromAcc, uint8 toAcc, uint256 amount) public
```

An account should always be able to successfully transfer
an amount within its balance.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| fromAcc | uint8 | Account to transfer from |
| toAcc | uint8 | Account to transfer to |
| amount | uint256 | Amount to transfer |


### testTransferExceedingBalanceReverts

```solidity
function testTransferExceedingBalanceReverts(uint8 fromAcc, uint8 toAcc, uint256 amount) public
```

An account should never be able to successfully transfer
an amount greater than their balance.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| fromAcc | uint8 | Account to transfer from |
| toAcc | uint8 | Account to transfer to |
| amount | uint256 | Amount to transfer |


### testTransferSelf

```solidity
function testTransferSelf(uint8 targetAcc, uint256 amount) public
```

A transfer to the same account should not change that account's balance



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| targetAcc | uint8 | Account to transfer to |
| amount | uint256 | Amount to transfer |


### testTransferToZeroAddress

```solidity
function testTransferToZeroAddress(uint8 fromAcc, uint256 amount) public
```

Transfers to the zero account revert



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| fromAcc | uint8 | Account to transfer from |
| amount | uint256 | Amount to transfer |


