﻿## OUSDResolutionUpgrade


### RebaseOptions

```solidity
enum RebaseOptions {
  NotSet,
  OptOut,
  OptIn
}
```
### _totalSupply

```solidity
uint256 _totalSupply
```

### vaultAddress

```solidity
address vaultAddress
```

### nonRebasingSupply

```solidity
uint256 nonRebasingSupply
```

### nonRebasingCreditsPerToken

```solidity
mapping(address => uint256) nonRebasingCreditsPerToken
```

### rebaseState

```solidity
mapping(address => enum OUSDResolutionUpgrade.RebaseOptions) rebaseState
```

### isUpgraded

```solidity
mapping(address => uint256) isUpgraded
```

### rebasingCreditsPerToken

```solidity
function rebasingCreditsPerToken() public view returns (uint256)
```






#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | High resolution rebasingCreditsPerToken |

### rebasingCredits

```solidity
function rebasingCredits() public view returns (uint256)
```






#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | High resolution total number of rebasing credits |

### rebasingCreditsPerTokenHighres

```solidity
function rebasingCreditsPerTokenHighres() public view returns (uint256)
```






#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | High resolution rebasingCreditsPerToken |

### rebasingCreditsHighres

```solidity
function rebasingCreditsHighres() public view returns (uint256)
```






#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | High resolution total number of rebasing credits |

### upgradeGlobals

```solidity
function upgradeGlobals() external
```







### upgradeAccounts

```solidity
function upgradeAccounts(address[] accounts) external
```







### creditsBalanceOfHighres

```solidity
function creditsBalanceOfHighres(address _account) public view returns (uint256, uint256, bool)
```







### _creditsPerToken

```solidity
function _creditsPerToken(address _account) internal view returns (uint256)
```



Get the credits per token for an account. Returns a fixed amount
     if the account is non-rebasing.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _account | address | Address of the account. |


