﻿## OETHBuyback


### ogvPath

```solidity
bytes ogvPath
```

### cvxPath

```solidity
bytes cvxPath
```

### constructor

```solidity
constructor(address _oToken, address _ogv, address _cvx, address _cvxLocker) public
```







### _getSwapPath

```solidity
function _getSwapPath(address toToken) internal view returns (bytes path)
```

Returns the Swap path to use on Uniswap from oToken to `toToken`



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| toToken | address | Target token |


