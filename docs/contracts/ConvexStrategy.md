﻿## ConvexStrategy


### cvxDepositorAddress

```solidity
address cvxDepositorAddress
```

### cvxRewardStakerAddress

```solidity
address cvxRewardStakerAddress
```

### cvxDepositorPTokenId

```solidity
uint256 cvxDepositorPTokenId
```

### constructor

```solidity
constructor(struct InitializableAbstractStrategy.BaseStrategyConfig _stratConfig) public
```







### initialize

```solidity
function initialize(address[] _rewardTokenAddresses, address[] _assets, address[] _pTokens, address _cvxDepositorAddress, address _cvxRewardStakerAddress, uint256 _cvxDepositorPTokenId) external
```

Initializer for setting up strategy internal state. This overrides the
InitializableAbstractStrategy initializer as Curve strategies don't fit
well within that abstraction.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _rewardTokenAddresses | address[] | Address of CRV & CVX |
| _assets | address[] | Addresses of supported assets. MUST be passed in the same                order as returned by coins on the pool contract, i.e.                DAI, USDC, USDT |
| _pTokens | address[] | Platform Token corresponding addresses |
| _cvxDepositorAddress | address | Address of the Convex depositor(AKA booster) for this pool |
| _cvxRewardStakerAddress | address | Address of the CVX rewards staker |
| _cvxDepositorPTokenId | uint256 | Pid of the pool referred to by Depositor and staker |


### _lpDepositAll

```solidity
function _lpDepositAll() internal
```







### _lpWithdraw

```solidity
function _lpWithdraw(uint256 numCrvTokens) internal
```







### _lpWithdrawAll

```solidity
function _lpWithdrawAll() internal
```







### _approveBase

```solidity
function _approveBase() internal
```







### checkBalance

```solidity
function checkBalance(address _asset) public view returns (uint256 balance)
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

### collectRewardTokens

```solidity
function collectRewardTokens() external
```



Collect accumulated CRV and CVX and send to Vault.



