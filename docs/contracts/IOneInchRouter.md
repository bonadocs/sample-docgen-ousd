﻿## IOneInchRouter


### swap

```solidity
function swap(contract IAggregationExecutor executor, struct SwapDescription desc, bytes permit, bytes data) external returns (uint256 returnAmount, uint256 spentAmount)
```

Performs a swap, delegating all calls encoded in `data` to `executor`.





### unoswapTo

```solidity
function unoswapTo(address payable recipient, contract IERC20 srcToken, uint256 amount, uint256 minReturn, uint256[] pools) external payable returns (uint256 returnAmount)
```

Performs swap using Uniswap exchange. Wraps and unwraps ETH if required.





### uniswapV3SwapTo

```solidity
function uniswapV3SwapTo(address payable recipient, uint256 amount, uint256 minReturn, uint256[] pools) external payable returns (uint256 returnAmount)
```

Performs swap using Uniswap V3 exchange. Wraps and unwraps ETH if required.





