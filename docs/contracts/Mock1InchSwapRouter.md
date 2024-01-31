﻿## Mock1InchSwapRouter


### MockSwap

```solidity
event MockSwap(address executor, bytes permitData, bytes executorData)
```

### MockSwapDesc

```solidity
event MockSwapDesc(address srcToken, address dstToken, address srcReceiver, address dstReceiver, uint256 amount, uint256 minReturnAmount, uint256 flags)
```

### MockUnoswapTo

```solidity
event MockUnoswapTo(address recipient, address srcToken, uint256 amount, uint256 minReturn, uint256[] pools)
```

### MockUniswapV3SwapTo

```solidity
event MockUniswapV3SwapTo(address recipient, uint256 amount, uint256 minReturn, uint256[] pools)
```

### swap

```solidity
function swap(address executor, struct SwapDescription desc, bytes permitData, bytes executorData) public returns (uint256 returnAmount, uint256 spentAmount)
```



transfers the shource asset and returns the minReturnAmount of the destination asset.



### _swapDesc

```solidity
function _swapDesc(struct SwapDescription desc) public
```







### unoswapTo

```solidity
function unoswapTo(address payable recipient, address srcToken, uint256 amount, uint256 minReturn, uint256[] pools) public returns (uint256 returnAmount)
```



only transfers the source asset to this contract.
Ideally it would return the destination asset but that's encoded in the pools array.



### uniswapV3SwapTo

```solidity
function uniswapV3SwapTo(address payable recipient, uint256 amount, uint256 minReturn, uint256[] pools) public returns (uint256 returnAmount)
```



does not do any transfers. Just emits MockUniswapV3SwapTo.



