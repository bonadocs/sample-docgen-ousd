﻿## VaultStorage


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

### OusdMetaStrategyUpdated

```solidity
event OusdMetaStrategyUpdated(address _ousdMetaStrategy)
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

### NetOusdMintForStrategyThresholdChanged

```solidity
event NetOusdMintForStrategyThresholdChanged(uint256 _threshold)
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

### UnitConversion

```solidity
enum UnitConversion {
  DECIMALS,
  GETEXCHANGERATE
}
```
### Asset

```solidity
struct Asset {
  bool isSupported;
  enum VaultStorage.UnitConversion unitConversion;
  uint8 decimals;
  uint16 allowedOracleSlippageBps;
}
```
### assets

```solidity
mapping(address => struct VaultStorage.Asset) assets
```

_mapping of supported vault assets to their configuration_

### allAssets

```solidity
address[] allAssets
```

_list of all assets supported by the vault._

### Strategy

```solidity
struct Strategy {
  bool isSupported;
  uint256 _deprecated;
}
```
### strategies

```solidity
mapping(address => struct VaultStorage.Strategy) strategies
```

_mapping of strategy contracts to their configiration_

### allStrategies

```solidity
address[] allStrategies
```

_list of all vault strategies_

### priceProvider

```solidity
address priceProvider
```

Address of the Oracle price provider contract

### rebasePaused

```solidity
bool rebasePaused
```

pause rebasing if true

### capitalPaused

```solidity
bool capitalPaused
```

pause operations that change the OToken supply.
eg mint, redeem, allocate, mint/burn for strategy

### redeemFeeBps

```solidity
uint256 redeemFeeBps
```

Redemption fee in basis points. eg 50 = 0.5%

### vaultBuffer

```solidity
uint256 vaultBuffer
```

Percentage of assets to keep in Vault to handle (most) withdrawals. 100% = 1e18.

### autoAllocateThreshold

```solidity
uint256 autoAllocateThreshold
```

OToken mints over this amount automatically allocate funds. 18 decimals.

### rebaseThreshold

```solidity
uint256 rebaseThreshold
```

OToken mints over this amount automatically rebase. 18 decimals.

### oUSD

```solidity
contract OUSD oUSD
```

_Address of the OToken token. eg OUSD or OETH._

### adminImplPosition

```solidity
bytes32 adminImplPosition
```

### strategistAddr

```solidity
address strategistAddr
```

Address of the Strategist

### assetDefaultStrategies

```solidity
mapping(address => address) assetDefaultStrategies
```

Mapping of asset address to the Strategy that they should automatically

### maxSupplyDiff

```solidity
uint256 maxSupplyDiff
```

Max difference between total supply and total value of assets. 18 decimals.

### trusteeAddress

```solidity
address trusteeAddress
```

Trustee contract that can collect a percentage of yield

### trusteeFeeBps

```solidity
uint256 trusteeFeeBps
```

Amount of yield collected in basis points. eg 2000 = 20%

### MINT_MINIMUM_UNIT_PRICE

```solidity
uint256 MINT_MINIMUM_UNIT_PRICE
```

### ousdMetaStrategy

```solidity
address ousdMetaStrategy
```

Metapool strategy that is allowed to mint/burn OTokens without changing collateral

### netOusdMintedForStrategy

```solidity
int256 netOusdMintedForStrategy
```

How much OTokens are currently minted by the strategy

### netOusdMintForStrategyThreshold

```solidity
uint256 netOusdMintForStrategyThreshold
```

How much net total OTokens are allowed to be minted by all strategies

### MIN_UNIT_PRICE_DRIFT

```solidity
uint256 MIN_UNIT_PRICE_DRIFT
```

### MAX_UNIT_PRICE_DRIFT

```solidity
uint256 MAX_UNIT_PRICE_DRIFT
```

### SwapConfig

```solidity
struct SwapConfig {
  address swapper;
  uint16 allowedUndervalueBps;
}
```
### swapConfig

```solidity
struct VaultStorage.SwapConfig swapConfig
```

### setAdminImpl

```solidity
function setAdminImpl(address newImpl) external
```

set the implementation for the admin, this needs to be in a base class else we cannot set it



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| newImpl | address | address of the implementation |


