﻿## Sanctum


### asset

```solidity
address asset
```

### vault

```solidity
address vault
```

### reborner

```solidity
address reborner
```

### shouldAttack

```solidity
bool shouldAttack
```

### targetMethod

```solidity
uint256 targetMethod
```

### ousdContract

```solidity
address ousdContract
```

### constructor

```solidity
constructor(address _asset, address _vault) public
```







### deploy

```solidity
function deploy(uint256 salt, bytes bytecode) public returns (address addr)
```







### computeAddress

```solidity
function computeAddress(uint256 salt, bytes bytecode) public view returns (address)
```







### setShouldAttack

```solidity
function setShouldAttack(bool _shouldAttack) public
```







### setTargetMethod

```solidity
function setTargetMethod(uint256 target) public
```







### setOUSDAddress

```solidity
function setOUSDAddress(address _ousdContract) public
```







