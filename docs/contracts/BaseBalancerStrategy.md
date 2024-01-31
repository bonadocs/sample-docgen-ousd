﻿## BaseBalancerStrategy


### rETH

```solidity
address rETH
```

### stETH

```solidity
address stETH
```

### wstETH

```solidity
address wstETH
```

### frxETH

```solidity
address frxETH
```

### sfrxETH

```solidity
address sfrxETH
```

### balancerVault

```solidity
contract IBalancerVault balancerVault
```

Address of the Balancer vault

### balancerPoolId

```solidity
bytes32 balancerPoolId
```

Balancer pool identifier

### maxWithdrawalDeviation

```solidity
uint256 maxWithdrawalDeviation
```

### maxDepositDeviation

```solidity
uint256 maxDepositDeviation
```

### BaseBalancerConfig

```solidity
struct BaseBalancerConfig {
  address rEthAddress;
  address stEthAddress;
  address wstEthAddress;
  address frxEthAddress;
  address sfrxEthAddress;
  address balancerVaultAddress;
  bytes32 balancerPoolId;
}
```
### MaxWithdrawalDeviationUpdated

```solidity
event MaxWithdrawalDeviationUpdated(uint256 _prevMaxDeviationPercentage, uint256 _newMaxDeviationPercentage)
```

### MaxDepositDeviationUpdated

```solidity
event MaxDepositDeviationUpdated(uint256 _prevMaxDeviationPercentage, uint256 _newMaxDeviationPercentage)
```

### whenNotInBalancerVaultContext

```solidity
modifier whenNotInBalancerVaultContext()
```

_Ensure we are not in a Vault context when this function is called, by attempting a no-op internal
balance operation. If we are already in a Vault transaction (e.g., a swap, join, or exit), the Vault's
reentrancy protection will cause this function to revert.

Use this modifier with any function that can cause a state change in a pool and is either public itself,
or called by a public function *outside* a Vault operation (e.g., join, exit, or swap).

This is to protect against Balancer's read-only re-entrancy vulnerability:
https://www.notion.so/originprotocol/Balancer-read-only-reentrancy-c686e72c82414ef18fa34312bb02e11b_

### constructor

```solidity
constructor(struct BaseBalancerStrategy.BaseBalancerConfig _balancerConfig) internal
```







### initialize

```solidity
function initialize(address[] _rewardTokenAddresses, address[] _assets, address[] _pTokens) external
```

Initializer for setting up strategy internal state. This overrides the
InitializableAbstractStrategy initializer as Balancer's strategies don't fit
well within that abstraction.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _rewardTokenAddresses | address[] | Address of BAL & AURA |
| _assets | address[] | Addresses of supported assets. MUST be passed in the same                order as returned by coins on the pool contract, i.e.                WETH, stETH |
| _pTokens | address[] | Platform Token corresponding addresses |


### supportsAsset

```solidity
function supportsAsset(address _asset) public view returns (bool)
```

Returns bool indicating whether asset is supported by strategy



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | Address of the asset |


### checkBalance

```solidity
function checkBalance(address _asset) external view virtual returns (uint256 amount)
```

Get strategy's share of an assets in the Balancer pool.
This is not denominated in OUSD/ETH value of the assets in the Balancer pool.

it is important that this function is not affected by reporting inflated
values of assets in case of any pool manipulation. Such a manipulation could easily
exploit the protocol by:
 - minting OETH
 - tilting Balancer pool to report higher balances of assets
 - rebasing() -> all that extra token balances get distributed to OETH holders
 - tilting pool back
 - redeeming OETH

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | Address of the Vault collateral asset |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| amount | uint256 | the amount of vault collateral assets IMPORTANT if this function is overridden it needs to have a whenNotInBalancerVaultContext modifier on it or it is susceptible to read-only re-entrancy attack |

### checkBalance

```solidity
function checkBalance() external view virtual returns (uint256 value)
```

Returns the value of all assets managed by this strategy.
Uses the Balancer pool's rate (virtual price) to convert the strategy's
Balancer Pool Tokens (BPT) to ETH value.




#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | uint256 | The ETH value IMPORTANT if this function is overridden it needs to have a whenNotInBalancerVaultContext modifier on it or it is susceptible to read-only re-entrancy attack |

### _getBalancerPoolTokens

```solidity
function _getBalancerPoolTokens() internal view virtual returns (uint256 balancerPoolTokens)
```

Balancer Pool Tokens (BPT) in the Balancer pool.





### _getBPTExpected

```solidity
function _getBPTExpected(address _asset, uint256 _amount) internal view virtual returns (uint256 bptExpected)
```

BPT price is calculated by taking the rate from the rateProvider of the asset in
question. If one does not exist it defaults to 1e18. To get the final BPT expected that
is multiplied by the underlying asset amount divided by BPT token rate. BPT token rate is
similar to Curve's virtual_price and expresses how much has the price of BPT appreciated
(e.g. due to swap fees) in relation to the underlying assets

Using the above approach makes the strategy vulnerable to a possible MEV attack using
flash loan to manipulate the pool before a deposit/withdrawal since the function ignores
market values of the assets being priced in BPT.

At the time of writing there is no safe on-chain approach to pricing BPT in a way that it
would make it invulnerable to MEV pool manipulation. See recent Balancer exploit:
https://www.notion.so/originprotocol/Balancer-OETH-strategy-9becdea132704e588782a919d7d471eb?pvs=4#1cf07de12fc64f1888072321e0644348

To mitigate MEV possibilities during deposits and withdraws, the VaultValueChecker will use checkBalance before and after the move
to ensure the expected changes took place.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | Address of the Balancer pool asset |
| _amount | uint256 | Amount of the Balancer pool asset |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| bptExpected | uint256 | of BPT expected in exchange for the asset @dev bptAssetPrice = 1e18 (asset peg) * pool_asset_rate bptExpected = bptAssetPrice * asset_amount / BPT_token_rate bptExpected = 1e18 (asset peg) * pool_asset_rate * asset_amount / BPT_token_rate bptExpected = asset_amount * pool_asset_rate / BPT_token_rate further information available here: https://www.notion.so/originprotocol/Balancer-OETH-strategy-9becdea132704e588782a919d7d471eb?pvs=4#ce01495ae70346d8971f5dced809fb83 |

### _getBPTExpected

```solidity
function _getBPTExpected(address[] _assets, uint256[] _amounts) internal view virtual returns (uint256 bptExpected)
```







### _lpDepositAll

```solidity
function _lpDepositAll() internal virtual
```







### _lpWithdraw

```solidity
function _lpWithdraw(uint256 numBPTTokens) internal virtual
```







### _lpWithdrawAll

```solidity
function _lpWithdrawAll() internal virtual
```







### _getPoolAssets

```solidity
function _getPoolAssets() internal view returns (contract IERC20[] assets)
```

Balancer returns assets and rateProviders for corresponding assets ordered
by numerical order.





### _toPoolAsset

```solidity
function _toPoolAsset(address asset, uint256 amount) internal view returns (address poolAsset, uint256 poolAmount)
```



If an asset is rebasing the Balancer pools have a wrapped versions of assets
that the strategy supports. This function converts the pool(wrapped) asset
and corresponding amount to strategy asset.



### _toPoolAsset

```solidity
function _toPoolAsset(address asset) internal view returns (address)
```



Converts a Vault collateral asset to a Balancer pool asset.
stETH becomes wstETH, frxETH becomes sfrxETH and everything else stays the same.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | Address of the Vault collateral asset. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | Address of the Balancer pool asset. |

### _wrapPoolAsset

```solidity
function _wrapPoolAsset(address asset, uint256 amount) internal returns (address wrappedAsset, uint256 wrappedAmount)
```



Converts rebasing asset to its wrapped counterpart.



### _unwrapPoolAsset

```solidity
function _unwrapPoolAsset(address asset, uint256 amount) internal returns (uint256 unwrappedAmount)
```



Converts wrapped asset to its rebasing counterpart.



### _fromPoolAsset

```solidity
function _fromPoolAsset(address poolAsset, uint256 poolAmount) internal view returns (address asset, uint256 amount)
```



If an asset is rebasing the Balancer pools have a wrapped versions of assets
that the strategy supports. This function converts the rebasing strategy asset
and corresponding amount to wrapped(pool) asset.



### _fromPoolAsset

```solidity
function _fromPoolAsset(address poolAsset) internal view returns (address asset)
```







### setMaxWithdrawalDeviation

```solidity
function setMaxWithdrawalDeviation(uint256 _maxWithdrawalDeviation) external
```

Sets max withdrawal deviation that is considered when removing
liquidity from Balancer pools.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _maxWithdrawalDeviation | uint256 | Max withdrawal deviation denominated in        wad (number with 18 decimals): 1e18 == 100%, 1e16 == 1% IMPORTANT Minimum maxWithdrawalDeviation will be 1% (1e16) for production usage. Vault value checker in combination with checkBalance will catch any unexpected manipulation. |


### setMaxDepositDeviation

```solidity
function setMaxDepositDeviation(uint256 _maxDepositDeviation) external
```

Sets max deposit deviation that is considered when adding
liquidity to Balancer pools.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _maxDepositDeviation | uint256 | Max deposit deviation denominated in        wad (number with 18 decimals): 1e18 == 100%, 1e16 == 1% IMPORTANT Minimum maxDepositDeviation will default to 1% (1e16) for production usage. Vault value checker in combination with checkBalance will catch any unexpected manipulation. |


### _approveBase

```solidity
function _approveBase() internal virtual
```







### _getRateProviderRate

```solidity
function _getRateProviderRate(address _asset) internal view virtual returns (uint256)
```







