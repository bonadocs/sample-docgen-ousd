﻿## LiquidityReward


### UserInfo

```solidity
struct UserInfo {
  uint256 amount;
  int256 rewardDebt;
}
```
### PoolInfo

```solidity
struct PoolInfo {
  contract IERC20 lpToken;
  uint256 lastRewardBlock;
  uint256 accRewardPerShare;
}
```
### reward

```solidity
contract IERC20 reward
```

### rewardPerBlock

```solidity
uint256 rewardPerBlock
```

### pool

```solidity
struct LiquidityReward.PoolInfo pool
```

### totalRewardDebt

```solidity
int256 totalRewardDebt
```

### totalSupply

```solidity
uint256 totalSupply
```

### userInfo

```solidity
mapping(address => struct LiquidityReward.UserInfo) userInfo
```

### endBlock

```solidity
uint256 endBlock
```

### CampaignStarted

```solidity
event CampaignStarted(uint256 rewardRate, uint256 startBlock, uint256 endBlock)
```

### CampaignStopped

```solidity
event CampaignStopped(uint256 endBlock)
```

### Deposit

```solidity
event Deposit(address user, uint256 amount)
```

### Withdraw

```solidity
event Withdraw(address user, uint256 amount)
```

### Claim

```solidity
event Claim(address user, uint256 amount)
```

### DrainExtraReward

```solidity
event DrainExtraReward(address user, uint256 amount)
```

### DrainExtraLP

```solidity
event DrainExtraLP(address user, uint256 amount)
```

### initialize

```solidity
function initialize(contract IERC20 _reward, contract IERC20 _lpToken) external
```

Initializer for setting up Liquidity Reward internal state.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _reward | contract IERC20 | Address of the reward token(OGN) |
| _lpToken | contract IERC20 | Address of the LP token(Uniswap Pair) |


### startCampaign

```solidity
function startCampaign(uint256 _rewardPerBlock, uint256 _startBlock, uint256 _numBlocks) external
```



start a new reward campaign.
     This will calculate all rewards up to the current block at the old rate.
     This ensures that we pay everyone at the promised rate before update to the new rate.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _rewardPerBlock | uint256 | Amount rewarded per block |
| _startBlock | uint256 | Block number that we want to start the rewards at (0 for current block) |
| _numBlocks | uint256 | number of blocks that the campaign should last |


### stopCampaign

```solidity
function stopCampaign() external
```







### drainExtraRewards

```solidity
function drainExtraRewards() external
```







### drainExtraLP

```solidity
function drainExtraLP() external
```







### campaignActive

```solidity
function campaignActive() external view returns (bool)
```







### balanceOf

```solidity
function balanceOf(address _account) external view returns (uint256)
```







### getCampaignMultiplier

```solidity
function getCampaignMultiplier(uint256 _to) internal view returns (uint256)
```



calculate the number of blocks since we last updated
      within start and end as constraints

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _to | uint256 | Block number of the ending point. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | multiplier Multiplier over the given _from to _to block. |

### pendingRewards

```solidity
function pendingRewards(address _user) external view returns (uint256)
```



View function to see pending rewards for each account on frontend.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _user | address | Address of the account we're looking up. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | reward Total rewards owed to this account. |

### _pendingRewards

```solidity
function _pendingRewards(struct LiquidityReward.UserInfo user) internal view returns (uint256)
```







### totalOutstandingRewards

```solidity
function totalOutstandingRewards() external view returns (uint256)
```



View function to see total outstanding rewards for the entire contract.
     This is how much is owed when everyone pulls out.


#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | reward Total rewards owed to everyone. |

### doUpdatePool

```solidity
function doUpdatePool() external
```



External call for updating the pool.



### updatePool

```solidity
function updatePool() internal
```



Update the Liquidity Pool reward multiplier.
     This locks in the accRewardPerShare from the last update block number to now.
     Will fail if we do not have enough to pay everyone.
     Always call updatePool whenever the balance changes!



### deposit

```solidity
function deposit(uint256 _amount) external
```



Deposit LP tokens into contract, must be preapproved.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _amount | uint256 | Amount of LPToken to deposit. |


### exit

```solidity
function exit() external
```



Exit out of the contract completely, withdraw LP tokens and claim rewards



### withdraw

```solidity
function withdraw(uint256 _amount, bool _claim) external
```



Withdraw LP tokens from contract.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _amount | uint256 | Amount of LPToken to withdraw. |
| _claim | bool | Boolean do we want to claim our rewards or not |


### _withdraw

```solidity
function _withdraw(struct LiquidityReward.UserInfo user, uint256 _amount, bool _claim) internal
```







### claim

```solidity
function claim() external
```



Claim all pending rewards up to current block



### subDebt

```solidity
function subDebt(uint256 amount, int256 debt) internal pure returns (uint256 result)
```







