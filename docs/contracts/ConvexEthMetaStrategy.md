﻿## ConvexEthMetaStrategy


### MAX_SLIPPAGE

```solidity
uint256 MAX_SLIPPAGE
```

### ETH_ADDRESS

```solidity
address ETH_ADDRESS
```

### cvxDepositorAddress

```solidity
address cvxDepositorAddress
```

### cvxRewardStaker

```solidity
contract IRewardStaking cvxRewardStaker
```

### cvxDepositorPTokenId

```solidity
uint256 cvxDepositorPTokenId
```

### curvePool

```solidity
contract ICurveETHPoolV1 curvePool
```

### lpToken

```solidity
contract IERC20 lpToken
```

### oeth

```solidity
contract IERC20 oeth
```

### weth

```solidity
contract IWETH9 weth
```

### oethCoinIndex

```solidity
uint128 oethCoinIndex
```

### ethCoinIndex

```solidity
uint128 ethCoinIndex
```

### onlyStrategist

```solidity
modifier onlyStrategist()
```

_Verifies that the caller is the Strategist._

### improvePoolBalance

```solidity
modifier improvePoolBalance()
```

_Checks the Curve pool's balances have improved and the balances
have not tipped to the other side.
This modifier only works on functions that do a single sided add or remove.
The standard deposit function adds to both sides of the pool in a way that
the pool's balance is not worsened.
Withdrawals are proportional so doesn't change the pools asset balance._

### ConvexEthMetaConfig

```solidity
struct ConvexEthMetaConfig {
  address cvxDepositorAddress;
  address cvxRewardStakerAddress;
  uint256 cvxDepositorPTokenId;
  address oethAddress;
  address wethAddress;
}
```
### constructor

```solidity
constructor(struct InitializableAbstractStrategy.BaseStrategyConfig _baseConfig, struct ConvexEthMetaStrategy.ConvexEthMetaConfig _convexConfig) public
```







### initialize

```solidity
function initialize(address[] _rewardTokenAddresses, address[] _assets) external
```

Initializer for setting up strategy internal state. This overrides the
InitializableAbstractStrategy initializer as Curve strategies don't fit
well within that abstraction.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _rewardTokenAddresses | address[] | Address of CRV & CVX |
| _assets | address[] | Addresses of supported assets. eg WETH |


### deposit

```solidity
function deposit(address _weth, uint256 _amount) external
```

Deposit WETH into the Curve pool



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _weth | address | Address of Wrapped ETH (WETH) contract. |
| _amount | uint256 | Amount of WETH to deposit. |


### _deposit

```solidity
function _deposit(address _weth, uint256 _wethAmount) internal
```







### depositAll

```solidity
function depositAll() external
```

Deposit the strategy's entire balance of WETH into the Curve pool





### withdraw

```solidity
function withdraw(address _recipient, address _weth, uint256 _amount) external
```

Withdraw ETH and OETH from the Curve pool, burn the OETH,
convert the ETH to WETH and transfer to the recipient.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _recipient | address | Address to receive withdrawn asset which is normally the Vault. |
| _weth | address | Address of the Wrapped ETH (WETH) contract. |
| _amount | uint256 | Amount of WETH to withdraw. |


### calcTokenToBurn

```solidity
function calcTokenToBurn(uint256 _wethAmount) internal view returns (uint256 lpToBurn)
```







### withdrawAll

```solidity
function withdrawAll() external
```

Remove all ETH and OETH from the Curve pool, burn the OETH,
convert the ETH to WETH and transfer to the Vault contract.





### mintAndAddOTokens

```solidity
function mintAndAddOTokens(uint256 _oTokens) external
```

Mint OTokens and one-sided add to the Curve pool.
This is used when the Curve pool does not have enough OTokens and too many ETH.
The OToken/Asset, eg OETH/ETH, price with increase.
The amount of assets in the vault is unchanged.
The total supply of OTokens is increased.
The asset value of the strategy and vault is increased.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _oTokens | uint256 | The amount of OTokens to be minted and added to the pool. |


### removeAndBurnOTokens

```solidity
function removeAndBurnOTokens(uint256 _lpTokens) external
```

One-sided remove of OTokens from the Curve pool which are then burned.
This is used when the Curve pool has too many OTokens and not enough ETH.
The amount of assets in the vault is unchanged.
The total supply of OTokens is reduced.
The asset value of the strategy and vault is reduced.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _lpTokens | uint256 | The amount of Curve pool LP tokens to be burned for OTokens. |


### removeOnlyAssets

```solidity
function removeOnlyAssets(uint256 _lpTokens) external
```

One-sided remove of ETH from the Curve pool, convert to WETH
and transfer to the vault.
This is used when the Curve pool does not have enough OTokens and too many ETH.
The OToken/Asset, eg OETH/ETH, price with decrease.
The amount of assets in the vault increases.
The total supply of OTokens does not change.
The asset value of the strategy reduces.
The asset value of the vault should be close to the same.

Curve pool LP tokens is used rather than WETH assets as Curve does not
have a way to accurately calculate the amount of LP tokens for a required
amount of ETH. Curve's `calc_token_amount` functioun does not include fees.
A 3rd party libary can be used that takes into account the fees, but this
is a gas intensive process. It's easier for the trusted strategist to
caclulate the amount of Curve pool LP tokens required off-chain.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _lpTokens | uint256 | The amount of Curve pool LP tokens to be burned for ETH. |


### _withdrawAndRemoveFromPool

```solidity
function _withdrawAndRemoveFromPool(uint256 _lpTokens, uint128 coinIndex) internal returns (uint256 coinsRemoved)
```



Remove Curve pool LP tokens from the Convex pool and
do a one-sided remove of ETH or OETH from the Curve pool.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _lpTokens | uint256 | The amount of Curve pool LP tokens to be removed from the Convex pool. |
| coinIndex | uint128 | The index of the coin to be removed from the Curve pool. 0 = ETH, 1 = OETH. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| coinsRemoved | uint256 | The amount of ETH or OETH removed from the Curve pool. |

### collectRewardTokens

```solidity
function collectRewardTokens() external
```

Collect accumulated CRV and CVX rewards and send to the Harvester.





### _lpWithdraw

```solidity
function _lpWithdraw(uint256 _wethAmount) internal
```







### checkBalance

```solidity
function checkBalance(address _asset) public view returns (uint256 balance)
```

Get the total asset value held in the platform



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | Address of the asset |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| balance | uint256 | Total value of the asset in the platform |

### supportsAsset

```solidity
function supportsAsset(address _asset) public view returns (bool)
```

Returns bool indicating whether asset is supported by strategy



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | Address of the asset |


### safeApproveAllTokens

```solidity
function safeApproveAllTokens() external
```

Approve the spending of all assets by their corresponding pool tokens,
     if for some reason is it necessary.





### receive

```solidity
receive() external payable
```

Accept unwrapped WETH





### _abstractSetPToken

```solidity
function _abstractSetPToken(address _asset, address _pToken) internal
```



Since we are unwrapping WETH before depositing it to Curve
     there is no need to to set an approval for WETH on the Curve
     pool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | Address of the asset |
| _pToken | address | Address of the Curve LP token |


### _approveBase

```solidity
function _approveBase() internal
```







### _max

```solidity
function _max(int256 a, int256 b) internal pure returns (int256)
```



Returns the largest of two numbers int256 version



