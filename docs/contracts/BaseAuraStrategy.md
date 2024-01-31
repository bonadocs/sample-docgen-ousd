﻿## BaseAuraStrategy


### auraRewardPoolAddress

```solidity
address auraRewardPoolAddress
```

Address of the Aura rewards pool

### constructor

```solidity
constructor(address _auraRewardPoolAddress) internal
```







### _lpDepositAll

```solidity
function _lpDepositAll() internal virtual
```



Deposit all Balancer Pool Tokens (BPT) in this strategy contract
to the Aura rewards pool.



### _lpWithdraw

```solidity
function _lpWithdraw(uint256 numBPTTokens) internal virtual
```



Withdraw `numBPTTokens` Balancer Pool Tokens (BPT) from
the Aura rewards pool to this strategy contract.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| numBPTTokens | uint256 | Number of Balancer Pool Tokens (BPT) to withdraw |


### _lpWithdrawAll

```solidity
function _lpWithdrawAll() internal virtual
```



Withdraw all Balancer Pool Tokens (BPT) from
the Aura rewards pool to this strategy contract.



### collectRewardTokens

```solidity
function collectRewardTokens() external virtual
```

Collects BAL and AURA tokens from the rewards pool.





### _getBalancerPoolTokens

```solidity
function _getBalancerPoolTokens() internal view returns (uint256 balancerPoolTokens)
```

Balancer Pool Tokens (BPT) in the Balancer pool and the Aura rewards pool.





### _approveBase

```solidity
function _approveBase() internal virtual
```







