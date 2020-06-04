# Installazione
Sebbene la procedura di installazione di un IdANode sia abbastanza semplice, è necessario avere le competenze necessarie per lavorare atrraverso il terminale di Linux e per mantenere poi l'IdANode attivo.
<br>L'installazione avviene tramite uno script che si occuperà di configurare la macchina con le librerie necessarie e tutte le tecnologie richieste.
Principalmente le dipendenze riguardano NodeJS, MongoDB e il wallet ufficiale Scrypta.

Affinchè l'IdANode funzioni al meglio, è assolutamente necessario che il deploy avvenga su una VPS che abbia Ubuntu 16.04, con almeno 2GB di RAM e minimo 50GB di Hard Disk.

Il file script ***install.sh*** andrà ad installare tutte le dipendenze per voi, riprendiamo lo script direttamente in questa pagina. 
Durante l'installazione sarà richiesto di editare alcuni campi del file .env, verificare quindi che tutti i parametri siano inseriti correttamente, nello specifico:

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
 - **AIRDROP**: La quantità di Lyra che l'IdANode invia ogni qualvolta viene inizializzato un indirizzo
 - **SERVERMODE**: Stabilisce se il sistema deve installare una Tray Icon nella topbar per chiudere velocemente l'IdANode. Di default è `false`.
 - **TESTNET**: Stabilisce se l'IdANode è in modalità testnet oppure no, il valore può essere inserito come `true` o `false`.
 - **LYRADATAFOLDER**: Path che punta alla cartella contenente i file della blockchain di Scrypta. Solitamente è `~/.lyra`. E' fondamentale per avviare correttamente il processo di costruzione del file di bootstrap.
 - **NODE_KEY**: E' la chiave privata che identifica l'IdANode, serve per firmare le richieste effettuate dall'esterno e comunicare con il P2P network.
 - **ADMIN_PUBKEY**: E' la chiave pubblica che identifica l'IdANode all'interno dell'IdaNode network. Da utilizzare nel caso si voglia collegare il proprio IdaNode al network ufficiale Scrypta.

## Esempio di installazione

### Esecuzione dello script di installazione
Per installare l'IdANode attraverso lo script `install.sh` procedere con i seguenti comandi all'intenro della VPS su cui girerà l'IdANode:

```
cd ~
git clone https://github.com/scryptachain/scrypta-idanodejs
cd scrypta-idanodejs
chmod 777 install.sh
./install.sh
```
A questo punto, lo script inizierà ad installare dipendenze, librerie e componenti necessari per la configurazione e il funzionamento dell'IdANode. Tale processo potrebbe durare svariati minuti.
<br>Alla fine dell'installazione, lo script ci restituisce l'output seguente:
```
NOW EDIT .env FILE AND RUN FOLLOWING COMMAND:
pm2 start npm -- start && pm2 save
```
Per il momento ignoriamo questo messaggio e procediamo con la configuraizone dei file necessari all'avvio dell'IdANode.

## Prima configurazione

Prima di avviare l'IdaNode, è necessario procedere con le configurazioni descritte prima.

Editiamo il file lyra.conf attraverso il comando `nano ~/.lyra/lyra.conf` e modifichiamo `rpcuser` e `rpcpassword` con valori da noi scelti, quelli riportati sotto sono solo un esempio (si raccomanda sempre di usare password complesse):

```
rpcuser=YsmtF6bvBrY82Q
rpcpassword=e43GkfCGMYaXsr
```
Una volta editato e salvato il file lyra.conf, modifichiamo il file `.env` attraverso il comando `nano ~/scrypta-idanodejs/.env`.
<br>I parametri da modificare sono:

```
RPCUSER=YsmtF6bvBrY82Q
RPCPASSWORD=e43GkfCGMYaXsr
LYRAPATH=/path-to-folder/scrypta-idanodejs
NODE_KEY=LaTuaChiavePrivata
ADMIN_PUBKEY=YourAdminPubKey
```

I parametri `NODE_KEY` e `ADMIN_PUBKEY` corrispondono alla chiave privata dell'IdaNode e alla rispettiva chiave pubblica, con il quale verranno firmate le richieste di validazione.

Per ottenere una chiave privata (quindi anche la chiave pubblica), è possibile procedere in diversi metodi, tuttavia suggeriamo di usare il desktop Wallet Scrypta. E' consigliato *non* usare lo stesso wallet dell'IdaNode ma un wallet esterno:

Aprire la debug console e digitare

```
getnewaddress 
```
La console ci restituirà un nuvo indirizzo. Attraverso il dump della relativa chiave privata e la validazione di tale indirizzo otterremo i dati che ci interessano:
```
dumpprivkey *nuovoindirizzo* 
```
ci restituisce la chiave privata da inserire nel campo `NODE_KEY` del file .env
<br>A seguire, attraverso il comando
```
validateaddress *nuovoindirizzo* 
```
 otterremo un risultato simile a quello riportato sotto:

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
Da qui ricaviamo il valore `ADMIN_PUBKEY` da inserire nel file .env

Se preferite generare le chiavi attraverso l'interfaccia grafica potete collegarvi al vostro IdaNode e generare un nuovo indirizzo dal pannello `tools`.

Per accedere all'interfaccia grafica è necessario collegarsi con il browser all'indirizzo IP della macchina, specificando la porta di esecuzione dell'IdaNode che è la `3001`:

```
http://Indirizzo_IP_VPS:3001
```

Ottenuti entrambi i valori `NODE_KEY` e `ADMIN_PUBKEY` e sostituiti nei relativi campi del file .env, possiamo procedere con lo step successivo.

## Avvio del daemon Lyra e dell'IdANode

Avviamo il daemon Lyra attraverso il comando 
```
./lyrad &
``` 
e verifichiamo l'effettivo avvio del daemon attraverso il comando:
```
./lyra-cli getinfo
```
Dopo che il wallet ha dato una risposta positiva e ha iniziato a sincronizzare i blocchi potremo far partire l'IdaNode attraverso il comando `npm start` (che avvia il wallet provvisoriamente)
```
npm start ### avvia il wallet provvisoriamente
```

Se abbiamo configurato tutto corettamente, dopo aver dato il comando `npm start`, otterremo un risultato simile a questo:
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
Questo output significa che l'installazione dell'IdANode è avvenuta correttamente e il vostro IdANode inizierà quindi a sincronizzare tutti i dati presenti in blockchain.

Nel caso in cui vogliate avviare il wallet definitivamente, usare il comando:
```
pm2 start npm -- start
```

Per monitorare lo stato del wallet:
```
pm2 monit
```

## File di bootstrap 

Se non avete scaricato il bootstrap (ovvero se avete fatto un'installazione manuale), il processo di sincronizzazione può durare parecchie ore.
<br>Al fine di velocizzare la sincronizzazione è possibile avvalersi dei file bootstrap.
<br><br>**ATTENZIONE**: I file di bootstrap sono diversi per l'IdANode e il wallet Scrypta.

### Scaricare il bootstrap per il wallet Scrpta

Il bootstrap del wallet renderà il processo di sincronizzazione del wallet molto più rapido. Attraverso questi comandi è possibile scaricarlo e sincronizzare il wallet con l'ultima versione bootstrap disponibile. Questi comandi vanno dato all'interno della cartella `.lyra`, la stessa dove avete precedentemente modificato il file `lyra.conf`.

```
cd .lyra
wget https://scrypta.sfo2.digitaloceanspaces.com/bootstrap.tar.gz
rm -rf blocks chainstate peers.dat
tar -xvzf bootstrap.tar.gz
```

### Scaricare il bootstrap per l'IdANode

Per scaricare il bootstrap ed installarlo è sufficiente dare i permessi al file `bootstrap.sh` e avviarlo:

```
cd scrypta-idanodejs
chmod 777 bootstrap.sh
./bootstrap.sh
```
::: warning ATTENZIONE
E' fondamentale che l'IdANode sia spento e che il processo `mongod` sia correttamente chiuso, altrimenti il processo fallirà. Se fallisce si consiglia di riavviare il VPS attraverso il comando `reboot` e partire direttamente a macchina appena avviata
:::
