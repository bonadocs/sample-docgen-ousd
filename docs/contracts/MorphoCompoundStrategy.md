﻿## MorphoCompoundStrategy


### MORPHO

```solidity
address MORPHO
```

### LENS

```solidity
address LENS
```

### constructor

```solidity
constructor(struct InitializableAbstractStrategy.BaseStrategyConfig _stratConfig) public
```







### initialize

```solidity
function initialize(address[] _rewardTokenAddresses, address[] _assets, address[] _pTokens) external
```



Initialize function, to set up initial internal state

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _rewardTokenAddresses | address[] | Address of reward token for platform |
| _assets | address[] | Addresses of initial supported assets |
| _pTokens | address[] | Platform Token corresponding addresses |


### safeApproveAllTokens

```solidity
function safeApproveAllTokens() external
```



Approve the spending of all assets by main Morpho contract,
     if for some reason is it necessary.



### _abstractSetPToken

```solidity
function _abstractSetPToken(address _asset, address _pToken) internal
```



Internal method to respond to the addition of new asset
     We need to approve and allow Morpho to move them

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | Address of the asset to approve |
| _pToken | address | The pToken for the approval |


### collectRewardTokens

```solidity
function collectRewardTokens() external
```



Collect accumulated rewards and send them to Harvester.



### getPendingRewards

```solidity
function getPendingRewards() external view returns (uint256 balance)
```



Get the amount of rewards pending to be collected from the protocol



### deposit

```solidity
function deposit(address _asset, uint256 _amount) external
```



Deposit asset into Morpho

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | Address of asset to deposit |
| _amount | uint256 | Amount of asset to deposit |


### _deposit

```solidity
function _deposit(address _asset, uint256 _amount) internal
```



Deposit asset into Morpho

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | Address of asset to deposit |
| _amount | uint256 | Amount of asset to deposit |


### depositAll

```solidity
function depositAll() external
```



Deposit the entire balance of any supported asset into Morpho



### withdraw

```solidity
function withdraw(address _recipient, address _asset, uint256 _amount) external
```



Withdraw asset from Morpho

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _recipient | address | Address to receive withdrawn asset |
| _asset | address | Address of asset to withdraw |
| _amount | uint256 | Amount of asset to withdraw |


### _withdraw

```solidity
function _withdraw(address _recipient, address _asset, uint256 _amount) internal
```







### withdrawAll

```solidity
function withdrawAll() external
```



Remove all assets from platform and send them to Vault contract.



### checkBalance

```solidity
function checkBalance(address _asset) external view returns (uint256 balance)
```



Return total value of an asset held in the platform

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
function _checkBalance(address _asset) internal view returns (uint256 balance)
```







