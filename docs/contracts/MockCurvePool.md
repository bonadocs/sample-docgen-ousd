﻿## MockCurvePool


### coins

```solidity
address[] coins
```

### balances

```solidity
uint256[3] balances
```

### lpToken

```solidity
address lpToken
```

### slippage

```solidity
uint256 slippage
```

### constructor

```solidity
constructor(address[3] _coins, address _lpToken) public
```







### setCoins

```solidity
function setCoins(address[] _coins) external
```







### add_liquidity

```solidity
function add_liquidity(uint256[3] _amounts, uint256 _minAmount) external
```







### calc_withdraw_one_coin

```solidity
function calc_withdraw_one_coin(uint256 _amount, int128 _index) public view returns (uint256)
```







### remove_liquidity_one_coin

```solidity
function remove_liquidity_one_coin(uint256 _amount, int128 _index, uint256 _minAmount) external
```







### get_virtual_price

```solidity
function get_virtual_price() external pure returns (uint256)
```







### remove_liquidity

```solidity
function remove_liquidity(uint256 _lpAmount, uint256[3] _min_amounts) public
```







### remove_liquidity_imbalance

```solidity
function remove_liquidity_imbalance(uint256[3] _amounts, uint256 _max_burned_tokens) public
```







### calc_token_amount

```solidity
function calc_token_amount(uint256[3] _amounts, bool) public view returns (uint256 lpTokens)
```







### fee

```solidity
function fee() external pure returns (uint256)
```







### exchange

```solidity
function exchange(uint256 coin0, uint256 coin1, uint256 amountIn, uint256 minAmountOut) external returns (uint256 amountOut)
```







### setSlippage

```solidity
function setSlippage(uint256 _slippage) external
```







