﻿## InitializeGovernedUpgradeabilityProxy

_This contract combines an upgradeability proxy with our governor system.
It is based on an older version of OpenZeppelins BaseUpgradeabilityProxy
with Solidity ^0.8.0._


### Upgraded

```solidity
event Upgraded(address implementation)
```

_Emitted when the implementation is upgraded._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| implementation | address | Address of the new implementation. |

### initialize

```solidity
function initialize(address _logic, address _initGovernor, bytes _data) public payable
```



Contract initializer with Governor enforcement

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _logic | address | Address of the initial implementation. |
| _initGovernor | address | Address of the initial Governor. |
| _data | bytes | Data to send as msg.data to the implementation to initialize the proxied contract. It should include the signature and the parameters of the function to be called, as described in https://solidity.readthedocs.io/en/v0.4.24/abi-spec.html#function-selector-and-argument-encoding. This parameter is optional, if no data is given the initialization call to proxied contract will be skipped. |


### admin

```solidity
function admin() external view returns (address)
```






#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the proxy admin/it's also the governor. |

### implementation

```solidity
function implementation() external view returns (address)
```






#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the implementation. |

### upgradeTo

```solidity
function upgradeTo(address newImplementation) external
```



Upgrade the backing implementation of the proxy.
Only the admin can call this function.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| newImplementation | address | Address of the new implementation. |


### upgradeToAndCall

```solidity
function upgradeToAndCall(address newImplementation, bytes data) external payable
```



Upgrade the backing implementation of the proxy and call a function
on the new implementation.
This is useful to initialize the proxied contract.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| newImplementation | address | Address of the new implementation. |
| data | bytes | Data to send as msg.data in the low level call. It should include the signature and the parameters of the function to be called, as described in https://solidity.readthedocs.io/en/v0.4.24/abi-spec.html#function-selector-and-argument-encoding. |


### fallback

```solidity
fallback() external payable
```



Fallback function.
Implemented entirely in `_fallback`.



### _delegate

```solidity
function _delegate(address _impl) internal
```



Delegates execution to an implementation contract.
This is a low level function that doesn't return to its internal call site.
It will return to the external caller whatever the implementation returns.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _impl | address | Address to delegate. |


### _willFallback

```solidity
function _willFallback() internal
```



Function that is run as the first thing in the fallback function.
Can be redefined in derived contracts to add functionality.
Redefinitions must call super._willFallback().



### _fallback

```solidity
function _fallback() internal
```



fallback implementation.
Extracted to enable manual triggering.



### IMPLEMENTATION_SLOT

```solidity
bytes32 IMPLEMENTATION_SLOT
```

_Storage slot with the address of the current implementation.
This is the keccak-256 hash of "eip1967.proxy.implementation" subtracted by 1, and is
validated in the constructor._

### _implementation

```solidity
function _implementation() internal view returns (address impl)
```



Returns the current implementation.


#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| impl | address | Address of the current implementation |

### _upgradeTo

```solidity
function _upgradeTo(address newImplementation) internal
```



Upgrades the proxy to a new implementation.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| newImplementation | address | Address of the new implementation. |


### _setImplementation

```solidity
function _setImplementation(address newImplementation) internal
```



Sets the implementation address of the proxy.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| newImplementation | address | Address of the new implementation. |


