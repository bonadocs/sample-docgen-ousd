﻿## IWETH9


### Approval

```solidity
event Approval(address src, address guy, uint256 wad)
```

### Deposit

```solidity
event Deposit(address dst, uint256 wad)
```

### Transfer

```solidity
event Transfer(address src, address dst, uint256 wad)
```

### Withdrawal

```solidity
event Withdrawal(address src, uint256 wad)
```

### allowance

```solidity
function allowance(address, address) external view returns (uint256)
```







### approve

```solidity
function approve(address guy, uint256 wad) external returns (bool)
```







### balanceOf

```solidity
function balanceOf(address) external view returns (uint256)
```







### decimals

```solidity
function decimals() external view returns (uint8)
```







### deposit

```solidity
function deposit() external payable
```







### name

```solidity
function name() external view returns (string)
```







### symbol

```solidity
function symbol() external view returns (string)
```







### totalSupply

```solidity
function totalSupply() external view returns (uint256)
```







### transfer

```solidity
function transfer(address dst, uint256 wad) external returns (bool)
```







### transferFrom

```solidity
function transferFrom(address src, address dst, uint256 wad) external returns (bool)
```







### withdraw

```solidity
function withdraw(uint256 wad) external
```







