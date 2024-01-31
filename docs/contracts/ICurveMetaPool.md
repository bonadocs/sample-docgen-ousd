﻿## ICurveMetaPool


### add_liquidity

```solidity
function add_liquidity(uint256[2] amounts, uint256 min_mint_amount) external returns (uint256)
```







### get_virtual_price

```solidity
function get_virtual_price() external view returns (uint256)
```







### remove_liquidity

```solidity
function remove_liquidity(uint256 _amount, uint256[2] min_amounts) external returns (uint256[2])
```







### remove_liquidity_one_coin

```solidity
function remove_liquidity_one_coin(uint256 _token_amount, int128 i, uint256 min_amount) external returns (uint256)
```







### remove_liquidity_imbalance

```solidity
function remove_liquidity_imbalance(uint256[2] amounts, uint256 max_burn_amount) external returns (uint256)
```







### calc_withdraw_one_coin

```solidity
function calc_withdraw_one_coin(uint256 _token_amount, int128 i) external view returns (uint256)
```







### balances

```solidity
function balances(uint256 i) external view returns (uint256)
```







### calc_token_amount

```solidity
function calc_token_amount(uint256[2] amounts, bool deposit) external view returns (uint256)
```







### base_pool

```solidity
function base_pool() external view returns (address)
```







### fee

```solidity
function fee() external view returns (uint256)
```







### coins

```solidity
function coins(uint256 i) external view returns (address)
```







### exchange

```solidity
function exchange(int128 i, int128 j, uint256 dx, uint256 min_dy) external returns (uint256)
```







### get_dy

```solidity
function get_dy(int128 i, int128 j, uint256 dx) external view returns (uint256)
```







