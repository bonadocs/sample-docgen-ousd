## _require

```solidity
function _require(bool condition, uint256 errorCode) internal pure
```



Reverts if `condition` is false, with a revert reason containing `errorCode`. Only codes up to 999 are
supported.
Uses the default 'BAL' prefix for the error code



## _require

```solidity
function _require(bool condition, uint256 errorCode, bytes3 prefix) internal pure
```



Reverts if `condition` is false, with a revert reason containing `errorCode`. Only codes up to 999 are
supported.



