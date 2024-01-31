﻿## Swapper1InchV5


### SWAP_ROUTER

```solidity
address SWAP_ROUTER
```

1Inch router contract to give allowance to perform swaps

### SWAP_SELECTOR

```solidity
bytes4 SWAP_SELECTOR
```

### UNISWAP_SELECTOR

```solidity
bytes4 UNISWAP_SELECTOR
```

### UNISWAPV3_SELECTOR

```solidity
bytes4 UNISWAPV3_SELECTOR
```

### swap

```solidity
function swap(address _fromAsset, address _toAsset, uint256 _fromAssetAmount, uint256 _minToAssetAmount, bytes _data) external returns (uint256 toAssetAmount)
```

Strategist swaps assets sitting in the contract of the `assetHolder`.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _fromAsset | address | The token address of the asset being sold by the vault. |
| _toAsset | address | The token address of the asset being purchased by the vault. |
| _fromAssetAmount | uint256 | The amount of assets being sold by the vault. |
| _minToAssetAmount | uint256 | The minimum amount of assets to be purchased. |
| _data | bytes | RLP encoded executer address and bytes data. This is re-encoded tx.data from 1Inch swap API |


### approveAssets

```solidity
function approveAssets(address[] _assets) external
```

Approve assets for swapping.

unlimited approval is used as no tokens sit in this contract outside a transaction.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _assets | address[] | Array of token addresses to approve. |


