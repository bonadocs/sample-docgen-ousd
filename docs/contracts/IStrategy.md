﻿## IStrategy


### deposit

```solidity
function deposit(address _asset, uint256 _amount) external
```



Deposit the given asset to platform

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | asset address |
| _amount | uint256 | Amount to deposit |


### depositAll

```solidity
function depositAll() external
```



Deposit the entire balance of all supported assets in the Strategy
     to the platform



### withdraw

```solidity
function withdraw(address _recipient, address _asset, uint256 _amount) external
```



Withdraw given asset from Lending platform



### withdrawAll

```solidity
function withdrawAll() external
```



Liquidate all assets in strategy and return them to Vault.



### checkBalance

```solidity
function checkBalance(address _asset) external view returns (uint256 balance)
```



Returns the current balance of the given asset.



### supportsAsset

```solidity
function supportsAsset(address _asset) external view returns (bool)
```



Returns bool indicating whether strategy supports asset.



### collectRewardTokens

```solidity
function collectRewardTokens() external
```



Collect reward tokens from the Strategy.



### getRewardTokenAddresses

```solidity
function getRewardTokenAddresses() external view returns (address[])
```



The address array of the reward tokens for the Strategy.



