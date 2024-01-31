﻿## ThreePoolStrategy


### crvGaugeAddress

```solidity
address crvGaugeAddress
```

### crvMinterAddress

```solidity
address crvMinterAddress
```

### constructor

```solidity
constructor(struct InitializableAbstractStrategy.BaseStrategyConfig _stratConfig) public
```







### initialize

```solidity
function initialize(address[] _rewardTokenAddress, address[] _assets, address[] _pTokens, address _crvGaugeAddress, address _crvMinterAddress) external
```

Initializer for setting up strategy internal state. This overrides the
InitializableAbstractStrategy initializer as Curve strategies don't fit
well within that abstraction.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _rewardTokenAddress | address[] | Address of CRV |
| _assets | address[] | Addresses of supported assets. MUST be passed in the same                order as returned by coins on the pool contract, i.e.                DAI, USDC, USDT |
| _pTokens | address[] | Platform Token corresponding addresses |
| _crvGaugeAddress | address | Address of the Curve DAO gauge for this pool |
| _crvMinterAddress | address | Address of the CRV minter for rewards |


### _lpDepositAll

```solidity
function _lpDepositAll() internal
```







### _lpWithdraw

```solidity
function _lpWithdraw(uint256 numPTokens) internal
```







### _lpWithdrawAll

```solidity
function _lpWithdrawAll() internal
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

### _approveBase

```solidity
function _approveBase() internal
```







### collectRewardTokens

```solidity
function collectRewardTokens() public
```



Collect accumulated CRV and send to Vault.



