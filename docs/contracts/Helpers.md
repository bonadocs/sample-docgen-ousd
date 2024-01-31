﻿## Helpers


### getSymbol

```solidity
function getSymbol(address _token) internal view returns (string)
```

Fetch the `symbol()` from an ERC20 token

Grabs the `symbol()` from a contract

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _token | address | Address of the ERC20 token |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | string | string Symbol of the ERC20 token |

### getDecimals

```solidity
function getDecimals(address _token) internal view returns (uint256)
```

Fetch the `decimals()` from an ERC20 token

Grabs the `decimals()` from a contract and fails if
     the decimal value does not live within a certain range

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _token | address | Address of the ERC20 token |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | uint256 Decimals of the ERC20 token |

