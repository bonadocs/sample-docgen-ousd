﻿## FraxETHStrategy


### weth

```solidity
address weth
```

### fraxETHMinter

```solidity
contract IFraxETHMinter fraxETHMinter
```

### constructor

```solidity
constructor(struct InitializableAbstractStrategy.BaseStrategyConfig _baseConfig, address _assetToken) public
```





#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _baseConfig | struct InitializableAbstractStrategy.BaseStrategyConfig | Base strategy config with platformAddress (sfrxETH) and vaultAddress (OETHVaultProxy) |
| _assetToken | address | Address of the ERC-4626 asset token (frxETH) |


### initialize

```solidity
function initialize() external
```







### _deposit

```solidity
function _deposit(address _asset, uint256 _amount) internal
```



Deposit assets by converting them to shares

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | Address of asset to deposit |
| _amount | uint256 | Amount of asset to deposit |


### supportsAsset

```solidity
function supportsAsset(address _asset) public view returns (bool)
```



Retuns bool indicating whether asset is supported by strategy

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | Address of the asset |


### checkBalance

```solidity
function checkBalance(address _asset) external view virtual returns (uint256 balance)
```



Get the total asset value held in the platform

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | Address of the asset |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| balance | uint256 | Total value of the asset in the platform |

### depositAll

```solidity
function depositAll() external virtual
```



Deposit the entire balance of assetToken to gain shareToken



### receive

```solidity
receive() external payable
```



Accept ETH



