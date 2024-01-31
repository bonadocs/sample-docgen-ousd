﻿## AuraWETHPriceFeed


### PriceFeedPaused

```solidity
event PriceFeedPaused()
```

### PriceFeedUnpaused

```solidity
event PriceFeedUnpaused()
```

### ToleranceChanged

```solidity
event ToleranceChanged(uint256 oldTolerance, uint256 newTolerance)
```

### PriceFeedPausedError

```solidity
error PriceFeedPausedError()
```

### PriceFeedUnpausedError

```solidity
error PriceFeedUnpausedError()
```

### InvalidToleranceBps

```solidity
error InvalidToleranceBps()
```

### HighPriceVolatility

```solidity
error HighPriceVolatility(uint256 deviation)
```

### paused

```solidity
bool paused
```

### tolerance

```solidity
uint256 tolerance
```

### decimals

```solidity
uint8 decimals
```

### description

```solidity
string description
```

### version

```solidity
uint256 version
```

### auraOracleWeightedPool

```solidity
contract IOracleWeightedPool auraOracleWeightedPool
```

### constructor

```solidity
constructor(address _auraOracleWeightedPool, address _governor) public
```







### price

```solidity
function price() external view returns (int256)
```



Queries the OracleWeightedPool for TWAP of two intervals
(1h data from 5m ago and the recent 5m data) and ensures that
the price hasn't deviated too much and returns the most recent
TWAP price.


#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | int256 | price The price scaled to 18 decimals |

### _price

```solidity
function _price() internal view returns (int256)
```







### pause

```solidity
function pause() external
```

Pauses the price feed. Callable by Strategist as well.





### unpause

```solidity
function unpause() external
```

Unpauses the price feed. Only Governor can call it





### setTolerance

```solidity
function setTolerance(uint256 _tolerance) external
```

Set the max amount of tolerance acceptable between
two different price points.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _tolerance | uint256 | New tolerance value |


### latestRoundData

```solidity
function latestRoundData() external view returns (uint80, int256 answer, uint256, uint256 updatedAt, uint80)
```



This function exists to make the contract compatible
with AggregatorV3Interface (which OETHOracleRouter uses to
get the price).

The `answer` returned by this is same as what `price()` would return.

It doesn't return any data about rounds (since those doesn't exist).



### getRoundData

```solidity
function getRoundData(uint80) external pure returns (uint80, int256, uint256, uint256, uint80)
```



This function exists to make the contract compatible
with AggregatorV3Interface.

Always reverts since there're no round data in this contract.



