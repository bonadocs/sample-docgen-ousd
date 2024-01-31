﻿## MockStkAave


### COOLDOWN_SECONDS

```solidity
uint256 COOLDOWN_SECONDS
```

### UNSTAKE_WINDOW

```solidity
uint256 UNSTAKE_WINDOW
```

### STAKED_TOKEN

```solidity
address STAKED_TOKEN
```

### stakerRewardsToClaim

```solidity
mapping(address => uint256) stakerRewardsToClaim
```

### stakersCooldowns

```solidity
mapping(address => uint256) stakersCooldowns
```

### constructor

```solidity
constructor(address _stakedToken) public
```







### decimals

```solidity
function decimals() public pure returns (uint8)
```



Returns the number of decimals used to get its user representation.
For example, if `decimals` equals `2`, a balance of `505` tokens should
be displayed to a user as `5.05` (`505 / 10 ** 2`).

Tokens usually opt for a value of 18, imitating the relationship between
Ether and Wei. This is the value {ERC20} uses, unless this function is
overridden;

NOTE: This information is only used for _display_ purposes: it in
no way affects any of the arithmetic of the contract, including
{IERC20-balanceOf} and {IERC20-transfer}.



### setStakedToken

```solidity
function setStakedToken(address _stakedToken) external
```







### redeem

```solidity
function redeem(address to, uint256 amount) external
```



Redeems staked tokens, and stop earning rewards

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| to | address | Address to redeem to |
| amount | uint256 | Amount to redeem |


### cooldown

```solidity
function cooldown() external
```



Activates the cooldown period to unstake
- It can't be called if the user is not staking



### setCooldown

```solidity
function setCooldown(address account, uint256 _cooldown) external
```



Test helper function to allow changing the cooldown



