﻿## MockOGN

_Token that allows minting and burning.
Important note:
  There is a known race condition in the ERC20 standard on the approve() method.
  See details: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
  The Origin token contract implements the increaseApproval() and decreaseApproval() methods.
  It is strongly recommended to use those methods rather than approve()
  when updating the token allowance._


### SetWhitelistExpiration

```solidity
event SetWhitelistExpiration(uint256 expiration)
```

### AllowedTransactorAdded

```solidity
event AllowedTransactorAdded(address sender)
```

### AllowedTransactorRemoved

```solidity
event AllowedTransactorRemoved(address sender)
```

### AddCallSpenderWhitelist

```solidity
event AddCallSpenderWhitelist(address enabler, address spender)
```

### RemoveCallSpenderWhitelist

```solidity
event RemoveCallSpenderWhitelist(address disabler, address spender)
```

### callSpenderWhitelist

```solidity
mapping(address => bool) callSpenderWhitelist
```

### owner

```solidity
address owner
```

### whitelistExpiration

```solidity
uint256 whitelistExpiration
```

### allowedTransactors

```solidity
mapping(address => bool) allowedTransactors
```

### constructor

```solidity
constructor(uint256 _initialSupply) public
```







### addCallSpenderWhitelist

```solidity
function addCallSpenderWhitelist(address _spender) public
```







### removeCallSpenderWhitelist

```solidity
function removeCallSpenderWhitelist(address _spender) public
```







### approveAndCallWithSender

```solidity
function approveAndCallWithSender(address _spender, uint256 _value, bytes4 _selector, bytes _callParams) public payable returns (bool)
```







### onlyOwner

```solidity
modifier onlyOwner()
```

### allowedTransfer

```solidity
modifier allowedTransfer(address _from, address _to)
```

### whitelistActive

```solidity
function whitelistActive() public view returns (bool)
```







### addAllowedTransactor

```solidity
function addAllowedTransactor(address _transactor) public
```







### removeAllowedTransactor

```solidity
function removeAllowedTransactor(address _transactor) public
```







### setWhitelistExpiration

```solidity
function setWhitelistExpiration(uint256 _expiration) public
```



Set the whitelist expiration, after which the whitelist no longer
applies.



### transfer

```solidity
function transfer(address _to, uint256 _value) public returns (bool)
```







### transferFrom

```solidity
function transferFrom(address _from, address _to, uint256 _value) public returns (bool)
```







