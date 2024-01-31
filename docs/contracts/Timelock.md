﻿## Timelock


### NewAdmin

```solidity
event NewAdmin(address newAdmin)
```

### NewPendingAdmin

```solidity
event NewPendingAdmin(address newPendingAdmin)
```

### NewDelay

```solidity
event NewDelay(uint256 newDelay)
```

### CancelTransaction

```solidity
event CancelTransaction(bytes32 txHash, address target, string signature, bytes data, uint256 eta)
```

### ExecuteTransaction

```solidity
event ExecuteTransaction(bytes32 txHash, address target, string signature, bytes data, uint256 eta)
```

### QueueTransaction

```solidity
event QueueTransaction(bytes32 txHash, address target, string signature, bytes data, uint256 eta)
```

### GRACE_PERIOD

```solidity
uint256 GRACE_PERIOD
```

### MINIMUM_DELAY

```solidity
uint256 MINIMUM_DELAY
```

### MAXIMUM_DELAY

```solidity
uint256 MAXIMUM_DELAY
```

### admin

```solidity
address admin
```

### pendingAdmin

```solidity
address pendingAdmin
```

### delay

```solidity
uint256 delay
```

### queuedTransactions

```solidity
mapping(bytes32 => bool) queuedTransactions
```

### onlyAdmin

```solidity
modifier onlyAdmin()
```

_Throws if called by any account other than the Admin._

### constructor

```solidity
constructor(address admin_, uint256 delay_) public
```







### setDelay

```solidity
function setDelay(uint256 delay_) public
```







### acceptAdmin

```solidity
function acceptAdmin() public
```







### setPendingAdmin

```solidity
function setPendingAdmin(address pendingAdmin_) public
```







### queueTransaction

```solidity
function queueTransaction(address target, string signature, bytes data, uint256 eta) internal returns (bytes32)
```







### cancelTransaction

```solidity
function cancelTransaction(address target, string signature, bytes data, uint256 eta) internal
```







### _getRevertMsg

```solidity
function _getRevertMsg(bytes _returnData) internal pure returns (string)
```







### executeTransaction

```solidity
function executeTransaction(address target, string signature, bytes data, uint256 eta) internal returns (bytes)
```







### getBlockTimestamp

```solidity
function getBlockTimestamp() internal view returns (uint256)
```







### pauseCapital

```solidity
function pauseCapital(address target) external
```







### unpauseCapital

```solidity
function unpauseCapital(address target) external
```







