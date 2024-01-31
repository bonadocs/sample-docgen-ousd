﻿﻿## ITimelock


### delay

```solidity
function delay() external view returns (uint256)
```







### GRACE_PERIOD

```solidity
function GRACE_PERIOD() external view returns (uint256)
```







### acceptAdmin

```solidity
function acceptAdmin() external
```







### queuedTransactions

```solidity
function queuedTransactions(bytes32 hash) external view returns (bool)
```







### queueTransaction

```solidity
function queueTransaction(address target, uint256 value, string signature, bytes data, uint256 eta) external returns (bytes32)
```







### cancelTransaction

```solidity
function cancelTransaction(address target, uint256 value, string signature, bytes data, uint256 eta) external
```







### executeTransaction

```solidity
function executeTransaction(address target, uint256 value, string signature, bytes data, uint256 eta) external payable returns (bytes)
```







