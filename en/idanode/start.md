# Introduction


[IdANode](https://github.com/scryptachain/scrypta-idanodejs) (Interconnected dApp Node) it is certainly the most important technology developed by Scrypta. It is the heart of all data writing and reading operations, as well as the main data source for dApps.

IdANode is a NodeJS application written in TypeScript with a multitude of features:

1.  **Blockchain explorer:** it keeps track of all transactions and all blocks, it can be used like a visual block explorer.
    
2.  **Relay:** it is used by clients (scrypta-core) to send transactions to the network.
    
3.  **Data explorer:**it serves as an interface for reading the information written on the blockchain; this is one of the most important features for dApp development.
    
4.  **IPFS:** it serves as an interface for the distributed file system (InterPlanetary File System), useful for uploading and downloading data.
    
5.  **Replica:** IdANode is the main replica of all the information and files uploaded to the Scrypta Blockchain.
    
6.  **Wallet**: it can also work as a "client", it can perform the same operations as the scrypta-core clients, simply by calling APIs and passing the necessary information.
    
7.  **Trustlink**: Trustlink operations are managed internally by IdANode, including the creation and writing of information by a Trustlink.


Other features in development:

1.  **dApp engine**: the addition of the library that allows you to serve the dApps loaded directly on the blockchain. At the moment it is only possible to load them. The dApp engine is an independent module.
    
2.  **P2P network**: the addition of the library that allows you to exchange information in real time between the IdANodes and between the clients, so as to have an internal messaging system in Scrypta. It is currently an independent module.

## Operation overview


The first script that runs is the `Index.ts` file. This file verifies that the wallet and the database are reachable. Otherwise he worries about starting them and waiting until they are. This system guarantees a certain degree of automation in case some process should stop unexpectedly.

After checking that everything is reachable, the script checks that the collections and indexes exist. Otherwise it initializes the database.

After that, if the `SYNC` parameter is `true` in the `.env`, the script synchronizes the blockchain and the data written on it.

At the same time the Express application serves the APIs, which will be immediately available even if the sync is complete. In this case the available data set will not correspond to the last block.

The Express application is defined in the `App.ts` file and all the various calls can be picked up from there. These will be analyzed in the following chapters.

## Postman
All endpoints can be tested through Postman. The collection is available by clicking the following button:

[![Run in Postman](https://run.pstmn.io/button.svg)](https://documenter.getpostman.com/view/3143294/S11Ltxfq?version=latest)
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTI1NDgwMzQ0Miw5NTkwNTc5OCwtMTEzMj
M3NjgxMl19
-->