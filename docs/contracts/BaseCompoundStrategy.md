﻿## BaseCompoundStrategy


### supportsAsset

```solidity
function supportsAsset(address _asset) public view returns (bool)
```



Retuns bool indicating whether asset is supported by strategy

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | Address of the asset |


### _getCTokenFor

```solidity
function _getCTokenFor(address _asset) internal view returns (contract ICERC20)
```



Get the cToken wrapped in the ICERC20 interface for this asset.
     Fails if the pToken doesn't exist in our mappings.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | Address of the asset |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | contract ICERC20 | Corresponding cToken to this asset |

### _convertUnderlyingToCToken

```solidity
function _convertUnderlyingToCToken(contract ICERC20 _cToken, uint256 _underlying) internal view returns (uint256 amount)
```



Converts an underlying amount into cToken amount
     cTokenAmt = (underlying * 1e18) / exchangeRate

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _cToken | contract ICERC20 | cToken for which to change |
| _underlying | uint256 | Amount of underlying to convert |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| amount | uint256 | Equivalent amount of cTokens |

