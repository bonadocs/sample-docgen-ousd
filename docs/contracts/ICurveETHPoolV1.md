﻿## ICurveETHPoolV1


### AddLiquidity

```solidity
event AddLiquidity(address provider, uint256[2] token_amounts, uint256[2] fees, uint256 invariant, uint256 token_supply)
```

### ApplyNewFee

```solidity
event ApplyNewFee(uint256 fee)
```

### Approval

```solidity
event Approval(address owner, address spender, uint256 value)
```

### CommitNewFee

```solidity
event CommitNewFee(uint256 new_fee)
```

### RampA

```solidity
event RampA(uint256 old_A, uint256 new_A, uint256 initial_time, uint256 future_time)
```

### RemoveLiquidity

```solidity
event RemoveLiquidity(address provider, uint256[2] token_amounts, uint256[2] fees, uint256 token_supply)
```

### RemoveLiquidityImbalance

```solidity
event RemoveLiquidityImbalance(address provider, uint256[2] token_amounts, uint256[2] fees, uint256 invariant, uint256 token_supply)
```

### RemoveLiquidityOne

```solidity
event RemoveLiquidityOne(address provider, uint256 token_amount, uint256 coin_amount, uint256 token_supply)
```

### StopRampA

```solidity
event StopRampA(uint256 A, uint256 t)
```

### TokenExchange

```solidity
event TokenExchange(address buyer, int128 sold_id, uint256 tokens_sold, int128 bought_id, uint256 tokens_bought)
```

### Transfer

```solidity
event Transfer(address sender, address receiver, uint256 value)
```

### A

```solidity
function A() external view returns (uint256)
```







### A_precise

```solidity
function A_precise() external view returns (uint256)
```







### DOMAIN_SEPARATOR

```solidity
function DOMAIN_SEPARATOR() external view returns (bytes32)
```







### add_liquidity

```solidity
function add_liquidity(uint256[2] _amounts, uint256 _min_mint_amount) external payable returns (uint256)
```







### add_liquidity

```solidity
function add_liquidity(uint256[2] _amounts, uint256 _min_mint_amount, address _receiver) external payable returns (uint256)
```







### admin_action_deadline

```solidity
function admin_action_deadline() external view returns (uint256)
```







### admin_balances

```solidity
function admin_balances(uint256 i) external view returns (uint256)
```







### admin_fee

```solidity
function admin_fee() external view returns (uint256)
```







### allowance

```solidity
function allowance(address arg0, address arg1) external view returns (uint256)
```







### apply_new_fee

```solidity
function apply_new_fee() external
```







### approve

```solidity
function approve(address _spender, uint256 _value) external returns (bool)
```







### balanceOf

```solidity
function balanceOf(address arg0) external view returns (uint256)
```







### balances

```solidity
function balances(uint256 arg0) external view returns (uint256)
```







### calc_token_amount

```solidity
function calc_token_amount(uint256[2] _amounts, bool _is_deposit) external view returns (uint256)
```







### calc_withdraw_one_coin

```solidity
function calc_withdraw_one_coin(uint256 _burn_amount, int128 i) external view returns (uint256)
```







### coins

```solidity
function coins(uint256 arg0) external view returns (address)
```







### commit_new_fee

```solidity
function commit_new_fee(uint256 _new_fee) external
```







### decimals

```solidity
function decimals() external view returns (uint256)
```







### ema_price

```solidity
function ema_price() external view returns (uint256)
```







### exchange

```solidity
function exchange(int128 i, int128 j, uint256 _dx, uint256 _min_dy) external payable returns (uint256)
```







### exchange

```solidity
function exchange(int128 i, int128 j, uint256 _dx, uint256 _min_dy, address _receiver) external payable returns (uint256)
```







### fee

```solidity
function fee() external view returns (uint256)
```







### future_A

```solidity
function future_A() external view returns (uint256)
```







### future_A_time

```solidity
function future_A_time() external view returns (uint256)
```







### future_fee

```solidity
function future_fee() external view returns (uint256)
```







### get_balances

```solidity
function get_balances() external view returns (uint256[2])
```







### get_dy

```solidity
function get_dy(int128 i, int128 j, uint256 dx) external view returns (uint256)
```







### get_p

```solidity
function get_p() external view returns (uint256)
```







### get_virtual_price

```solidity
function get_virtual_price() external view returns (uint256)
```







### initial_A

```solidity
function initial_A() external view returns (uint256)
```







### initial_A_time

```solidity
function initial_A_time() external view returns (uint256)
```







### initialize

```solidity
function initialize(string _name, string _symbol, address[4] _coins, uint256[4] _rate_multipliers, uint256 _A, uint256 _fee) external
```







### last_price

```solidity
function last_price() external view returns (uint256)
```







### ma_exp_time

```solidity
function ma_exp_time() external view returns (uint256)
```







### ma_last_time

```solidity
function ma_last_time() external view returns (uint256)
```







### name

```solidity
function name() external view returns (string)
```







### nonces

```solidity
function nonces(address arg0) external view returns (uint256)
```







### permit

```solidity
function permit(address _owner, address _spender, uint256 _value, uint256 _deadline, uint8 _v, bytes32 _r, bytes32 _s) external returns (bool)
```







### price_oracle

```solidity
function price_oracle() external view returns (uint256)
```







### ramp_A

```solidity
function ramp_A(uint256 _future_A, uint256 _future_time) external
```







### remove_liquidity

```solidity
function remove_liquidity(uint256 _burn_amount, uint256[2] _min_amounts) external returns (uint256[2])
```







### remove_liquidity

```solidity
function remove_liquidity(uint256 _burn_amount, uint256[2] _min_amounts, address _receiver) external returns (uint256[2])
```







### remove_liquidity_imbalance

```solidity
function remove_liquidity_imbalance(uint256[2] _amounts, uint256 _max_burn_amount) external returns (uint256)
```







### remove_liquidity_imbalance

```solidity
function remove_liquidity_imbalance(uint256[2] _amounts, uint256 _max_burn_amount, address _receiver) external returns (uint256)
```







### remove_liquidity_one_coin

```solidity
function remove_liquidity_one_coin(uint256 _burn_amount, int128 i, uint256 _min_received) external returns (uint256)
```







### remove_liquidity_one_coin

```solidity
function remove_liquidity_one_coin(uint256 _burn_amount, int128 i, uint256 _min_received, address _receiver) external returns (uint256)
```







### set_ma_exp_time

```solidity
function set_ma_exp_time(uint256 _ma_exp_time) external
```







### stop_ramp_A

```solidity
function stop_ramp_A() external
```







### symbol

```solidity
function symbol() external view returns (string)
```







### totalSupply

```solidity
function totalSupply() external view returns (uint256)
```







### transfer

```solidity
function transfer(address _to, uint256 _value) external returns (bool)
```







### transferFrom

```solidity
function transferFrom(address _from, address _to, uint256 _value) external returns (bool)
```







### version

```solidity
function version() external view returns (string)
```







### withdraw_admin_fees

```solidity
function withdraw_admin_fees() external
```







