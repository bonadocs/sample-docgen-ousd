﻿## CompoundStrategy


### SkippedWithdrawal

```solidity
event SkippedWithdrawal(address asset, uint256 amount)
```

### constructor

```solidity
constructor(struct InitializableAbstractStrategy.BaseStrategyConfig _stratConfig) public
```







### initialize

```solidity
function initialize(address[] _rewardTokenAddresses, address[] _assets, address[] _pTokens) external
```

initialize function, to set up initial internal state



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _rewardTokenAddresses | address[] | Address of reward token for platform |
| _assets | address[] | Addresses of initial supported assets |
| _pTokens | address[] | Platform Token corresponding addresses |


### collectRewardTokens

```solidity
function collectRewardTokens() external virtual
```

Collect accumulated COMP and send to Harvester.





### deposit

```solidity
function deposit(address _asset, uint256 _amount) external
```

Deposit asset into the underlying platform



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | Address of asset to deposit |
| _amount | uint256 | Amount of assets to deposit |


### _deposit

```solidity
function _deposit(address _asset, uint256 _amount) internal
```



Deposit an asset into the underlying platform

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | Address of the asset to deposit |
| _amount | uint256 | Amount of assets to deposit |


### depositAll

```solidity
function depositAll() external
```

Deposit the entire balance of any supported asset in the strategy into the underlying platform





### withdraw

```solidity
function withdraw(address _recipient, address _asset, uint256 _amount) external
```

Withdraw an asset from the underlying platform



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _recipient | address | Address to receive withdrawn assets |
| _asset | address | Address of the asset to withdraw |
| _amount | uint256 | Amount of assets to withdraw |


### _abstractSetPToken

```solidity
function _abstractSetPToken(address _asset, address _pToken) internal
```



Internal method to respond to the addition of new asset / cTokens
     We need to approve the cToken and give it permission to spend the asset

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | Address of the asset to approve. eg DAI |
| _pToken | address | The pToken for the approval. eg cDAI or fDAI |


### withdrawAll

```solidity
function withdrawAll() external
```

Remove all supported assets from the underlying platform and send them to Vault contract.





### checkBalance

```solidity
function checkBalance(address _asset) external view returns (uint256 balance)
```

Get the total asset value held in the underlying platform
     This includes any interest that was generated since depositing.
     The exchange rate between the cToken and asset gradually increases,
     causing the cToken to be worth more corresponding asset.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | Address of the asset |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| balance | uint256 | Total value of the asset in the platform |

### _checkBalance

```solidity
function _checkBalance(contract ICERC20 _cToken) internal view returns (uint256 balance)
```



Get the total asset value held in the platform
     underlying = (cTokenAmt * exchangeRate) / 1e18

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _cToken | contract ICERC20 | cToken for which to check balance |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| balance | uint256 | Total value of the asset in the platform |

### safeApproveAllTokens

```solidity
function safeApproveAllTokens() external
```

Approve the spending of all assets by their corresponding cToken,
     if for some reason is it necessary.





