# Testnet

To use the testnet version of the Scrypta blockchain you will need to download and install the official wallet. You can find an installation guide in the following section:

[Installation](installazione.md) 

Next you will have to start it in Testnet mode.

To do this you need to insert the text line `testnet=1` in the configuration file `lyra.conf` and restart the wallet.

The configuration file is located in the Data Directory which is automatically created the first time the wallet is started.

For more information, consult the relevant section [Data directory](data-directory.md).

## Steps for starting Scrypta Testnet

1. Download the wallet and start it. This will create the data directory;
2. Close the wallet and go to the data directory called lyra;
3. Open the lyra.conf file with a text editor;
4. Add the string testenet = 1;
5. Save the changes in the lyra.conf file;
6. Start lyra-qt (wallet with graphical interface) or lyrad (version without graphical interface).

::: tip Note
if you later want to start the wallet in mainnet mode, simply replace testnet = 1 with testenet = 0 in the configuration file, save the changes and restart the wallet. 
::::

## Faucet tLYRA (testnet LYRA)
To receive test LYRA (* tLyra *), you can use the Faucet system created through IdANode technology:

[Faucet Link](https://testnet.scryptachain.org/#)

This generates a Lyra testnet reception address in your wallet to be entered in the * INIT * field of the * Tool * section.

In this way you will receive **50tLyra **.

Through the IdANode Testnet you can also generate a new address, send * tlyra * to the latter through the *INIT* function and import the private key into the desktop wallet through the *debug console*, using the command `importprivkey YOURPRIVATEKEY` .