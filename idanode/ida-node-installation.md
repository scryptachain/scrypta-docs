# IdANode installation
Installing an IdANode is quite simple. First you need to install all the required technologies. The dependencies mainly concern NodeJS, MongoDB and the official Scrypta wallet.

We recommend deploying on a machine that has Ubuntu 16.04 with at least 2GB of RAM.

The install.sh file will install all the dependencies for you and you can check the script later on this page. The most important thing is to edit the .env file following the installation, inserting all the data fields correctly, specifically:

 - **RPCUSER:** The same value inserted inside the wallet, by default it is "lyrarpc". It is essential to edit this field both in the `lyra.conf` and in the `.env`
 - **RPCPASSWORD:** The same value inserted inside the wallet, by default it is "lyrapassword". It is essential to edit this field both in the `lyra.conf` and in the `.env`
 - **RPCPORT:** It must be `42223` and it is already preset
 - **RPCADDRESS:** If the wallet is installed inside the same machine it must be `localhost`. Any IP address of an external machine must be entered.
 - **LYRAPATH:** Path pointing to the folder containing the `lyrad` file
 - **DEBUG**: It is used to work with active debug mode, which we recommend
 - **DB_PORT**: The connection port for MongoDB, by default it is `28015`
 - **DB_HOST**: If the database is installed on the same machine, it must be `localhost`. Any IP address of an external machine must be entered.
 - **COIN**: By default it is `LYRA`: to be changed for any integration with other blockchains
 - **SYNC**: By default it is `true` and is used to activate or deactivate automatic synchronization. It can be disabled for debugging purposes
 - **AIRDROP**: The amount of Lyra that the IdANode sends each time an address is initialized
 - **SERVERMODE**: Determines whether the system should install a Tray Icon in the topbar to quickly close the IdANode. By default it is `false`.
 - **TESTNET**: It defines whether the IdANode is in testnet mode or not, the value can be entered as `true` or` false`.
 - **LYRADATAFOLDER**: Path pointing to the folder containing the Scrypta blockchain files. Usually it is `~ / .lyra`. It is essential to successfully start the bootstrap file construction process.
 - **NODE_KEY**: It is the private key that identifies the IdANode. It is used to sign requests made from the outside and communicate with the P2P network.

## Installation example
To install IdANode through the `install.sh` script it is necessary to use these commands:
```
cd ~
git clone https://github.com/scryptachain/scrypta-idanodejs
cd scrypta-idanodejs
chmod 777 install.sh
./install.sh
```
At this point we first edit the lyra.conf file through the `nano ~/.lyra/lyra.conf` command and modify` rpcuser` and `rpcpassword` with two random values:

```
rpcuser=YsmtF6bvBrY82Q
rpcpassword=e43GkfCGMYaXsr
```

Now let's modify our `.env` file through the `nano ~/scrypta-idanodejs/.env` command and modify the parameters:
```
RPCUSER=YsmtF6bvBrY82Q
RPCPASSWORD=e43GkfCGMYaXsr
LYRAPATH=/home/YourLinuxUser/scrypta-idanodejs
```
At this point we are ready to test our configuration through the `npm run dev` command.
If all goes well we will see a result similar to this:
```
Scrypta IdANode listening at port 3001. Public IP is: 37.161.46.223
LYRA wallet successfully connected.
Database connected successfully.
Starting database check.
Collection settings created.
Collection transactions created.
Checking index address of collection transactions
Checking index txid of collection transactions
Checking index time of collection transactions
Checking index block of collection transactions
Swarm listening on /ip4/127.0.0.1/tcp/4002/ipfs/QmcTiDC92gos8rZJNPj5CwToPUP597CQqFvRfxPCY3ZHvT
Swarm listening on /ip4/10.61.255.119/tcp/4002/ipfs/QmcTiDC92gos8rZJNPj5CwToPUP597CQqFvRfxPCY3ZHvT
Swarm listening on /ip4/127.0.0.1/tcp/4003/ws/ipfs/QmcTiDC92gos8rZJNPj5CwToPUP597CQqFvRfxPCY3ZHvT
Swarm listening on /p2p-circuit/ipfs/QmcTiDC92gos8rZJNPj5CwToPUP597CQqFvRfxPCY3ZHvT
Swarm listening on /p2p-circuit/ip4/127.0.0.1/tcp/4002/ipfs/QmcTiDC92gos8rZJNPj5CwToPUP597CQqFvRfxPCY3ZHvT
Swarm listening on /p2p-circuit/ip4/10.61.255.119/tcp/4002/ipfs/QmcTiDC92gos8rZJNPj5CwToPUP597CQqFvRfxPCY3ZHvT
Swarm listening on /p2p-circuit/ip4/127.0.0.1/tcp/4003/ws/ipfs/QmcTiDC92gos8rZJNPj5CwToPUP597CQqFvRfxPCY3ZHvT
Checking compound index ["address","txid"] of collection transactions
Collection received created.
Checking index address of collection received
Checking index block of collection received
Checking index uuid of collection received
Checking index collection of collection received
Checking index protocol of collection received
Checking compound index ["txid","address"] of collection received
Collection written created.
Checking index address of collection written
Checking index block of collection written
Checking index uuid of collection written
Checking index collection of collection written
Checking index protocol of collection written
Checking compound index ["uuid","block"] of collection written
Collection unspent created.
Checking index address of collection unspent
Checking index txid of collection unspent
Checking compound index ["txid","vout"] of collection unspent
Database and tables are ok.
Starting block synchronization.
FOUND 428314 BLOCKS IN THE BLOCKCHAIN
```
Now the IdANode will start to synchronize all the data present in the blockchain. Congratulations you have installed the IdANode!
If you have not downloaded the bootstrap (ie if you have done a manual installation) the synchronization process takes several hours. Otherwise it will take a few minutes, depending on the number of blocks it has to unload.

## Scaricare il bootstrapDownload the bootstrap

To download the bootstrap and install it, simply give the `bootstrap.sh` file permissions and start it:

```
cd scrypta-idanodejs
chmod 777 bootstrap.sh
./bootstrap.sh
```
::: warning WARNING
It is essential that the IdANode is turned off and that the `mongod` process is properly closed, otherwise the process will fail.
:::
