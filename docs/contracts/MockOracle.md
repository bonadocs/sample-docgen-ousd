﻿## MockOracle

Mock of both price Oracle and min max oracles


### prices

```solidity
mapping(bytes32 => uint256) prices
```

### pricesMinMax

```solidity
mapping(bytes32 => uint256[]) pricesMinMax
```

### ethMin

```solidity
uint256 ethMin
```

### ethMax

```solidity
uint256 ethMax
```

### price

```solidity
function price(string symbol) external view returns (uint256)
```



returns the asset price in USD, 6 decimal digits.
Compatible with the Open Price Feed.



### setPrice

```solidity
function setPrice(string symbol, uint256 _price) external
```



sets the price of the asset in USD, 6 decimal digits



### setEthPriceMinMax

```solidity
function setEthPriceMinMax(uint256 _min, uint256 _max) external
```



sets the min and max price of ETH in USD, 6 decimal digits



### setTokPriceMinMax

```solidity
function setTokPriceMinMax(string symbol, uint256 _min, uint256 _max) external
```



sets the prices Min Max for a specific symbol in ETH, 8 decimal digits



### priceMin

```solidity
function priceMin(string symbol) external view returns (uint256)
```



get the price of asset in ETH, 8 decimal digits.



### priceMax

```solidity
function priceMax(string symbol) external view returns (uint256)
```



get the price of asset in USD, 8 decimal digits.
Not needed for now



