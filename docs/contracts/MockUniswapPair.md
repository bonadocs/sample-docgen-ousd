﻿## MockUniswapPair


### tok0

```solidity
address tok0
```

### tok1

```solidity
address tok1
```

### reserve0

```solidity
uint112 reserve0
```

### reserve1

```solidity
uint112 reserve1
```

### blockTimestampLast

```solidity
uint256 blockTimestampLast
```

### hasSynced

```solidity
bool hasSynced
```

### constructor

```solidity
constructor(address _token0, address _token1, uint112 _reserve0, uint112 _reserve1) public
```







### token0

```solidity
function token0() external view returns (address)
```







### token1

```solidity
function token1() external view returns (address)
```







### getReserves

```solidity
function getReserves() external view returns (uint112, uint112, uint32)
```







### setReserves

```solidity
function setReserves(uint112 _reserve0, uint112 _reserve1) public
```







### price0CumulativeLast

```solidity
function price0CumulativeLast() external view returns (uint256)
```







### price1CumulativeLast

```solidity
function price1CumulativeLast() external view returns (uint256)
```







### sync

```solidity
function sync() external
```







### checkHasSynced

```solidity
function checkHasSynced() external view
```







