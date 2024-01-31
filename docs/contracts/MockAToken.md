﻿## MockAToken


### lendingPool

```solidity
address lendingPool
```

### underlyingToken

```solidity
contract IERC20 underlyingToken
```

### constructor

```solidity
constructor(address _lendingPool, string _name, string _symbol, contract IERC20 _underlyingToken) public
```







### decimals

```solidity
function decimals() public view returns (uint8)
```



Returns the number of decimals used to get its user representation.
For example, if `decimals` equals `2`, a balance of `505` tokens should
be displayed to a user as `5.05` (`505 / 10 ** 2`).

Tokens usually opt for a value of 18, imitating the relationship between
Ether and Wei. This is the value {ERC20} uses, unless this function is
overridden;

NOTE: This information is only used for _display_ purposes: it in
no way affects any of the arithmetic of the contract, including
{IERC20-balanceOf} and {IERC20-transfer}.



### poolRedeem

```solidity
function poolRedeem(uint256 _amount, address _to) external
```







