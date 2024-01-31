﻿## BurnableERC20

_Exposes the burn function of ERC20 for tests_


### burn

```solidity
function burn(uint256 value) public virtual returns (bool)
```



Function to burn tokens

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | uint256 | The amount of tokens to burn. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | A boolean that indicates if the operation was successful. |

### burnFrom

```solidity
function burnFrom(address account, uint256 value) public returns (bool)
```



Function to burn tokens from a specific account

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| account | address | The address with the tokens to burn. |
| value | uint256 | The amount of tokens to burn. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | A boolean that indicates if the operation was successful. |

