﻿## MockCurveAbstractMetapool


### coins

```solidity
address[] coins
```

### balances

```solidity
uint256[2] balances
```

### add_liquidity

```solidity
function add_liquidity(uint256[2] _amounts, uint256 _minAmount) external returns (uint256 lpAmount)
```







### calc_withdraw_one_coin

```solidity
function calc_withdraw_one_coin(uint256 _amount, int128 _index) public view returns (uint256 lpAmount)
```







### remove_liquidity_one_coin

```solidity
function remove_liquidity_one_coin(uint256 _lpAmount, int128 _index, uint256 _minAmount) external returns (uint256 amount)
```







### get_virtual_price

```solidity
function get_virtual_price() external pure returns (uint256)
```







### remove_liquidity

```solidity
function remove_liquidity(uint256 _amount, uint256[2] _min_amounts) public returns (uint256[2] amounts)
```







### remove_liquidity_imbalance

```solidity
function remove_liquidity_imbalance(uint256[2] _amounts, uint256 _max_burned_tokens) public returns (uint256)
```







### remove_liquidity_imbalance

```solidity
function remove_liquidity_imbalance(uint256[2] _amounts, uint256 _max_burned_tokens, address _reveiver) public returns (uint256)
```







### _remove_liquidity_imbalance

```solidity
function _remove_liquidity_imbalance(uint256[2] _amounts, uint256 _max_burned_tokens, address _reveiver) internal returns (uint256 lpTokens)
```







### calc_token_amount

```solidity
function calc_token_amount(uint256[2] _amounts, bool) public view returns (uint256 lpTokens)
```







### fee

```solidity
function fee() external pure returns (uint256)
```

0.02% fee





### decimals

```solidity
function decimals() public pure returns (uint8)
```



Returns the number of decimals used to get its user representation.
For example, if `decimals` equals `2`, a balance of `505` tokens should
be displayed to a user as `5.05` (`505 / 10 ** 2`).

Tokens usually opt for a value of 18, imitating the relationship between
Ether and Wei. This is the value ERC20 uses, unless this function is
overridden;

NOTE: This information is only used for _display_ purposes: it in
no way affects any of the arithmetic of the contract, including
IERC20-balanceOf and IERC20-transfer.



### burnFrom

```solidity
function burnFrom(address from, uint256 value) public
```







