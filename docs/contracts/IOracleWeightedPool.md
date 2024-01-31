﻿## IOracleWeightedPool


### getTimeWeightedAverage

```solidity
function getTimeWeightedAverage(struct OracleAverageQuery[] queries) external view returns (uint256[] results)
```



Returns the time average weighted price corresponding to each of `queries`. Prices are represented as 18
decimal fixed point values.



