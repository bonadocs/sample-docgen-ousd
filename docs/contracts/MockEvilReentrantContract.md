﻿## MockEvilReentrantContract


### balancerVault

```solidity
contract IBalancerVault balancerVault
```

### reth

```solidity
contract IERC20 reth
```

### weth

```solidity
contract IERC20 weth
```

### oethVault

```solidity
contract IVault oethVault
```

### poolAddress

```solidity
address poolAddress
```

### balancerPoolId

```solidity
bytes32 balancerPoolId
```

### constructor

```solidity
constructor(address _balancerVault, address _oethVault, address _reth, address _weth, address _poolAddress, bytes32 _poolId) public
```







### doEvilStuff

```solidity
function doEvilStuff() public
```







### getBPTExpected

```solidity
function getBPTExpected(address[] _assets, uint256[] _amounts) internal view virtual returns (uint256 bptExpected)
```







### approveAllTokens

```solidity
function approveAllTokens() public
```







### receive

```solidity
receive() external payable
```







