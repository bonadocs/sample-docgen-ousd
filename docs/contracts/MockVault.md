﻿## MockVault


### storedTotalValue

```solidity
uint256 storedTotalValue
```

### setTotalValue

```solidity
function setTotalValue(uint256 _value) public
```







### totalValue

```solidity
function totalValue() external view returns (uint256)
```

Determine the total value of assets held by the vault and its
        strategies.




#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 |  |

### _totalValue

```solidity
function _totalValue() internal view returns (uint256)
```



Internal Calculate the total value of the assets held by the
        vault and its strategies.


#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 |  |

### _checkBalance

```solidity
function _checkBalance(address _asset) internal view returns (uint256 balance)
```

Get the balance of an asset held in Vault and all strategies.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | Address of asset |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| balance | uint256 | Balance of asset in decimals of asset |

### setMaxSupplyDiff

```solidity
function setMaxSupplyDiff(uint256 _maxSupplyDiff) external
```







