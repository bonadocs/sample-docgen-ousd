﻿## EchidnaTestMintBurn


### testMintZeroBalance

```solidity
function testMintZeroBalance(uint8 targetAcc) public
```

Minting 0 tokens should not affect account balance



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| targetAcc | uint8 | Account to mint to |


### testBurnZeroBalance

```solidity
function testBurnZeroBalance(uint8 targetAcc) public
```

Burning 0 tokens should not affect account balance



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| targetAcc | uint8 | Account to burn from |


### testMintBalance

```solidity
function testMintBalance(uint8 targetAcc, uint256 amount) public
```

Minting tokens must increase the account balance by at least amount



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| targetAcc | uint8 | Account to mint to |
| amount | uint256 | Amount to mint |


### testBurnBalance

```solidity
function testBurnBalance(uint8 targetAcc, uint256 amount) public
```

Burning tokens must decrease the account balance by at least amount



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| targetAcc | uint8 | Account to burn from |
| amount | uint256 | Amount to burn |


### testMintBalanceRounding

```solidity
function testMintBalanceRounding(uint8 targetAcc, uint256 amount) public
```

Minting tokens should not increase the account balance by less than rounding error above amount



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| targetAcc | uint8 | Account to mint to |
| amount | uint256 | Amount to mint |


### testBurnAllBalanceToZero

```solidity
function testBurnAllBalanceToZero(uint8 targetAcc) public
```

A burn of an account balance must result in a zero balance



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| targetAcc | uint8 | Account to burn from |


### testBurnAllBalanceShouldNotRevert

```solidity
function testBurnAllBalanceShouldNotRevert(uint8 targetAcc) public
```

You should always be able to burn an account's balance



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| targetAcc | uint8 | Account to burn from |


