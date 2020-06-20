# Data Directory

The Data Directory is the Scrypta Blockchain system folder which contains all the information related to the blockchain and p2p network.

This folder also contains an important file called "**wallet.dat**" which stores private keys for your addresses.

::: danger
Losing the "wallet.dat" file means losing access to all your LYRA coins. Make regular backups!
:::

## Directory location
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

## Files description

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