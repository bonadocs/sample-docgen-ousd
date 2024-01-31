﻿## OUSD

NOTE that this is an ERC20 token but the invariant that the sum of
balanceOf(x) for all x is not >= totalSupply(). This is a consequence of the
rebasing design. Any integrations with OUSD should be aware.


### TotalSupplyUpdatedHighres

```solidity
event TotalSupplyUpdatedHighres(uint256 totalSupply, uint256 rebasingCredits, uint256 rebasingCreditsPerToken)
```

### AccountRebasingEnabled

```solidity
event AccountRebasingEnabled(address account)
```

### AccountRebasingDisabled

```solidity
event AccountRebasingDisabled(address account)
```

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
mapping(address => enum OUSD.RebaseOptions) rebaseState
```

### isUpgraded

```solidity
mapping(address => uint256) isUpgraded
```

### initialize

```solidity
function initialize(string _nameArg, string _symbolArg, address _vaultAddress, uint256 _initialCreditsPerToken) external
```







### onlyVault

```solidity
modifier onlyVault()
```

_Verifies that the caller is the Vault contract_

### totalSupply

```solidity
function totalSupply() public view returns (uint256)
```






#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The total supply of OUSD. |

### rebasingCreditsPerToken

```solidity
function rebasingCreditsPerToken() public view returns (uint256)
```






#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | Low resolution rebasingCreditsPerToken |

### rebasingCredits

```solidity
function rebasingCredits() public view returns (uint256)
```






#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | Low resolution total number of rebasing credits |

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

### balanceOf

```solidity
function balanceOf(address _account) public view returns (uint256)
```



Gets the balance of the specified address.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _account | address | Address to query the balance of. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | A uint256 representing the amount of base units owned by the         specified address. |

### creditsBalanceOf

```solidity
function creditsBalanceOf(address _account) public view returns (uint256, uint256)
```



Gets the credits balance of the specified address.
Backwards compatible with old low res credits per token.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _account | address | The address to query the balance of. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | (uint256, uint256) Credit balance and credits per token of the         address |
| [1] | uint256 |  |

### creditsBalanceOfHighres

```solidity
function creditsBalanceOfHighres(address _account) public view returns (uint256, uint256, bool)
```



Gets the credits balance of the specified address.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _account | address | The address to query the balance of. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | (uint256, uint256, bool) Credit balance, credits per token of the         address, and isUpgraded |
| [1] | uint256 |  |
| [2] | bool |  |

### transfer

```solidity
function transfer(address _to, uint256 _value) public returns (bool)
```



Transfer tokens to a specified address.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _to | address | the address to transfer to. |
| _value | uint256 | the amount to be transferred. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true on success. |

### transferFrom

```solidity
function transferFrom(address _from, address _to, uint256 _value) public returns (bool)
```



Transfer tokens from one address to another.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _from | address | The address you want to send tokens from. |
| _to | address | The address you want to transfer to. |
| _value | uint256 | The amount of tokens to be transferred. |


### _executeTransfer

```solidity
function _executeTransfer(address _from, address _to, uint256 _value) internal
```



Update the count of non rebasing credits in response to a transfer

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _from | address | The address you want to send tokens from. |
| _to | address | The address you want to transfer to. |
| _value | uint256 | Amount of OUSD to transfer |


### allowance

```solidity
function allowance(address _owner, address _spender) public view returns (uint256)
```



Function to check the amount of tokens that _owner has allowed to
     `_spender`.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | The address which owns the funds. |
| _spender | address | The address which will spend the funds. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The number of tokens still available for the _spender. |

### approve

```solidity
function approve(address _spender, uint256 _value) public returns (bool)
```



Approve the passed address to spend the specified amount of tokens
     on behalf of msg.sender. This method is included for ERC20
     compatibility. `increaseAllowance` and `decreaseAllowance` should be
     used instead.

     Changing an allowance with this method brings the risk that someone
     may transfer both the old and the new allowance - if they are both
     greater than zero - if a transfer transaction is mined before the
     later approve() call is mined.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _spender | address | The address which will spend the funds. |
| _value | uint256 | The amount of tokens to be spent. |


### increaseAllowance

```solidity
function increaseAllowance(address _spender, uint256 _addedValue) public returns (bool)
```



Increase the amount of tokens that an owner has allowed to
     `_spender`.
     This method should be used instead of approve() to avoid the double
     approval vulnerability described above.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _spender | address | The address which will spend the funds. |
| _addedValue | uint256 | The amount of tokens to increase the allowance by. |


### decreaseAllowance

```solidity
function decreaseAllowance(address _spender, uint256 _subtractedValue) public returns (bool)
```



Decrease the amount of tokens that an owner has allowed to
            `_spender`.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _spender | address | The address which will spend the funds. |
| _subtractedValue | uint256 | The amount of tokens to decrease the allowance        by. |


### mint

```solidity
function mint(address _account, uint256 _amount) external
```



Mints new tokens, increasing totalSupply.



### _mint

```solidity
function _mint(address _account, uint256 _amount) internal
```



Creates `_amount` tokens and assigns them to `_account`, increasing
the total supply.

Emits a {Transfer} event with `from` set to the zero address.

Requirements

- `to` cannot be the zero address.



### burn

```solidity
function burn(address account, uint256 amount) external
```



Burns tokens, decreasing totalSupply.



### _burn

```solidity
function _burn(address _account, uint256 _amount) internal
```



Destroys `_amount` tokens from `_account`, reducing the
total supply.

Emits a {Transfer} event with `to` set to the zero address.

Requirements

- `_account` cannot be the zero address.
- `_account` must have at least `_amount` tokens.



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


### _isNonRebasingAccount

```solidity
function _isNonRebasingAccount(address _account) internal returns (bool)
```



Is an account using rebasing accounting or non-rebasing accounting?
     Also, ensure contracts are non-rebasing if they have not opted in.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _account | address | Address of the account. |


### _ensureRebasingMigration

```solidity
function _ensureRebasingMigration(address _account) internal
```



Ensures internal account for rebasing and non-rebasing credits and
     supply is updated following deployment of frozen yield change.



### governanceRebaseOptIn

```solidity
function governanceRebaseOptIn(address _account) public
```

Enable rebasing for an account.

Add a contract address to the non-rebasing exception list. The
address's balance will be part of rebases and the account will be exposed
to upside and downside.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _account | address | Address of the account. |


### rebaseOptIn

```solidity
function rebaseOptIn() public
```



Add a contract address to the non-rebasing exception list. The
address's balance will be part of rebases and the account will be exposed
to upside and downside.



### _rebaseOptIn

```solidity
function _rebaseOptIn(address _account) internal
```







### rebaseOptOut

```solidity
function rebaseOptOut() public
```



Explicitly mark that an address is non-rebasing.



### changeSupply

```solidity
function changeSupply(uint256 _newTotalSupply) external
```



Modify the supply without minting new tokens. This uses a change in
     the exchange rate between "credits" and OUSD tokens to change balances.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _newTotalSupply | uint256 | New total supply of OUSD. |


