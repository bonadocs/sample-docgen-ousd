﻿## EchidnaTestSupply


### prevRebasingCreditsPerToken

```solidity
uint256 prevRebasingCreditsPerToken
```

### testChangeSupply

```solidity
function testChangeSupply(uint256 supply) public
```

After a `changeSupply`, the total supply should exactly
match the target total supply. (This is needed to ensure successive
rebases are correct).



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| supply | uint256 | New total supply |


### testTotalSupplyLessThanTotalBalance

```solidity
function testTotalSupplyLessThanTotalBalance() public
```

The total supply must not be less than the sum of account balances.
(The difference will go into future rebases)





### testNonRebasingSupplyVsTotalSupply

```solidity
function testNonRebasingSupplyVsTotalSupply() public
```

Non-rebasing supply should not be larger than total supply





### testRebasingCreditsPerTokenNotIncreased

```solidity
function testRebasingCreditsPerTokenNotIncreased() public
```

Global `rebasingCreditsPerToken` should never increase





### testRebasingCreditsPerTokenAboveZero

```solidity
function testRebasingCreditsPerTokenAboveZero() public
```

The rebasing credits per token ratio must greater than zero





### testTotalNonRebasingSupplyLessThanTotalBalance

```solidity
function testTotalNonRebasingSupplyLessThanTotalBalance() public
```

The sum of all non-rebasing balances should not be larger than
non-rebasing supply





### testCreditsPerTokenVsBalance

```solidity
function testCreditsPerTokenVsBalance(uint8 targetAcc) public
```

An accounts credits / credits per token should not be larger it's balance



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| targetAcc | uint8 | The account to check |


