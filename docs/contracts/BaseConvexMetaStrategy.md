﻿## BaseConvexMetaStrategy


### MaxWithdrawalSlippageUpdated

```solidity
event MaxWithdrawalSlippageUpdated(uint256 _prevMaxSlippagePercentage, uint256 _newMaxSlippagePercentage)
```

### InitConfig

```solidity
struct InitConfig {
  address cvxDepositorAddress;
  address metapoolAddress;
  address metapoolMainToken;
  address cvxRewardStakerAddress;
  address metapoolLPToken;
  uint256 cvxDepositorPTokenId;
}
```
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

### metapool

```solidity
contract ICurveMetaPool metapool
```

### metapoolMainToken

```solidity
contract IERC20 metapoolMainToken
```

### metapoolLPToken

```solidity
contract IERC20 metapoolLPToken
```

### metapoolAssets

```solidity
address[] metapoolAssets
```

### maxWithdrawalSlippage

```solidity
uint256 maxWithdrawalSlippage
```

### crvCoinIndex

```solidity
uint128 crvCoinIndex
```

### mainCoinIndex

```solidity
uint128 mainCoinIndex
```

### initialize

```solidity
function initialize(address[] _rewardTokenAddresses, address[] _assets, address[] _pTokens, struct BaseConvexMetaStrategy.InitConfig initConfig) external
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
| initConfig | struct BaseConvexMetaStrategy.InitConfig | Various addresses and info for initialization state |


### checkBalance

```solidity
function checkBalance(address _asset) public view virtual returns (uint256 balance)
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

### _calcCurveMetaTokenAmount

```solidity
function _calcCurveMetaTokenAmount(uint128 _coinIndex, uint256 _amount) internal returns (uint256 requiredMetapoolLP)
```



This function is completely analogous to _calcCurveTokenAmount[BaseCurveStrategy]
and just utilizes different Curve (meta)pool API



### _approveBase

```solidity
function _approveBase() internal
```







### _getMetapoolCoinIndex

```solidity
function _getMetapoolCoinIndex(address _asset) internal view returns (uint128)
```



Get the index of the coin



### setMaxWithdrawalSlippage

```solidity
function setMaxWithdrawalSlippage(uint256 _maxWithdrawalSlippage) external
```



Sets max withdrawal slippage that is considered when removing
liquidity from Metapools.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _maxWithdrawalSlippage | uint256 | Max withdrawal slippage denominated in        wad (number with 18 decimals): 1e18 == 100%, 1e16 == 1% IMPORTANT Minimum maxWithdrawalSlippage should actually be 0.1% (1e15) for production usage. Contract allows as low value as 0% for confirming correct behavior in test suite. |


### collectRewardTokens

```solidity
function collectRewardTokens() external
```



Collect accumulated CRV and CVX and send to Harvester.



### _max

```solidity
function _max(int256 a, int256 b) internal pure returns (int256)
```



Returns the largest of two numbers int256 version



