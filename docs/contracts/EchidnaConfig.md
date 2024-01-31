﻿## EchidnaConfig


### ADDRESS_VAULT

```solidity
address ADDRESS_VAULT
```

### ADDRESS_OUTSIDER_USER

```solidity
address ADDRESS_OUTSIDER_USER
```

### ADDRESS_USER0

```solidity
address ADDRESS_USER0
```

### ADDRESS_USER1

```solidity
address ADDRESS_USER1
```

### ADDRESS_OUTSIDER_CONTRACT

```solidity
address ADDRESS_OUTSIDER_CONTRACT
```

### ADDRESS_CONTRACT0

```solidity
address ADDRESS_CONTRACT0
```

### ADDRESS_CONTRACT1

```solidity
address ADDRESS_CONTRACT1
```

### TOGGLE_KNOWN_ISSUES

```solidity
bool TOGGLE_KNOWN_ISSUES
```

### TOGGLE_KNOWN_ISSUES_WITHIN_LIMITS

```solidity
bool TOGGLE_KNOWN_ISSUES_WITHIN_LIMITS
```

### TOGGLE_STARTING_BALANCE

```solidity
bool TOGGLE_STARTING_BALANCE
```

### STARTING_BALANCE

```solidity
uint256 STARTING_BALANCE
```

### TOGGLE_CHANGESUPPLY_LIMIT

```solidity
bool TOGGLE_CHANGESUPPLY_LIMIT
```

### CHANGESUPPLY_DIVISOR

```solidity
uint256 CHANGESUPPLY_DIVISOR
```

### TOGGLE_MINT_LIMIT

```solidity
bool TOGGLE_MINT_LIMIT
```

### MINT_MODULO

```solidity
uint256 MINT_MODULO
```

### TRANSFER_ROUNDING_ERROR

```solidity
uint256 TRANSFER_ROUNDING_ERROR
```

### OPT_IN_ROUNDING_ERROR

```solidity
uint256 OPT_IN_ROUNDING_ERROR
```

### MINT_ROUNDING_ERROR

```solidity
uint256 MINT_ROUNDING_ERROR
```

### hasKnownIssue

```solidity
modifier hasKnownIssue()
```

Modifier to skip tests that are known to fail

_see TOGGLE_KNOWN_ISSUES for more information_

### hasKnownIssueWithinLimits

```solidity
modifier hasKnownIssueWithinLimits()
```

Modifier to skip tests that are known to fail within limits

_see TOGGLE_KNOWN_ISSUES_WITHIN_LIMITS for more information_

### getAccount

```solidity
function getAccount(uint8 accountId) internal view returns (address account)
```

Translate an account ID to an address



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| accountId | uint8 | The ID of the account |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| account | address | The address of the account |

