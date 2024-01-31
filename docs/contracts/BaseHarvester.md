﻿## BaseHarvester


### SwapPlatform

```solidity
enum SwapPlatform {
  UniswapV2Compatible,
  UniswapV3,
  Balancer,
  Curve
}
```
### SupportedStrategyUpdate

```solidity
event SupportedStrategyUpdate(address strategyAddress, bool isSupported)
```

### RewardTokenConfigUpdated

```solidity
event RewardTokenConfigUpdated(address tokenAddress, uint16 allowedSlippageBps, uint16 harvestRewardBps, enum BaseHarvester.SwapPlatform swapPlatform, address swapPlatformAddr, bytes swapData, uint256 liquidationLimit, bool doSwapRewardToken)
```

### RewardTokenSwapped

```solidity
event RewardTokenSwapped(address rewardToken, address swappedInto, enum BaseHarvester.SwapPlatform swapPlatform, uint256 amountIn, uint256 amountOut)
```

### RewardProceedsTransferred

```solidity
event RewardProceedsTransferred(address token, address farmer, uint256 protcolYield, uint256 farmerFee)
```

### RewardProceedsAddressChanged

```solidity
event RewardProceedsAddressChanged(address newProceedsAddress)
```

### EmptyAddress

```solidity
error EmptyAddress()
```

### InvalidSlippageBps

```solidity
error InvalidSlippageBps()
```

### InvalidHarvestRewardBps

```solidity
error InvalidHarvestRewardBps()
```

### InvalidSwapPlatform

```solidity
error InvalidSwapPlatform(enum BaseHarvester.SwapPlatform swapPlatform)
```

### InvalidUniswapV2PathLength

```solidity
error InvalidUniswapV2PathLength()
```

### InvalidTokenInSwapPath

```solidity
error InvalidTokenInSwapPath(address token)
```

### EmptyBalancerPoolId

```solidity
error EmptyBalancerPoolId()
```

### InvalidCurvePoolAssetIndex

```solidity
error InvalidCurvePoolAssetIndex(address token)
```

### UnsupportedStrategy

```solidity
error UnsupportedStrategy(address strategyAddress)
```

### SlippageError

```solidity
error SlippageError(uint256 actualBalance, uint256 minExpected)
```

### BalanceMismatchAfterSwap

```solidity
error BalanceMismatchAfterSwap(uint256 actualBalance, uint256 minExpected)
```

### RewardTokenConfig

```solidity
struct RewardTokenConfig {
  uint16 allowedSlippageBps;
  uint16 harvestRewardBps;
  address swapPlatformAddr;
  bool doSwapRewardToken;
  enum BaseHarvester.SwapPlatform swapPlatform;
  uint256 liquidationLimit;
}
```
### rewardTokenConfigs

```solidity
mapping(address => struct BaseHarvester.RewardTokenConfig) rewardTokenConfigs
```

### supportedStrategies

```solidity
mapping(address => bool) supportedStrategies
```

### vaultAddress

```solidity
address vaultAddress
```

### rewardProceedsAddress

```solidity
address rewardProceedsAddress
```

Address receiving rewards proceeds. Initially the Vault contract later will possibly
be replaced by another contract that eases out rewards distribution.

### baseTokenAddress

```solidity
address baseTokenAddress
```

All tokens are swapped to this token before it gets transferred
to the `rewardProceedsAddress`. USDT for OUSD and WETH for OETH.

### baseTokenDecimals

```solidity
uint256 baseTokenDecimals
```

### uniswapV2Path

```solidity
mapping(address => address[]) uniswapV2Path
```

### uniswapV3Path

```solidity
mapping(address => bytes) uniswapV3Path
```

### balancerPoolId

```solidity
mapping(address => bytes32) balancerPoolId
```

### CurvePoolIndices

```solidity
struct CurvePoolIndices {
  uint128 rewardTokenIndex;
  uint128 baseTokenIndex;
}
```
### curvePoolIndices

```solidity
mapping(address => struct BaseHarvester.CurvePoolIndices) curvePoolIndices
```

### constructor

```solidity
constructor(address _vaultAddress, address _baseTokenAddress) internal
```







### setRewardProceedsAddress

```solidity
function setRewardProceedsAddress(address _rewardProceedsAddress) external
```

Set the Address receiving rewards proceeds.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _rewardProceedsAddress | address | Address of the reward token |


### setRewardTokenConfig

```solidity
function setRewardTokenConfig(address _tokenAddress, struct BaseHarvester.RewardTokenConfig tokenConfig, bytes swapData) external
```



Add/update a reward token configuration that holds harvesting config variables

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _tokenAddress | address | Address of the reward token |
| tokenConfig | struct BaseHarvester.RewardTokenConfig |  |
| swapData | bytes | Additional data required for swapping |


### _decodeUniswapV2Path

```solidity
function _decodeUniswapV2Path(bytes data, address token) internal view returns (address[] path)
```



Decodes the data passed into Uniswap V2 path and validates
     it to make sure the path is for `token` to `baseToken`

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| data | bytes | Ecnoded data passed to the `setRewardTokenConfig` |
| token | address | The address of the reward token |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| path | address[] | The validated Uniswap V2 path |

### _decodeUniswapV3Path

```solidity
function _decodeUniswapV3Path(bytes data, address token) internal view returns (bytes path)
```



Decodes the data passed into Uniswap V3 path and validates
     it to make sure the path is for `token` to `baseToken`

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| data | bytes | Ecnoded data passed to the `setRewardTokenConfig` |
| token | address | The address of the reward token |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| path | bytes | The validated Uniswap V3 path |

### _decodeBalancerPoolId

```solidity
function _decodeBalancerPoolId(bytes data, address balancerVault, address token) internal view returns (bytes32 poolId)
```



Decodes the data passed to Balancer Pool ID

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| data | bytes | Ecnoded data passed to the `setRewardTokenConfig` |
| balancerVault | address |  |
| token | address |  |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| poolId | bytes32 | The pool ID |

### _decodeCurvePoolIndices

```solidity
function _decodeCurvePoolIndices(bytes data, address poolAddress, address token) internal view returns (struct BaseHarvester.CurvePoolIndices indices)
```



Decodes the data passed to get the pool indices and
     checks it against the Curve Pool to make sure it's
     not misconfigured. The indices are packed into a single
     uint256 for gas savings

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| data | bytes | Ecnoded data passed to the `setRewardTokenConfig` |
| poolAddress | address | Curve pool address |
| token | address | The address of the reward token |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| indices | struct BaseHarvester.CurvePoolIndices | Packed pool asset indices |

### setSupportedStrategy

```solidity
function setSupportedStrategy(address _strategyAddress, bool _isSupported) external
```



Flags a strategy as supported or not supported one

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _strategyAddress | address | Address of the strategy |
| _isSupported | bool | Bool marking strategy as supported or not supported |


### transferToken

```solidity
function transferToken(address _asset, uint256 _amount) external
```



Transfer token to governor. Intended for recovering tokens stuck in
     contract, i.e. mistaken sends.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | Address for the asset |
| _amount | uint256 | Amount of the asset to transfer |


### harvestAndSwap

```solidity
function harvestAndSwap(address _strategyAddr) external
```



Collect reward tokens from a specific strategy and swap them for
     base token on the configured swap platform. Can be called by anyone.
     Rewards incentivizing the caller are sent to the caller of this function.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _strategyAddr | address | Address of the strategy to collect rewards from |


### harvestAndSwap

```solidity
function harvestAndSwap(address _strategyAddr, address _rewardTo) external
```



Collect reward tokens from a specific strategy and swap them for
     base token on the configured swap platform. Can be called by anyone

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _strategyAddr | address | Address of the strategy to collect rewards from |
| _rewardTo | address | Address where to send a share of harvest rewards to as an incentive      for executing this function |


### _harvestAndSwap

```solidity
function _harvestAndSwap(address _strategyAddr, address _rewardTo) internal
```



Collect reward tokens from a specific strategy and swap them for
     base token on the configured swap platform

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _strategyAddr | address | Address of the strategy to collect rewards from |
| _rewardTo | address | Address where to send a share of harvest rewards to as an incentive      for executing this function |


### _harvest

```solidity
function _harvest(address _strategyAddr) internal
```



Collect reward tokens from a specific strategy and swap them for
     base token on the configured swap platform

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _strategyAddr | address | Address of the strategy to collect rewards from. |


### _swap

```solidity
function _swap(address _swapToken, address _rewardTo, contract IOracle _priceProvider) internal virtual
```



Swap a reward token for the base token on the configured
     swap platform. The token must have a registered price feed
     with the price provider

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _swapToken | address | Address of the token to swap |
| _rewardTo | address | Address where to send the share of harvest rewards to |
| _priceProvider | contract IOracle | Oracle to get prices of the swap token |


### _doSwap

```solidity
function _doSwap(enum BaseHarvester.SwapPlatform swapPlatform, address routerAddress, address rewardTokenAddress, uint256 amountIn, uint256 minAmountOut) internal returns (uint256 amountOut)
```







### _swapWithUniswapV2

```solidity
function _swapWithUniswapV2(address routerAddress, address swapToken, uint256 amountIn, uint256 minAmountOut) internal returns (uint256 amountOut)
```



Swaps the token to `baseToken` with Uniswap V2

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| routerAddress | address | Uniswap V2 Router address |
| swapToken | address | Address of the tokenIn |
| amountIn | uint256 | Amount of `swapToken` to swap |
| minAmountOut | uint256 | Minimum expected amount of `baseToken` |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| amountOut | uint256 | Amount of `baseToken` received after the swap |

### _swapWithUniswapV3

```solidity
function _swapWithUniswapV3(address routerAddress, address swapToken, uint256 amountIn, uint256 minAmountOut) internal returns (uint256 amountOut)
```



Swaps the token to `baseToken` with Uniswap V3

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| routerAddress | address | Uniswap V3 Router address |
| swapToken | address | Address of the tokenIn |
| amountIn | uint256 | Amount of `swapToken` to swap |
| minAmountOut | uint256 | Minimum expected amount of `baseToken` |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| amountOut | uint256 | Amount of `baseToken` received after the swap |

### _swapWithBalancer

```solidity
function _swapWithBalancer(address balancerVaultAddress, address swapToken, uint256 amountIn, uint256 minAmountOut) internal returns (uint256 amountOut)
```



Swaps the token to `baseToken` on Balancer

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| balancerVaultAddress | address | BalancerVaultAddress |
| swapToken | address | Address of the tokenIn |
| amountIn | uint256 | Amount of `swapToken` to swap |
| minAmountOut | uint256 | Minimum expected amount of `baseToken` |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| amountOut | uint256 | Amount of `baseToken` received after the swap |

### _swapWithCurve

```solidity
function _swapWithCurve(address poolAddress, address swapToken, uint256 amountIn, uint256 minAmountOut) internal returns (uint256 amountOut)
```



Swaps the token to `baseToken` on Curve

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| poolAddress | address | Curve Pool Address |
| swapToken | address | Address of the tokenIn |
| amountIn | uint256 | Amount of `swapToken` to swap |
| minAmountOut | uint256 | Minimum expected amount of `baseToken` |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| amountOut | uint256 | Amount of `baseToken` received after the swap |

