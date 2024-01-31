﻿## VaultValueChecker


### vault

```solidity
contract IVault vault
```

### ousd

```solidity
contract IOUSD ousd
```

### SNAPSHOT_EXPIRES

```solidity
uint256 SNAPSHOT_EXPIRES
```

### Snapshot

```solidity
struct Snapshot {
  uint256 vaultValue;
  uint256 totalSupply;
  uint256 time;
}
```
### snapshots

```solidity
mapping(address => struct VaultValueChecker.Snapshot) snapshots
```

### constructor

```solidity
constructor(address _vault, address _ousd) public
```







### takeSnapshot

```solidity
function takeSnapshot() external
```







### checkDelta

```solidity
function checkDelta(int256 expectedProfit, int256 profitVariance, int256 expectedVaultChange, int256 vaultChangeVariance) external
```







### toInt256

```solidity
function toInt256(uint256 value) internal pure returns (int256)
```







