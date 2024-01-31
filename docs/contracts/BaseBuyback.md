﻿## BaseBuyback


### UniswapUniversalRouterUpdated

```solidity
event UniswapUniversalRouterUpdated(address _address)
```

### RewardsSourceUpdated

```solidity
event RewardsSourceUpdated(address _address)
```

### TreasuryManagerUpdated

```solidity
event TreasuryManagerUpdated(address _address)
```

### OTokenBuyback

```solidity
event OTokenBuyback(address oToken, address swappedFor, uint256 swapAmountIn, uint256 minExpected)
```

### universalRouter

```solidity
address universalRouter
```

### rewardsSource

```solidity
address rewardsSource
```

### treasuryManager

```solidity
address treasuryManager
```

### oToken

```solidity
address oToken
```

### ogv

```solidity
address ogv
```

### cvx

```solidity
address cvx
```

### cvxLocker

```solidity
address cvxLocker
```

### constructor

```solidity
constructor(address _oToken, address _ogv, address _cvx, address _cvxLocker) internal
```







### initialize

```solidity
function initialize(address _uniswapUniversalRouter, address _strategistAddr, address _treasuryManagerAddr, address _rewardsSource) external
```





#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _uniswapUniversalRouter | address | Address of Uniswap V3 Router |
| _strategistAddr | address | Address of Strategist multi-sig wallet |
| _treasuryManagerAddr | address | Address that receives the treasury's share of OUSD |
| _rewardsSource | address | Address of RewardsSource contract |


### setUniswapUniversalRouter

```solidity
function setUniswapUniversalRouter(address _router) external
```



Set address of Uniswap Universal Router for performing liquidation
of platform fee tokens. Setting to 0x0 will pause swaps.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _router | address | Address of the Uniswap Universal router |


### _setUniswapUniversalRouter

```solidity
function _setUniswapUniversalRouter(address _router) internal
```







### setRewardsSource

```solidity
function setRewardsSource(address _address) external
```



Sets the address that receives the OGV buyback rewards

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _address | address | Address |


### _setRewardsSource

```solidity
function _setRewardsSource(address _address) internal
```







### setTreasuryManager

```solidity
function setTreasuryManager(address _address) external
```



Sets the address that can receive and manage the funds for Treasury

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _address | address | Address |


### _setTreasuryManager

```solidity
function _setTreasuryManager(address _address) internal
```







### swap

```solidity
function swap(uint256 oTokenAmount, uint256 minOGV, uint256 minCVX) external
```



Swaps half of `oTokenAmount` to OGV
     and the rest to CVX and finally lock up CVX

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| oTokenAmount | uint256 | Amount of OUSD/OETH to swap |
| minOGV | uint256 | Minimum OGV to receive for oTokenAmount/2 |
| minCVX | uint256 | Minimum CVX to receive for oTokenAmount/2 |


### lockAllCVX

```solidity
function lockAllCVX() external
```



Locks all CVX held by the contract on behalf of the Treasury Manager



### _lockAllCVX

```solidity
function _lockAllCVX() internal
```







### safeApproveAllTokens

```solidity
function safeApproveAllTokens() external
```



Approve CVX Locker to move CVX held by this contract



### transferToken

```solidity
function transferToken(address token, uint256 amount) external
```

Owner function to withdraw a specific amount of a token



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | token to be transferered |
| amount | uint256 | amount of the token to be transferred |


### _getSwapPath

```solidity
function _getSwapPath(address toToken) internal view virtual returns (bytes)
```

Returns the Swap path to use on Uniswap from oToken to `toToken`



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| toToken | address | Target token |


