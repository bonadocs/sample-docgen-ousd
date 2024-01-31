﻿## ISwapper


### swap

```solidity
function swap(address fromAsset, address toAsset, uint256 fromAssetAmount, uint256 minToAssetAmmount, bytes data) external returns (uint256 toAssetAmount)
```





#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| fromAsset | address | The token address of the asset being sold. |
| toAsset | address | The token address of the asset being purchased. |
| fromAssetAmount | uint256 | The amount of assets being sold. |
| minToAssetAmmount | uint256 | The minimum amount of assets to be purchased. |
| data | bytes | tx.data returned from 1Inch's /v5.0/1/swap API |


