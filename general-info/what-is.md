# What is Scrypta


## Introduction

Scrypta is a **blockchain permissionless**, decentralized and public. Its consensus method is Proof of Stake (PoS), with an additional network of validators called Masternode.

The blocks are extracted by the stakers every minute, this guarantees a rapid "timeframe" for the execution of transactions and the writing of information. Each block can contain a maximum of 1MB of information. The capacity of each individual transaction to contain arbitrary data (through the OP_RETURN) is 8000 bytes.

The Scrypta team has developed a second operating layer, through the **IdANode**, which allows (in a facilitated, but not exclusive way) the management of arbitrary information through what we have defined: **Progressive Data Management** (PDM). The PDM allows reading, writing and invalidation operations, which in turn constitute the essence of each application (decentralized or not).

This documentation includes the current status of the open-source libraries currently developed by the Scrypta Foundation and its operating system, for further clarification you can contact us by sending an email to: info@scryptachain.org or by joining our channel [Discord](https://discord.me/scryptachain).


<iframe width="560" height="315" src="https://www.youtube.com/embed/eG3sYhHQbFs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Architecture

### Pillars

The Scrypta ecosystem is based on ** five fundamental pillars ** thanks to which more or less complex decentralized applications can be developed, which interact at various levels with the Blockchain:
-   **Scrypta Core:** is the main javascript library. It allows the creation and management of .sid files, the signature of transactions and data, and the basic interfacing with IdANodes.
    
-   **Scrypta IdANode:** is the NodeJS library needed to develop the blockchain interface nodes, these nodes perform various functions including: block explorer, UTXO tracking and file storage on the IPFS (Interplanetary File System) system.
    
-   **Scrypta Identity Framework:** is the NodeJS library that manages the interaction between external digital identities and the addresses of the Scrypta blockchain. Thanks to the framework it is possible to identify and "mark" Lyra addresses using various external providers.
    
-   **Scrypta Trustlink:** integrated within the IdANodes, the Trustlink is a mechanism thanks to which it is possible to create wallets called "multisignatures" which provide for the obligation of the presence of multiple signatures to perform transactions and therefore data writing.

-   **Scrypta Planum:** it is the solution to help tokenization processes: an open and permissionless sidechain system that allows you to create, exchange and track your own digital assets (tokenized assets) only through the Scrypta blockchain.
    

Through the use of these tools it is possible to develop infinite applications, decentralized and not, for multiple use cases.

## Technical notes

We have decided to overturn the concept of "Smart Contract" and the platforms that make systems similar to Ethereum Virtual Machines available. We believe that the Blockchain should be an information container and not a executor. This approach clearly does not allow the creation of scripts and dApps that execute their codes inside the nodes. As we will see, this is not a disadvantage as the user himself will run his decentralized application, which - in all respects - will operate from within his device (Laptop, Mobile, Embedded).

Furthermore, the possibility of creating ** decentralized ** applications of this type allows the development of code that can interact both with the Scrypta blockchain and with other blockchains or other systems (also centralized). This guarantees ** maximum elasticity and interoperability ** during the realization of concrete projects.
::: tip NOTE
Scrypta ** is not ** a platform similar to Ethereum, it does not allow you to create commonly known Smart Contracts, even if it is possible to create a vast amount of applications whose operation can be shared with that of Smart Contracts.
:::