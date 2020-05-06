# SocialPay

## Introduzione

### Finalità del progetto - Dematerilizzazione dei buoni spesa
Scrypta Foundation, durante la fase di emergenza determinatasi per effetto della pandemia da Covid-19, ha contribuito rilasciando l’uso gratuito a tutti i Comuni di un sistema per la dematerializzazione e gestione dei **“buoni spesa”**, detto pure *“Tokenizzazione”* dei buoni di solidarietà.

Il sistema, chiamato **"SocialPay"** si propone come soluzione per la rapida erogazione da parte dei comuni nei contronti dei cittadini aventi diritto ai buoni spesa, a seguito della situazione di emergenza generata dal COVID19.
L'intero progetto è stato rilasciato in **open-source**, questo significa che è possibile generare tutto l'occorrente per emettere e gestire i buoni spesa per il Comune, in completa autonomia.

### Cosa prevede il sistema

Il sistema prevede una **piattaforma gestionale** in dotazione a ciascun **Comune** che permette:
- Di tenere traccia di ogni Card numerata e differenziata tramite QR-CODE.
- Di collegare l’identità del cittadino avente diritto ala propria Card.
- Di erogare la rappresentazione digitale del valore economico del buono attraverso la Card, e tale valore digitale potrà essere speso presso gli esercenti aderenti al circuito.
- Di monitorare il servizio attraverso dati di utilizzo in real-time.

Il sistema è quindi composto dai seguenti elementi:

- Una **Web-App** in dotazione all’Esercente che permette di:
    - Acquisire il pagamento dei beni attraverso la Card
    - Visualizzare lo storico delle transazioni e il saldo
    - Richiedere il rimborso al Comune che avverrà sotto forma di bonifico bancario.

- Le **Card con QR-CODE** in dotazione ai Cittadini aventi diritto:
    - La Card verrà consegnata dal Comune.
    - La Card verrà presentata dal cittadino agli esercenti aderenti al circuito per utilizzare i buoni.

### Come Funziona

Il comune distribuirà direttamente ai cittadini aventi diritto una **Card** numerata ed assegnata a un
soggetto identificato dall’ente.
Assieme alla card fornirà un **codice PIN** di 5 cifre che permette l’utilizzo esclusivo dei fondi.

Gli esercenti che aderiscono al sistema digitale del buono spesa, verranno dotato di un’apposita
**applicazione web** che consente di utilizzare il proprio **smartphone/tablet** come un POS virtuale.
Con la fotocamera del proprio dispositivo è possibile inquadrare il QR-Code sul retro della Card assegnata al
cittadino e addebitare la somme corrispondente all'importo dell’acquisto effettuato nella sua attività.

Il cittadino dovrà comunque autorizzare l’acquisto inserendo il PIN nel POS virtuale dell’esercente.
Ogni esercente tramite la sua applicazione potrà controllare costantemente il proprio conto digitale
dove verificherà in tempo reale l’accredito delle somme.

Inoltre, all’interno della web-app è presente
una specifica funzione **“Richiedi Rimborso”** per inoltrare la richiesta di rimborso al Comune, che
avverrà sotto forma di bonifico bancario.

## Guida per l'esercente
### POS Digitale e CARD BUONO SPESA
#### Vademecum pr l'esercente

Il **Comune di "*nomecomune*"** che adotta il sistema **SocialPay** predispone, per i cittadini aventi diritto, la **Card *“Buono Spesa Digitale”*** da utilizzare esclusivamente per l’acquisto di beni di prima necessità e presidi farmaceutici.

Il Comune fornisce gratuitamente all'esercente una Card Esercente dotata di **QR-CODE** e protetta da apposito codice PIN (password numerica) che servirà per le principali operazioni di configurazoine e per l'utilizzo dell’apposita applicazione web in dotazione all'esercente stesso.

![socialpay](../.vuepress/public/assets/socialpay/card_esercente.png)

### Procedura lato esercente
#### Accesso al sistema

| <div style="width:250px"></div>| <div style="width:250px"></div>|
| :---: | :---: |
| ![socialpay](../.vuepress/public/assets/socialpay/mockup_phone_01.png) | Accedi collegandoti con il tuo smartphone/tablet, da adibire a POS virtuale, al sito: <br>[https://nomecomune.socialpay.live/](https://nomecomune.socialpay.live/).<br><br>Tocca **“SCANNERIZZA CARD”** e inquadra il **QR Code** della carta che ti è stata consegnata (Card Esercente).<br><br>Ti verrà richiesto di inserire il **PIN** che ti è stato assegnato insieme alla **CARD**.<br><br>Adesso sei in grado di ricevere pagamenti attraverso i **BUONI SPESA DIGITALI** dei cittadini aventi diritto. 

::: tip <img src=".././.vuepress/public/assets/icons/tip.svg" width="32"> 
**NOTA:** Per i dispositivi **iOS** è necessario utilizzare il browser **“Safari”**, per i dispostivi **Android** è necessario utilizzare **“Google Chrome"**.
:::

#### Ricezione pagamento

| <div style="width:250px"></div>| <div style="width:250px"></div>|
| :---: | :---: |
| ![socialpay](../.vuepress/public/assets/socialpay/mockup_phone_02.png) | Accedi alla web-app dal tuo smartphone o tablet all’indirizzo: [https://nomecomune.socialpay.live/](https://nomecomune.socialpay.live/)<br><br>Nella **HOME** troverai il *“tastierino”* del **POS** virtuale come da immagine.<br><br>Inserisci l’importo dello scontrino dovuto e premi il tasto **“PAGA”**.
***sEUR indicato in figura è una rapresentazione digitale dell’Euro.***

Inquadra adesso con lo smartphone il QR-CODE sul retro della Card del cliente
![socialpay](../.vuepress/public/assets/socialpay/scan_qr.png)

Il cliente autorizza l’acquisto inserendo il suo **PIN** nel POS virtuale.
La transazione avviene in tempo reale.

![socialpay](../.vuepress/public/assets/socialpay/insert_pin.png)
Dopo aver effettuato la transazione, visualizzerai istantaneamente una notifica dell’avvenuto pagamento.

#### Controllo saldo, storico transazione e ricezione pagamenti

| <div style="width:250px"></div>| <div style="width:250px"></div>|
| :---: | :---: |
| ![socialpay](../.vuepress/public/assets/socialpay/mockup_tx.png) | Tramite l’applicazione, accedendo al menu tramite il simbolo <img src=".././.vuepress/public/assets/icons/bars.svg" width="16"> e selezionando **“STORICO TRANSAZIONI”**, puoi controllare costantemente il tuo saldo e le transazioni effettuate. <br><br>All’interno di questa sezione è presente inoltre una specifica funzione **“RICHIEDI RIMBORSO”** per inoltrare la richiesta al Comune, che procederà al bonifico bancario delle cifre computate. 

#### Verifica rimborsi
| <div style="width:250px"></div>| <div style="width:250px"></div>|
| :---: | :---: |
| ![socialpay](../.vuepress/public/assets/socialpay/mockup_rimborso.png) | Nella sezione **“GESTIONE RIMBORSI**, raggiungibile accedendo al menu tramite il simbolo <img src=".././.vuepress/public/assets/icons/bars.svg" width="16">, potrai vedere i tuoi *rimborsi in attesa* (ovvero quelli richiesti e che il Comune deve ancora prendere in carico) e *rimborsi evasi* (importi già erogati dal Comune). 
::: tip <img src=".././.vuepress/public/assets/icons/tip.svg" width="32"> 
**NOTA:** Con lo stato di ***rimborso evaso*** si intende che il Comune ha preso in carico il rimborso che avverrà secondo i tempi tecnici bancari.
:::

#### Verifica Saldo Card Cittadino
| <div style="width:250px"></div>| <div style="width:250px"></div>|
| :---: | :---: |
| L’applicazione permette di verificare il saldo della *Card-Cliente*, riscontrabile presso tutti gli esercenti abilitati.<br><br> Nella sezione **CONTROLLA CARD**, raggiungibile accedendo al menu tramite il simbolo <img src=".././.vuepress/public/assets/icons/bars.svg" width="16">, premere il tasto **"CONTROLLA ORA"** e inquadrare il **QR CODE** della card del cliente.<br><br> Verrà così visualizzato il saldo disponibile. | ![socialpay](../.vuepress/public/assets/socialpay/mockup_controlla.png)

### APPENDICE - Modalità di accesso al portale tramite Android/IOS

#### Android
| <div style="width:250px"></div>| <div style="width:250px"></div>|
| :---: | :---: |
| ![socialpay](../.vuepress/public/assets/socialpay/mockup_android.png) | - Avviare Chrome per Android e aprire la pagina web: **[https://nomecomune.socialpay.live/](https://nomecomune.socialpay.live/)**<br><br> - Accedere al **menu** tramite il simbolo <img src=".././.vuepress/public/assets/icons/menu.svg" width="16"> e poi **"Aggiungi a schermata Home”**.<br><br> - Dare un nome al collegamento e Chrome per aggiungerlo alla schermata iniziale.<br><br> L'icona potrà essere spostata dove si vuole e il sito scelto apparirà, come qualsiasi altra app, toccando il collegamento.<br><br> Chrome per Android carica il sito web come fosse una "web app" in modo separato dal browser, così da poterlo aprire direttamente dall'app switcher.

#### iPhone/iPad
| <div style="width:250px"></div>| <div style="width:250px"></div>|
| :---: | :---: |
| - Avviare Safari su iOS di Apple aprire la pagina web: **[https://nomecomune.socialpay.live/](https://nomecomune.socialpay.live/)**<br><br> - Per problemi tecnici dovuti a Apple, non è possibile utilizzare SocialPay se viene aggiunto alla schermata Home di iPhone o iPad; di conseguenza consigliamo di digitare (o salvare nei preferiti) l’indirizzo url della web-app.<br><br> - Ricordiamo inoltre che Social Pay è utilizzabile solo dal browser **Safari**. |  ![socialpay](../.vuepress/public/assets/socialpay/mockup_ios.png) 


## Guida per il cittadino
### Card buono spesa digitale


Il **Comune di "*nomecomune*"** che adotta il sistema **SocialPay** predispone, per i cittadini aventi diritto, la **Card *“Buono Spesa Digitale”*** da utilizzare esclusivamente per l’acquisto di beni di prima necessità e presidi farmaceutici.

Ogni Card Cittadino è dotata di **QR-CODE** e protetta da apposito codice PIN (password numerica) che servirà per finalizzare gli acquisti presso i gli esercenti convenzionati.

![socialpay](../.vuepress/public/assets/socialpay/card_cittadino.png)

::: warning <img src=".././.vuepress/public/assets/icons/warning.svg" width="32">
**IMPORTANTE** Si raccomanda di custodire la Card con la massima cura in quanto contiene fondi realmente spendibili, e di non rivelare a nessuno il pin collegato alla Card.
:::

### Come utilizzare la Card

- Recarsi presso il punto vendita convenzionato e procedere all'acquisto. 
- Al momento del pagamento, mostrare la Card al negoziante che provvederà a scansionare il QR CODE addebitando l'importo speso.
- Inserire il PIN della Card nel terminale del negoziante per concludere l'acquisto.

::: tip <img src=".././.vuepress/public/assets/icons/tip.svg" width="32">
**NOTA:** Potrai verificare il tuo il saldo conto presso qualunque punto vendita convenzionato.
:::

## Gestionale
### Istruzioni

#### Accesso al gestionale

| <div style="width:350px"></div>| <div style="width:250px"></div>|
| :---: | :---: |
| ![socialpay](../.vuepress/public/assets/socialpay/gest_accesso.png) | Il login avviene caricando o trascinando il **.sid file** in dotazione e, subito dopo, inserendo la password associata che vi è stata fornita. |

#### Dashboard del gestionale

| <div style="width:350px"></div>| <div style="width:250px"></div>|
| :---: | :---: |
|![socialpay](../.vuepress/public/assets/socialpay/gest_dash.png)|Effettuato l’accesso, verrete dirottati immediatamente sulla **Dashboard (Sezione HOME)** nella quale vengono visualizzati i dati generali di utilizzo. |

::: tip <img src=".././.vuepress/public/assets/icons/tip.svg" width="32"> 
**NOTA:** La dicitura **sEUR “bruciati”** indica che le somme in oggetto non sono più disponibili, in quanto già inviate *(bruciate)* sotto forma di richiesta di rimborso.
:::

### Gestione utenti
La finestra GESTIONE UTENTI si compone di due sezioni:
- **“Carica file .csv di origine”**
- **"Elenco utenti”**

#### Carica file .csv di origine
Utilizzare questa sezione se si vogliono caricare più utenti contemporaneamente.<br>Dopo aver caricato il **file .csv**, tutti gli utenti all'interno del file verranno aggiunti al gestionale e saranno disponibili e visualizzabili nella sezione **"Elenco utenti"**.<br><br>Il file .csv viene generato in automatico durante la fase di creazione delle card e sarà composto dai seguenti campi:<br>
**SERIALE | WALLET | TIPOLOGIA | NOME | IDENTIFICATIVO | COMPONENTI NUCLEO FAMILIARE**<br>

![socialpay](../.vuepress/public/assets/socialpay/gest_dash.png)

::: tip <img src=".././.vuepress/public/assets/icons/tip.svg" width="32"> 
**NOTA:** In caso di nominativi o dati duplicati, tali nominativi verranno ignorati dal sistema.
:::

#### Elenco utenti
La sezione **Elenco utenti** permette di visualizzare tutti gli elementi inseriti all'interno del sistema (**Esercenti** e **Cittadini**).<br>
Oltre alla visualizzazione è possibile effettuare **ricerche** specifiche, avvalendosi dei filtri di ricerca disponibili.<br>Inoltre, dalla colonna **"AZIONI"** è possibile compiere operazioni aggiuntive sul singolo utente.<br><br>
Le azioni disponibili sono nell'ordine:
- **MODIFICA**
- **VISUALIZZA**
- **ELIMINA**
![socialpay](../.vuepress/public/assets/socialpay/elenco_utenti.png)

#### Azione **MODIFICA**
Attraverso questa azione, indicata dal simbolo <img src=".././.vuepress/public/assets/icons/draw.svg" width="16">, è possibile modificare i dati dell’utente.![socialpay](../.vuepress/public/assets/socialpay/modifica.png)

Una volta effettuate le modifiche desiderate, per confermare tali modifiche è necessario cliccare su **“Salva utente”**.

#### Azione **VISUALIZZA**
Attraverso questa azione, indicata dal simbolo <img src=".././.vuepress/public/assets/icons/interface.svg" width="16">, è possibile visualizzare i dettagli dell'utente selezionato, il suo bilancio e lo storico transazioni.<br>Inoltre questa sezione permette di predisporre l’invio di importi in **sEUR** all’utente selezionato.<br>L’operazione è **istantanea** e richiede l’inserimento della vostra password.
![socialpay](../.vuepress/public/assets/socialpay/modifica.png)

##### *Note sulle commissioni di transazione:

Per svolgere tutte le operazioni di transazioni o richieste rimborso,è necessario pagare delle commissioni di transazione dell’infrastruttura blockchain. Tali commissioni sono nell'ordine di millesimi di euro.<br><br>
**In fase di ricarica delle card**<br>
- Durante la fase di ricarica delle card, al fine di fornire a ciascun utente la possibilità di effettuare operazioni sul network sin da subito, è necessario inviare una modica quantità di LYRA per ciascun utente.<br>
::: tip <img src=".././.vuepress/public/assets/icons/tip.svg" width="32"> 
- Si consiglia di inviare **0.1 LYRA** per ciascun utente (sia **"Cittadino"** che **"Esercente"**), quantitativo sufficiente allo svolgimento di circa 100 operazioni.<br><br>
- Si consiglia anche di inviare **0.1 LYRA** per le transazioni ogni qual volta è prevista una “ricarica” al **"Cittadino"**.<br><br>
- Non è indispensabile re-inviare LYRA per l'**"Esercente",** poiché riceverà automaticamente **0.001 LYRA** ogni qual volta viene inviata la notifica di avvenuto rimborso; tale operazione verrà illustrata in seguito in modo più dettagliato.
:::

::: warning <img src=".././.vuepress/public/assets/icons/warning.svg" width="32"> 
**Se si prevede di effettuare un numero di operazioni superiore a 100, sarà necessario inviare un quantitativo di LYRA adeguato al volume di transazioni previste.**<br>
:::









***
***

#### GITHUB

Il [repository "SocialPay" di Github](https://github.com/scryptachain/socialpay) a cui si fa riferimento, contiene tutto il materiale necessario: è diviso per regioni e comuni e all'interno si trovano i file che generano due tipi di progetti:

- **Admin:** questo progetto è una personalizzazione del software di gestione Scrypta Planum Admin, che serve a gestire le sidechain.
- **Pos:** questo progetto serve a generare il front-end per i commercianti e che permette di spendere i buoni
- **Card:** questo progetto serve a generare le card wallet stampabili in formato QR code per distribuirle ai cittadini

Una cartella generica chiamata **`documentazione`** contiene tutte le presentazioni, i sorgenti grafici delle card e i prestampati legali per la convenzione con il comune.

## Operazioni preliminari per impostare il progetto

Si consiglia di scaricare le cartelle di base aggiornate dal [branch di sviluppo su Github:](https://github.com/scryptachain/socialpay/tree/development)

Dopo aver scaricato le cartelle si dovrà installare tutte le dipendenze attraverso il comando **`npm install`** all'interno di ogni sottocartella (**`admin`**, **`card`**, **`pos`**).

## Creazione della sidechain

La creazione della rappresentazione digitale di valore avviene attraverso la tecnologia Sidechain di Planum, pertanto è necesario effettuare delle operazioni preliminari prima di poter iniziare a compilare i progetti:

- Collegati a [https://web.manent.app](https://web.manent.app) e crea un nuovo account Scrypta.
Inserisci una password forte perchè questo account sarà l'account proprietario della sidechain. 

::: warning <img src=".././.vuepress/public/assets/icons/warning.svg" width="32"> 
**Importante:** Effettua il backup del file .sid e del paper wallet per sicurezza, e ricorda che sei il **SOLO** responsabile di questi dati. Custodisci questi file tenendoli al sicuro **OFFLINE**.
:::

- Ti serviranno almeno 1.001 LYRA per far partire la sidechain e dovrai versare almeno 0.1 LYRA per ogni account cittadino o esercente, se non dovessi esserne in possesso ti invitiamo ad effettuare una richiesta ufficiale all'email [info@scrypta.foundation](mailto:info@scrypta.foundation).

- Collegati su [Planum](https://planum.dev) e crea una nuova sidechain attraverso l'apposito tool di creazione. Rimandiamo ad una guida più dettagliata per eventuale supporto: https://medium.com/@scryptachain/scrypta-lancia-planum-un-sidechain-layer-per-lemissione-di-tokenized-asset-ee156d300f4d. 

**I parametri consigliati per la creazione sono i seguenti:**
```
nome: SocialPay - Comune di ...
ticker: sEUR
decimals: 2
supply: Quantità da assegnare
reissuable: true
burnable: true
```

- Dopo che avrai generato la sidechain dovrai appuntarti l'indirizzo univoco, che ti servirà per collegare le applicazioni alla tua sidechain. Questo indirizzo puoi trovarlo sempre su [https://planum.dev/#/explorer](https://planum.dev/#/explorer) alla riga corrispondente, sotto la colonna **`address`**.


## Come compilare la parte di amministrazione

Il software di amministrazione è un progetto electron e dovrai modificare il file sotto **`admin/config.json`** inserendo i parametri richiesti e dovrai inserire i loghi del comune di riferimento nella cartella **`admin/public`**.

Dopo aver modificato tutto il necessario è possibile provare in anteprima il software attraverso il comando **`npm run electron:serve`** oppure creare la build vera e propria con il comando **`npm run electron:build`**.

## Come compilare il web PoS

Il web PoS è un progetto VueJS e dovrai modificare il file sotto **`admin/config.json`** inserendo i parametri richiesti e dovrai inserire i loghi del comune di riferimento nella cartella **`admin/public`**.

Dopo aver modificato tutto il necessario è possibile provare in anteprima il software attraverso il comando **`npm run serve`** oppure creare la build vera e propria con il comando **`npm run build`**.

La cartella di distribuzione **`dist`** dovrà essere pubblicata all'interno di un server Apache. E' fondamentale che venga installato un certificato SSL, consigliamo il servizio gratuito [https://letsencrypt.org/](https://letsencrypt.org/) che potrà fornire un certificato SSL gratuito.

## Come creare le card wallet

Le card wallet vengono create attraverso lo script NodeJS presente nella cartella **`card`**. E' necessario modificare i file grafici nella cartella **`assets/`** al fine di personalizzare le card per il vostro comune. Il progetto genererà sotto la cartella **`prints/`** il numero di card richieste ed il solo QR Code ad mandare eventualmente alla tipografia.

Un altro file **`out.csv`** verrà creato e conterrà tutti i PIN necessari a sbloccare le card. Questo file dovrà essere conservato gelosamente offline e servirà per importare le anagrafiche all'interno del software di amministrazione. Per caricare le anagrafiche si dovrà eliminare la seconda colonna.

Per generare le card e il documento PIN accompagnatorio si deve modificare il file **`config.json`** inserendo i riferimenti necessari e dare il seguente comando **```node index.js -g=100```**. 
Per modificare la quantità è necessario modificare il numero **`100`** con la quantità desiderata. E' molto importante fare un backup della cartella **`prints`** e del file **`out.csv`** in quanto questi file vengono cancellati ad ogni nuova generazione.

## Come contribuire al progetto

Se vuoi contribuire al progetto puoi creare, in accordo con la volontà comunale, una copia del progetto e richiedere l'inserimento del codice tramite Pull Request.
All'interno delle cartelle troverai un file **`config.json`** che ti permette di configurare i parametri di base. Questi comprendono principalmente le modifiche grafiche, di titoli e, chiaramente, permettono di collegare la sidechain tramite indrizzo univoco.

Si consiglia di forkare questo progetto e aggiungere il proprio comune così da darne evidenza a tutti i contributori del progetto. Qualora non trovassi la cartella della tua regione, dovrai crearla tu stesso.

Alla fine del processo di aggiunta e creazione del progetto per il tuo comune potrai richiedere l'aggiunta nel repository ufficiale tramite pull request.

### Richieste di aiuto

Se hai bisogno di aiuto per integrare il progetto o trovi bug da risolvere puoi aprire una issue o scrivere a [info@scrypta.foundation](mailto:info@scrypta.foundation), ti risponderemo al più presto.