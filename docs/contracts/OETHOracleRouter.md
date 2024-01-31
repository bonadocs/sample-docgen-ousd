﻿## OETHOracleRouter


### auraPriceFeed

```solidity
address auraPriceFeed
```

### constructor

```solidity
constructor(address _auraPriceFeed) public
```







### price

```solidity
function price(address asset) external view virtual returns (uint256)
```

Returns the total price in 18 digit units for a given asset.
        This implementation does not (!) do range checks as the
        parent OracleRouter does.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | address of the asset |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | uint256 unit price for 1 asset unit, in 18 decimal fixed |

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

