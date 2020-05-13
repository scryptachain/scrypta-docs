# Installazione
Installare un IdaNode è abbastanza semplice anche se bisogna stare attenti ad installare tutte le tecnologie richieste. Principalmente le dipendenze riguardano NodeJS, MongoDB e il wallet ufficiale Scrypta.

Consigliamo il deploy su una macchina che abbia Ubuntu 16.04 con almeno 2GB di RAM.

Il file install.sh andrà ad installare tutte le dipendenze per voi, riprendiamo lo script direttamente in questa pagina. La cosa importante è editare il file .env a seguito dell'installazione, inserendo tutti i campi correttamente, nello specifico:

 - **RPCUSER:** Lo stesso valore inserito all'interno del wallet, di default è "lyrarpc". E' fondamentale editare questo campo sia nel `lyra.conf` che nel `.env`
 -  **RPCPASSWORD:** Lo stesso valore inserito all'interno del wallet, di default è "lyrapassword". E' fondamentale editare questo campo sia nel `lyra.conf` che nel `.env`
 - **RPCPORT:** Deve essere `42223` ed è già preimpostato
 - **RPCADDRESS:** Deve essere `localhost` se il wallet è installato all'interno della stessa macchina. Deve essere inserito l'eventuale indirizzo IP di una macchina esterna.
 - **LYRAPATH:** Path che punta la cartella contenente il file `lyrad`
 - **DEBUG**: Serve a lavorare con il debug mode attivo, cosa che consigliamo
 - **DB_PORT**: La porta di collegamento per MongoDB, di default è `28015`
 - **DB_HOST**: Deve essere `localhost` se il database è installato all'interno della stessa macchina. Deve essere inserito l'eventuale indirizzo IP di una macchina esterna.
 - **COIN**: Di default è `LYRA`, da cambiare per eventuali integrazioni con altre blockchain
 - **SYNC**: Di default è `true` e serve ad attivare o disattivare la sincronizzazione automatica. Si può disabilitare per motivi di debug
 - **AIRDROP**: La quantità di Lyra che l'IdaNode invia ogni qualvolta viene inizializzato un indirizzo
 - **SERVERMODE**: Stabilisce se il sistema deve installare una Tray Icon nella topbar per chiudere velocemente l'IdaNode. Di default è `false`.
 - **TESTNET**: Stabilisce se l'IdaNode è in modalità testnet oppure no, il valore può essere inserito come `true` o `false`.
 - **LYRADATAFOLDER**: Path che punta alla cartella contenente i file della blockchain di Scrypta. Solitamente è `~/.lyra`. E' fondamentale per avviare correttamente il processo di costruzione del file di bootstrap.
 - **NODE_KEY**: E' la chiave privata che identifica l'IdaNode, serve per firmare le richieste effettuate dall'esterno e comunicare con il P2P network.

## Esempio di installazione
Per installare l'IdaNode attraverso lo script `install.sh` è necessario usare questi comandi:
```
cd ~
git clone https://github.com/scryptachain/scrypta-idanodejs
cd scrypta-idanodejs
chmod 777 install.sh
./install.sh
```
A questo punto editiamo prima il file lyra.conf attraverso il comando `nano ~/.lyra/lyra.conf` e modifichiamo `rpcuser` e `rpcpassword` con due valori casuali:

```
rpcuser=YsmtF6bvBrY82Q
rpcpassword=e43GkfCGMYaXsr
```

Ora modifichiamo quindi il nostro file `.env` attraverso il comando `nano ~/scrypta-idanodejs/.env` e modifichiamo i parametri:
```
RPCUSER=YsmtF6bvBrY82Q
RPCPASSWORD=e43GkfCGMYaXsr
LYRAPATH=/home/YourLinuxUser/scrypta-idanodejs
```
A questo punto siamo pronti a testare la nostra configurazione attraverso il comando `npm run dev`.
Se tutto va bene vedremo un risultato simile a questo:
```
Scrypta IdaNode listening at port 3001. Public IP is: 37.161.46.223
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
Ora l'IdaNode inizierà a sincronizzare tutti i dati presenti in blockchain, complimenti avete installato l'IdaNode!
Il processo di sincronizzazione dura parecchie ore se non avete scaricato il bootstrap (ovvero se avete fatto un'installazione manuale), sennò ci metterà qualche minuto, dipende dal numero di blocchi che deve scaricare.

## Scaricare il bootstrap

Per scaricare il bootstrap ed installarlo è sufficiente dare i permessi al file `bootstrap.sh` e avviarlo:

```
cd scrypta-idanodejs
chmod 777 bootstrap.sh
./bootstrap.sh
```
::: warning ATTENZIONE
Attenzione: è fondamentale che l'IdaNode sia spento e che il processo `mongod` sia correttamente chiuso, altrimenti il processo fallirà.
:::
