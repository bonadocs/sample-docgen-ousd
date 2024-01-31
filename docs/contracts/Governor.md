﻿## Governor


### proposalCount

```solidity
uint256 proposalCount
```

### Proposal

```solidity
struct Proposal {
  uint256 id;
  address proposer;
  uint256 eta;
  address[] targets;
  string[] signatures;
  bytes[] calldatas;
  bool executed;
}
```
### proposals

```solidity
mapping(uint256 => struct Governor.Proposal) proposals
```

### ProposalCreated

```solidity
event ProposalCreated(uint256 id, address proposer, address[] targets, string[] signatures, bytes[] calldatas, string description)
```

### ProposalQueued

```solidity
event ProposalQueued(uint256 id, uint256 eta)
```

### ProposalExecuted

```solidity
event ProposalExecuted(uint256 id)
```

### ProposalCancelled

```solidity
event ProposalCancelled(uint256 id)
```

### MAX_OPERATIONS

```solidity
uint256 MAX_OPERATIONS
```

### ProposalState

```solidity
enum ProposalState {
  Pending,
  Queued,
  Expired,
  Executed
}
```
### constructor

<BonadocsWidget widgetConfigUri="ipfs://bafkreibyu6ldiox6mtz3q7rrtlseehi3dfgn7xqkroo55kq5xaoscxiaqe" contract="Governor" functionKey="0xundefined" />







### propose

<BonadocsWidget widgetConfigUri="ipfs://bafkreibyu6ldiox6mtz3q7rrtlseehi3dfgn7xqkroo55kq5xaoscxiaqe" contract="Governor" functionKey="0x11e91b9a" />

Propose Governance call(s)



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| targets | address[] | Ordered list of targeted addresses |
| signatures | string[] | Orderd list of function signatures to be called |
| calldatas | bytes[] | Orderded list of calldata to be passed with each call |
| description | string | Description of the governance |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | uint256 id of the proposal |

### queue

<BonadocsWidget widgetConfigUri="ipfs://bafkreibyu6ldiox6mtz3q7rrtlseehi3dfgn7xqkroo55kq5xaoscxiaqe" contract="Governor" functionKey="0xddf0b009" />

Queue a proposal for execution



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| proposalId | uint256 | id of the proposal to queue |


### state

<BonadocsWidget widgetConfigUri="ipfs://bafkreibyu6ldiox6mtz3q7rrtlseehi3dfgn7xqkroo55kq5xaoscxiaqe" contract="Governor" functionKey="0x3e4f49e6" />

Get the state of a proposal



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| proposalId | uint256 | id of the proposal |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum Governor.ProposalState | ProposalState |

### _queueOrRevert

<BonadocsWidget widgetConfigUri="ipfs://bafkreibyu6ldiox6mtz3q7rrtlseehi3dfgn7xqkroo55kq5xaoscxiaqe" contract="Governor" functionKey="0xundefined" />







### execute

<BonadocsWidget widgetConfigUri="ipfs://bafkreibyu6ldiox6mtz3q7rrtlseehi3dfgn7xqkroo55kq5xaoscxiaqe" contract="Governor" functionKey="0xfe0d94c1" />

Execute a proposal.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| proposalId | uint256 | id of the proposal |


### cancel

<BonadocsWidget widgetConfigUri="ipfs://bafkreibyu6ldiox6mtz3q7rrtlseehi3dfgn7xqkroo55kq5xaoscxiaqe" contract="Governor" functionKey="0x40e58ee5" />

Cancel a proposal.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| proposalId | uint256 | id of the proposal |


### getActions

<BonadocsWidget widgetConfigUri="ipfs://bafkreibyu6ldiox6mtz3q7rrtlseehi3dfgn7xqkroo55kq5xaoscxiaqe" contract="Governor" functionKey="0x328dd982" />

Get the actions that a proposal will take.



#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| proposalId | uint256 | id of the proposal |


