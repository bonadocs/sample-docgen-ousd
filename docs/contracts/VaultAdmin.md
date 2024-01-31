﻿## VaultAdmin


### onlyGovernorOrStrategist

```solidity
modifier onlyGovernorOrStrategist()
```

_Verifies that the caller is the Governor or Strategist._

### setPriceProvider

```solidity
function setPriceProvider(address _priceProvider) external
```

Set address of price provider.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _priceProvider | address | Address of price provider |


### setRedeemFeeBps

```solidity
function setRedeemFeeBps(uint256 _redeemFeeBps) external
```

Set a fee in basis points to be charged for a redeem.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _redeemFeeBps | uint256 | Basis point fee to be charged |


### setVaultBuffer

```solidity
function setVaultBuffer(uint256 _vaultBuffer) external
```

Set a buffer of assets to keep in the Vault to handle most
redemptions without needing to spend gas unwinding assets from a Strategy.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _vaultBuffer | uint256 | Percentage using 18 decimals. 100% = 1e18. |


### setAutoAllocateThreshold

```solidity
function setAutoAllocateThreshold(uint256 _threshold) external
```

Sets the minimum amount of OTokens in a mint to trigger an
automatic allocation of funds afterwords.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _threshold | uint256 | OToken amount with 18 fixed decimals. |


### setRebaseThreshold

```solidity
function setRebaseThreshold(uint256 _threshold) external
```

Set a minimum amount of OTokens in a mint or redeem that triggers a
rebase



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _threshold | uint256 | OToken amount with 18 fixed decimals. |


### setStrategistAddr

```solidity
function setStrategistAddr(address _address) external
```

Set address of Strategist



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _address | address | Address of Strategist |


### setAssetDefaultStrategy

```solidity
function setAssetDefaultStrategy(address _asset, address _strategy) external
```

Set the default Strategy for an asset, i.e. the one which the asset
            will be automatically allocated to and withdrawn from



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | Address of the asset |
| _strategy | address | Address of the Strategy |


### setNetOusdMintForStrategyThreshold

```solidity
function setNetOusdMintForStrategyThreshold(uint256 _threshold) external
```

Set maximum amount of OTokens that can at any point be minted and deployed
to strategy (used only by ConvexOUSDMetaStrategy for now).



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _threshold | uint256 | OToken amount with 18 fixed decimals. |


### swapCollateral

```solidity
function swapCollateral(address _fromAsset, address _toAsset, uint256 _fromAssetAmount, uint256 _minToAssetAmount, bytes _data) external returns (uint256 toAssetAmount)
```

Strategist swaps collateral assets sitting in the vault.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _fromAsset | address | The token address of the asset being sold by the vault. |
| _toAsset | address | The token address of the asset being purchased by the vault. |
| _fromAssetAmount | uint256 | The amount of assets being sold by the vault. |
| _minToAssetAmount | uint256 | The minimum amount of assets to be purchased. |
| _data | bytes | implementation specific data. eg 1Inch swap data |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| toAssetAmount | uint256 | The amount of toAssets that was received from the swap |

### setSwapper

```solidity
function setSwapper(address _swapperAddr) external
```

Set the contract the performs swaps of collateral assets.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _swapperAddr | address | Address of the Swapper contract that implements the ISwapper interface. |


### swapper

```solidity
function swapper() external view returns (address swapper_)
```

Contract that swaps the vault's collateral assets





### setSwapAllowedUndervalue

```solidity
function setSwapAllowedUndervalue(uint16 _basis) external
```

Set max allowed percentage the vault total value can drop below the OToken total supply in basis points
when executing collateral swaps.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _basis | uint16 | Percentage in basis points. eg 100 == 1% |


### allowedSwapUndervalue

```solidity
function allowedSwapUndervalue() external view returns (uint256 value)
```

Max allowed percentage the vault total value can drop below the OToken total supply in basis points
when executing a collateral swap.
For example 100 == 1%




#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | uint256 | Percentage in basis points. |

### setOracleSlippage

```solidity
function setOracleSlippage(address _asset, uint16 _allowedOracleSlippageBps) external
```

Set the allowed slippage from the Oracle price for collateral asset swaps.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | Address of the asset token. |
| _allowedOracleSlippageBps | uint16 | allowed slippage from Oracle in basis points. eg 20 = 0.2%. Max 10%. |


### supportAsset

```solidity
function supportAsset(address _asset, uint8 _unitConversion) external
```

Add a supported asset to the contract, i.e. one that can be
        to mint OTokens.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | Address of asset |
| _unitConversion | uint8 |  |


### cacheDecimals

```solidity
function cacheDecimals(address _asset) external
```

Cache decimals on OracleRouter for a particular asset. This action
     is required before that asset's price can be accessed.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | Address of asset token |


### approveStrategy

```solidity
function approveStrategy(address _addr) external
```

Add a strategy to the Vault.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _addr | address | Address of the strategy to add |


### removeStrategy

```solidity
function removeStrategy(address _addr) external
```

Remove a strategy from the Vault.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _addr | address | Address of the strategy to remove |


### depositToStrategy

```solidity
function depositToStrategy(address _strategyToAddress, address[] _assets, uint256[] _amounts) external
```

Deposit multiple assets from the vault into the strategy.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _strategyToAddress | address | Address of the Strategy to deposit assets into. |
| _assets | address[] | Array of asset address that will be deposited into the strategy. |
| _amounts | uint256[] | Array of amounts of each corresponding asset to deposit. |


### _depositToStrategy

```solidity
function _depositToStrategy(address _strategyToAddress, address[] _assets, uint256[] _amounts) internal
```







### withdrawFromStrategy

```solidity
function withdrawFromStrategy(address _strategyFromAddress, address[] _assets, uint256[] _amounts) external
```

Withdraw multiple assets from the strategy to the vault.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _strategyFromAddress | address | Address of the Strategy to withdraw assets from. |
| _assets | address[] | Array of asset address that will be withdrawn from the strategy. |
| _amounts | uint256[] | Array of amounts of each corresponding asset to withdraw. |


### _withdrawFromStrategy

```solidity
function _withdrawFromStrategy(address _recipient, address _strategyFromAddress, address[] _assets, uint256[] _amounts) internal
```





#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _recipient | address | can either be a strategy or the Vault |
| _strategyFromAddress | address |  |
| _assets | address[] |  |
| _amounts | uint256[] |  |


### setMaxSupplyDiff

```solidity
function setMaxSupplyDiff(uint256 _maxSupplyDiff) external
```

Sets the maximum allowable difference between
total supply and backing assets' value.





### setTrusteeAddress

```solidity
function setTrusteeAddress(address _address) external
```

Sets the trusteeAddress that can receive a portion of yield.
     Setting to the zero address disables this feature.





### setTrusteeFeeBps

```solidity
function setTrusteeFeeBps(uint256 _basis) external
```

Sets the TrusteeFeeBps to the percentage of yield that should be
     received in basis points.





### setOusdMetaStrategy

```solidity
function setOusdMetaStrategy(address _ousdMetaStrategy) external
```

Set OToken Metapool strategy



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _ousdMetaStrategy | address | Address of OToken metapool strategy |


### pauseRebase

```solidity
function pauseRebase() external
```

Set the deposit paused flag to true to prevent rebasing.





### unpauseRebase

```solidity
function unpauseRebase() external
```

Set the deposit paused flag to true to allow rebasing.





### pauseCapital

```solidity
function pauseCapital() external
```

Set the deposit paused flag to true to prevent capital movement.





### unpauseCapital

```solidity
function unpauseCapital() external
```

Set the deposit paused flag to false to enable capital movement.





### transferToken

```solidity
function transferToken(address _asset, uint256 _amount) external
```

Transfer token to governor. Intended for recovering tokens stuck in
     contract, i.e. mistaken sends.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | Address for the asset |
| _amount | uint256 | Amount of the asset to transfer |


### withdrawAllFromStrategy

```solidity
function withdrawAllFromStrategy(address _strategyAddr) external
```

Withdraws all assets from the strategy and sends assets to the Vault.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _strategyAddr | address | Strategy address. |


### withdrawAllFromStrategies

```solidity
function withdrawAllFromStrategies() external
```

Withdraws all assets from all the strategies and sends assets to the Vault.





### _cacheDecimals

```solidity
function _cacheDecimals(address token) internal
```







