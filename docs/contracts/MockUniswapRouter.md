﻿## MockUniswapRouter


### pairMaps

```solidity
mapping(address => address) pairMaps
```

### slippage

```solidity
uint256 slippage
```

### initialize

```solidity
function initialize(address[] _0tokens, address[] _1tokens) public
```







### setSlippage

```solidity
function setSlippage(uint256 _slippage) external
```







### swapExactTokensForTokens

```solidity
function swapExactTokensForTokens(uint256 amountIn, uint256 amountOutMin, address[] path, address to, uint256) external returns (uint256[] amountsOut)
```







### ExactInputParams

```solidity
struct ExactInputParams {
  bytes path;
  address recipient;
  uint256 deadline;
  uint256 amountIn;
  uint256 amountOutMinimum;
}
```
### exactInput

```solidity
function exactInput(struct MockUniswapRouter.ExactInputParams params) external payable returns (uint256 amountOut)
```







### addLiquidity

```solidity
function addLiquidity(address tokenA, address tokenB, uint256 amountADesired, uint256 amountBDesired, uint256 amountAMin, uint256 amountBMin, address to, uint256 deadline) external returns (uint256 amountA, uint256 amountB, uint256 liquidity)
```







### WETH

```solidity
function WETH() external pure returns (address)
```







### execute

```solidity
function execute(bytes, bytes[] inputs, uint256) external payable
```







### _getFirstAndLastToken

```solidity
function _getFirstAndLastToken(bytes path) internal view returns (address token0, address token1)
```







