﻿## BalancerMetaPoolStrategy


### constructor

```solidity
constructor(struct InitializableAbstractStrategy.BaseStrategyConfig _stratConfig, struct BaseBalancerStrategy.BaseBalancerConfig _balancerConfig, address _auraRewardPoolAddress) public
```







### deposit

```solidity
function deposit(address, uint256) external
```

There are no plans to configure BalancerMetaPool as a default
asset strategy. For that reason there is no need to support this
functionality.





### deposit

```solidity
function deposit(address[], uint256[]) external
```

There are no plans to configure BalancerMetaPool as a default
asset strategy. For that reason there is no need to support this
functionality.





### depositAll

```solidity
function depositAll() external
```

Deposits all supported assets in this strategy contract to the Balancer pool.





### _deposit

```solidity
function _deposit(address[] _strategyAssets, uint256[] _strategyAmounts) internal
```







### withdraw

```solidity
function withdraw(address _recipient, address _strategyAsset, uint256 _strategyAmount) external
```

Withdraw a Vault collateral asset from the Balancer pool.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _recipient | address | Address to receive the Vault collateral assets. Typically is the Vault. |
| _strategyAsset | address | Address of the Vault collateral asset |
| _strategyAmount | uint256 | The amount of Vault collateral assets to withdraw |


### withdraw

```solidity
function withdraw(address _recipient, address[] _strategyAssets, uint256[] _strategyAmounts) external
```

Withdraw multiple Vault collateral asset from the Balancer pool.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _recipient | address | Address to receive the Vault collateral assets. Typically is the Vault. |
| _strategyAssets | address[] | Addresses of the Vault collateral assets |
| _strategyAmounts | uint256[] | The amounts of Vault collateral assets to withdraw |


### _withdraw

```solidity
function _withdraw(address _recipient, address[] _strategyAssets, uint256[] _strategyAmounts) internal
```



Withdraw multiple Vault collateral asset from the Balancer pool.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _recipient | address | Address to receive the Vault collateral assets. Typically is the Vault. |
| _strategyAssets | address[] | Addresses of the Vault collateral assets |
| _strategyAmounts | uint256[] | The amounts of Vault collateral assets to withdraw _withdrawal doesn't require a read-only re-entrancy protection since during the withdrawal the function enters the Balancer Vault Context. If this function were called as part of the attacking contract (while intercepting execution flow upon receiving ETH) the read-only protection of the Balancer Vault would be triggered. Since the attacking contract would already be in the Balancer Vault context and wouldn't be able to enter it again. |


### withdrawAll

```solidity
function withdrawAll() external
```

Withdraws all supported Vault collateral assets from the Balancer pool
and send to the OToken's Vault.

Is only executable by the OToken's Vault or the Governor.





### safeApproveAllTokens

```solidity
function safeApproveAllTokens() external
```

Approves the Balancer Vault to transfer poolAsset counterparts
of all of the supported assets from this strategy. E.g. stETH is a supported
strategy and Balancer Vault gets unlimited approval to transfer wstETH.

If Balancer pool uses a wrapped version of a supported asset then also approve
unlimited usage of an asset to the contract responsible for wrapping.

Approve unlimited spending by Balancer Vault and Aura reward pool of the
pool BPT tokens.

Is only executable by the Governor.





### _abstractSetPToken

```solidity
function _abstractSetPToken(address _asset, address) internal
```







### _approveAsset

```solidity
function _approveAsset(address _asset) internal
```



Approves the Balancer Vault to transfer an asset from
this strategy. The assets could be a Vault collateral asset
like WETH or rETH; or a Balancer pool asset that wraps the vault asset
like wstETH or sfrxETH.



### _getRateProviderRate

```solidity
function _getRateProviderRate(address _asset) internal view returns (uint256)
```

Returns the rate supplied by the Balancer configured rate
provider. Rate is used to normalize the token to common underlying
pool denominator. (ETH for ETH Liquid staking derivatives)



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | Address of the Balancer pool asset |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | rate of the corresponding asset |

