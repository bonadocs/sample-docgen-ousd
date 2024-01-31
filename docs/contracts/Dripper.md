﻿## Dripper


### Drip

```solidity
struct Drip {
  uint64 lastCollect;
  uint192 perBlock;
}
```
### vault

```solidity
address vault
```

### token

```solidity
address token
```

### dripDuration

```solidity
uint256 dripDuration
```

### drip

```solidity
struct Dripper.Drip drip
```

### constructor

```solidity
constructor(address _vault, address _token) public
```







### availableFunds

```solidity
function availableFunds() external view returns (uint256)
```






#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The amount that would be sent if a collect was called |

### collect

```solidity
function collect() external
```

Collect all dripped funds and send to vault.
 Recalculate new drip rate.





### collectAndRebase

```solidity
function collectAndRebase() external
```

Collect all dripped funds, send to vault, recalculate new drip
 rate, and rebase OUSD.





### setDripDuration

```solidity
function setDripDuration(uint256 _durationSeconds) external
```



Change the drip duration. Governor only.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _durationSeconds | uint256 | the number of seconds to drip out the entire  balance over if no collects were called during that time. |


### transferToken

```solidity
function transferToken(address _asset, uint256 _amount) external
```



Transfer out ERC20 tokens held by the contract. Governor only.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | ERC20 token address |
| _amount | uint256 | amount to transfer |


### _availableFunds

```solidity
function _availableFunds(uint256 _balance, struct Dripper.Drip _drip) internal view returns (uint256)
```



Calculate available funds by taking the lower of either the
 currently dripped out funds or the balance available.
 Uses passed in parameters to calculate with for gas savings.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _balance | uint256 | current balance in contract |
| _drip | struct Dripper.Drip | current drip parameters |


### _collect

```solidity
function _collect() internal
```



Sends the currently dripped funds to be vault, and sets
 the new drip rate based on the new balance.



