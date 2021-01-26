# The Guide to the Scrypta ecosystem

![banner](/assets/other/scrypta-banner.png)


Scrypta is a **permissionless**, decentralized and public blockchain. Its consensus method is Proof of Stake (PoS), with an additional network of validators called Masternodes.

The open-source philosophy is the basis of the entire Scrypta project. Through [GitHub](https://github.com/scryptachain) it is possible to monitor the daily research and development work carried out by the entire ecosystem.

The blocks are extracted by the stakers every minute, this guarantees a fast "timeframe" for the execution of transactions and the writing of information. Each block can contain a maximum of 1MB of information. The capacity of each individual transaction to contain arbitrary data (through OP_RETURN) is 50 kilobytes.

The Scrypta team has developed a second operating layer, through the **IdANode**, which allows (in a facilitated, but not exclusive way) the management of arbitrary information through what we have defined: **Progressive Data Management** (PDM). The PDM allows reading, writing and invalidation operations, which in turn constitute the essence of each application (decentralized or not).

This documentation includes the current status of the open-source libraries currently developed by the Scrypta Foundation and its operating system, for further clarification you can contact us by sending an email to: info@scryptachain.org or by joining our channel [Discord](https://discord.me/scryptachain).

## Architecture

The Scrypta ecosystem is based on ** five fundamental pillars ** thanks to which more or less complex decentralized applications can be developed, which interact at various levels with the Blockchain:
-   **Scrypta Core:** is the main javascript library. It allows the creation and management of .sid files, the signature of transactions and data, and the basic interfacing with IdANodes.
    
-   **Scrypta IdANode:** is the NodeJS library needed to develop the blockchain interface nodes, these nodes perform various functions including: block explorer, UTXO tracking and file storage on the IPFS (Interplanetary File System) system.
    
-   **Scrypta Identity Framework:** is the NodeJS library that manages the interaction between external digital identities and the addresses of the Scrypta blockchain. Thanks to the framework it is possible to identify and "mark" Lyra addresses using various external providers.
    
-   **Scrypta Trustlink:** integrated within the IdANodes, the Trustlink is a mechanism thanks to which it is possible to create wallets called "multisignatures" which provide for the obligation of the presence of multiple signatures to perform transactions and therefore data writing.

-   **Scrypta Planum:** it is the solution to help tokenization processes: an open and permissionless sidechain system that allows you to create, exchange and track your own digital assets (tokenized assets) only through the Scrypta blockchain.

-   **Scrypta Smart Contracts:** is the scripting system that allows you to create application details, directly incorporated into the IdaNodes. To learn more about the system you can read an in-depth analysis [here](https://it.scrypta.wiki/idanode/smart-contracts.html).


Through the use of these tools it is possible to develop infinite applications, decentralized and not, for multiple use cases.