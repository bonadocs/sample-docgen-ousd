﻿## Generalized4626Strategy


### shareToken

```solidity
contract IERC20 shareToken
```

### assetToken

```solidity
contract IERC20 assetToken
```

### constructor

```solidity
constructor(struct InitializableAbstractStrategy.BaseStrategyConfig _baseConfig, address _assetToken) public
```





#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _baseConfig | struct InitializableAbstractStrategy.BaseStrategyConfig | Base strategy config with platformAddress (ERC-4626 Vault contract), eg sfrxETH or sDAI, and vaultAddress (OToken Vault contract), eg VaultProxy or OETHVaultProxy |
| _assetToken | address | Address of the ERC-4626 asset token. eg frxETH or DAI |


### initialize

```solidity
function initialize() external virtual
```







### deposit

```solidity
function deposit(address _asset, uint256 _amount) external
```



Deposit assets by converting them to shares

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | Address of asset to deposit |
| _amount | uint256 | Amount of asset to deposit |


### _deposit

```solidity
function _deposit(address _asset, uint256 _amount) internal virtual
```



Deposit assets by converting them to shares

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | Address of asset to deposit |
| _amount | uint256 | Amount of asset to deposit |


### depositAll

```solidity
function depositAll() external virtual
```



Deposit the entire balance of assetToken to gain shareToken



### withdraw

```solidity
function withdraw(address _recipient, address _asset, uint256 _amount) external virtual
```



Withdraw asset by burning shares

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _recipient | address | Address to receive withdrawn asset |
| _asset | address | Address of asset to withdraw |
| _amount | uint256 | Amount of asset to withdraw |


### _abstractSetPToken

```solidity
function _abstractSetPToken(address, address) internal virtual
```



Internal method to respond to the addition of new asset / share tokens



### withdrawAll

```solidity
function withdrawAll() external virtual
```



Remove all assets from platform and send them to Vault contract.



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

### safeApproveAllTokens

```solidity
function safeApproveAllTokens() external
```

Governor approves the the ERC-4626 Tokenized Vault to spend the asset.





### _approveBase

```solidity
function _approveBase() internal virtual
```







### supportsAsset

```solidity
function supportsAsset(address _asset) public view virtual returns (bool)
```



Retuns bool indicating whether asset is supported by strategy

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | Address of the asset |


### setPTokenAddress

```solidity
function setPTokenAddress(address, address) external
```

is not supported for this strategy as the asset and
ERC-4626 Tokenized Vault are set at deploy time.

If the ERC-4626 Tokenized Vault needed to be changed, a new
contract would need to be deployed and the proxy updated.



### removePToken

```solidity
function removePToken(uint256) external
```

is not supported for this strategy as the asset and
ERC-4626 Tokenized Vault are set at deploy time.

If the ERC-4626 Tokenized Vault needed to be changed, a new
contract would need to be deployed and the proxy updated.



