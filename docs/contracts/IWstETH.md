﻿## IWstETH


### getWstETHByStETH

```solidity
function getWstETHByStETH(uint256 _stETHAmount) external view returns (uint256)
```

Get amount of wstETH for a given amount of stETH



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _stETHAmount | uint256 | amount of stETH |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | Amount of wstETH for a given stETH amount |

### getStETHByWstETH

```solidity
function getStETHByWstETH(uint256 _wstETHAmount) external view returns (uint256)
```

Get amount of stETH for a given amount of wstETH



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _wstETHAmount | uint256 | amount of wstETH |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | Amount of stETH for a given wstETH amount |

### stEthPerToken

```solidity
function stEthPerToken() external view returns (uint256)
```

Get amount of stETH for a one wstETH




#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | Amount of stETH for 1 wstETH |

### tokensPerStEth

```solidity
function tokensPerStEth() external view returns (uint256)
```

Get amount of wstETH for a one stETH




#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | Amount of wstETH for a 1 stETH |

### wrap

```solidity
function wrap(uint256 _stETHAmount) external returns (uint256)
```

Exchanges stETH to wstETH

Requirements:
 - `_stETHAmount` must be non-zero
 - msg.sender must approve at least `_stETHAmount` stETH to this
   contract.
 - msg.sender must have at least `_stETHAmount` of stETH.
User should first approve _stETHAmount to the WstETH contract

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _stETHAmount | uint256 | amount of stETH to wrap in exchange for wstETH |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | Amount of wstETH user receives after wrap |

### unwrap

```solidity
function unwrap(uint256 _wstETHAmount) external returns (uint256)
```

Exchanges wstETH to stETH

Requirements:
 - `_wstETHAmount` must be non-zero
 - msg.sender must have at least `_wstETHAmount` wstETH.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _wstETHAmount | uint256 | amount of wstETH to uwrap in exchange for stETH |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | Amount of stETH user receives after unwrap |

