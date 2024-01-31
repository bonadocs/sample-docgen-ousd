﻿## BaseCurveStrategy


### MAX_SLIPPAGE

```solidity
uint256 MAX_SLIPPAGE
```

### THREEPOOL_ASSET_COUNT

```solidity
uint256 THREEPOOL_ASSET_COUNT
```

### pTokenAddress

```solidity
address pTokenAddress
```

### deposit

```solidity
function deposit(address _asset, uint256 _amount) external
```



Deposit asset into the Curve 3Pool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | Address of asset to deposit |
| _amount | uint256 | Amount of asset to deposit |


### _lpDepositAll

```solidity
function _lpDepositAll() internal virtual
```







### depositAll

```solidity
function depositAll() external
```



Deposit the entire balance of any supported asset into the Curve 3pool



### _lpWithdraw

```solidity
function _lpWithdraw(uint256 numCrvTokens) internal virtual
```







### _lpWithdrawAll

```solidity
function _lpWithdrawAll() internal virtual
```







### withdraw

```solidity
function withdraw(address _recipient, address _asset, uint256 _amount) external
```



Withdraw asset from Curve 3Pool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _recipient | address | Address to receive withdrawn asset |
| _asset | address | Address of asset to withdraw |
| _amount | uint256 | Amount of asset to withdraw |


### _calcCurveTokenAmount

```solidity
function _calcCurveTokenAmount(uint256 _coinIndex, uint256 _amount) internal returns (uint256 required3Crv)
```



Calculate amount of LP required when withdrawing specific amount of one
of the underlying assets accounting for fees and slippage.

Curve pools unfortunately do not contain a calculation function for
amount of LP required when withdrawing a specific amount of one of the
underlying tokens and also accounting for fees (Curve's calc_token_amount
does account for slippage but not fees).

Steps taken to calculate the metric:
 - get amount of LP required if fees wouldn't apply
 - increase the LP amount as if fees would apply to the entirety of the underlying
   asset withdrawal. (when withdrawing only one coin fees apply only to amounts
   of other assets pool would return in case of balanced removal - since those need
   to be swapped for the single underlying asset being withdrawn)
 - get amount of underlying asset withdrawn (this Curve function does consider slippage
   and fees) when using the increased LP amount. As LP amount is slightly over-increased
   so is amount of underlying assets returned.
 - since we know exactly how much asset we require take the rate of LP required for asset
   withdrawn to get the exact amount of LP.



### withdrawAll

```solidity
function withdrawAll() external
```



Remove all assets from platform and send them to Vault contract.



### checkBalance

```solidity
function checkBalance(address _asset) public view virtual returns (uint256 balance)
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



Retuns bool indicating whether asset is supported by strategy

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



### _abstractSetPToken

```solidity
function _abstractSetPToken(address _asset, address) internal
```



Call the necessary approvals for the Curve pool and gauge

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | Address of the asset |
|  | address |  |


### _approveAsset

```solidity
function _approveAsset(address _asset) internal
```







### _approveBase

```solidity
function _approveBase() internal virtual
```







### _getCoinIndex

```solidity
function _getCoinIndex(address _asset) internal view returns (uint256)
```



Get the index of the coin



