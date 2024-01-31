﻿## Governable

_Copy of the openzeppelin Ownable.sol contract with nomenclature change
     from owner to governor and renounce methods removed. Does not use
     Context.sol like Ownable.sol does for simplification._


### _NOT_ENTERED

```solidity
uint256 _NOT_ENTERED
```

### _ENTERED

```solidity
uint256 _ENTERED
```

### PendingGovernorshipTransfer

```solidity
event PendingGovernorshipTransfer(address previousGovernor, address newGovernor)
```

### GovernorshipTransferred

```solidity
event GovernorshipTransferred(address previousGovernor, address newGovernor)
```

### constructor

```solidity
constructor() public
```



Initializes the contract setting the deployer as the initial Governor.



### governor

```solidity
function governor() public view returns (address)
```

Returns the address of the current Governor.





### _governor

```solidity
function _governor() internal view returns (address governorOut)
```



Returns the address of the current Governor.



### _pendingGovernor

```solidity
function _pendingGovernor() internal view returns (address pendingGovernor)
```



Returns the address of the pending Governor.



### onlyGovernor

```solidity
modifier onlyGovernor()
```

_Throws if called by any account other than the Governor._

### isGovernor

```solidity
function isGovernor() public view returns (bool)
```

Returns true if the caller is the current Governor.





### _setGovernor

```solidity
function _setGovernor(address newGovernor) internal
```







### nonReentrant

```solidity
modifier nonReentrant()
```

_Prevents a contract from calling itself, directly or indirectly.
Calling a `nonReentrant` function from another `nonReentrant`
function is not supported. It is possible to prevent this from happening
by making the `nonReentrant` function external, and make it call a
`private` function that does the actual work._

### _setPendingGovernor

```solidity
function _setPendingGovernor(address newGovernor) internal
```







### transferGovernance

```solidity
function transferGovernance(address _newGovernor) external
```

Transfers Governance of the contract to a new account (`newGovernor`).
Can only be called by the current Governor. Must be claimed for this to complete



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _newGovernor | address | Address of the new Governor |


### claimGovernance

```solidity
function claimGovernance() external
```

Claim Governance of the contract to a new account (`newGovernor`).
Can only be called by the new Governor.





### _changeGovernor

```solidity
function _changeGovernor(address _newGovernor) internal
```



Change Governance of the contract to a new account (`newGovernor`).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _newGovernor | address | Address of the new Governor |


