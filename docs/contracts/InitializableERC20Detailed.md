﻿## InitializableERC20Detailed

_Optional functions from the ERC20 standard.
Converted from openzeppelin/contracts/token/ERC20/ERC20Detailed.sol_


### _initialize

```solidity
function _initialize(string nameArg, string symbolArg, uint8 decimalsArg) internal
```

To avoid variable shadowing appended `Arg` after arguments name.

Sets the values for `name`, `symbol`, and `decimals`. All three of
these values are immutable: they can only be set once during
construction.



### name

```solidity
function name() public view returns (string)
```

Returns the name of the token.





### symbol

```solidity
function symbol() public view returns (string)
```

Returns the symbol of the token, usually a shorter version of the
name.





### decimals

```solidity
function decimals() public view returns (uint8)
```

Returns the number of decimals used to get its user representation.
For example, if `decimals` equals `2`, a balance of `505` tokens should
be displayed to a user as `5,05` (`505 / 10 ** 2`).

Tokens usually opt for a value of 18, imitating the relationship between
Ether and Wei.

NOTE: This information is only used for _display_ purposes: it in
no way affects any of the arithmetic of the contract, including
{IERC20-balanceOf} and {IERC20-transfer}.





