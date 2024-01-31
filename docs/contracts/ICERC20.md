﻿## ICERC20

_Compound C Token interface
Documentation: https://compound.finance/developers/ctokens_


### mint

```solidity
function mint(uint256 mintAmount) external returns (uint256)
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
function redeem(uint256 redeemTokens) external returns (uint256)
```

Sender redeems cTokens in exchange for the underlying asset

Accrues interest whether or not the operation succeeds, unless reverted

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| redeemTokens | uint256 | The number of cTokens to redeem into underlying |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | uint 0=success, otherwise an error code. |

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
function balanceOfUnderlying(address owner) external returns (uint256)
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

### balanceOf

```solidity
function balanceOf(address owner) external view returns (uint256)
```

Get the token balance of the `owner`



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| owner | address | The address of the account to query |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The number of tokens owned by `owner` |

### supplyRatePerBlock

```solidity
function supplyRatePerBlock() external view returns (uint256)
```

Get the supply rate per block for supplying the token to Compound.





### comptroller

```solidity
function comptroller() external view returns (address)
```

Address of the Compound Comptroller.





