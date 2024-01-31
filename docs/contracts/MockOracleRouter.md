﻿## MockOracleRouter


### FeedMetadata

```solidity
struct FeedMetadata {
  address feedAddress;
  uint256 maxStaleness;
}
```
### assetToFeedMetadata

```solidity
mapping(address => struct MockOracleRouter.FeedMetadata) assetToFeedMetadata
```

### setFeed

```solidity
function setFeed(address _asset, address _feed, uint256 _maxStaleness) external
```







### getDecimals

```solidity
function getDecimals(address _feed) internal view returns (uint8)
```







### feedMetadata

```solidity
function feedMetadata(address asset) internal view returns (address feedAddress, uint256 maxStaleness)
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

