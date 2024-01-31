﻿## MockAave


### reserveToAToken

```solidity
mapping(address => address) reserveToAToken
```

### pool

```solidity
address pool
```

### core

```solidity
address payable core
```

### factor

```solidity
uint256 factor
```

### addAToken

```solidity
function addAToken(address _aToken, address _underlying) public
```







### setFactor

```solidity
function setFactor(uint256 factor_) public
```







### deposit

```solidity
function deposit(address _reserve, uint256 _amount, address _to, uint16) external
```







### withdraw

```solidity
function withdraw(address asset, uint256 amount, address to) external returns (uint256)
```



Withdraws an `amount` of underlying asset from the reserve, burning the equivalent aTokens owned
E.g. User has 100 aUSDC, calls withdraw() and receives 100 USDC, burning the 100 aUSDC

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | The address of the underlying asset to withdraw |
| amount | uint256 | The underlying amount to be withdrawn   - Send the value type(uint256).max in order to withdraw the whole aToken balance |
| to | address | Address that will receive the underlying, same as msg.sender if the user   wants to receive it on his own wallet, or a different address if the beneficiary is a   different wallet |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The final amount withdrawn |

### getLendingPool

```solidity
function getLendingPool() external view returns (address)
```

Get the current address for Aave LendingPool

Lending pool is the core contract on which to call deposit



