﻿## IHevm


### warp

```solidity
function warp(uint256 x) external
```







### roll

```solidity
function roll(uint256 x) external
```







### store

```solidity
function store(address c, bytes32 loc, bytes32 val) external
```







### load

```solidity
function load(address c, bytes32 loc) external returns (bytes32 val)
```







### sign

```solidity
function sign(uint256 sk, bytes32 digest) external returns (uint8 v, bytes32 r, bytes32 s)
```







### addr

```solidity
function addr(uint256 sk) external returns (address addr)
```







### ffi

```solidity
function ffi(string[]) external returns (bytes)
```







### prank

```solidity
function prank(address sender) external
```







