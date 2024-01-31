﻿## IMorpho


### comptroller

```solidity
function comptroller() external view returns (contract IComptroller)
```







### supply

```solidity
function supply(address _poolTokenAddress, address _onBehalf, uint256 _amount) external
```







### supply

```solidity
function supply(address _poolTokenAddress, address _onBehalf, uint256 _amount, uint256 _maxGasForMatching) external
```







### withdraw

```solidity
function withdraw(address _poolTokenAddress, uint256 _amount) external
```







### claimRewards

```solidity
function claimRewards(address[] _cTokenAddresses, bool _tradeForMorphoToken) external returns (uint256 claimedAmount)
```







