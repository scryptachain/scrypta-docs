# Introduzione al QT Wallet

In questa sezione spieghiamo in modo piu' approfondito il QT Wallet di Scrypta illustrandone alcune funzioni in modo più approfondito.
Anche se esistono diversi tipi di walet per cryptovalute, è comunque essenziale capirne le basi di funzionamento perche' comunque le operazioni che si possono compiere sono pressappoco uguali per tutte le cryptovalute.

In questa sezione di guida analizzeremo il setup del wallet dopo il primo avvio, il backup e l'encrypting del wallet, l'export delle chiavi private singole o dell'intero wallet.

### Scrypta Core Official Wallet
A prescindere da quale sia la tipologia di wallet utilizzato, la prima nozione da comprendere e' che le cryptovalute che possediamo non sono custodite fisicamente all'interno del wallet. I fondi sono memnorizzati in un registro pubblico distribuito chiamato blockchain.
Ciò che fornisce l'accesso ai fondi contenuti in un dato indirizzo, sono le chiavi private dell'indirizzo stesso. Perdendo le chiavi private si perde l'accesso ai fondi, per cui non avere le chiavi private significa non avere accesso ai fondi che il wallet contiene.

Attraverso il Core Wallet, abbiamo il possesso delle chiavi private e dei fondi contenuti in ciascun indirizzo corrispondente. Ovviamente ciascuna cryptovaluta ha il proprio core wallet, e tali wallet di blockchain diverse non possono dialogare tra loro in quanto fanno parte di diversi network peer-to-peer.

## Cos'è un QT wallet?
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
- Block Explorer

Prima di esplorare queste funzionalità, di seguito forniremo una breve descrizione sul primo setup del wallet. Tali procedure sono uguali per la maggior parte dei wallet di Bitcoin, Litecoin e quasi tutte le altre cryptovalute.

## Prima installazione Wallet Scrypta

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
<br>Definzioni e dettagli piu' approfonditi sui file di bootstrap sono forniti nell'[apposita sezione](../scrypta-full-node/setup.html#bootstrap).

::: warning <img src=".././.vuepress/public/assets/icons/warning.svg" width="32"><br>
Poichè verranno scaricati parecchi dati, assicuratevi di avere sufficiente spazio disponibile sul vostro hard-disk per salvare l'intera copia della blockchain.
<br>A seconda della velocità della connessione, per completare la sincronizzazione potrebbe volerci molto tempo.
:::

Una volta che la sincronizzazione è stata completata, indicata dal simbolo nell'angolo in basso a destra, il vostro client è connesso alla blockchain ed è pronto sia per scambiare transazioni con altri client desktop/app della rete Scrypta che per permetterci di effettuare tutte le operazioni sopra riportate.
<br>![qt_wallet](../.vuepress/public/assets/qt_wallet/status.png)

Nel caso in cui il wallet non riesce a sincronizzare in automatico e a collegarsi alla lista dei nodi, è possibile forzare la sincronizzazione aggiungendo manualmente una lista di nodi al file lyra.conf che troverete nella cartella di sistema.

Per ottenere una lista aggiornata di nodi, andare nel blockexplorer e cliccare su ["node list":](https://chainz.cryptoid.info/klks/#!network).
Copiare il contenuto della tabella e incollarlo nel file lyra.conf. 
Quindi salvate il file e riavviate il wallet.

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

::: danger <img src=".././.vuepress/public/assets/icons/danger.svg" width="32"><br>
**ATTENZIONE:** Se dimenticate o smarrite la password dopo l'encryption, perderete l'acesso a tutti i vostri fondi.
:::

Al termine dell'operazione di encryption, il software si chiuderà.
<br>Al successivo riavvio, il wallet presenterà stavolta il simbolo di un lucchetto chiuso nell'angolo in basso a destra.
<br>![qt_wallet](../.vuepress/public/assets/qt_wallet/lock.png)
<br>Ciò indica che per effettuare operazioni come lo staking, l'invio dei fondi, il dump delle chiavi private o altre funzioni principali, dovete sempe procedere prima con l'unlock del wallet.

## Lock/Unlock wallet
Per sbloccare il wallet, bisogna inserire la passphrase che abbiamo usato per effettuare l'encryption.
Dal menu **SETTINGS** scegliamo **UNLOCK WALLET**, si aprirà quindi la finestra come da immagine:
<br>![qt_wallet](../.vuepress/public/assets/qt_wallet/unlock.png)

Inserire la passphrase e premere **OK**.
<br>Flaggando l'opzione *"For anonymization and staking only"*, il wallet verrà sbloccato solo per lo staking e il processo di obfuscation.
A questo punto il vostro wallet e' sbloccato per tutte le operazioni,e tale stato è indicato dal lucchett verde nell'angolo in basso.
<br>![qt_wallet](../.vuepress/public/assets/qt_wallet/unlocked.png)

## Wallet Backup
Dopo aver completato il processo di encryption, procediamo con l'effettuare una copia di backup del nostro **wallet.dat** appena cryptato, il file che contiene tutte le informazioni del nostro portafoglio digitale e tutti gli indirizzi con le rispettive chiavi private.
<br>Per procedere col backup, dal menu **"FILE"** andate su **"BACKUP WALLET"**, scegliete un nome e il percorso su cui salvare il backup del file wallet.dat, in un luogo sicuro.

::: warning <img src=".././.vuepress/public/assets/icons/warning.svg" width="32"><br>
**ATTENZIONE:** Questa copia di backup vi permetterà di recuperare i vostri fondi semplicemente importando il file wallet.dat su un altro client Scrypta, per cui custoditelo con estrema attenzione e cautela.
:::

## Debug Console

La debug console del QT wallet di Scrypta è un utilissimo strumento dal quale si possono manualmente inviare i comandi per compiere tutte le operazioni disponibili all'interno del portafoglio.
Accessibile dal menu **"STRUMENTI"** > **"CONSOLE DI DEBUG"**, si presenta come una finestra di terminale.
<br>![qt_wallet](../.vuepress/public/assets/qt_wallet/console.png)

Attraverso il comando **help** si aprirà la [lista completa dei comandi](../scrypta-full-node/comandi.md), di cui è disponibile spiegazione dettagliata nell'apposita sezione.
Attraverso la *debug console* è possibile interrogare direttamente la blockchain sullo stato del network, di una transazione, dei masternodes, oppure si possono creare transazioni manuali, settare impostazioni operative o di sicurezza, generare nuovi indirizzi, ma soprattutto gestire le chiavi private e il wallet stesso.

Vediamo di seguito le principali operazioni sulle chiavi private.

## Dump e importazione private keys
Queste sono fra le più importanti operazioni che è possibile effettuare nel proprio wallet.
Per essere realmente in possesso dei fondi presenti in un indirizzo Lyra o in un wallet, dobbiamo avere la proprietà delle corrispondenti chiavi private.
<br>Ogni volta che create un nuovo indirizzo pubblico in un wallet, viene generata anche la corrispondente chave privata.
Tuttavia tale chiave privata non viene mai esposta dal client per ragioni di sicurezza, e bisogna esportarle (fare il "dump") attraverso la debug console.

Importando tali chiavi private in un nuovo wallet su altro dispositivo, avrà infatti la conseguenza di rendere accessibili i fondi in esso contenuti, che pertanto saranno di proprietà esclusiva di colui (o coloro) che detengono le chiavi private di quell'indirizzo specifico.
Per effettuare questa operazione e le altre riportate in questa sezione della guida, è necessario che il wallet sia [unlocked](../scrypta-full-node/setup.html#lock-unlock-wallet).

::: danger <img src=".././.vuepress/public/assets/icons/danger.svg" width="32"><br>
**ATTENZIONE:** Si raccomanda sempre la massima prudenza quando si espongono le proprie chiavi private.
<br>Renderle accessibili a terzi, da loro accesso ai vostri fondi.
:::

::: warning <img src=".././.vuepress/public/assets/icons/warning.svg" width="32"><br>
Si consiglia di effettuare sempre backup ridondanti sulle chiavi private, nonchè di conservarle in un luogo a cui vi è sempre possibile accedere.
<br>Lo smarrimento delle chiavi private comporta l'inaccessibilità da parte di chiunque, voi compresi, ai vostri fondi.
:::

### Per procedere al dump della private key

Per effettuare il dump di una chiave privata per uno specifico indirizzo è sufficiente aprire la debug console come spiegato in precedenza. Il comando per esportare la chiave privata di un indirizzo è **dumpprivkey**.
Attraverso il comando **`dumpprivkey "lyraaddress"`** ci viene  rivelata la chiave privata corrispondente all'indirizzo "lyraaddress".


::: warning <img src=".././.vuepress/public/assets/icons/warning.svg" width="32"><br>
Ogni indirizzo ha la propria chiave privata, se conservate i vostri fondi in indirizzi diversi, è fondamentale che facciate il dump per ciascuno degli indirizzi sui cui sono presenti dei fondi.
:::

::: tip <img src=".././.vuepress/public/assets/icons/tip.svg" width="32"><br>
L'indirizzo per cui volete esportare la chiave privata deve essere di vostra proprietà,per verificarlo basta digitare
**`validateaddress "lyraaddress"`**, e il sistema vi restituirà delle info su quell'indirizzo.
:::

Una volta che ci viene restituita la chiave privata, è possibile importarla in qualsiasi wallet Scrypta per avere accesso ai fondi in essa contenuti.

### Per procedere all'importazione di una chiave privata:
Se siamo in possesso di una chiave privata e vogliamo procedere alla sua importazione, è sufficiente aprire la debug console come spiegato in precedenza e dare il comando
**`importprivkey "lyraprivkey"`** che scannerizza la blokchchain, visualizza e rende disponibile il balance dell'indirizzo corrispondente al possessore della chiave privata.

## Dump wallet
Attraverso la funzione **"dump wallet"** si effettua l'export completo di tutte lke chiavi private per tutti gli indirizzi (siano essi già stati usati o meno) generati dal vostro wallet e salvati in formato cryptato all'interno del file **wallet.dat**.

A tal proposito è bene fare una precisazione: l'operazione di **dump wallet** presenta delle differenze con l'operazione descritta in precedenza nella sezione [**"backup wallet"**](../scrypta-full-node/setup.html#wallet-backup), in quanto il backup salva la copia cryptata del file wallet.dat. Ripristinando il file wallet.dat avremo la possibilità di visualizzare l'intero wallet, ma avremo sempre bisogno della password di encryption per accedere ai fondi in esso contenuti.
Con "dump wallet" andiamo ad esportare un file di testo **non cryptato** che contiene la lista completa di tutti gli indirizzi creati dal wallet con tutte le corrispondenti chiavi private, pertanto il possessore di quel file saraà in possesso di tutti i fondi in esso contenuti.
Ecco perchè, prima di procedere, era importante spiegare la differenza che c'è tra i due tipi di backup, così da poterne comprendere quando bisogna utilizzare una modalità piuottosto che un'altra.

### Per effettuare il "dump wallet":
Per procedere all'export di tutte le chgiavi private attraverso la funzione "dump wallet", è sufficiente aprire la debug console come spiegato in precedenza e dare il comando:
**`dumpwallet "path/to/file/dump.txt"`**
 
 dove "path/to/file/dump.txt" non è altro che il percorso dove vogliamo che il sistema salvi il nostro file dump.txt contenente tutte le chiavi private.

 Se aprite il file .txt appena salvato, troverete qualcosa di simile a quanto riportato in figura, cioè un report su quando il file e' stato esportato e da quale wallet, e tutta la lista delle chiavi private (iniziano per S) e dei rispettivi indirizzi.
 <br>![qt_wallet](../.vuepress/public/assets/qt_wallet/dump.png)

 ::: danger <img src=".././.vuepress/public/assets/icons/danger.svg" width="32"><br>
**ATTENZIONE:** Raccomandiamo ancora una volta di custodire questo file con la massima sicurezza ed accedervi solo in caso di estrema necessità, in quanto le informazioni in esso contenute forniscono l'accesso **COMPLETO** ai vostri fondi.
:::

### Bootstrap
Il bootstrap non e' altro che un file (o insieme di files) contenente una "fotografia" aggiornata dello stato della blockchain in un dato momento.
Possiamo intendere il bootstrap come una copia esatta del public ledger, da usare per differenti scopi come punto di ripristino.
Uno dei momenti in cui usare il bootstrap è a causa di una chiusura errata del walet, che al successivo avvio risulta in una copia corrotta della blockchain. Sostituire i file corrotti con un bootstrap, permette un avvio piu' celere del walet, in quanto il software non deve riscaricare l'intera copia della blockchain.
A maggior ragione, quando lanciamo un wallet per la prima volta, oppure installiamo una vps che necessita di un sync completo, usare il boostrap ci consente un notevole risparmio di tempo.

Il bootstrap è solitamente composto da:
- Cartella **"Blocks"**
- Cartella **"Chainstate"**
- File **"peers.dat"**

Per salvare una copia di bootstrap da riutilizzare in un secondo momento basta salvare quanto indicato sopra.
Si raccomanda di effettuare il salvataggio del bootstrap quando il wallet è chiuso, così da preservare l'integrità dei files e delle cartelle.

Una volta salvato, se dovese essere necessario utilizzarlo, basta copiare ll contenuto del bootstrap all'interno della cartella di sistema Lyra nel vostro sistema operativo o VPS.
Al successivo riavvio, il wallet riprenderà la sincronizzazione dall'ultimo blocco salvato nel vostro bootstrap.

## Funzionalità aggiuntive
Oltre alle funzionalità che coinvolgono il wallet e i fondi in eso contenuti, ci sono altri strumenti che è possibile usare all'interno del wallet, e operazioni aggiuntive che verranno illustrate di seguito.

### Blockexplorer
Attraverso il menu **"TOOLS"**, cliccando su **"BLOCKCHAIN EXPLORER"** si accede ad un blockexplorer interno attraverso cui e' possibile effettuare alcune operazioni di controllo sui dati, sugli indirizzi e sulle tramsazioni. 
Tuttavia il blockexplorer interno del wallet manca di alcune importanti funzinalità, pertanto si consiglia di usarlo solo nel caso in cui non sia possibile collegarsi al blockexplorer ufficiale.

### Private Send
Questa funzione, accessibile dalla sezione **"OVERVIEW"** del wallet, è anche chiamata **"Obfuscation"**, e si basa su un protocollo di anonimizzazione di una parte dei fondi contenuti all'interno del wallet.
 <br>![qt_wallet](../.vuepress/public/assets/qt_wallet/obfuscation.png)

 Attraverso il pulsante **"Start Obfuscation"**, si avvia un processo di anonimizzazione delle coin che, una volta completato, rende difficoltoso individuare l'origine dei fondi per cui si è completato il processo, aumentando di fatto la privacy delle transazioni.
 <br>Dalle immagini successive possiamo vedere il processo quando è in stato **"enabled"**, e le conseguenze sui fondi coinvolti nel processo di obfuscation.

  <br>![qt_wallet](../.vuepress/public/assets/qt_wallet/obfuscation_start.png)

Non appena il processo di obfuscation viene abilitato, il wallet invia la quantità desiderata al network dei masternodes, che elabora la richiesta e restituisce indietro immediatamente lo stesso corrispettivo, ma "mixato" e frazionato in denominazioni di importo minore. 
<br>![qt_wallet](../.vuepress/public/assets/qt_wallet/obfuscation_going.png)
Come si può vedere dall'immagine, è come se i fondi nel nostro wallet sono stati ricevuti da X indirizzi diversi, come se fossero stati "scambiati" con altri proprietari.
Utilizzare regolarmente l'obfuscation su tutti i propri fondi rendendo di fatto impossibile tracciare le operazioni effettuate, nonchè aumentando sensibilmente la protezione della privacy per le proprie transazioni.
La controindicazione è che l'obfuscation penalizza lo staking, in quanto il proprio stake amount viene frazionato in importi talmente piccoli da rendere infruttuoso il processo di staking, pertanto si raccomanda di utilizzare l'obfuscation protocol solo se davvero necessario.

### Instant Send
Quando prliamo di **Instant Send** (o **SwiftTX**) non parliamo di una funzione da abilitare o disabilitare, ma della capacità del network Scrypta di inviare e ricevere transazioni anche in assenza di conferme.
<br>Tale funzionalità è attiva di default e funziona per importi non eccessivamente alti.
<br><br>Ciò significa che, una volta completato l'invio, l'importo sarà gia' visibile nel wallet del ricevente, sotto la voce "unconfirmed", sebbene il blocco in cui è inclusa la transazione non e' ancora stato minato.
<br>Ciò permette di ridurre notevolmente i tempi di attesa quando si lavora con determinate transazioni. Tuttavia si consiglia di attendere sempre che la transazione sia effettivamente confermata dalla blockchain e inclusa in uno dei blocchi successivi all'invio.
