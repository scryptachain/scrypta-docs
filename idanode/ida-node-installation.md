# IdANode installation
Although the installation procedure of an IdANode is quite simple, it is necessary to have the necessary skills to work through the Linux terminal and then to keep the IdANode active.
<br>The installation takes place through a script that will take care of configuring the machine with the necessary libraries and all the required technologies.
Mainly the dependencies concern NodeJS, MongoDB and the official Scrypta wallet.

In order for the IdANode to work at its best, it is absolutely necessary that the deployment takes place on a VPS that has Ubuntu 16.04, with at least 2 CPUs, 4GB of RAM and 50GB of Hard Disk.

The ***install.sh*** script file will install all dependencies for you, we resume the script directly on this page.
During the installation you will be asked to edit some fields of the .env file, so check that all the parameters are entered correctly, specifically:

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
 - **ADMIN_PUBKEY**: It is the public key that identifies the IdANode within the IdaNode network. To be used if you want to connect your IdaNode to the official Scrypta network.

## Installation example
### Running the installation script
To install IdANode through the `install.sh` script it is necessary to use these on the dedicated VPS:
```
cd ~
git clone https://github.com/scryptachain/scrypta-idanodejs
cd scrypta-idanodejs
chmod 777 install.sh
./install.sh
```
At this point, the script will begin installing dependencies, libraries and components necessary for the configuration and operation of the IdANode. This process could take several minutes.
<br>At the end of the installation, the script gives us the following output:
```
NOW EDIT .env FILE AND RUN FOLLOWING COMMAND:
pm2 start npm - start && pm2 save
```
Now we will ignore this message and proceed with the configuration of the files necessary to start the IdANode.

## First configuration

Before starting the IdaNode, you must proceed with the configurations described above.

Let's edit the lyra.conf file with the `nano ~/.lyra/lyra.conf` command and modify the` rpcuser` and `rpcpassword` with values ​​of our choice, the ones below are just an example (it is always recommended to use strong passwords ):

```
rpcuser = YsmtF6bvBrY82Q
rpcpassword = e43GkfCGMYaXsr
```
Once we have edited and saved the lyra.conf file, we modify the `.env` file with the` nano ~/scrypta-idanodejs/.env` command.
<br>The parameters to be modified are:

```
RPCUSER = YsmtF6bvBrY82Q
RPCPASSWORD = e43GkfCGMYaXsr
LYRAPATH = / path-to-folder / scrypta-idanodejs
NODE_KEY = Your PrivateKey
ADMIN_PUBKEY = YourAdminPubKey
```

The parameters `NODE_KEY` and` ADMIN_PUBKEY` correspond to the private key of the IdaNode and the respective public key, with which the validation requests will be signed.

To obtain a private key (therefore also the public key), you can proceed in several methods, however we suggest using the Scrypta Wallet desktop. It is recommended * not * to use the same IdaNode wallet but an external wallet:

Open the debug console and type

```
getnewaddress
```
The console will return us a new address. Through the dump of the relative private key and the validation of this address, we will obtain the data that interest us:
```
dumpprivkey * new address *
``
gives us the private key to insert in the `NODE_KEY` field of the .env file
<br> To follow, through the command
```
validateaddress * new address *
```
  we will get a result similar to the one below:

```
{
    "isvalid" : true,
    "address" : "LgdnzYZPUTzpGpGq4mtmDExitQhLgBxZo9",
    "ismine" : true,
    "iswatchonly" : false,
    "isscript" : false,
    "pubkey" : "02802b561245068b5c5397961f86923e0d6e82783d3a908abd56e31e992d05d50f",
    "iscompressed" : true,
    "account" : ""
}
```
From the answer we get the `ADMIN_PUBKEY` value to insert in the .env file

If you prefer to generate keys through the graphical interface you can connect to your IdaNode and generate a new address from the `tools` panel.

To access the graphical interface it is necessary to connect with the browser to the IP address of the machine, specifying the execution port of the IdaNode which is `3001`:

```
http://Indirizzo_IP_VPS:3001
```
Having obtained both the `NODE_KEY` and` ADMIN_PUBKEY` values and replaced in the relative fields of the .env file, we can proceed with the next step.

## Starting the Lyra daemon and IdANode

We start the Lyra daemon through the command
```
./lyrad &
``` 
and verify the effective start of the daemon through the command:
```
./lyra-cli getinfo
```
After the wallet has given a positive response and has started to synchronize the blocks, we will be able to start the IdaNode through the `npm start` command (which starts the wallet temporarily)
```
npm start ### avvia il wallet provvisoriamente
```

If we have configured everything correctly, after issuing the `npm start` command, we will get a result similar to this:
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
This output means that the installation of the IdANode was successful and your IdANode will then start synchronizing all the data present in the blockchain.

In case you want to start the wallet permanently, use the command:
```
pm2 start npm -- start
```

To monitor the status of the wallet:
```
pm2 monit
```

## Bootstrap file

If you have not downloaded the bootstrap (ie if you have done a manual installation), the synchronization process can take several hours.
<br> Bootstrap files can be used to speed up synchronization.
<br> <br> **ATTENTION**: Bootstrap files are different for IdANode and Scrypta wallet.

### Download the bootstrap for the Scrpta wallet

Bootstrapping the wallet will make the wallet synchronization process much faster. Through these commands it is possible to download it and synchronize the wallet with the latest bootstrap version available. These commands must be given inside the `.lyra` folder, the same where you previously edited the` lyra.conf` file.

```
cd .lyra
wget https://scrypta.sfo2.digitaloceanspaces.com/bootstrap.tar.gz
rm -rf blocks chainstate peers.dat
tar -xvzf bootstrap.tar.gz
```
### Download the bootstrap for the IdANode

To download the bootstrap and install it, just give the permissions to the `bootstrap.sh` file and run it:

```
cd scrypta-idanodejs
chmod 777 bootstrap.sh
./bootstrap.sh
```
::: warning WARNING
It is essential that the IdANode is turned off and that the `mongod` process is properly closed, otherwise the process will fail. If that fails, it is advisable to restart the VPS through the `reboot` command and start directly on the machine just started
:::