﻿## SingleAssetStaking


### stakingToken

```solidity
contract IERC20 stakingToken
```

### Stake

```solidity
struct Stake {
  uint256 amount;
  uint256 end;
  uint256 duration;
  uint240 rate;
  bool paid;
  uint8 stakeType;
}
```
### DropRoot

```solidity
struct DropRoot {
  bytes32 hash;
  uint256 depth;
}
```
### durations

```solidity
uint256[] durations
```

### rates

```solidity
uint256[] rates
```

### totalOutstanding

```solidity
uint256 totalOutstanding
```

### paused

```solidity
bool paused
```

### userStakes

```solidity
mapping(address => struct SingleAssetStaking.Stake[]) userStakes
```

### dropRoots

```solidity
mapping(uint8 => struct SingleAssetStaking.DropRoot) dropRoots
```

### USER_STAKE_TYPE

```solidity
uint8 USER_STAKE_TYPE
```

### MAX_STAKES

```solidity
uint256 MAX_STAKES
```

### transferAgent

```solidity
address transferAgent
```

### initialize

```solidity
function initialize(address _stakingToken, uint256[] _durations, uint256[] _rates) external
```



Initialize the contracts, sets up durations, rates, and preApprover
     for preApproved contracts can only be called once

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _stakingToken | address | Address of the token that we are staking |
| _durations | uint256[] | Array of allowed durations in seconds |
| _rates | uint256[] | Array of rates(0.3 is 30%) that correspond to the allowed               durations in 1e18 precision |


### _setDurationRates

```solidity
function _setDurationRates(uint256[] _durations, uint256[] _rates) internal
```



Validate and set the duration and corresponding rates, will emit
     events NewRate and NewDurations



### _totalExpectedRewards

```solidity
function _totalExpectedRewards(struct SingleAssetStaking.Stake[] stakes) internal view returns (uint256 total)
```







### _totalExpected

```solidity
function _totalExpected(struct SingleAssetStaking.Stake _stake) internal view returns (uint256)
```







### _airDroppedStakeClaimed

```solidity
function _airDroppedStakeClaimed(address account, uint8 stakeType) internal view returns (bool)
```







### _findDurationRate

```solidity
function _findDurationRate(uint256 duration) internal view returns (uint240)
```







### _stake

```solidity
function _stake(address staker, uint8 stakeType, uint256 duration, uint240 rate, uint256 amount) internal
```



Internal staking function
     will insert the stake into the stakes array and verify we have
     enough to pay off stake + reward

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| staker | address | Address of the staker |
| stakeType | uint8 | Number that represent the type of the stake, 0 is user                  initiated all else is currently preApproved |
| duration | uint256 | Number of seconds this stake will be held for |
| rate | uint240 | Rate(0.3 is 30%) of reward for this stake in 1e18, uint240 =             to fit the bool and type in struct Stake |
| amount | uint256 | Number of tokens to stake in 1e18 |


### _stakeWithChecks

```solidity
function _stakeWithChecks(address staker, uint256 amount, uint256 duration) internal
```







### requireLiquidity

```solidity
modifier requireLiquidity()
```

### getAllDurations

```solidity
function getAllDurations() external view returns (uint256[])
```







### getAllRates

```solidity
function getAllRates() external view returns (uint256[])
```







### getAllStakes

```solidity
function getAllStakes(address account) external view returns (struct SingleAssetStaking.Stake[])
```



Return all the stakes paid and unpaid for a given user

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| account | address | Address of the account that we want to look up |


### durationRewardRate

```solidity
function durationRewardRate(uint256 _duration) external view returns (uint256)
```



Find the rate that corresponds to a given duration

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _duration | uint256 | Number of seconds |


### airDroppedStakeClaimed

```solidity
function airDroppedStakeClaimed(address account, uint8 stakeType) external view returns (bool)
```



Has the airdropped stake already been claimed



### totalStaked

```solidity
function totalStaked(address account) external view returns (uint256 total)
```



Calculate all the staked value a user has put into the contract,
     rewards not included

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| account | address | Address of the account that we want to look up |


### totalExpectedRewards

```solidity
function totalExpectedRewards(address account) external view returns (uint256)
```



Calculate all the rewards a user can expect to receive.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| account | address | Address of the account that we want to look up |


### totalCurrentHoldings

```solidity
function totalCurrentHoldings(address account) external view returns (uint256 total)
```



Calculate all current holdings of a user: staked value + prorated rewards

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| account | address | Address of the account that we want to look up |


### airDroppedStake

```solidity
function airDroppedStake(uint256 index, uint8 stakeType, uint256 duration, uint256 rate, uint256 amount, bytes32[] merkleProof) external
```



Make a preapproved stake for the user, this is a presigned voucher that the user can redeem either from
     an airdrop or a compensation program.
     Only 1 of each type is allowed per user. The proof must match the root hash

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| index | uint256 | Number that is zero base index of the stake in the payout entry |
| stakeType | uint8 | Number that represent the type of the stake, must not be 0 which is user stake |
| duration | uint256 | Number of seconds this stake will be held for |
| rate | uint256 | Rate(0.3 is 30%) of reward for this stake in 1e18, uint240 to fit the bool and type in struct Stake |
| amount | uint256 | Number of tokens to stake in 1e18 |
| merkleProof | bytes32[] | Array of proofs for that amount |


### stake

```solidity
function stake(uint256 amount, uint256 duration) external
```



Stake an approved amount of staking token into the contract.
     User must have already approved the contract for specified amount.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| amount | uint256 | Number of tokens to stake in 1e18 |
| duration | uint256 | Number of seconds this stake will be held for |


### stakeWithSender

```solidity
function stakeWithSender(address staker, uint256 amount, uint256 duration) external returns (bool)
```



Stake an approved amount of staking token into the contract. This function
     can only be called by OGN token contract.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| staker | address | Address of the account that is creating the stake |
| amount | uint256 | Number of tokens to stake in 1e18 |
| duration | uint256 | Number of seconds this stake will be held for |


### exit

```solidity
function exit() external
```



Exit out of all possible stakes



### transferStakes

```solidity
function transferStakes(address _frmAccount, address _dstAccount, bytes32 r, bytes32 s, uint8 v) external
```



Use to transfer all the stakes of an account in the case that the account is compromised
     Requires access to both the account itself and the transfer agent

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _frmAccount | address | the address to transfer from |
| _dstAccount | address | the address to transfer to(must be a clean address with no stakes) |
| r | bytes32 | r portion of the signature by the transfer agent |
| s | bytes32 | s portion of the signature |
| v | uint8 | v portion of the signature |


### setPaused

```solidity
function setPaused(bool _paused) external
```







### setDurationRates

```solidity
function setDurationRates(uint256[] _durations, uint256[] _rates) external
```



Set new durations and rates will not effect existing stakes

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _durations | uint256[] | Array of durations in seconds |
| _rates | uint256[] | Array of rates that corresponds to the durations (0.01 is 1%) in 1e18 |


### setTransferAgent

```solidity
function setTransferAgent(address _agent) external
```



Set the agent that will authorize transfers

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agent | address | Address of agent |


### setAirDropRoot

```solidity
function setAirDropRoot(uint8 _stakeType, bytes32 _rootHash, uint256 _proofDepth) external
```



Set air drop root for a specific stake type

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _stakeType | uint8 | Type of staking must be greater than 0 |
| _rootHash | bytes32 | Root hash of the Merkle Tree |
| _proofDepth | uint256 | Depth of the Merklke Tree |


### Staked

```solidity
event Staked(address user, uint256 amount, uint256 duration, uint256 rate)
```

### Withdrawn

```solidity
event Withdrawn(address user, uint256 amount, uint256 stakedAmount)
```

### Paused

```solidity
event Paused(address user, bool yes)
```

### NewDurations

```solidity
event NewDurations(address user, uint256[] durations)
```

### NewRates

```solidity
event NewRates(address user, uint256[] rates)
```

### NewAirDropRootHash

```solidity
event NewAirDropRootHash(uint8 stakeType, bytes32 rootHash, uint256 proofDepth)
```

### StakesTransfered

```solidity
event StakesTransfered(address fromUser, address toUser, uint256 numStakes)
```

