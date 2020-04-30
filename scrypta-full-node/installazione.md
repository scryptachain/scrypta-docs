# Installazione

L'installazione del **LYRA WALLET** prevede passaggi diversi e variazioni dei percorsi dei file in base al sistema operativo. 

Il LYRA WALLET è attualmente disponibile per Linux, MacOS, Windows e Raspberry Pi 4 al seguente Link:

[LYRA WALLET](https://github.com/scryptachain/scrypta/releases)

Di seguito le istruzioni per ogni sistema operativo:

## Linux

Ecco i passaggi per il processo di installazione di Lyra Wallet su **Linux**, nello specifico su **Ubuntu 16.0.4**: 

1. Apri il Termiale (CTRL-ALT-T)
2. Inserisci questo codice riga per riga (premendo invio ad ogni riga) in modo da compilare il LYRA Wallet nella versione GUI (con interfaccia grafica).
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
::: warning Attenzione
Nota che con Ubuntu 18.04 LTS, dopo il comando```./configure```, potresti imbatterti in questo errore:
configure: error: `Detected LibreSSL: This is NOT supported, and may break consensus compatibility!`

Risolverai il problema installando la **ssl library v1.0** con il seguente comando:
```
apt-get install libssl1.0-dev
```
Ricomincia adesso dal comando `./autogen.sh`.
:::

## Windows

Il modo più semplice per configurare il portafoglio LYRA su **Windows** è utilizzare l' eseguibile precompilato disponibile su Github:  

[Windows Wallet](https://github.com/scryptachain/scrypta/releases)

Ecco di seguito il processo passo per passo:

1. Scarica il file zip
2. Estrai il contenuto dei file Zip nella posizione desiderata
3. Esegui il file eseguibile lyra-qt.exe

::: warning Attenzione
È possibile che venga visualizzato un avviso antivirus (falso positivo) per il quale dovrete ignorare o creare un'eccezione.
:::

## macOS
L'installazione di Lyra Wallet su Mac è un processo relativamente semplice.
1. Vai sul [portale Github di Scrypta](https://github.com/scryptachain/scrypta/releases).
2. Fai clic sull'ultima versione del file macOS.dmg.
3. Una volta scaricato il file DMG, fai doppio clic su di esso.
4. Verrà generato un file chiamato Lyra-Qt,
sposta questo file nella cartella delle applicazioni.
5. Esegui Lyra-Qt per avviare il wallet.

## Raspberry Pi 4

Di seguito troverai la guida completa con tutti i comandi per compilare e installare manualmente tutte le librerie e le dipendenze per il tuo wallet Scrypta su **Raspberry PI 4**. 

In alternativa puoi seguire la guida per l'installazione del "file immagine" del sistema operativo fornito da Scrypta che puoi trovare di seguito. 

Per un'installazione manuale passo-passo, procedi all'avvio del terminale e digita i seguenti comandi:
```
sudo apt-get update && sudo apt-get upgrade
```
Dopo il comando, la Raspberry richiederà il Riavvio. Procedi riavviando la tua Rasp.

Al riavvio, digita i seguenti comandi da Terminale:
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
Complimenti! Adesso puoi avviare e utilizzare il **Lyra Wallet-Qt** sulla tua Raspberry 4

### Guida per l'installazione di Raspberry PI 4 con File Immagine

Il file immagine per Raspberry PI 4 si basa su **Raspbian Debian Buster** con tutte le librerie già installate e un Lyra wallet funzionante. 

È possibile masterizzare il file immagine  sulla scheda SD seguendo la nostra guida all'installazione.

> Questa sezione spiega come installare un'immagine del sistema operativo Raspberry Pi su una scheda SD. Avrai bisogno di un altro computer con un lettore di schede SD.


Il file di immagine ufficiale Scrypta è disponibile per il download dal Github di Scrypta. Sarà necessario utilizzare uno strumento di scrittura delle immagini per installare l'immagine scaricata sulla scheda SD.

::: tip BalenaEtcher
BalenaEtcher è uno strumento grafico per la scrittura di schede SD che funziona su Mac OS, Linux e Windows ed è l'opzione più semplice per la masterizzazione di file immagine. BalenaEtcher supporta anche la scrittura di immagini direttamente dal file zip, senza che sia necessario decomprimere.
:::

Per scrivere la tua immagine con balenaEtcher: 
- Scarica l'ultima versione di [balenaEtcher](https://www.balena.io/etcher/) e installala.
- Collega un lettore di schede SD con la scheda SD all'interno. 
- Apri balenaEtcher e seleziona dal tuo disco rigido il file .img Scrypta che desideri scrivere sulla scheda SD. 
- Seleziona la scheda SD su cui desideri scrivere l'immagine. 
- Rivedi le tue selezioni e fai clic su "Flash!" per iniziare a scrivere i dati sulla scheda SD. 
- Attendere il completamento del processo, quindi inserire la scheda SD in Raspberry PI 4.

::: warning Nota bene
Per motivi di sicurezza, il portafoglio installato sul tuo sistema viene fornito senza il file wallet.dat per garantire che nessuno oltre te abbia le chiavi private del tuo portafoglio. Il file wallet.dat verrà generato automaticamente quando avvii il portafoglio per la prima volta.
:::