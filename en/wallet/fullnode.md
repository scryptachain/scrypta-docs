# Scrypta Full Node

The full-node is a **wallet** that confirms and transmits transactions in the **Scrypta** network. This means that there is no need to rely on third parties to validate payments.

Full-nodes have the highest level of security and are essential for protecting the network. They require hard disk space (over 2GB), dedicated internet connection bandwidth and time for initial synchronization.

The full-node also allows staking and masternode development.

## Installation

The installation of the **LYRA WALLET** involves different steps depending on the operating system used.

The LYRA WALLET is currently available for Linux, MacOS, Windows and Raspberry Pi 4 at the following link:

[LYRA WALLET](https://github.com/scryptachain/scrypta/releases)

Here are the instructions for each operating system:

### Linux

The easiest way to configure the LYRA wallet on **Linux** is to use the pre-compiled executable available on Github. If instead you want to proceed with the compilation of the wallet, it is recommended to use the Docker images already configured:
https://github.com/scryptachain/scrypta/tree/master/docker/linux

Just run one of the scripts to compile a specific or multiple version. We recommend the multiple one as it already contains all the necessary libraries. To run the compilation script just go to the folder and run:
```
bash build-multi.sh
```
After compiling you will find the images inside `multi/build`

### Windows

The easiest way to install and configure the LYRA portfolio on **Windows** is to use the precompiled executable available on Github:

[Windows Wallet](https://github.com/scryptachain/scrypta/releases)

Steps:

1. Download the zip file
2. Extract the contents of the Zip files to the desired location
3. Run the lyra-qt.exe executable file

> A virus warning (false positive) may appear for which you will need to ignore or create an exception.


### macOS
Step to install the Lyra Wallet on Mac.
1. Go to the [Scrypta Github portal] (https://github.com/scryptachain/scrypta/releases).
2. Click on the latest version of the macOS.dmg file.
3. Once the DMG file is downloaded, double click on it.
4. A file called Lyra-Qt will be generated,
move this file to the applications folder.
5. Run Lyra-Qt to start the wallet.

### Raspberry Pi 4

Below you will find the complete guide with all the commands to manually compile and install all the libraries and dependencies for your Scrypta wallet on **Raspberry PI 4**. 

Alternatively you can follow the guide for installing the "image file" of the operating system provided by Scrypta which you can find below.

For a manual step-by-step installation, proceed to start the terminal and type the following commands:
```
sudo apt-get update && sudo apt-get upgrade
```
After the command, the Raspberry will request a Restart. Proceed by restarting your Rasp.

On reboot, type the following commands from Terminal:
```
sudo apt-get install -y pkg-config
sudo apt-get install -y software-properties-common python-software-properties
wget https://raw.githubusercontent.com/scryptachain/scrypta-os/master/script/add-apt-repository.sh
sudo mv add-apt-repository.sh /usr/bin/add-apt-repository
sudo chmod +x /usr/bin/add-apt-repository
sudo add-apt-repository -y ppa:bitcoin/bitcoin
sudo apt-get -y install build-essential autoconf automake libtool libboost-all-dev libboost-program-options-dev libssl1.0-dev
sudo apt-get -y install libleveldb-dev libgmp-dev libgmp3-dev libcurl4-openssl-dev libcrypto++-dev libqrencode-dev
sudo apt-get -y libminiupnpc-dev autogen libtool libevent-dev libprotobuf-dev protobuf-compiler
sudo apt-get -y install curl g++ git git-core faketime bsdmainutils mingw-w64 g++-mingw-w64 nsis zip ca-certificates python
sudo apt-get -y install libgmp-dev libssl-dev libcurl4-openssl-dev
sudo apt-get -y install qtbase5-dev libqt5gui5 libqt5core5a libqt5dbus5 qttools5-dev qttools5-dev-tools libzmq3-dev
wget http://download.oracle.com/berkeley-db/db-4.8.30.NC.tar.gz
tar -xzvf db-4.8.30.NC.tar.gz
cd db-4.8.30.NC/build_unix
../dist/configure --enable-cxx
sudo make -j2
sudo make install
export BDB_INCLUDE_PATH="/usr/local/BerkeleyDB.4.8/include"
export BDB_LIB_PATH="/usr/local/BerkeleyDB.4.8/lib"
sudo ln -s /usr/local/BerkeleyDB.4.8/lib/libdb-4.8.so /usr/lib/libdb-4.8.so
sudo ln -s /usr/local/BerkeleyDB.4.8/lib/libdb_cxx-4.8.so /usr/lib/libdb_cxx-4.8.so
cd
```
Restart your Raspi again and type the following commands after the restart:
```
git clone https://github.com/scryptachain/scrypta
cd lyra
sudo chmod +x share/genbuild.sh
sudo chmod +x autogen.sh
sudo chmod 755 src/leveldb/build_detect_platform
./autogen.sh
sudo ./configure --with-gui=qt5 --with-libressl --disable-sse2 CPPFLAGS="-I/usr/local/BerkeleyDB.4.8/include -O2" LDFLAGS="-L/usr/local/BerkeleyDB.4.8/lib"
sudo make -j4
```
Now you can start and use the **Lyra Wallet-Qt** on your Raspberry 4

### Installation guide for Raspberry PI 4 with Image File

The image file for Raspberry PI 4 is based on **Raspbian Debian Buster** with all the libraries already installed and a working Lyra wallet.

You can burn the image file to the SD card by following our installation guide.

> This section explains how to install an image of the Raspberry Pi operating system on an SD card. You will need another computer with an SD card reader.

The official Scrypta image file is available for download from the Scrypta Github. You will need to use an image writing tool to install the downloaded image on the SD card.

BalenaEtcher is a graphical SD card writing tool that works on Mac OS, Linux and Windows and is the easiest option for burning image files. BalenaEtcher also supports writing images directly from the zip file, without having to unzip.

To write your image with Balena Etcher:
- Download the latest version of [balenaEtcher] (https://www.balena.io/etcher/) and install it.
- Connect an SD card reader with the SD card inside.
- Open balenaEtcher and select from your hard disk the .img Scrypta file you want to write on the SD card.
- Select the SD card on which you want to write the image.
- Review your selections and click "Flash!" to start writing data to the SD card.
- Wait for the process to complete, then insert the SD card into the Raspberry PI 4.

> For security reasons, the wallet installed on your system is provided without the wallet.dat file to ensure that no one besides you has the private keys of your wallet. The wallet.dat file will be automatically generated when you start the portfolio for the first time.


## Introduction to the QT Wallet

In this section we explain in more detail the Scrypta QT Wallet illustrating some of its functions in more detail.
Even if there are different types of wallets for cryptocurrencies, it is still important to understand the basics of operation since the operations that can be performed are roughly the same for all cryptocurrencies.

In this guide section we will analyze the setup of the wallet after the first start, the backup and the encryption of the wallet, the export of the single private keys or of the entire wallet, plus other additional operations.

### What is a QT wallet?
QT is a UI framework and a cross platform application for developers compiled using the C ++ programming language.
Most QT wallets are developed using this programming environment. These clients are available for the main operating systems.
QT wallets are clients that offer the full set of features to manage cryptocurrencies.
They are applications that require discrete amounts of disk space because, in order to work, they must download the entire copy of the blockchain on your computer on which you are running it.

## Scrypta Core Official Wallet
Regardless of what type of wallet is used, the first notion to understand is that the cryptocurrencies we own are not physically kept inside the wallet. Funds are stored in a distributed public register called a blockchain.
What provides access to the funds contained in a given address are the private keys of the address itself. Losing private keys will lose access to funds and, consequently, not having private keys means not having access to the funds that the wallet contains.

The Core Wallet keeps the private keys of the funds contained in each corresponding address. Each cryptocurrency has its own core wallet, so different blockchain wallets cannot communicate with each other as they are part of different peer-to-peer networks.

There are specific functions depending on the wallet and the cryptocurrency we are using. However, all the coins share most of the functions and their respective commands.

- Wallet Encryption
- Wallet Backup
- Private Send
- Instant Send
- Debug Console
- Address Book / QR code generation
- Staking Coins and Masternode Commands
- Sign and Verify Message
- Coin and fee control
- Dark Send
- Block Explorer

Before exploring these features, we will provide a brief description of the first wallet setup below.

### First installation Wallet Scrypta

First you need to download the suitable version for your operating system of Scrypta Official Wallet from the [Github repository](https://github.com/scryptachain/scrypta/releases).

Once the software is downloaded, start **Lyra-QT**. <br>

![qt_wallet](/assets/qt_wallet/splash.png).

For more information about the installation, you can visit this link:

[Installation](fullnode.md#installation.md)

At the first start you will be asked to choose the location of the system files where to save your **wallet.dat** file and the copy of the blockchain.
Confirm the path proposed by the software or modify it at your choice and proceed.
<br> Just make sure you have enough space available on the hard disk.

![qt_wallet](/assets/qt_wallet/firstopen.png)

By default, the system folder can be found at the following locations (verify that hidden folders must be disabled):

**Linux:**
~/.lyra/

**MacOS:**
~/Library/Application Support/lyra/

**Windows:**
%APPDATA%\lyra

For further information on the data directory, you can consult the following section:

[Data Directory](data-directory.md)


### Synchronization with the Scrypta blockchain

After the startup process of the wallet is completed, the client will connect to the Scrypta peer-to peer network to start the synchronization of the blockchain by downloading an updated copy that will be saved in the previously defined system folder.

At the bottom of the software you will find a bar indicating the amount of data left to complete the sync.
![qt_wallet](/assets/qt_wallet/sync.png)
The wallet will be fully synchronized upon completion of the bar.

In the lower right part you will find these symbols
<br>![qt_wallet](/assets/qt_wallet/status.png)
<br>which respectively indicate that:
- the wallet is not encrypted
- the wallet is connected to the other peers of the network
- the wallet is syncing with the blockchain.

In order to speed up the sync of the blockchain, we can use the **bootstrap** (a recently updated copy of the blockchain)
<br> Definitions and more in-depth details on the bootstrap files are provided in the [appropriate section](../scrypta-full-node/setup.html#bootstrap).

> Since a lot of data will be downloaded, make sure you have enough space available on your hard disk to save the entire copy of the blockchain.
<br> The timing of completion of synchronization depends on the connection speed.


Once the synchronization has been completed, as indicated by the symbol in the lower right corner, your client is connected to the blockchain and is ready to exchange transactions with other desktop/app clients of the Scrypta network and to carry out all the above operations indicated.
<br>![qt_wallet](/assets/qt_wallet/status.png)

In the event that the wallet cannot connect to the list of nodes and synchronize, it will be possible to force it by manually adding a list of nodes in the **lyra.conf** file located in the system folder.

To get an updated list of nodes, go to the blockexplorer and click on ["node list":](https://chainz.cryptoid.info/lyra/#!network).
<br>Copy the contents of the table and paste it into the **lyra.conf** file.
Save the file and restart the wallet. Synchronization should now start without further problems.

## Menu overview

### Main menu
This is the menu bar for the main wallet operations, as described below:
<br>![qt_wallet](/assets/qt_wallet/menu.png)
- **Overview:** the main dashboard with balance, recent transactions and the **obfuscation** function, which will be explored in the [following sections](../scrypta-full-node/setup.md##additional-features).
<br>![qt_wallet](/assets/qt_wallet/overview.png)
<br>

- **Send:** main functions for sending Lyra.
<br>![qt_wallet](/assets/qt_wallet/send.png)
<br>

- **Receive:** advanced functions for receiving Lyra and organising payments.
<br>![qt_wallet](/assets/qt_wallet/receive.png)
<br>

- **Transactions:** the complete log of all incoming and outgoing transactions of your wallet, including any rewards from masternodes and staking.
<br>![qt_wallet](/assets/qt_wallet/transactions.png)
<br>

- **Masternodes:** control panel of your masternodes and the entire network.
<br>![qt_wallet](/assets/qt_wallet/masternodes.png)
<br>

### Menu bar
Through the menus on the software system bar, you will access other more technical and detailed functions, various configurations and settings.

- **Menu FILE**<br> 
Through the **FILE** menu you can access functions such as creating new addresses, address book of current addresses, signing and verifying messages and, above all, backing up the wallet.
<br>

- **Menu SETTINGS**<br>Through the **SETTINGS** menu you can access the wallet encryption functions (which we will explain below), lock and unlock an encrypted wallet, change the encryption password, multisend functions and wallet system options.
<br> **Caution is advised in making changes. Any mistake could irreparably compromise your funds.**
<br>

- **Menu TOOLS**<br>Through the **TOOLS** menu you can access the network monitoring functions, the very important [***debug console***](../scrypta-full-node/setup.html#debug-console) (the internal terminal of your Scrypta wallet from which it is possible to send commands to directly query the network), and to other options that are useful for easily reaching the wallet's *.conf* system files.


## Wallet Encryption

The encryption of the wallet is one of the main functions as it protects the funds (or the data contained in the blockchain) from unauthorized use and access.
<br> In principle, these suggestions and procedures are valid for most other cryptocurrency.


The **"Encrypt Wallet"** function, reachable from the **SETTINGS** menu, adds an additional level of security to the wallet, protecting the funds from fraudulent or incorrect submissions, or from other operations that could modify the ownership of the funds contained in the wallet, through the  [dump of private keys](../scrypta-full-node/setup.html#dump-and-import-private-keys) or other security operations.

The encryption of the wallet is a very simple operation to carry out, however you have to be very careful.
<br> To proceed with the encryption, from the **SETTINGS** > **ENCRYPT WALLET** menu a window will open as shown below:
<br>![qt_wallet](/assets/qt_wallet/encrypt.png)
<br>

> For greater security choose a strong password, with ten or more characters, preferably random.
> Make sure you remember your password and ALWAYS keep it in a safe place.

Once the password has been chosen, proceed with the encryption by pressing **OK**.

> **ATTENTION:** If you forget or lose your password after the encryption, you will lose access to all your funds.


The wallet app will close at the end of the encryption operation.
<br> On the next reboot, the wallet will display a closed padlock symbol in the lower right corner.
<br>![qt_wallet](/assets/qt_wallet/lock.png)
<br>This indicates that to perform operations such as staking, sending funds, dumping private keys or other main functions, you must simply proceed with the unlocking of the wallet first.

## Lock/Unlock wallet
To unlock the wallet you need to enter the passphrase used to perform the encryption.
From the **SETTINGS** menu, selecting **UNLOCK WALLET** the window will open as shown in the image:
<br>![qt_wallet](/assets/qt_wallet/unlock.png)

Enter the passphrase and press **OK**.
<br>By ticking the option *"For anonymization and staking only"* the wallet will be unlocked only for the staking and the process of [**obfuscation**](../scrypta-full-node/setup.html#funzionalita-aggiuntive).
At this point the wallet is unlocked for all operations. This status is indicated by the green padlock in the lower corner.
<br>![qt_wallet](/assets/qt_wallet/unlocked.png)

## Wallet Backup
Once the encryption process is complete, we proceed with making a backup copy of our **wallet.dat**, the file that contains all the information of our digital wallet and all the addresses with the respective private keys.
<br> To proceed with the backup, from the menu **"FILE"** select **"BACKUP WALLET"** and choose a name and the path on which to save the backup of the wallet.dat file in a safe place.

> **ATTENTION:** This backup copy will allow you to recover your funds simply by importing the wallet.dat file on another Scrypta client, so keep it with extreme care and caution.


## Debug Console

The debug console of the Scrypta QT wallet is a very useful tool from which you can manually send commands to perform all the operations available within the portfolio.
Accessible from the menu **"TOOLS"** > **"DEBUG CONSOLE"**, it looks like a terminal window.
<br>![qt_wallet](/assets/qt_wallet/console.png)

Entering the **help** command will open the complete list of commands, a detailed explanation of which is available in the sezione specifica.

For an exhaustive explanation of all the commands, consult the section:

Command List

<br>Through the *debug console* it is possible to directly query the blockchain on the status of the network, a transaction, masternodes, or you can create manual transactions, set operational or security settings, generate new addresses and, above all, manage private keys and the wallet itself.

We see below the main operations on private keys.

> **ATTENTION:** Maximum caution is always recommended when carrying out operations with your private keys.

## Dump and import private keys
These are among the most important operations that you can perform in your wallet.
<br> To own the funds present in a Lyra address or in a wallet, it is necessary to have ownership of the corresponding private keys.
<br> Each time a new public address is created in a wallet, the corresponding private key is generated.
However, this private key is never exposed by the client for security reasons and must be exported (dumped) through the debug console.

By importing these private keys into a new wallet on another device, the funds contained in it will be made accessible, which therefore will be the exclusive property of the one (or those) who hold the private keys of that specific address.
<br> To do this and the others listed in this section of the guide, the wallet must be [unlocked](../scrypta-full-node/setup.html#lock-unlock-wallet).

** ATTENTION: ** Maximum caution is always recommended when exposing your private keys.
<br> Making them accessible to third parties means giving them access to your funds.

We recommend that you always make redundant backups on private keys, as well as keep them in a place that you can always access.
<br> The loss of private keys implies the inaccessibility of anyone, including you, to your funds.

### Dump private keys

To dump a private key to a specific address, you must first open the debug console.
<br> The command to export the private key of an address is `**dumpprivkey**`.
<br> Through the command **`dumpprivkey "lyraaddress"`** we are revealed the private key corresponding to the address "lyraaddress".

> Each address has its own private key: if you store your funds in different addresses it is essential that you do the dump for each of the addresses on which there are funds.

> The address for which you want to export the private key must be yours. Typing **`validateaddress "lyraaddress"`** the system will return you info on that address.

Once the private key is revealed to us, it can be imported into any Scrypta wallet to have access to the funds linked to it.
It is not possible to export private keys to addresses that we do not have.

### Import of a private key
If we have a private key and want to import it, simply open the debug console and give the command
**`importprivkey "lyraprivkey "`** which scans the blokchchain for that specific address, displays and makes available the balance of the address corresponding to the owner of the private key.

### Dump the entire wallet
Through the `**dump wallet**` function, complete export of all private keys for all the addresses generated by your wallet (whether they have already been used or not) saved in encrypted format within the file ***wallet.dat***.

In this regard it is good to make a clarification: the `**dump wallet**` operation has some differences with the operation described previously in the section [**"backup wallet"**](../scrypta-full-node/setup.html#wallet-backup), as the backup saves the encrypted copy of the wallet.dat file.
<br> By restoring the file ***wallet.dat*** we will have the possibility to import and view the contents of the entire wallet but we will not be able in any way to access the funds contained in it without knowing the encryption password to decipher the wallet .
<br> With the command `**dump wallet**` you will export a text file **not encrypted** containing the complete list of all the addresses created by the wallet with all the corresponding private keys. Consequently, the owner of that file will be in possession of all the funds contained in it.
<br> This is why, before proceeding, it was important to explain the difference between the two types of backup, so that we can understand when one mode should be used rather than another.

#### To perform the "dump wallet":
To proceed with the export of all private keys through the `**dump wallet**` command, simply open the debug console and give the command:
<br>**`dumpwallet "path/to/file/dump.txt"`**
 
 dwhere "path / to / file" is the path where we want the system to save our file and "dump.txt" is the example name of our file, containing all the private keys.

  By opening the newly saved ***dump.txt*** file, we will see something similar to what is shown in the figure: an initial part with a report on when the file was exported and from which wallet, and the whole list of keys private (starting with S) and their respective addresses.
 <br>![qt_wallet](/assets/qt_wallet/dump.png)

**ATTENTION:** We recommend once again to keep this file with maximum security and to access it only in case of extreme necessity, as the information it contains provides **FULL** access to your funds.

The data in that file is generated when you start the wallet for the first time, along with the wallet.dat file.
<br> When first started, the system generates 1000 random addresses and corresponding private keys and saves them for future use.
<br> Whenever we request a new address with **"getnewaddress"**, the system draws on that list of pre-generated addresses to provide us with an address to use.


### Bootstrap
The bootstrap is a file (or set of files) containing an updated "photograph" of the state of the blockchain at any given moment, an exact copy of the public ledger to be used as a restore point.
<br> <br> The bootstrap can be useful to us due to an incorrect closure of the wallet, which at the next startup results in a corrupt copy of the blockchain.
<br> Replacing corrupt files with a bootstrap allows a faster boot of the wallet, as the software does not have to re-download the entire copy of the blockchain.
<br> When we launch a wallet for the first time, or install a vps that needs complete sync, using boostrap ensures a significant time saving.

The bootstrap is usually composed of:
- Folder **"Blocks"**
- Folder **"Chainstate"**
- File **"peers.dat"**

To save a copy of bootstrap to be reused later, it is necessary to save the above in a zip file, better if online.
It is recommended to save the bootstrap when the wallet is closed, so as to preserve the integrity of the files and folders.

Once saved, if it should be necessary to use it, just copy the contents of the bootstrap into the system folder ***.lyra*** in your operating system or VPS.
On the next reboot, the wallet will resume synchronization from the last block saved in your bootstrap.

## Additional features
There are other tools that can be used within the wallet, as well as additional operations that will be explained below.

### Blockexplorer
Through the **"TOOLS"** menu, clicking on **"BLOCKCHAIN EXPLORER"** you access a blockexplorer inside the wallet through which it is possible to carry out some operations of control on data, addresses and transactions.
The internal blockexplorer of the wallet lacks some important features and therefore it is recommended to use it only in the event that it is not possible to connect to the official blockexplorer.

### Obfuscation protocol
This function, accessible from the **"OVERVIEW"** section of the wallet, is also called **"Obfuscation"**. It is based on an anonymization protocol of a part of the funds contained within the wallet.
 <br>![qt_wallet](/assets/qt_wallet/obfuscation.png)

 Clicking the **"Start Obfuscation"** button starts an anonymization process for the coins which, once completed, makes it difficult to identify the origin of the funds for which the process was completed, thus increasing the privacy of the transactions.
  <br> From the following images we can see the process when it is in **enabled state** and the consequences on the funds involved in the obfuscation process.

  <br>![qt_wallet](/assets/qt_wallet/obfuscation_start.png)

As soon as the obfuscation process is enabled, the wallet sends the desired quantity of coins to the network of masternodes, where the request is processed and the identical but "mixed" consideration is returned and divided into denominations of a smaller amount.
<br>![qt_wallet](/assets/qt_wallet/obfuscation_going.png)
As you can see from the image, it is as if the funds in our wallet have been received by X different addresses and "exchanged" with other owners.
<br> Regularly using obfuscation on all your funds makes it impossible to trace the operations carried out, significantly increasing the level of privacy for your transactions.
<br> The contraindication is that obfuscation penalizes the staking process, in that its stake amount is divided into amounts so small as to make the staking process fruitless. Therefore it is recommended to use the obfuscation protocol only if really necessary.

### Instant Send
When we talk about **Instant Send** (or **SwiftTX**) we refer to the ability of the Scrypta network to send and receive transactions even in the absence of confirmations from the network.
<br> This feature is active by default and works for amounts not exceeding 1000 lyra per transaction.
<br> <br> This means that once the submission is complete, the amount will already be visible in the recipient's wallet under the heading "unconfirmed", although the block in which the transaction is included has not yet been mined.
<br> This significantly reduces waiting times when working with transactions up to a certain amount.
<br> However, in the case of uses related to payment methods, it is recommended to always wait for the transaction to be effectively confirmed by the blockchain and included in one of the blocks after sending.

## Data Directory

The Data Directory is the Scrypta Blockchain system folder which contains all the information related to the blockchain and p2p network.

This folder also contains an important file called "**wallet.dat**" which stores private keys for your addresses.

> Losing the "wallet.dat" file means losing access to all your coins. Make regular backups!

### Directory location
​
The Data Directory called "lyra" is located, by default, in the following specific paths for each operating system:

### Windows
Go to Start > Run > And write: `%APPDATA%\lyra`

### macOS
 `~/Library/Application Support/lyra`

 (/Users/“username”/Library/Application Support/lyra)

Note that the "Library" folder may be hidden.

### Linux
`~/.lyra`

### Files description

***backups***: folder for automatic wallet backups

***blocks***: folder containing the database of blocks downloaded from the p2p network.

***chainstate***: folder containing the block index database needed to navigate the blocks.

***debug.log***: debug prints from the client. It is usually necessary to know the origin of some problems.

***lyra.conf***: file containing the boot configuration.

***fee_estimates.dat***: cache of the last fees paid on the blockchain, necessary for the estimate of the fees themselves.

***masternode.conf***: contains the configuration of the masternodes controlled by the wallet. This file must be compiled if the user wants to start a masternode.

***mncache.dat***: database that stores information about the masternodes known to this node. Used to prevent network spamming with masternode requests at every run.

***mnpayments.dat***: database that stores information on masternode payments. Used to verify and confirm that the masternode payment is valid.

***netfulfilled.dat***: local cache of completed network requests.

***peers.dat***: database that stores information on the p2p nodes of the network. Used by the client to quickly connect to known nodes.

***sporks***: folder containing the database of sporks synchronized by the p2p network.

***testnet2***: optional folder which contains the same folder structure as the mainnet folder but with data for the testnet.

***wallet.dat***: the most important file. Store private keys for your addresses. Losing this file means losing access to all your LYRA coins.

## Command List

The wallet commands listed here allow you to perform operations with the LYRA RPC client. On the desktop wallet you can use these commands from the [***Debug Console***](../scrypta-full-node/console.md) (*Tools menu*).

In the client version it is necessary to indicate `./lyra-cli` before the commands.

### Test-CLI

You can test the wallet commands through the console of the test-CLI tool, reachable here:

[**test-CLI**](https://cli.scryptachain.org/)


![upvote](/assets/other/test-cli.png)

### Blockchain instructions
`getbestblockhash` Provides the latest/best hash block on the network.

`getblock <hash>` Specifying a specific block hash with this command will produce a response with all the details of the requested block.

`getblockchaininfo` Returns all information about the current blockchain.

`getblockcount` Returns the current number of synchronized blocks.

`getblockhash <index>` Returns the hash of the block at a specified index.

> For example `getblockhash 10000` will return `3f18205d5884fdcbf95f2adc7a933b28fd6ec4a474b7dffb41c7a2733d0c4c2d`

`getblockheader <hash>` Provides the header of the specified hash.

> Example: 
 `getblockheader 3f18205d5884fdcbf95f2adc7a933b28fd6ec4a474b7dffb41c7a2733d0c4c2d`

> Reply:
`
{
    "version" : 3,
    "previousblockhash" : "8614cb01c9c97c7424e2ada9ca726700804feedb80e7a730676752e8ea1e7be2",
    "merkleroot" : "bcb013dc62d59f01baca55f1d264e7b0574ce45821e44dbd1b52758657a09947",
    "time" : 1545994896,
    "bits" : "1c051271",
    "nonce" : 0
}
`

`getchaintips` Returns tips on network branches from all branches known by the node.

`getdifficulty` Returns the current difficulty in finding a hash below a certain target.

`getrawmempool` Returns the current mempool array.

`gettxout <txid>` Returns details about an output of the unspent transaction.

`gettxoutsetinfo` Returns database statistics of unspent transaction outputs managed by the node.

`verifychain` Returns the true or false value based on the validity of the blockchain hosted by the node.

### Control instructions

`getinfo` Returns general information about the blockchain.

`help` List of all commands.

`stop` Stop the software.

### Masternode instructions

`masternode "command"...` 

Set of commands to perform operations related to the masternodes.

#### masternode commands

`count`            - Returns the number of all masternodes detected by the network (optional terms: 'ps', 'enabled', 'all', 'qualify').

`current`          - Returns information about the current winning masternode to be paid to the next block (calculated locally).

`genkey`           - Generate a new masternodeprivkey.

`outputs`          - Print compatible outputs for masternode.

`start-alias`      - Start a single remote masternode via the assigned alias configured in *masternode.conf*.

`start-<mode>`     - Start a single remote masternode via the assigned alias configured in masternode.conf (mode: 'all', 'missing', 'disabled').

`status`           - Returns the status information of the masternode.

`list`             - Returns a list of all known masternodes (see masternodelist for more information).

`list-conf`        - Returns the masternode.conf in JSON format.

`masternodelist ( "mode" "filter" )`     Get a list of masternodes in different ways.

### Network instructions
`addnode <node_ip> <add|remove|onetry>` Manually connect to a peer using the counterparty's IP address.

`getconnectioncount` Returns the number of peer-to-peer connections of the node.

`getnettotals` Returns the total of bytes received and sent, as well as the uptime in milliseconds.

`getnetworkinfo` Returns statistical information about the network.

`getpeerinfo` Returns an array of statistical information related to connected peers.

`ping` Requires that a ping be sent to all other nodes to measure the ping time.

The results provided by getpeerinfo, pingtime are in tenths of a second.


### Instructions for Raw Transactions
`createrawtransaction [{"txid":"id","vout":n},...] {"address":amount,"data":"hex",...} ( locktime )` Create a transaction by spending data inputs and creating new outputs. The outputs can be addresses or data. Returns the raw transaction with hexadecimal encoding. Transaction inputs are unsigned and not stored in the wallet or transmitted to the network.

`decoderawtransaction "hexstring"` Returns a JSON object representing the serialized transaction with hexadecimal encoding. decodescript "hex" decodes a hexadecimal encoded script.

`fundrawtransaction "hexstring"` Add input to a transaction until it has enough value to satisfy its value out. This will not modify existing inputs and will add a modification output to the outputs themselves.

`getrawtransaction "txid" ( verbose )` Returns the raw transaction data. If verbose = 0, returns a serialized string, with hexadecimal encoding for 'txid'. If verbose is nonzero, returns an object with information on 'txid'.

`sendrawtransaction "hexstring"` Sends the raw transaction (serialized, hexadecimal) to the local node and to the network. See also greatertransaction and signrawtransaction.

`signrawtransaction "hexstring" ( [{"txid":"id","vout":n,"scriptPubKey":"hex","redeemScript":"hex"},...] ["privatekey1",...] sighashtype )` Sign the inputs for the raw transaction (serialized, encoded in hexadecimal). The second argument, optional (can be null), is an output array of the previous transactions on which this transaction depends but which may not yet be transferred to the block chain. The third argument, optional (can be null), is an array of base58-encoded private keys which, if provided, will be the only keys used to sign the transaction.

### Wallet instructions

`addmultisigaddress nrequired ["key",...] ( "account" )`

Add a multisignature address to sign the wallet. Each key is a LYRA address or public key with hexadecimal coding. If you specify "account" (DEPRECATED), assign the address to that account.

`autocombinerewards <true/false> threshold`

the Wallet will automatically monitor any "packets" of coins (utxo) with a value lower than the threshold amount and will combine them (only if they reside on the same LYRA address).

`backupwallet "destination"`

Safely copy wallet.dat to the destination, which can be a directory or path with a file name.

`bip38decrypt "lyraaddress"`

Decode and import the password protected private key.

`dumpprivkey "lyraaddress"`

Reveal the private key corresponding to the "lyraaddress".

`dumpwallet "filename"`

Download all the keys of the wallet in a human-readable format.

`encryptwallet <passphrase>`

Encrypt the wallet with the chosen passphrase.

`getaccount "lyraaddress"`

Returns the account associated with the indicated address.

`getaccountaddress "account"`

Returns the current LYRA address to receive payments on this account. If this does not exist, a new associated address will be created and shown.

`getaddressesbyaccount "account"`

Returns the list of addresses for the specified account.

`getbalance ( "account" minconf includeWatchonly )`

If the [account] not specified, returns the total available balance of the server. If you [account] is indicated, it returns the balance to the account.

`getaddressesbyaccount "account"`

Return a new LYRA address to receive payments. If the [account] is indicated, payments received with the address will be credited to the [account].

`getaddressesbyaccount "account"`

Returns the list of addresses for the specified account.

`getbalance ( "account" minconf includeWatchonly )`

If the [account] is not indicated it will return the total available balance of the server. If the [account] is indicated, it will show the balance of the account.

`getnewaddress ( "account" )`

Return a new LYRA address to receive payments. Specifying the [account], payments received with the address will be credited to the [account].

`getrawchangeaddress`

Returns a new LYRA address for a change of reception. This is for use with Raw transactions, NOT with normal ones.

`getreceivedbyaccount "account" ( minconf )`

Returns the total amount received from the [account] addresses in transactions with at least [minconf] confirmations. If the [account] is not specified, all transactions from all accounts will be shown.

`getreceivedbyaddress "lyraaddress" ( minconf )`

Returns the amount received from incoming transactions with at least [minconf] confirmations. Addresses are always and only used to receive transactions. It only works for addresses in the local wallet, external addresses will always show 0.

`getstakesplitthreshold`

Returns the threshold at which packet division (utxo) is set in staking

`getstakingstatus`

returns a message containing detailed staking information.

`gettransaction "txid" ( includeWatchonly )`

Show detailed information about the specific transaction in the wallet.

`getunconfirmedbalance`

Returns the total unconfirmed balance of the server.

`getwalletinfo`

Returns a message containing various information about the state of the wallet.

`importaddress "address" ( "label" rescan )`

Add an address or script (in hexadecimal) that can be imported into your wallet in "watch" mode only, therefore monitored but not expendable.

`importprivkey "lyraprivkey" ( "label" rescan )`

Add a private key (as returned by dumpprivkey) to your Wallet.
This operation imports the address with all its Lyra Coin content.

`importwallet "filename"`

Import the keys (and their addresses) from a wallet dump file (see dumpwallet).

`keypoolrefill ( newsize )`

Fill the keypool.

`listaccounts ( minconf includeWatchonly )`

Show account names, keys, account balances.

`listaddressgroupings`

Returns all wallet addresses and information used for coincontrol.

`listlockunspent`

Returns a list of outputs temporarily set as non-expendable.

`listreceivedbyaccount ( minconf include empty includeWatchonly )`

Lists the account balance.

`listreceivedbyaddress ( minconf include empty includeWatchonly )`

Lists the balance of the receiving address

`listsinceblock ( "blockhash" target-confirmations includ Watchonly )`

Get all transactions in blocks, from block [blockhash].

`listtransactions ( "account" count from includeWatchonly )`

Returns the most recent transactions for [account]. If [account] not specified it will return recent transactions from all accounts.

`listunspent ( minconf maxconf  ["address",...] )`

Returns an output array of unspent transactions with confirmations between minconf and maxconf (included). Optionally, you can filter to include only txouts sent to specified addresses.

`lockunspent unlock [{"txid":"txid","vout":n},...]`

Updated list of outputs temporarily not expendable.

`move "fromaccount" "toaccount" amount ( minconf "comment" )`

Switch from one account in your Wallet to another.

`multisend <command>`

**MultiSend** allows users to automatically send a percentage of their rewards (staking or masternode) to desired addresses. The MultiSend transaction is sent when the coins have at least 60 confirmations (about 60 min.).

> #### Commands
> `print` - displays the current MultiSend vector.
> 
> `clear` - deletes the current MultiSend vector.
> 
> `enablestake/activatestake` - activates the current MultiSend vector to be activated on stake rewards.
> 
> `enablemasternode/activatemasternode` - activates the current MultiSend vector to be activated on masternode rewards
> 
> `disable/deactivate` - disables the current MultiSend vector.
> 
> `delete <Address #>` - deletes an address from the MultiSend vector.
> 
> `disable` - prevents a specific address from sending MultiSend transactions.
> 
> `enableall` - enables all addresses to be eligible to send MultiSend transactions.
> 
> If you have done previous configurations, you can check if you already have them and know their activity status with `multisend print`. If you've never used it, your message will look like this:
> `~ $ ./Lyra-cli multisend print
[
  {
    "MultiSendStake Activated?": false,
    "MultiSendMasternode Activated?": false
  },
  "MultiSend Addresses to Send To:",
  {
  }
]`

`sendfrom "fromaccount" "tolyraaddress" amount ( minconf "comment" "comment-to" )`

It is a real value, rounded to the second decimal place. He will send the indicated amount to the indicated address, using the [minconf] confirmations to verify that the account has a valid balance. Returns the transaction ID if successful (not in the JSON object).

`sendmany "fromaccount" {"address":amount,...} ( minconf "comment" )`

Send multiple times. Amounts are double precision floating point numbers.

`sendtoaddress "lyraaddress" amount ( "comment" "comment-to" )`

Send an amount to a specific address. It is a real value and is rounded to 8 decimal places. Returns the transaction ID on success.

`sendtoaddressix "lyraaddress" amount ( "comment" "comment-to" )`

Send an amount to a specific address using SwiftX. It corresponds to a real value and is rounded to 8 decimal places. Returns the transaction ID on success.

`setaccount "lyraaddress" "account"`

Set up the account associated with the indicated address. Assigning the address already assigned to the same account will create a new address associated with that account.

`setstakesplitthreshold <1 - 999,999>`

Automatic division of utxo: the size of the output of the packets (utxo) in stakes will be greater than the indicated value.

`settxfee amount`

Set the transaction fee per KB.

`signmessage "lyraaddress" "message"`

Sign a message with an address's private key.

`walletlock`

Removes the wallet encryption key from memory, locking the wallet.

`walletpassphrase "passphrase" timeout ( anonymizeonly )`

Stores the decoding key of the wallet in memory for "timeout" seconds.

`walletpassphrasechange "oldpassphrase" "newpassphrase"`

Change your wallet passphrase from "oldpassphrase" to "newpassphrase".

## Testnet

To use the testnet version of the Scrypta blockchain you will need to download and install the official wallet. You can find an installation guide in the following section:

[Installation](installation.md) 

Next you will have to start it in Testnet mode.

To do this you need to insert the text line `testnet=1` in the configuration file `lyra.conf` and restart the wallet.

The configuration file is located in the Data Directory which is automatically created the first time the wallet is started.

For more information, consult the relevant section [Data directory](data-directory.md).

### Steps for starting Scrypta Testnet

1. Download the wallet and start it. This will create the data directory;
2. Close the wallet and go to the data directory called lyra;
3. Open the lyra.conf file with a text editor;
4. Add the string testenet = 1;
5. Save the changes in the lyra.conf file;
6. Start lyra-qt (wallet with graphical interface) or lyrad (version without graphical interface).

> If you later want to start the wallet in mainnet mode, simply replace testnet = 1 with testenet = 0 in the configuration file, save the changes and restart the wallet. 

### Faucet tLYRA (testnet LYRA)
To receive test LYRA (*tLyra*), you can use the Faucet system created through IdANode technology:

[Faucet Link](https://testnet.scryptachain.org/#)

This generates a Lyra testnet reception address in your wallet to be entered in the *INIT* field of the *Tool* section.

In this way you will receive **50tLyra**.

Through the IdANode Testnet you can also generate a new address, send *tlyra* to the latter through the *INIT* function and import the private key into the desktop wallet through the *debug console*, using the command `importprivkey YOURPRIVATEKEY` .