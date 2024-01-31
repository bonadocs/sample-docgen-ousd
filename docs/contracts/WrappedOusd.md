﻿## WrappedOusd


### constructor

```solidity
constructor(contract ERC20 underlying_, string name_, string symbol_) public
```







### initialize

```solidity
function initialize() external
```

Enable OUSD rebasing for this contract





### name

```solidity
function name() public view returns (string)
```



Returns the name of the token.



### symbol

```solidity
function symbol() public view returns (string)
```



Returns the symbol of the token, usually a shorter version of the
name.



### transferToken

```solidity
function transferToken(address asset_, uint256 amount_) external
```

Transfer token to governor. Intended for recovering tokens stuck in
     contract, i.e. mistaken sends. Cannot transfer OUSD



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset_ | address | Address for the asset |
| amount_ | uint256 | Amount of the asset to transfer |


