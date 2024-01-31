﻿## ISfrxETH


### Approval

```solidity
event Approval(address owner, address spender, uint256 amount)
```

### Deposit

```solidity
event Deposit(address caller, address owner, uint256 assets, uint256 shares)
```

### NewRewardsCycle

```solidity
event NewRewardsCycle(uint32 cycleEnd, uint256 rewardAmount)
```

### Transfer

```solidity
event Transfer(address from, address to, uint256 amount)
```

### Withdraw

```solidity
event Withdraw(address caller, address receiver, address owner, uint256 assets, uint256 shares)
```

### DOMAIN_SEPARATOR

```solidity
function DOMAIN_SEPARATOR() external view returns (bytes32)
```







### allowance

```solidity
function allowance(address, address) external view returns (uint256)
```







### approve

```solidity
function approve(address spender, uint256 amount) external returns (bool)
```







### asset

```solidity
function asset() external view returns (address)
```







### balanceOf

```solidity
function balanceOf(address) external view returns (uint256)
```







### convertToAssets

```solidity
function convertToAssets(uint256 shares) external view returns (uint256)
```







### convertToShares

```solidity
function convertToShares(uint256 assets) external view returns (uint256)
```







### decimals

```solidity
function decimals() external view returns (uint8)
```







### deposit

```solidity
function deposit(uint256 assets, address receiver) external returns (uint256 shares)
```







### depositWithSignature

```solidity
function depositWithSignature(uint256 assets, address receiver, uint256 deadline, bool approveMax, uint8 v, bytes32 r, bytes32 s) external returns (uint256 shares)
```







### lastRewardAmount

```solidity
function lastRewardAmount() external view returns (uint192)
```







### lastSync

```solidity
function lastSync() external view returns (uint32)
```







### maxDeposit

```solidity
function maxDeposit(address) external view returns (uint256)
```







### maxMint

```solidity
function maxMint(address) external view returns (uint256)
```







### maxRedeem

```solidity
function maxRedeem(address owner) external view returns (uint256)
```







### maxWithdraw

```solidity
function maxWithdraw(address owner) external view returns (uint256)
```







### mint

```solidity
function mint(uint256 shares, address receiver) external returns (uint256 assets)
```







### name

```solidity
function name() external view returns (string)
```







### nonces

```solidity
function nonces(address) external view returns (uint256)
```







### permit

```solidity
function permit(address owner, address spender, uint256 value, uint256 deadline, uint8 v, bytes32 r, bytes32 s) external
```







### previewDeposit

```solidity
function previewDeposit(uint256 assets) external view returns (uint256)
```







### previewMint

```solidity
function previewMint(uint256 shares) external view returns (uint256)
```







### previewRedeem

```solidity
function previewRedeem(uint256 shares) external view returns (uint256)
```







### previewWithdraw

```solidity
function previewWithdraw(uint256 assets) external view returns (uint256)
```







### pricePerShare

```solidity
function pricePerShare() external view returns (uint256)
```







### redeem

```solidity
function redeem(uint256 shares, address receiver, address owner) external returns (uint256 assets)
```







### rewardsCycleEnd

```solidity
function rewardsCycleEnd() external view returns (uint32)
```







### rewardsCycleLength

```solidity
function rewardsCycleLength() external view returns (uint32)
```







### symbol

```solidity
function symbol() external view returns (string)
```







### syncRewards

```solidity
function syncRewards() external
```







### totalAssets

```solidity
function totalAssets() external view returns (uint256)
```







### totalSupply

```solidity
function totalSupply() external view returns (uint256)
```







### transfer

```solidity
function transfer(address to, uint256 amount) external returns (bool)
```







### transferFrom

```solidity
function transferFrom(address from, address to, uint256 amount) external returns (bool)
```







### withdraw

```solidity
function withdraw(uint256 assets, address receiver, address owner) external returns (uint256 shares)
```







