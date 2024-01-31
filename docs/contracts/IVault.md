﻿## IVault


### AssetSupported

```solidity
event AssetSupported(address _asset)
```

### AssetDefaultStrategyUpdated

```solidity
event AssetDefaultStrategyUpdated(address _asset, address _strategy)
```

### AssetAllocated

```solidity
event AssetAllocated(address _asset, address _strategy, uint256 _amount)
```

### StrategyApproved

```solidity
event StrategyApproved(address _addr)
```

### StrategyRemoved

```solidity
event StrategyRemoved(address _addr)
```

### Mint

```solidity
event Mint(address _addr, uint256 _value)
```

### Redeem

```solidity
event Redeem(address _addr, uint256 _value)
```

### CapitalPaused

```solidity
event CapitalPaused()
```

### CapitalUnpaused

```solidity
event CapitalUnpaused()
```

### RebasePaused

```solidity
event RebasePaused()
```

### RebaseUnpaused

```solidity
event RebaseUnpaused()
```

### VaultBufferUpdated

```solidity
event VaultBufferUpdated(uint256 _vaultBuffer)
```

### RedeemFeeUpdated

```solidity
event RedeemFeeUpdated(uint256 _redeemFeeBps)
```

### PriceProviderUpdated

```solidity
event PriceProviderUpdated(address _priceProvider)
```

### AllocateThresholdUpdated

```solidity
event AllocateThresholdUpdated(uint256 _threshold)
```

### RebaseThresholdUpdated

```solidity
event RebaseThresholdUpdated(uint256 _threshold)
```

### StrategistUpdated

```solidity
event StrategistUpdated(address _address)
```

### MaxSupplyDiffChanged

```solidity
event MaxSupplyDiffChanged(uint256 maxSupplyDiff)
```

### YieldDistribution

```solidity
event YieldDistribution(address _to, uint256 _yield, uint256 _fee)
```

### TrusteeFeeBpsChanged

```solidity
event TrusteeFeeBpsChanged(uint256 _basis)
```

### TrusteeAddressChanged

```solidity
event TrusteeAddressChanged(address _address)
```

### SwapperChanged

```solidity
event SwapperChanged(address _address)
```

### SwapAllowedUndervalueChanged

```solidity
event SwapAllowedUndervalueChanged(uint256 _basis)
```

### SwapSlippageChanged

```solidity
event SwapSlippageChanged(address _asset, uint256 _basis)
```

### Swapped

```solidity
event Swapped(address _fromAsset, address _toAsset, uint256 _fromAssetAmount, uint256 _toAssetAmount)
```

### transferGovernance

```solidity
function transferGovernance(address _newGovernor) external
```







### claimGovernance

```solidity
function claimGovernance() external
```







### governor

```solidity
function governor() external view returns (address)
```







### setPriceProvider

```solidity
function setPriceProvider(address _priceProvider) external
```







### priceProvider

```solidity
function priceProvider() external view returns (address)
```







### setRedeemFeeBps

```solidity
function setRedeemFeeBps(uint256 _redeemFeeBps) external
```







### redeemFeeBps

```solidity
function redeemFeeBps() external view returns (uint256)
```







### setVaultBuffer

```solidity
function setVaultBuffer(uint256 _vaultBuffer) external
```







### vaultBuffer

```solidity
function vaultBuffer() external view returns (uint256)
```







### setAutoAllocateThreshold

```solidity
function setAutoAllocateThreshold(uint256 _threshold) external
```







### autoAllocateThreshold

```solidity
function autoAllocateThreshold() external view returns (uint256)
```







### setRebaseThreshold

```solidity
function setRebaseThreshold(uint256 _threshold) external
```







### rebaseThreshold

```solidity
function rebaseThreshold() external view returns (uint256)
```







### setStrategistAddr

```solidity
function setStrategistAddr(address _address) external
```







### strategistAddr

```solidity
function strategistAddr() external view returns (address)
```







### setMaxSupplyDiff

```solidity
function setMaxSupplyDiff(uint256 _maxSupplyDiff) external
```







### maxSupplyDiff

```solidity
function maxSupplyDiff() external view returns (uint256)
```







### setTrusteeAddress

```solidity
function setTrusteeAddress(address _address) external
```







### trusteeAddress

```solidity
function trusteeAddress() external view returns (address)
```







### setTrusteeFeeBps

```solidity
function setTrusteeFeeBps(uint256 _basis) external
```







### trusteeFeeBps

```solidity
function trusteeFeeBps() external view returns (uint256)
```







### ousdMetaStrategy

```solidity
function ousdMetaStrategy() external view returns (address)
```







### setSwapper

```solidity
function setSwapper(address _swapperAddr) external
```







### setSwapAllowedUndervalue

```solidity
function setSwapAllowedUndervalue(uint16 _percentageBps) external
```







### setOracleSlippage

```solidity
function setOracleSlippage(address _asset, uint16 _allowedOracleSlippageBps) external
```







### supportAsset

```solidity
function supportAsset(address _asset, uint8 _supportsAsset) external
```







### approveStrategy

```solidity
function approveStrategy(address _addr) external
```







### removeStrategy

```solidity
function removeStrategy(address _addr) external
```







### setAssetDefaultStrategy

```solidity
function setAssetDefaultStrategy(address _asset, address _strategy) external
```







### assetDefaultStrategies

```solidity
function assetDefaultStrategies(address _asset) external view returns (address)
```







### pauseRebase

```solidity
function pauseRebase() external
```







### unpauseRebase

```solidity
function unpauseRebase() external
```







### rebasePaused

```solidity
function rebasePaused() external view returns (bool)
```







### pauseCapital

```solidity
function pauseCapital() external
```







### unpauseCapital

```solidity
function unpauseCapital() external
```







### capitalPaused

```solidity
function capitalPaused() external view returns (bool)
```







### transferToken

```solidity
function transferToken(address _asset, uint256 _amount) external
```







### priceUnitMint

```solidity
function priceUnitMint(address asset) external view returns (uint256)
```







### priceUnitRedeem

```solidity
function priceUnitRedeem(address asset) external view returns (uint256)
```







### withdrawAllFromStrategy

```solidity
function withdrawAllFromStrategy(address _strategyAddr) external
```







### withdrawAllFromStrategies

```solidity
function withdrawAllFromStrategies() external
```







### withdrawFromStrategy

```solidity
function withdrawFromStrategy(address _strategyFromAddress, address[] _assets, uint256[] _amounts) external
```







### depositToStrategy

```solidity
function depositToStrategy(address _strategyToAddress, address[] _assets, uint256[] _amounts) external
```







### mint

```solidity
function mint(address _asset, uint256 _amount, uint256 _minimumOusdAmount) external
```







### mintForStrategy

```solidity
function mintForStrategy(uint256 _amount) external
```







### redeem

```solidity
function redeem(uint256 _amount, uint256 _minimumUnitAmount) external
```







### burnForStrategy

```solidity
function burnForStrategy(uint256 _amount) external
```







### redeemAll

```solidity
function redeemAll(uint256 _minimumUnitAmount) external
```







### allocate

```solidity
function allocate() external
```







### rebase

```solidity
function rebase() external
```







### swapCollateral

```solidity
function swapCollateral(address fromAsset, address toAsset, uint256 fromAssetAmount, uint256 minToAssetAmount, bytes data) external returns (uint256 toAssetAmount)
```







### totalValue

```solidity
function totalValue() external view returns (uint256 value)
```







### checkBalance

```solidity
function checkBalance(address _asset) external view returns (uint256)
```







### calculateRedeemOutputs

```solidity
function calculateRedeemOutputs(uint256 _amount) external view returns (uint256[])
```







### getAssetCount

```solidity
function getAssetCount() external view returns (uint256)
```







### getAssetConfig

```solidity
function getAssetConfig(address _asset) external view returns (struct VaultStorage.Asset config)
```







### getAllAssets

```solidity
function getAllAssets() external view returns (address[])
```







### getStrategyCount

```solidity
function getStrategyCount() external view returns (uint256)
```







### swapper

```solidity
function swapper() external view returns (address)
```







### allowedSwapUndervalue

```solidity
function allowedSwapUndervalue() external view returns (uint256)
```







### getAllStrategies

```solidity
function getAllStrategies() external view returns (address[])
```







### isSupportedAsset

```solidity
function isSupportedAsset(address _asset) external view returns (bool)
```







### netOusdMintForStrategyThreshold

```solidity
function netOusdMintForStrategyThreshold() external view returns (uint256)
```







### setOusdMetaStrategy

```solidity
function setOusdMetaStrategy(address _ousdMetaStrategy) external
```







### setNetOusdMintForStrategyThreshold

```solidity
function setNetOusdMintForStrategyThreshold(uint256 _threshold) external
```







### netOusdMintedForStrategy

```solidity
function netOusdMintedForStrategy() external view returns (int256)
```







