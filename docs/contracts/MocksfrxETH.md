﻿## MocksfrxETH


### frxETH

```solidity
address frxETH
```

### constructor

```solidity
constructor(address _frxETH) public
```







### setMockfrxETHAddress

```solidity
function setMockfrxETHAddress(address _frxETH) external
```







### deposit

```solidity
function deposit(uint256 assets, address receiver) external returns (uint256 shares)
```







### maxWithdraw

```solidity
function maxWithdraw(address owner) external view returns (uint256)
```







### setMaxWithdrawableBalance

```solidity
function setMaxWithdrawableBalance(address owner, uint256 balance) external
```







### redeem

```solidity
function redeem(uint256 shares, address receiver, address owner) external returns (uint256 assets)
```







### withdraw

```solidity
function withdraw(uint256 assets, address receiver, address owner) external returns (uint256 shares)
```







### submitAndDeposit

```solidity
function submitAndDeposit(address recipient) external payable returns (uint256 shares)
```







