﻿## OracleRouterBase


### MIN_DRIFT

```solidity
uint256 MIN_DRIFT
```

### MAX_DRIFT

```solidity
uint256 MAX_DRIFT
```

### FIXED_PRICE

```solidity
address FIXED_PRICE
```

### STALENESS_BUFFER

```solidity
uint256 STALENESS_BUFFER
```

### decimalsCache

```solidity
mapping(address => uint8) decimalsCache
```

### feedMetadata

```solidity
function feedMetadata(address asset) internal view virtual returns (address feedAddress, uint256 maxStaleness)
```



The price feed contract to use for a particular asset along with
     maximum data staleness

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | address of the asset |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| feedAddress | address | address of the price feed for the asset |
| maxStaleness | uint256 | maximum acceptable data staleness duration |

### price

```solidity
function price(address asset) external view virtual returns (uint256)
```

Returns the total price in 18 digit unit for a given asset.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | address of the asset |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | uint256 unit price for 1 asset unit, in 18 decimal fixed |

### getDecimals

```solidity
function getDecimals(address _feed) internal view virtual returns (uint8)
```







### cacheDecimals

```solidity
function cacheDecimals(address asset) external returns (uint8)
```

Before an asset/feed price is fetches for the first time the
        decimals need to be cached. This is a gas optimization



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | address of the asset |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint8 | uint8 corresponding asset decimals |

### shouldBePegged

```solidity
function shouldBePegged(address _asset) internal view returns (bool)
```







