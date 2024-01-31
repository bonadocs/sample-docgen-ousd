﻿## MockCToken


### underlyingToken

```solidity
contract IERC20 underlyingToken
```

### exchangeRate

```solidity
uint256 exchangeRate
```

### comptroller

```solidity
address comptroller
```

Address of the Compound Comptroller.

### constructor

```solidity
constructor(contract ERC20 _underlyingToken, address _comptroller) public
```







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



### mint

```solidity
function mint(uint256 mintAmount) public returns (uint256)
```

The mint function transfers an asset into the protocol, which begins accumulating
interest based on the current Supply Rate for the asset. The user receives a quantity of
cTokens equal to the underlying tokens supplied, divided by the current Exchange Rate.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| mintAmount | uint256 | The amount of the asset to be supplied, in units of the underlying asset. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | 0 on success, otherwise an Error codes |

### redeem

```solidity
function redeem(uint256 redeemAmount) external returns (uint256)
```







### redeemUnderlying

```solidity
function redeemUnderlying(uint256 redeemAmount) external returns (uint256)
```

The redeem underlying function converts cTokens into a specified quantity of the underlying
asset, and returns them to the user. The amount of cTokens redeemed is equal to the quantity of
underlying tokens received, divided by the current Exchange Rate. The amount redeemed must be less
than the user's Account Liquidity and the market's available liquidity.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| redeemAmount | uint256 | The amount of underlying to be redeemed. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | 0 on success, otherwise an error code. |

### balanceOfUnderlying

```solidity
function balanceOfUnderlying(address owner) external view returns (uint256)
```

The user's underlying balance, representing their assets in the protocol, is equal to
the user's cToken balance multiplied by the Exchange Rate.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| owner | address | The account to get the underlying balance of. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The amount of underlying currently owned by the account. |

### balanceOf

```solidity
function balanceOf(address owner) public view returns (uint256)
```







### updateExchangeRate

```solidity
function updateExchangeRate() internal view returns (uint256 newExchangeRate)
```







### exchangeRateStored

```solidity
function exchangeRateStored() external view returns (uint256)
```

Calculates the exchange rate from the underlying to the CToken

This function does not accrue interest before calculating the exchange rate


#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | Calculated exchange rate scaled by 1e18 |

### supplyRatePerBlock

```solidity
function supplyRatePerBlock() external pure returns (uint256)
```

Get the supply rate per block for supplying the token to Compound.





