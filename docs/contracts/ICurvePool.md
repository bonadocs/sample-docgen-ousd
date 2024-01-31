﻿## ICurvePool


### get_virtual_price

```solidity
function get_virtual_price() external view returns (uint256)
```







### add_liquidity

```solidity
function add_liquidity(uint256[3] _amounts, uint256 _min) external
```







### balances

```solidity
function balances(uint256) external view returns (uint256)
```







### calc_token_amount

```solidity
function calc_token_amount(uint256[3] _amounts, bool _deposit) external returns (uint256)
```







### fee

```solidity
function fee() external view returns (uint256)
```







### remove_liquidity_one_coin

```solidity
function remove_liquidity_one_coin(uint256 _amount, int128 _index, uint256 _minAmount) external
```







### remove_liquidity

```solidity
function remove_liquidity(uint256 _amount, uint256[3] _minWithdrawAmounts) external
```







### calc_withdraw_one_coin

```solidity
function calc_withdraw_one_coin(uint256 _amount, int128 _index) external view returns (uint256)
```







### exchange

```solidity
function exchange(uint256 i, uint256 j, uint256 dx, uint256 min_dy) external returns (uint256)
```







### coins

```solidity
function coins(uint256 _index) external view returns (address)
```







### remove_liquidity_imbalance

```solidity
function remove_liquidity_imbalance(uint256[3] _amounts, uint256 maxBurnAmount) external
```







