﻿## IOUSD


### Approval

```solidity
event Approval(address owner, address spender, uint256 value)
```

### GovernorshipTransferred

```solidity
event GovernorshipTransferred(address previousGovernor, address newGovernor)
```

### PendingGovernorshipTransfer

```solidity
event PendingGovernorshipTransfer(address previousGovernor, address newGovernor)
```

### TotalSupplyUpdatedHighres

```solidity
event TotalSupplyUpdatedHighres(uint256 totalSupply, uint256 rebasingCredits, uint256 rebasingCreditsPerToken)
```

### Transfer

```solidity
event Transfer(address from, address to, uint256 value)
```

### _totalSupply

```solidity
function _totalSupply() external view returns (uint256)
```







### allowance

```solidity
function allowance(address _owner, address _spender) external view returns (uint256)
```







### approve

```solidity
function approve(address _spender, uint256 _value) external returns (bool)
```







### balanceOf

```solidity
function balanceOf(address _account) external view returns (uint256)
```







### burn

```solidity
function burn(address account, uint256 amount) external
```







### changeSupply

```solidity
function changeSupply(uint256 _newTotalSupply) external
```







### claimGovernance

```solidity
function claimGovernance() external
```







### creditsBalanceOf

```solidity
function creditsBalanceOf(address _account) external view returns (uint256, uint256)
```







### creditsBalanceOfHighres

```solidity
function creditsBalanceOfHighres(address _account) external view returns (uint256, uint256, bool)
```







### decimals

```solidity
function decimals() external view returns (uint8)
```







### decreaseAllowance

```solidity
function decreaseAllowance(address _spender, uint256 _subtractedValue) external returns (bool)
```







### governor

```solidity
function governor() external view returns (address)
```







### increaseAllowance

```solidity
function increaseAllowance(address _spender, uint256 _addedValue) external returns (bool)
```







### initialize

```solidity
function initialize(string _nameArg, string _symbolArg, address _vaultAddress) external
```







### isGovernor

```solidity
function isGovernor() external view returns (bool)
```







### isUpgraded

```solidity
function isUpgraded(address) external view returns (uint256)
```







### mint

```solidity
function mint(address _account, uint256 _amount) external
```







### name

```solidity
function name() external view returns (string)
```







### nonRebasingCreditsPerToken

```solidity
function nonRebasingCreditsPerToken(address) external view returns (uint256)
```







### nonRebasingSupply

```solidity
function nonRebasingSupply() external view returns (uint256)
```







### rebaseOptIn

```solidity
function rebaseOptIn() external
```







### rebaseOptOut

```solidity
function rebaseOptOut() external
```







### rebaseState

```solidity
function rebaseState(address) external view returns (uint8)
```







### rebasingCredits

```solidity
function rebasingCredits() external view returns (uint256)
```







### rebasingCreditsHighres

```solidity
function rebasingCreditsHighres() external view returns (uint256)
```







### rebasingCreditsPerToken

```solidity
function rebasingCreditsPerToken() external view returns (uint256)
```







### rebasingCreditsPerTokenHighres

```solidity
function rebasingCreditsPerTokenHighres() external view returns (uint256)
```







### symbol

```solidity
function symbol() external view returns (string)
```







### totalSupply

```solidity
function totalSupply() external view returns (uint256)
```







### transfer

```solidity
function transfer(address _to, uint256 _value) external returns (bool)
```







### transferFrom

```solidity
function transferFrom(address _from, address _to, uint256 _value) external returns (bool)
```







### transferGovernance

```solidity
function transferGovernance(address _newGovernor) external
```







### vaultAddress

```solidity
function vaultAddress() external view returns (address)
```







