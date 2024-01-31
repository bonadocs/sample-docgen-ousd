﻿## MockChainlinkOracleFeed


### price

```solidity
int256 price
```

### numDecimals

```solidity
uint8 numDecimals
```

### constructor

```solidity
constructor(int256 _price, uint8 _decimals) public
```







### decimals

```solidity
function decimals() external view returns (uint8)
```







### description

```solidity
function description() external pure returns (string)
```







### version

```solidity
function version() external pure returns (uint256)
```







### setPrice

```solidity
function setPrice(int256 _price) public
```







### setDecimals

```solidity
function setDecimals(uint8 _decimals) public
```







### getRoundData

```solidity
function getRoundData(uint80 _roundId) external view returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)
```







### latestRoundData

```solidity
function latestRoundData() external view returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)
```







