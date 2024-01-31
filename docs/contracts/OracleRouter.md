﻿## OracleRouter


### feedMetadata

```solidity
function feedMetadata(address asset) internal pure virtual returns (address feedAddress, uint256 maxStaleness)
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

