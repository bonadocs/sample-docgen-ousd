﻿## AaveStrategy


### referralCode

```solidity
uint16 referralCode
```

### incentivesController

```solidity
contract IAaveIncentivesController incentivesController
```

### stkAave

```solidity
contract IAaveStakedToken stkAave
```

### constructor

```solidity
constructor(struct InitializableAbstractStrategy.BaseStrategyConfig _stratConfig) public
```





#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _stratConfig | struct InitializableAbstractStrategy.BaseStrategyConfig | The platform and OToken vault addresses |


### initialize

```solidity
function initialize(address[] _rewardTokenAddresses, address[] _assets, address[] _pTokens, address _incentivesAddress, address _stkAaveAddress) external
```

Initializer for setting up strategy internal state. This overrides the
InitializableAbstractStrategy initializer as AAVE needs several extra
addresses for the rewards program.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _rewardTokenAddresses | address[] | Address of the AAVE token |
| _assets | address[] | Addresses of supported assets |
| _pTokens | address[] | Platform Token corresponding addresses |
| _incentivesAddress | address | Address of the AAVE incentives controller |
| _stkAaveAddress | address | Address of the stkAave contract |


### deposit

```solidity
function deposit(address _asset, uint256 _amount) external
```



Deposit asset into Aave

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | Address of asset to deposit |
| _amount | uint256 | Amount of asset to deposit |


### _deposit

```solidity
function _deposit(address _asset, uint256 _amount) internal
```



Deposit asset into Aave

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | Address of asset to deposit |
| _amount | uint256 | Amount of asset to deposit |


### depositAll

```solidity
function depositAll() external
```



Deposit the entire balance of any supported asset into Aave



### withdraw

```solidity
function withdraw(address _recipient, address _asset, uint256 _amount) external
```



Withdraw asset from Aave

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _recipient | address | Address to receive withdrawn asset |
| _asset | address | Address of asset to withdraw |
| _amount | uint256 | Amount of asset to withdraw |


### withdrawAll

```solidity
function withdrawAll() external
```



Remove all assets from platform and send them to Vault contract.



### checkBalance

```solidity
function checkBalance(address _asset) external view returns (uint256 balance)
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

### supportsAsset

```solidity
function supportsAsset(address _asset) public view returns (bool)
```



Returns bool indicating whether asset is supported by strategy

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | Address of the asset |


### safeApproveAllTokens

```solidity
function safeApproveAllTokens() external
```



Approve the spending of all assets by their corresponding aToken,
     if for some reason is it necessary.



### _abstractSetPToken

```solidity
function _abstractSetPToken(address _asset, address _aToken) internal
```



Internal method to respond to the addition of new asset / aTokens
            We need to give the AAVE lending pool approval to transfer the
            asset.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | Address of the asset to approve |
| _aToken | address | Address of the aToken |


### _getATokenFor

```solidity
function _getATokenFor(address _asset) internal view returns (address)
```



Get the aToken wrapped in the IERC20 interface for this asset.
     Fails if the pToken doesn't exist in our mappings.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | Address of the asset |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | Corresponding aToken to this asset |

### _getLendingPool

```solidity
function _getLendingPool() internal view returns (contract IAaveLendingPool)
```



Get the current address of the Aave lending pool, which is the gateway to
     depositing.


#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | contract IAaveLendingPool | Current lending pool implementation |

### collectRewardTokens

```solidity
function collectRewardTokens() external
```



Collect stkAave, convert it to AAVE send to Vault.



