﻿## MockBooster


### PoolInfo

```solidity
struct PoolInfo {
  address lptoken;
  address token;
  address crvRewards;
}
```
### minter

```solidity
address minter
```

### crv

```solidity
address crv
```

### cvx

```solidity
address cvx
```

### poolInfo

```solidity
mapping(uint256 => struct MockBooster.PoolInfo) poolInfo
```

### constructor

```solidity
constructor(address _rewardsMinter, address _crv, address _cvx) public
```







### setPool

```solidity
function setPool(uint256 pid, address _lpToken) external returns (address rewards)
```







### deposit

```solidity
function deposit(uint256 _pid, uint256 _amount, bool _stake) public returns (bool)
```







### depositAll

```solidity
function depositAll(uint256 _pid, bool _stake) external returns (bool)
```







### _withdraw

```solidity
function _withdraw(uint256 _pid, uint256 _amount, address _from, address _to) internal
```







### withdraw

```solidity
function withdraw(uint256 _pid, uint256 _amount) public returns (bool)
```







### withdrawAll

```solidity
function withdrawAll(uint256 _pid) public returns (bool)
```







### withdrawTo

```solidity
function withdrawTo(uint256 _pid, uint256 _amount, address _to) external returns (bool)
```







### rewardClaimed

```solidity
function rewardClaimed(uint256 _pid, address _address, uint256 _amount) external returns (bool)
```







