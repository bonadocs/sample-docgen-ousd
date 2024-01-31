﻿## VaultCore


### MAX_INT

```solidity
uint256 MAX_INT
```

### MAX_UINT

```solidity
uint256 MAX_UINT
```

### whenNotRebasePaused

```solidity
modifier whenNotRebasePaused()
```

_Verifies that the rebasing is not paused._

### whenNotCapitalPaused

```solidity
modifier whenNotCapitalPaused()
```

_Verifies that the deposits are not paused._

### onlyOusdMetaStrategy

```solidity
modifier onlyOusdMetaStrategy()
```

### mint

```solidity
function mint(address _asset, uint256 _amount, uint256 _minimumOusdAmount) external
```

Deposit a supported asset and mint OTokens.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | Address of the asset being deposited |
| _amount | uint256 | Amount of the asset being deposited |
| _minimumOusdAmount | uint256 | Minimum OTokens to mint |


### mintForStrategy

```solidity
function mintForStrategy(uint256 _amount) external
```

Mint OTokens for a Metapool Strategy



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _amount | uint256 | Amount of the asset being deposited Notice: can't use `nonReentrant` modifier since the `mint` function can call `allocate`, and that can trigger `ConvexOUSDMetaStrategy` to call this function while the execution of the `mint` has not yet completed -> causing a `nonReentrant` collision. Also important to understand is that this is a limitation imposed by the test suite. Production / mainnet contracts should never be configured in a way where mint/redeem functions that are moving funds between the Vault and end user wallets can influence strategies utilizing this function. |


### redeem

```solidity
function redeem(uint256 _amount, uint256 _minimumUnitAmount) external
```

Withdraw a supported asset and burn OTokens.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _amount | uint256 | Amount of OTokens to burn |
| _minimumUnitAmount | uint256 | Minimum stablecoin units to receive in return |


### _redeem

```solidity
function _redeem(uint256 _amount, uint256 _minimumUnitAmount) internal
```

Withdraw a supported asset and burn OTokens.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _amount | uint256 | Amount of OTokens to burn |
| _minimumUnitAmount | uint256 | Minimum stablecoin units to receive in return |


### burnForStrategy

```solidity
function burnForStrategy(uint256 _amount) external
```

Burn OTokens for Metapool Strategy

Notice: can't use `nonReentrant` modifier since the `redeem` function could
require withdrawal on `ConvexOUSDMetaStrategy` and that one can call `burnForStrategy`
while the execution of the `redeem` has not yet completed -> causing a `nonReentrant` collision.

Also important to understand is that this is a limitation imposed by the test suite.
Production / mainnet contracts should never be configured in a way where mint/redeem functions
that are moving funds between the Vault and end user wallets can influence strategies
utilizing this function.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _amount | uint256 | Amount of OUSD to burn |


### redeemAll

```solidity
function redeemAll(uint256 _minimumUnitAmount) external
```

Withdraw a supported asset and burn all OTokens.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _minimumUnitAmount | uint256 | Minimum stablecoin units to receive in return |


### allocate

```solidity
function allocate() external
```

Allocate unallocated funds on Vault to strategies.





### _allocate

```solidity
function _allocate() internal
```



Allocate unallocated funds on Vault to strategies.



### rebase

```solidity
function rebase() external virtual
```

Calculate the total value of assets held by the Vault and all
     strategies and update the supply of OTokens.





### _rebase

```solidity
function _rebase() internal returns (uint256)
```



Calculate the total value of assets held by the Vault and all
     strategies and update the supply of OTokens, optionally sending a
     portion of the yield to the trustee.


#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | totalUnits Total balance of Vault in units |

### totalValue

```solidity
function totalValue() external view virtual returns (uint256 value)
```

Determine the total value of assets held by the vault and its
        strategies.




#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | uint256 | Total value in USD/ETH (1e18) |

### _totalValue

```solidity
function _totalValue() internal view virtual returns (uint256 value)
```



Internal Calculate the total value of the assets held by the
        vault and its strategies.


#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | uint256 | Total value in USD/ETH (1e18) |

### _totalValueInVault

```solidity
function _totalValueInVault() internal view returns (uint256 value)
```



Internal to calculate total value of all assets held in Vault.


#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | uint256 | Total value in USD/ETH (1e18) |

### _totalValueInStrategies

```solidity
function _totalValueInStrategies() internal view returns (uint256 value)
```



Internal to calculate total value of all assets held in Strategies.


#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | uint256 | Total value in USD/ETH (1e18) |

### _totalValueInStrategy

```solidity
function _totalValueInStrategy(address _strategyAddr) internal view returns (uint256 value)
```



Internal to calculate total value of all assets held by strategy.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _strategyAddr | address | Address of the strategy |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | uint256 | Total value in USD/ETH (1e18) |

### checkBalance

```solidity
function checkBalance(address _asset) external view returns (uint256)
```

Get the balance of an asset held in Vault and all strategies.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | Address of asset |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | uint256 Balance of asset in decimals of asset |

### _checkBalance

```solidity
function _checkBalance(address _asset) internal view virtual returns (uint256 balance)
```

Get the balance of an asset held in Vault and all strategies.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | Address of asset |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| balance | uint256 | Balance of asset in decimals of asset |

### calculateRedeemOutputs

```solidity
function calculateRedeemOutputs(uint256 _amount) external view returns (uint256[])
```

Calculate the outputs for a redeem function, i.e. the mix of
coins that will be returned





### _calculateRedeemOutputs

```solidity
function _calculateRedeemOutputs(uint256 _amount) internal view returns (uint256[] outputs)
```



Calculate the outputs for a redeem function, i.e. the mix of
coins that will be returned.


#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| outputs | uint256[] | Array of amounts respective to the supported assets |

### priceUnitMint

```solidity
function priceUnitMint(address asset) external view returns (uint256 price)
```

Returns the total price in 18 digit units for a given asset.
     Never goes above 1, since that is how we price mints.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | address of the asset |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| price | uint256 | uint256: unit (USD / ETH) price for 1 unit of the asset, in 18 decimal fixed |

### priceUnitRedeem

```solidity
function priceUnitRedeem(address asset) external view returns (uint256 price)
```

Returns the total price in 18 digit unit for a given asset.
     Never goes below 1, since that is how we price redeems



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | Address of the asset |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| price | uint256 | uint256: unit (USD / ETH) price for 1 unit of the asset, in 18 decimal fixed |

### _toUnits

```solidity
function _toUnits(uint256 _raw, address _asset) internal view returns (uint256)
```



Convert a quantity of a token into 1e18 fixed decimal "units"
in the underlying base (USD/ETH) used by the vault.
Price is not taken into account, only quantity.

Examples of this conversion:

- 1e18 DAI becomes 1e18 units (same decimals)
- 1e6 USDC becomes 1e18 units (decimal conversion)
- 1e18 rETH becomes 1.2e18 units (exchange rate conversion)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _raw | uint256 | Quantity of asset |
| _asset | address | Core Asset address |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | value 1e18 normalized quantity of units |

### _toUnitPrice

```solidity
function _toUnitPrice(address _asset, bool isMint) internal view returns (uint256 price)
```



Returns asset's unit price accounting for different asset types
     and takes into account the context in which that price exists -
     - mint or redeem.

Note: since we are returning the price of the unit and not the one of the
asset (see comment above how 1 rETH exchanges for 1.2 units) we need
to make the Oracle price adjustment as well since we are pricing the
units and not the assets.

The price also snaps to a "full unit price" in case a mint or redeem
action would be unfavourable to the protocol.



### _getDecimals

```solidity
function _getDecimals(address _asset) internal view returns (uint256 decimals)
```







### getAssetCount

```solidity
function getAssetCount() public view returns (uint256)
```

Return the number of assets supported by the Vault.





### getAssetConfig

```solidity
function getAssetConfig(address _asset) public view returns (struct VaultStorage.Asset config)
```

Gets the vault configuration of a supported asset.





### getAllAssets

```solidity
function getAllAssets() external view returns (address[])
```

Return all vault asset addresses in order





### getStrategyCount

```solidity
function getStrategyCount() external view returns (uint256)
```

Return the number of strategies active on the Vault.





### getAllStrategies

```solidity
function getAllStrategies() external view returns (address[])
```

Return the array of all strategies





### isSupportedAsset

```solidity
function isSupportedAsset(address _asset) external view returns (bool)
```

Returns whether the vault supports the asset



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | address of the asset |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if supported |

### fallback

```solidity
fallback() external payable
```

This is a catch all for all functions not declared in core

Falldown to the admin implementation



