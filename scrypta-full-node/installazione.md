# Installation

The installation of the **LYRA WALLET** involves different steps depending on the operating system used.

The LYRA WALLET is currently available for Linux, MacOS, Windows and Raspberry Pi 4 at the following link:

[LYRA WALLET](https://github.com/scryptachain/scrypta/releases)

Here are the instructions for each operating system:

## Linux

Here are the steps for the Lyra Wallet installation process on **Linux** / **Ubuntu 16.0.4**: 

1. Open the Thermal (CTRL-ALT-T)
2. Enter the following instructions line by line (by pressing enter on each line) in order to compile the LYRA Wallet in the GUI version (with graphic interface).
```
sudo add-apt-repository -y ppa:bitcoin/bitcoin
sudo apt-get install -y software-properties-common python-software-properties
sudo apt-get update
sudo apt-get install libdb4.8-dev libdb4.8++-dev -y
sudo apt-get -y install build-essential autoconf automake libboost-all-dev libleveldb-dev libgmp-dev libgmp3-dev libssl-dev libcurl4-openssl-dev libcrypto++-dev libqrencode-dev libminiupnpc-dev autogen libtool git libevent-dev libprotobuf-dev
sudo apt-get install -y curl g++ git-core pkg-config libtool faketime bsdmainutils mingw-w64 g++-mingw-w64 nsis zip ca-certificates python
sudo apt-get install libzmq3-dev
sudo apt-get install libqt5gui5 libqt5core5a libqt5dbus5 qttools5-dev qttools5-dev-tools libprotobuf-dev protobuf-compiler
sudo apt-get install libqrencode-dev
git clone https://github.com/scryptachain/scrypta
cd scrypta
./autogen.sh
./configure
sudo make
cd src/qt
chmod 777 -R *
./lyra-qt
```
::: warning Warning
Note that using Ubuntu 18.04 LTS, after the command ```./Configure```, you may run into this error:
configure: error: `Detected LibreSSL: This is NOT supported, and may break consensus compatibility!`

The problem can be solved by installing the **ssl library v1.0** with the following command:
```
apt-get install libssl1.0-dev
```
Now run the command `./autogen.sh`.
:::

## Windows

The easiest way to install and configure the LYRA portfolio on **Windows** is to use the precompiled executable available on Github:

[Windows Wallet](https://github.com/scryptachain/scrypta/releases)

Steps:

1. Download the zip file
2. Extract the contents of the Zip files to the desired location
3. Run the lyra-qt.exe executable file

::: warning Warning
A virus warning (false positive) may appear for which you will need to ignore or create an exception.
:::

## macOS
Step to install the Lyra Wallet on Mac.
1. Go to the [Scrypta Github portal] (https://github.com/scryptachain/scrypta/releases).
2. Click on the latest version of the macOS.dmg file.
3. Once the DMG file is downloaded, double click on it.
4. A file called Lyra-Qt will be generated,
move this file to the applications folder.
5. Run Lyra-Qt to start the wallet.

## Raspberry Pi 4

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
Riavvia nuovamente la tua Raspi e digita i seguenti comandi dopo il riavvio:
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

::: tip BalenaEtcher
BalenaEtcher is a graphical SD card writing tool that works on Mac OS, Linux and Windows and is the easiest option for burning image files. BalenaEtcher also supports writing images directly from the zip file, without having to unzip.
:::

To write your image with Balena Etcher:
- Download the latest version of [balenaEtcher] (https://www.balena.io/etcher/) and install it.
- Connect an SD card reader with the SD card inside.
- Open balenaEtcher and select from your hard disk the .img Scrypta file you want to write on the SD card.
- Select the SD card on which you want to write the image.
- Review your selections and click "Flash!" to start writing data to the SD card.
- Wait for the process to complete, then insert the SD card into the Raspberry PI 4.

::: warning Note
For security reasons, the wallet installed on your system is provided without the wallet.dat file to ensure that no one besides you has the private keys of your wallet. The wallet.dat file will be automatically generated when you start the portfolio for the first time.
:::