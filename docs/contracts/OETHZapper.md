﻿## OETHZapper


### oeth

```solidity
contract IERC20 oeth
```

### vault

```solidity
contract IVault vault
```

### weth

```solidity
contract IWETH9 weth
```

### frxeth

```solidity
contract IERC20 frxeth
```

### sfrxeth

```solidity
contract ISfrxETH sfrxeth
```

### Zap

```solidity
event Zap(address minter, address asset, uint256 amount)
```

### constructor

```solidity
constructor(address _oeth, address _vault) public
```







### receive

```solidity
receive() external payable
```



Deposit ETH and receive OETH in return.
Will verify that the user is sent 1:1 for ETH.



### deposit

```solidity
function deposit() public payable returns (uint256)
```



Deposit ETH and receive OETH in return
Will verify that the user is sent 1:1 for ETH.


#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | Amount of OETH sent to user |

### depositSFRXETH

```solidity
function depositSFRXETH(uint256 amount, uint256 minOETH) external returns (uint256)
```



Deposit SFRXETH to the vault and receive OETH in return

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| amount | uint256 | Amount of SFRXETH to deposit |
| minOETH | uint256 | Minimum amount of OETH to receive |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | Amount of OETH sent to user |

### _mint

```solidity
function _mint(address asset, uint256 minOETH) internal returns (uint256)
```



Internal function to mint OETH from an asset

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | Address of asset for the vault to mint from |
| minOETH | uint256 | Minimum amount of OETH to for user to receive |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | Amount of OETH sent to user |

