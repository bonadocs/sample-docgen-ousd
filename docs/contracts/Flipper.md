﻿## Flipper


### MAXIMUM_PER_TRADE

```solidity
uint256 MAXIMUM_PER_TRADE
```

### dai

```solidity
contract IERC20 dai
```

### ousd

```solidity
contract OUSD ousd
```

### usdc

```solidity
contract IERC20 usdc
```

### usdt

```solidity
contract Tether usdt
```

### constructor

```solidity
constructor(address _dai, address _ousd, address _usdc, address _usdt) public
```







### buyOusdWithDai

```solidity
function buyOusdWithDai(uint256 amount) external
```

Purchase OUSD with Dai



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| amount | uint256 | Amount of OUSD to purchase, in 18 fixed decimals. |


### sellOusdForDai

```solidity
function sellOusdForDai(uint256 amount) external
```

Sell OUSD for Dai



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| amount | uint256 | Amount of OUSD to sell, in 18 fixed decimals. |


### buyOusdWithUsdc

```solidity
function buyOusdWithUsdc(uint256 amount) external
```

Purchase OUSD with USDC



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| amount | uint256 | Amount of OUSD to purchase, in 18 fixed decimals. |


### sellOusdForUsdc

```solidity
function sellOusdForUsdc(uint256 amount) external
```

Sell OUSD for USDC



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| amount | uint256 | Amount of OUSD to sell, in 18 fixed decimals. |


### buyOusdWithUsdt

```solidity
function buyOusdWithUsdt(uint256 amount) external
```

Purchase OUSD with USDT



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| amount | uint256 | Amount of OUSD to purchase, in 18 fixed decimals. |


### sellOusdForUsdt

```solidity
function sellOusdForUsdt(uint256 amount) external
```

Sell OUSD for USDT



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| amount | uint256 | Amount of OUSD to sell, in 18 fixed decimals. |


### rebaseOptIn

```solidity
function rebaseOptIn() external
```



Opting into yield reduces the gas cost per transfer by about 4K, since
ousd needs to do less accounting and one less storage write.



### withdraw

```solidity
function withdraw(address token, uint256 amount) external
```

Owner function to withdraw a specific amount of a token





### withdrawAll

```solidity
function withdrawAll() external
```

Owner function to withdraw all tradable tokens

Contract will not perform any swaps until liquidity is provided
again by transferring assets to the contract.



