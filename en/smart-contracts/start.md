# Scrypta Smart Contracts

In the Scrypta Blockchain, Smart Contracts are considered to all intents and purposes as *an extension* of the IdaNode, useful for creating additional features.

Inside the IdaNode the npm module `@scrypta/vm` is called which allows you to create a virtual trustless environment and which allows the smart contract to execute code inside the host machine.

Here the link to the Scrypta Virtual Machine repository: https://github.com/scryptachain/scrypta-vm

## Disclaimer: what Scrypta Smart Contracts are and what they are not
Scrypta Smart Contracts are not directly inspired by Ethereum Smart Contracts. Consequently, Scrypta's approach to Smart Contrats cannot be the same as with Ethereum.

## What Scrypta Smart Contracts are not
- They are not Ethereum Smart Contracts
- They are not automatically hosted in all nodes of the network (IdaNodes)
- They cannot manage LYRA funds or hold private keys
- They do not write information on behalf of the user but it is the user who writes information within the blockchain: the smart contract can *validate* information and maintain its status or be recalled from a data written directly in the blockchain by the user
- They are not a single entity (smart contracts coexist in all the IdaNodes that replicate them and can only agree on the status in a given block)

## What Scrypta Smart Contracts are
- They are really automatic, that is, they self-execute each block or upon receipt of information in the mempool
- They are immutable but updatable, i.e. the code is immutable (because it is publicly displayed within a transaction) but can be updated by publishing a new version. The update is entrusted to each owner of IdaNode.
- They are simple, they are written with Javascript and expose their methods through the IdaNode.
- Although they cannot write on behalf of the user, they can * generate * formally valid transactions and delegate the signature and broadcast to the user.
- They have `consent` features whereby each client can ask if that node is trusted or not.

Having clarified these basic concepts we can start we can proceed with the explanation of the [Scrypta Virtual Machine] (/smart-contracts/scrypta-virtual-machine).