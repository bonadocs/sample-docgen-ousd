﻿## CompensationClaims

_Airdrop for ERC20 tokens.

  Provides a coin airdrop with a verification period in which everyone
  can check that all claims are correct before any actual funds are moved
  to the contract.

     - Users can claim funds during the claim period.

     - The adjuster can set the amount of each user's claim,
        but only when unlocked, and not during the claim period.

     - The governor can unlock and lock the adjuster, outside the claim period.
     - The governor can start the claim period, if it's not started.
     - The governor can collect any remaining funds after the claim period is over.

 Intended use sequence:

  1. Governor unlocks the adjuster
  2. Adjuster uploads claims
  3. Governor locks the adjuster
  4. Everyone verifies that the claim amounts and totals are correct
  5. Payout funds are moved to the contract
  6. The claim period starts
  7. Users claim funds
  8. The claim period ends
  9. Governor can collect any remaing funds_


### adjuster

```solidity
address adjuster
```

### token

```solidity
address token
```

### end

```solidity
uint256 end
```

### totalClaims

```solidity
uint256 totalClaims
```

### claims

```solidity
mapping(address => uint256) claims
```

### isAdjusterLocked

```solidity
bool isAdjusterLocked
```

### Claim

```solidity
event Claim(address recipient, uint256 amount)
```

### ClaimSet

```solidity
event ClaimSet(address recipient, uint256 amount)
```

### Start

```solidity
event Start(uint256 end)
```

### Lock

```solidity
event Lock()
```

### Unlock

```solidity
event Unlock()
```

### Collect

```solidity
event Collect(address coin, uint256 amount)
```

### constructor

```solidity
constructor(address _token, address _adjuster) public
```







### balanceOf

```solidity
function balanceOf(address _account) external view returns (uint256)
```







### decimals

```solidity
function decimals() external view returns (uint8)
```







### claim

```solidity
function claim(address _recipient) external
```







### setClaims

```solidity
function setClaims(address[] _addresses, uint256[] _amounts) external
```







### lockAdjuster

```solidity
function lockAdjuster() external
```







### _lockAdjuster

```solidity
function _lockAdjuster() internal
```







### unlockAdjuster

```solidity
function unlockAdjuster() external
```







### start

```solidity
function start(uint256 _seconds) external
```







### collect

```solidity
function collect(address _coin) external
```







### onlyInClaimPeriod

```solidity
modifier onlyInClaimPeriod()
```

### notInClaimPeriod

```solidity
modifier notInClaimPeriod()
```

### onlyUnlockedAdjuster

```solidity
modifier onlyUnlockedAdjuster()
```

