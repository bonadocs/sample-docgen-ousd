﻿## MockAaveIncentivesController


### REWARD_TOKEN

```solidity
contract MockStkAave REWARD_TOKEN
```

### constructor

```solidity
constructor(address _reward_token) public
```







### setRewardsBalance

```solidity
function setRewardsBalance(address user, uint256 amount) external
```







### getRewardsBalance

```solidity
function getRewardsBalance(address[] assets, address user) external view returns (uint256)
```



Returns the total of rewards of an user, already accrued + not yet accrued

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| assets | address[] |  |
| user | address | The address of the user |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The rewards |

### claimRewards

```solidity
function claimRewards(address[] assets, uint256 amount, address to) external returns (uint256)
```



Claims reward for an user, on all the assets of the lending pool, accumulating the pending rewards

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| assets | address[] |  |
| amount | uint256 | Amount of rewards to claim |
| to | address | Address that will be receiving the rewards |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | Rewards claimed |

