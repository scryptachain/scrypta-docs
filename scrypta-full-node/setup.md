# Introduzione al QT Wallet

In questa sezione spieghiamo in modo piu' approfondito il QT Wallet di Scrypta illustrandone alcune funzioni in modo più approfondito.
Anche se esistono diversi tipi di walet per cryptovalute, è comunque essenziale capirne le basi di funzionamento perche' comunque le operazioni che si possono compiere sono pressappoco uguali per tutte le cryèptovalute.

In questa sezione di guida analizzeremo il setup del wallet dopo il primo avvio, il backup e l'encrypting del wallet, l'export delle chiavi private singole o dell'intero wallet.

### Scrypta Core Official Wallet
A prescindere da quale sia la tipologia di wallet utilizzato, la prima nozione da comprendere e' che le cryptovalute che possediamo non sono custdite fisicamente all'interno del wallet. I fondi sono memnorizzati in un registro pubblico distribuito chiamato blockchain.
Ciò che fornisce l'accesso ai fondi contenuti in un dato indirizzo, sono le chiavi private dell'indirizzo stesso. Perdendo le chiavi private si perde l'accesso ai fondi, per cui non avere le chiavi private significa non avere accesso ai fondi che il wallet contiene.

Attraverso il Core Wallet, abbiamo il possesso delle chiavi private e dei fondi contenuti in ciascun indirizzo corrispondente. Ovviamente ciascuna cryptovaluta ha il proprio core wallet, e tali wallet di blockchain diverse non possono dialogare tra loro in quanto fanno parte di diversi network peer-to-peer.

### Cos'è un QT wallet?
QT è un framework UI e un'applicazione cross platform per sviluppatori compilata usando il linguaggio di programmazione C++.
La maggior parte dei wallet QT è sviluppata usando questo ambiente di programmazione, e tali clients sono disponibili per i principali sistemi operativi.
I walet QT sono dei veri e propri client e offrono tutto il set di funzionalità complete per gestire le cryptovalute.
Tuttavia sono applicazioni che richiedono discrete quantità di spazio sul disco poicheè, per funzionare, devono scaricare l'intera copia della blockchain in questione sul vostro computer su cui state eseguendo il client.

Ci sono delle funzioni specifiche a seconda del wallet e della cryptovaluta che stiamo usando, tuttavia tutte le coin condividono la maggior parte delle funzioni e dei rispettivi comandi.

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
 and
- Block Explorer

Prima di esplorare queste funzionalità, di seguito forniremo una breve descrizione sul primo setup del wallet. Tali procedure sono uguali per la maggior parte dei wallet di Bitcoin, Litecoin e quasi tutte le altre cryptovalute.

### Prima installazione Wallet Scrypta

La prima cosa da fare è scaricare il Wallet Ufficiale Scrypta dal [repository di Github](https://github.com/scryptachain/scrypta/releases) adatta al vostro sistema operativo.

Una volta scaricato il software, avviate **Lyra-QT**. 
![qt_wallet](../.vuepress/public/assets/qt_wallet/splash.png)



Al primo avvio vi verrà chiesto di scegliere la posizione dei file di sistema, dove verra' salvato il vostro file **wallet.dat** e la copia della blockchain.
Confermate il percorso propostovi dal software o modificatelo a vostra scelta e procedete.
Assicuratevi solo di avere abbastanza spasio disponibile nell'hard-disk.

![qt_wallet](../.vuepress/public/assets/qt_wallet/firstopen.png)

Di default, è possibile trovare la cartella di sistema ai seguenti percorsi (disabilitare cartelle nascoste):

**Linux:**
~/.bitcoin/

**MacOS:**
~/Library/Application Support/Bitcoin/

**Windows:**
%APPDATA%\Bitcoin


### Sincronizzazione con la blockchain Scrypta

Dopo che il processo di avvio del wallet si è concluso, il client si collegherà al network peer-to peer di Scrypta per avviare la sincronizzazione della blockchain scaricandone una copia aggiornata che verrà salvata nella cartella di sistema che avete definito in precedenza.

Sulla parte bassa del software troverete una barra che indica la quantità di dati rimanente per completare il sync.
![qt_wallet](../.vuepress/public/assets/qt_wallet/sync.png)
Quando quella barra sarà completata, il wallet sarà completamente syncat alla blockchain.

Nella parte bassa a destra invece troverete questi simboli
<br>![qt_wallet](../.vuepress/public/assets/qt_wallet/status.png)
<br>che indicano rispettivamente che:
- il wallet non e' encrypted
- il wallet e' connesso agli altri peers della rete
- il wallet sta syncando con la blockchain.

Al fine di velocizzare il sync della blockchain, possiamo utilizzare il **bootstrap**, che introduciamo adesso definendolo una copia aggiornata della blockchain ad un tempo piu' recente.
<br>Dettagli piu' approfonditi sui file di bootstrap verranno forniti in una sezione successiva.

::: warning <img src=".././.vuepress/public/assets/icons/warning.svg" width="32"><br>
Poichè verranno scaricati parecchi dati, assicuratevi di avere sufficiente spazio disponibile sul vostro hard-disk per salvare l'intera copia della blockchain.
<br>A seconda della velocità della connessione, per completare la sincronizzazione potrebbe volerci molto tempo.
:::

Una volta che la sincronizzazione è stata completata, indicata dal simbolo nell'angolo in basso a destra, il vostro client è connesso alla blockchain ed è pronto sia per scambiare transazioni con altri client desktop/app della rete Scrypta che per permetterci di effettuare tutte le operazioni sopra riportate.
<br>![qt_wallet](../.vuepress/public/assets/qt_wallet/status.png)

## Panoramica dei menu
### Menu principale
Questa è la barra del menù per le principali operazioni del wallet, come descritto di seguito:
<br>![qt_wallet](../.vuepress/public/assets/qt_wallet/menu.png)
- **Overview:** la dashboard principale con il balance, le transazioni recenti e la funzione di **obfuscation**, che verrà approfondita successivamente.
<br>![qt_wallet](../.vuepress/public/assets/qt_wallet/overview.png)
<br>

- **Send:** principali funzioni per l'invio di Lyra
<br>![qt_wallet](../.vuepress/public/assets/qt_wallet/send.png)
<br>

- **Receive:** funzioni avanzate per la ricezione di Lyra e creazione di pagamenti.
<br>![qt_wallet](../.vuepress/public/assets/qt_wallet/receive.png)
<br>

- **Transactions:** il registro completo di tutte le transazioni in entrata e uscita del vostro wallet, comprese eventuali rewards da masternodes e staking.
<br>![qt_wallet](../.vuepress/public/assets/qt_wallet/transactions.png)
<br>

- **Masternodes:** pannello di controllo dei vostri masternodes e dell'intero network
<br>![qt_wallet](../.vuepress/public/assets/qt_wallet/masternodes.png)
<br>

### Barra dei menu
Attraverso i menu' presenti sulla barra di sistema del software, si hanno altre funzioni, più tecniche e dettagliate, configurazioni e settings vari.

- **Menu FILE**
Attraverso il menu FILE è possibile accedere a funzioni come creazione di nuovi indirizzi, rubrica degli indirizzi attuali, firma e verifica dei messaggi, ma soprattutto il backup del wallet.
<br>

- **Menu SETTINGS**
Attraverso il menu SETTINGS si raggiungono le funzioni di encryption del wallet (che spiegheremo di seguito), di blocco e sblocco di un portfaoglio encrypted, il cambio della password di encryption e le funzioni multisend, oltre alle opzioni di sistema del wallet.
<br>**Si raccomanda di modificare solo ciò di cui si conoscono gli effetti. Ogni errore potrebbe comptomettere irrimediabilmente i vostri fondi.**
<br>

- **Menu TOOLS**
Attraverso il menu TOOLS si raggiungono funzioni di monitoraggio del network, l'importantissima ***console di debug***, il terminale interno del vostro wallet Scrypta da cui è possibile inviare comandi per interrogare direttamente al network (che verrà aprofondito in seguito), e altre opzioni che vi permettono di raggiungere facilmente i file di sistema .conf del wallet.


## Wallet Encryption

L'encryption del wallet e' una delle funzioni principali e più importanti in quanto protegge i nostri fondi (o i dati contenuti in blockchain) da usi non autorizzati.
Tali suggerimenti e procedure sono validi per la gran parte di altre cryptocurrency.


La funzione "Encrypt Wallet" raggiungibile dal menu **SETTINGS**, aggiunge un livello aggiuntivo di sicurezza al nostro wallet, proteggendo i fondi da invii fraudolenti o errati, oppure da altre operazioni che potrebbero modificare la proprietà dei fondi contenuti nel wallet attraverso il dump delle chiavi private) o altre operazioni di sicurezza.

L'encryption del wallet e' un'operazione molto semplice da effettuare, tuttavia bisogna fare molta attenzione.
Per procedere all'encryption, dal menu **SETTINGS** > **ENCRYPT WALLET** si aprirà una finestra come mostrato qui di seguito:
<br>![qt_wallet](../.vuepress/public/assets/qt_wallet/encrypt.png)
<br>

Per maggiore sicurezza scegliete una password forte, con dieci o piu' caratteri, meglio se casuali.
Assicuratevi di ricordare la password e di conservarla SEMPRE in un luogo sicuro.
Una volta scelta la password, in modo che sia impossibile da indovinare e molto difficile da corrompere, procedete con l'encryption premendo **OK**.

::: alert <img src=".././.vuepress/public/assets/icons/alert.svg" width="32"><br>
se dimenticate o smarrite la password dopo l'encryption, perderete tutti i vostri fondi.
:::

Note: se dimenticate o smarrite la password dopo l'encryption, perderete tutti i vostri fondi.

Al termine dell'operazione di encryption, il software si riavvierà, presentando stavolta il simbolo di un lucchetto chiuso nell'angolo in basso a destra.
Ciò indica che per effettuare operazioni come lo staking o l'invio dei fondi, il dump delle chiavi private o altre funzioni principali, dovete sempe procedere prima con l'unlock del wallet.


### Lock/Unlock wallet


### Debug Console

### Wallet Backup
After encryption its backup. Whenever you create a new receiving address make sure to backup your wallet. Creating a wallet backup is very simple and on most wallets it can usually be found under file or settings.

creating wallet backup

Create a name for backup, choose the location where you wish to save this backup and click on save. It will save as wallet.dat file. In case if your hard drive gets corrupt you can import this wallet.dat file to another computer and restore your funds.


### Dump private key

### Dump wallet

### Private Send

### Instant Send





## Bootstrap



