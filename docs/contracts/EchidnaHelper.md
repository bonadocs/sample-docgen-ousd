﻿## EchidnaHelper


### mint

```solidity
function mint(uint8 toAcc, uint256 amount) public returns (uint256)
```

Mint tokens to an account



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| toAcc | uint8 | Account to mint to |
| amount | uint256 | Amount to mint |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | Amount minted (in case of capped mint with modulo) |

### burn

```solidity
function burn(uint8 fromAcc, uint256 amount) public
```

Burn tokens from an account



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| fromAcc | uint8 | Account to burn from |
| amount | uint256 | Amount to burn |


### changeSupply

```solidity
function changeSupply(uint256 amount) public
```

Change the total supply of OUSD (rebase)



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| amount | uint256 | New total supply |


### transfer

```solidity
function transfer(uint8 fromAcc, uint8 toAcc, uint256 amount) public
```

Transfer tokens between accounts



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| fromAcc | uint8 | Account to transfer from |
| toAcc | uint8 | Account to transfer to |
| amount | uint256 | Amount to transfer |


### transferFrom

```solidity
function transferFrom(uint8 authorizedAcc, uint8 fromAcc, uint8 toAcc, uint256 amount) public
```

Transfer approved tokens between accounts



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| authorizedAcc | uint8 | Account that is authorized to transfer |
| fromAcc | uint8 | Account to transfer from |
| toAcc | uint8 | Account to transfer to |
| amount | uint256 | Amount to transfer |


### optIn

```solidity
function optIn(uint8 targetAcc) public
```

Opt in to rebasing



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| targetAcc | uint8 | Account to opt in |


### optOut

```solidity
function optOut(uint8 targetAcc) public
```

Opt out of rebasing



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| targetAcc | uint8 | Account to opt out |


### approve

```solidity
function approve(uint8 ownerAcc, uint8 spenderAcc, uint256 amount) public
```

Approve an account to spend OUSD



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ownerAcc | uint8 | Account that owns the OUSD |
| spenderAcc | uint8 | Account that is approved to spend the OUSD |
| amount | uint256 | Amount to approve |


### increaseAllowance

```solidity
function increaseAllowance(uint8 ownerAcc, uint8 spenderAcc, uint256 amount) public
```

Increase the allowance of an account to spend OUSD



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ownerAcc | uint8 | Account that owns the OUSD |
| spenderAcc | uint8 | Account that is approved to spend the OUSD |
| amount | uint256 | Amount to increase the allowance by |


### decreaseAllowance

```solidity
function decreaseAllowance(uint8 ownerAcc, uint8 spenderAcc, uint256 amount) public
```

Decrease the allowance of an account to spend OUSD



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ownerAcc | uint8 | Account that owns the OUSD |
| spenderAcc | uint8 | Account that is approved to spend the OUSD |
| amount | uint256 | Amount to decrease the allowance by |


### getTotalBalance

```solidity
function getTotalBalance() public view returns (uint256 total)
```

Get the sum of all OUSD balances




#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| total | uint256 | Total balance |

### getTotalNonRebasingBalance

```solidity
function getTotalNonRebasingBalance() public returns (uint256 total)
```

Get the sum of all non-rebasing OUSD balances




#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| total | uint256 | Total balance |

