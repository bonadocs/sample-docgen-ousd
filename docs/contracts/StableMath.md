﻿## StableMath


### scaleBy

```solidity
function scaleBy(uint256 x, uint256 to, uint256 from) internal pure returns (uint256)
```



Adjust the scale of an integer

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| x | uint256 |  |
| to | uint256 | Decimals to scale to |
| from | uint256 | Decimals to scale from |


### mulTruncate

```solidity
function mulTruncate(uint256 x, uint256 y) internal pure returns (uint256)
```



Multiplies two precise units, and then truncates by the full scale

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| x | uint256 | Left hand input to multiplication |
| y | uint256 | Right hand input to multiplication |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | Result after multiplying the two inputs and then dividing by the shared         scale unit |

### mulTruncateScale

```solidity
function mulTruncateScale(uint256 x, uint256 y, uint256 scale) internal pure returns (uint256)
```



Multiplies two precise units, and then truncates by the given scale. For example,
when calculating 90% of 10e18, (10e18 * 9e17) / 1e18 = (9e36) / 1e18 = 9e18

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| x | uint256 | Left hand input to multiplication |
| y | uint256 | Right hand input to multiplication |
| scale | uint256 | Scale unit |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | Result after multiplying the two inputs and then dividing by the shared         scale unit |

### mulTruncateCeil

```solidity
function mulTruncateCeil(uint256 x, uint256 y) internal pure returns (uint256)
```



Multiplies two precise units, and then truncates by the full scale, rounding up the result

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| x | uint256 | Left hand input to multiplication |
| y | uint256 | Right hand input to multiplication |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | Result after multiplying the two inputs and then dividing by the shared          scale unit, rounded up to the closest base unit. |

### divPrecisely

```solidity
function divPrecisely(uint256 x, uint256 y) internal pure returns (uint256)
```



Precisely divides two units, by first scaling the left hand operand. Useful
     for finding percentage weightings, i.e. 8e18/10e18 = 80% (or 8e17)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| x | uint256 | Left hand input to division |
| y | uint256 | Right hand input to division |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | Result after multiplying the left operand by the scale, and         executing the division on the right hand input. |

