﻿## InitializableAbstractStrategy


### PTokenAdded

```solidity
event PTokenAdded(address _asset, address _pToken)
```

### PTokenRemoved

```solidity
event PTokenRemoved(address _asset, address _pToken)
```

### Deposit

```solidity
event Deposit(address _asset, address _pToken, uint256 _amount)
```

### Withdrawal

```solidity
event Withdrawal(address _asset, address _pToken, uint256 _amount)
```

### RewardTokenCollected

```solidity
event RewardTokenCollected(address recipient, address rewardToken, uint256 amount)
```

### RewardTokenAddressesUpdated

```solidity
event RewardTokenAddressesUpdated(address[] _oldAddresses, address[] _newAddresses)
```

### HarvesterAddressesUpdated

```solidity
event HarvesterAddressesUpdated(address _oldHarvesterAddress, address _newHarvesterAddress)
```

### platformAddress

```solidity
address platformAddress
```

Address of the underlying platform

### vaultAddress

```solidity
address vaultAddress
```

Address of the OToken vault

### assetToPToken

```solidity
mapping(address => address) assetToPToken
```

asset => pToken (Platform Specific Token Address)

### assetsMapped

```solidity
address[] assetsMapped
```

Full list of all assets supported by the strategy

### harvesterAddress

```solidity
address harvesterAddress
```

Address of the Harvester contract allowed to collect reward tokens

### rewardTokenAddresses

```solidity
address[] rewardTokenAddresses
```

Address of the reward tokens. eg CRV, BAL, CVX, AURA

### BaseStrategyConfig

```solidity
struct BaseStrategyConfig {
  address platformAddress;
  address vaultAddress;
}
```
### constructor

```solidity
constructor(struct InitializableAbstractStrategy.BaseStrategyConfig _config) internal
```





#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _config | struct InitializableAbstractStrategy.BaseStrategyConfig | The platform and OToken vault addresses |


### _initialize

```solidity
function _initialize(address[] _rewardTokenAddresses, address[] _assets, address[] _pTokens) internal
```



Internal initialize function, to set up initial internal state

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

Collect accumulated reward token and send to Vault.





### _collectRewardTokens

```solidity
function _collectRewardTokens() internal virtual
```



Default implementation that transfers reward tokens to the Vault.
Implementing strategies need to add custom logic to collect the rewards.



### onlyVault

```solidity
modifier onlyVault()
```

_Verifies that the caller is the Vault._

### onlyHarvester

```solidity
modifier onlyHarvester()
```

_Verifies that the caller is the Harvester._

### onlyVaultOrGovernor

```solidity
modifier onlyVaultOrGovernor()
```

_Verifies that the caller is the Vault or Governor._

### onlyVaultOrGovernorOrStrategist

```solidity
modifier onlyVaultOrGovernorOrStrategist()
```

_Verifies that the caller is the Vault, Governor, or Strategist._

### setRewardTokenAddresses

```solidity
function setRewardTokenAddresses(address[] _rewardTokenAddresses) external
```

Set the reward token addresses. Any old addresses will be overwritten.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _rewardTokenAddresses | address[] | Array of reward token addresses |


### getRewardTokenAddresses

```solidity
function getRewardTokenAddresses() external view returns (address[])
```

Get the reward token addresses.




#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address[] | address[] the reward token addresses. |

### setPTokenAddress

```solidity
function setPTokenAddress(address _asset, address _pToken) external virtual
```

Provide support for asset by passing its pToken address.
     This method can only be called by the system Governor



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | Address for the asset |
| _pToken | address | Address for the corresponding platform token |


### removePToken

```solidity
function removePToken(uint256 _assetIndex) external virtual
```

Remove a supported asset by passing its index.
     This method can only be called by the system Governor



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _assetIndex | uint256 | Index of the asset to be removed |


### _setPTokenAddress

```solidity
function _setPTokenAddress(address _asset, address _pToken) internal
```

Provide support for asset by passing its pToken address.
     Add to internal mappings and execute the platform specific,
abstract method `_abstractSetPToken`



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | Address for the asset |
| _pToken | address | Address for the corresponding platform token |


### transferToken

```solidity
function transferToken(address _asset, uint256 _amount) public
```

Transfer token to governor. Intended for recovering tokens stuck in
     strategy contracts, i.e. mistaken sends.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | Address for the asset |
| _amount | uint256 | Amount of the asset to transfer |


### setHarvesterAddress

```solidity
function setHarvesterAddress(address _harvesterAddress) external
```

Set the Harvester contract that can collect rewards.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _harvesterAddress | address | Address of the harvester contract. |


### _abstractSetPToken

```solidity
function _abstractSetPToken(address _asset, address _pToken) internal virtual
```







### safeApproveAllTokens

```solidity
function safeApproveAllTokens() external virtual
```







### deposit

```solidity
function deposit(address _asset, uint256 _amount) external virtual
```

Deposit an amount of assets into the platform



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | Address for the asset |
| _amount | uint256 | Units of asset to deposit |


### depositAll

```solidity
function depositAll() external virtual
```

Deposit all supported assets in this strategy contract to the platform





### withdraw

```solidity
function withdraw(address _recipient, address _asset, uint256 _amount) external virtual
```

Withdraw an `amount` of assets from the platform and
send to the `_recipient`.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _recipient | address | Address to which the asset should be sent |
| _asset | address | Address of the asset |
| _amount | uint256 | Units of asset to withdraw |


### withdrawAll

```solidity
function withdrawAll() external virtual
```

Withdraw all supported assets from platform and
sends to the OToken's Vault.





### checkBalance

```solidity
function checkBalance(address _asset) external view virtual returns (uint256 balance)
```

Get the total asset value held in the platform.
     This includes any interest that was generated since depositing.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | Address of the asset |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| balance | uint256 | Total value of the asset in the platform |

### supportsAsset

```solidity
function supportsAsset(address _asset) public view virtual returns (bool)
```

Check if an asset is supported.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | Address of the asset |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | bool     Whether asset is supported |

