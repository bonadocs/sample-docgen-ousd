﻿## IEthUsdOracle


### ethUsdPrice

```solidity
function ethUsdPrice() external view returns (uint256)
```

Returns ETH price in USD.




#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | Price in USD with 6 decimal digits. |

### tokUsdPrice

```solidity
function tokUsdPrice(string symbol) external view returns (uint256)
```

Returns token price in USD.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| symbol | string |  |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | Price in USD with 6 decimal digits. |

### tokEthPrice

```solidity
function tokEthPrice(string symbol) external view returns (uint256)
```

Returns the asset price in ETH.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| symbol | string |  |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | Price in ETH with 8 decimal digits. |

