﻿## MockRewardPool


### pid

```solidity
uint256 pid
```

### stakingToken

```solidity
address stakingToken
```

### rewardTokenA

```solidity
address rewardTokenA
```

### rewardTokenB

```solidity
address rewardTokenB
```

### operator

```solidity
address operator
```

### rewards

```solidity
mapping(address => uint256) rewards
```

### constructor

```solidity
constructor(uint256 _pid, address _stakingToken, address _rewardTokenA, address _rewardTokenB, address _operator) public
```







### totalSupply

```solidity
function totalSupply() public view returns (uint256)
```







### balanceOf

```solidity
function balanceOf(address account) public view returns (uint256)
```







### stakeFor

```solidity
function stakeFor(address _for, uint256 _amount) public returns (bool)
```







### withdrawAndUnwrap

```solidity
function withdrawAndUnwrap(uint256 amount, bool claim) public returns (bool)
```







### withdrawAllAndUnwrap

```solidity
function withdrawAllAndUnwrap(bool claim) external
```







### getReward

```solidity
function getReward(address _account, bool _claimExtras) public returns (bool)
```







### getReward

```solidity
function getReward() public returns (bool)
```







