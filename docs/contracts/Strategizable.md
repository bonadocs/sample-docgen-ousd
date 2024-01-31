﻿## Strategizable


### StrategistUpdated

```solidity
event StrategistUpdated(address _address)
```

### strategistAddr

```solidity
address strategistAddr
```

### onlyGovernorOrStrategist

```solidity
modifier onlyGovernorOrStrategist()
```

_Verifies that the caller is either Governor or Strategist._

### setStrategistAddr

```solidity
function setStrategistAddr(address _address) external
```



Set address of Strategist

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _address | address | Address of Strategist |


### _setStrategistAddr

```solidity
function _setStrategistAddr(address _address) internal
```



Set address of Strategist

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _address | address | Address of Strategist |


