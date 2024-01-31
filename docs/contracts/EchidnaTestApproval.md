﻿## EchidnaTestApproval


### testTransferFromShouldNotRevert

```solidity
function testTransferFromShouldNotRevert(uint8 authorizedAcc, uint8 fromAcc, uint8 toAcc, uint256 amount) public
```

Performing `transferFrom` with an amount inside the allowance should not revert



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| authorizedAcc | uint8 | The account that is authorized to transfer |
| fromAcc | uint8 | The account that is transferring |
| toAcc | uint8 | The account that is receiving |
| amount | uint256 | The amount to transfer |


### testTransferFromShouldRevert

```solidity
function testTransferFromShouldRevert(uint8 authorizedAcc, uint8 fromAcc, uint8 toAcc, uint256 amount) public
```

Performing `transferFrom` with an amount outside the allowance should revert



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| authorizedAcc | uint8 | The account that is authorized to transfer |
| fromAcc | uint8 | The account that is transferring |
| toAcc | uint8 | The account that is receiving |
| amount | uint256 | The amount to transfer |


### testApprove

```solidity
function testApprove(uint8 ownerAcc, uint8 spenderAcc, uint256 amount) public
```

Approving an amount should update the allowance and overwrite any previous allowance



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ownerAcc | uint8 | The account that is approving |
| spenderAcc | uint8 | The account that is being approved |
| amount | uint256 | The amount to approve |


### testIncreaseAllowance

```solidity
function testIncreaseAllowance(uint8 ownerAcc, uint8 spenderAcc, uint256 amount) public
```

Increasing the allowance should raise it by the amount provided



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ownerAcc | uint8 | The account that is approving |
| spenderAcc | uint8 | The account that is being approved |
| amount | uint256 | The amount to approve |


### testDecreaseAllowance

```solidity
function testDecreaseAllowance(uint8 ownerAcc, uint8 spenderAcc, uint256 amount) public
```

Decreasing the allowance should lower it by the amount provided



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ownerAcc | uint8 | The account that is approving |
| spenderAcc | uint8 | The account that is being approved |
| amount | uint256 | The amount to approve |


