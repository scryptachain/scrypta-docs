# SocialPay

## Introduzione

### Finalità del progetto - Dematerilizzazione dei buoni spesa
Scrypta Foundation, durante la fase di emergenza determinatasi per effetto della pandemia da Covid-19, ha contribuito rilasciando l’uso gratuito a tutti i Comuni di un sistema per la dematerializzazione e gestione dei **“buoni spesa”**, detto pure *“Tokenizzazione”* dei buoni di solidarietà.

Il sistema, chiamato **"SocialPay"** si propone come soluzione per la rapida erogazione da parte dei comuni nei contronti dei cittadini aventi diritto ai buoni spesa, a seguito della situazione di emergenza generata dal COVID19.
L'intero progetto è stato rilasciato in **open-source**, questo significa che è possibile generare tutto l'occorrente per emettere e gestire i buoni spesa per il Comune, in completa autonomia.

Visita il [sito web si SocialPay](https://socialpay.live/).

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

## Come Funziona

Il comune distribuisce direttamente ai cittadini aventi diritto una **Card** numerata ed assegnata a un soggetto identificato dall’ente.
Assieme alla card fornirà un **codice PIN** di 5 cifre che permette l’utilizzo esclusivo dei fondi.

Gli esercenti che aderiscono al sistema digitale del buono spesa, verranno dotati di un’apposita
**applicazione web** che consente di utilizzare il proprio **smartphone/tablet** come POS virtuale.
Con la fotocamera del proprio dispositivo è possibile inquadrare il QR-Code sul retro della Card assegnata al
cittadino e addebitare la somme corrispondente all'importo dell’acquisto effettuato nella sua attività.

Il cittadino dovrà comunque autorizzare l’acquisto inserendo il PIN nel POS virtuale dell’esercente.

Ogni esercente tramite la sua applicazione potrà controllare costantemente il proprio conto digitale
dove verificherà in tempo reale l’accredito delle somme.

Inoltre, all’interno della web-app è presente
una specifica funzione **“Richiedi Rimborso”** per inoltrare la richiesta di rimborso al Comune, che
avverrà sotto forma di bonifico bancario.

## Caratteristiche e Contronto

Di seguito una tabella comparativa tra SocialPay e altri sistemi di erogazione e gestione dei buoni spesa:

![confronto](./assets/socialpay/confronto.png)



1. **Anticontraffazione**
   
Le transazioni sono registrate sulla blockchain pertanto non è possibile una loro alterazione atta ad aumentare o ridurre il credito relativo ai buoni spesa, contro la volontà del Comune o del cittadino. Non si possono stampare carte buono false: le uniche carte abilitate sono quelle censite all'interno del software del comune.

2. **Sicurezza**
   
Non essendo l’infrastruttura tecnologica affidata ad un fornitore centralizzato, se il Comune o l’Esercente dovessero subire un attacco informatico o avere problematiche legate all‘a sua ’operatività, questo non andrà ad intaccare il funzionamento di SocialPay, essendo questo un sistema decentralizzato. Le carte possono essere sostituite e bloccate facilmente in quanto il comune - o il cittadino stesso — può prelevare i fondi in qualsiasi momento e tracciarne gli spostamenti in caso di transazioni non autorizzate.

3. **Tracciabilità**
   
SocialPay utilizza una infrastruttura blockchain che consente un’efficace tracciabilità in corso di utilizzo del sistema. Al contrario i sistemi basati su buoni cartacei sono tracciabili solo ex post, una volta che l’esercente ha riconsegnato al comune i buoni. Altre soluzioni basate su card ricaricabile, sono solitamente affidati a sistemi software proprietari che rendono il tracciamento vincolato allo specifico applicativo e non perfettamente trasparente.

4. **Commissioni di transazione nel sistema**
   
Le transazioni all'interno del sistema, ovvero invio di credito per i buoni spesa dal comune verso i cittadini e da questi verso gli esercenti, non hanno alcun costo. Le commissioni di sistema vengono pagate in LYRA (0.001 LYRA, pari a pochi millesimi di euro per transazione), queste vengono fornite dal comune e non dipendono dal valore della transazione.

5. **Rendicontazione**
   
Viene gestita in modo semplice e snello, in modo che il comune non abbia un “overflow” di lavoro. Il software permette di esportare i tracciati relativi alle transazioni e alle richieste di rimborso. Le richieste di rimborso inoltre vengono gestite attraverso la blockchain, garantendo un alto livello di trasparenza della PA.

6. **Sostenibilità economica**
   
Il costo complessivo che il comune deve sostenere per adottare e mantenere un sistema di gestione dei buoni spesa, si misura non solo nella fornitura in sé ma anche nei costi di supporto ed eventualmente di modifica o manutenzione evolutiva. Le card possono essere ricaricate senza alcun limite, consentendo al sistema di essere utilizzato anche in futuro per altri casi d’uso. Inoltre, essendo SocialPay un progetto open-source, esso può essere adottato e sviluppato in autonomia da qualsiasi ente, previa competenza tecnica. Non ultimo, non vi è nessun costo di commissione per nessun tipo di transazione.

7. **Monitoraggio**
   
La rilevazione periodica e sistematica di tutte le transazioni in tempo reale, tramite l’explorer di Planum, rende il sistema totalmente trasparente, pur garantendo la privacy degli utenti. Uno strumento utile per analizzare l’andamento delle erogazioni, delle spese e rimborsi effettuati.

8. **Velocità attivazione**
   
La tecnologia QR-Code delle card, scelta da Scrypta, permette la realizzazione in tempi brevi e presso qualsiasi tipo di tipografia, della SocialPay Card. 
E’ possibile, in alternativa, realizzare il sistema attraverso Card NFC (Nearfield Communication).

9. **Velocità di ricarica**
    
Attraverso il Gestionale è possibile ricaricare le card in totale sicurezza e in maniera immediata e veloce, con un click.

10.  **Semplicità di utilizzo per il cittadino**
    
Gli esercenti che aderiscono al sistema vengono dotati di un’apposita applicazione web alla quale si può accedere dal proprio smartphone o tablet (POS virtuale). Una volta effettuato l’accesso, l’applicazione permette di leggere il retro della Card assegnata al cittadino e prelevare le somme inerenti l’acquisto.

Il cittadino autorizza l’acquisto inserendo il PIN nel POS virtuale dell’esercente. Ogni esercente tramite la sua applicazione web può controllare costantemente il proprio conto digitale, e le transazioni. 

All’interno dell’applicazione è inoltre presente una funzione che permette all’esercente di formulare con un click la richiesta di riscatto dei gettoni digitali incassati, inoltrando in modo semplice una richiesta di rimborso al Comune, che procederà al saldo con bonifico bancario.

11.  **Semplicità di gestione per il Comune**
    
Il comune distribuisce direttamente ai cittadini aventi diritto una card con QR-code numerata . Assieme alla card fornisce un PIN che permette l’utilizzo esclusivo dei fondi. 
Infine il comune, tramite un semplice gestionale, può versare i contributi, anche a più riprese, ricaricando la medesima card cittadino. Il comune inoltre riceve automaticamente le richieste di rimborso da parte dell’esercente e può controllare costantemente dal Gestionale il corretto funzionamento di tutto il processo.

12. **Open Source**
    
È possibile replicare l’intero sistema per emettere e gestire i buoni spesa per qualsiasi ente, in sicurezza. Scrypta Foundation mette infatti a disposizione la propria tecnologia a chiunque voglia contribuire al progetto. È possibile creare, in accordo con la volontà comunale, una copia del progetto e richiedere l’inserimento del codice tramite “pull request” sul Github dedicato:

[**https://github.com/scryptachain/socialpay**](https://github.com/scryptachain/socialpay)

Oppure è possibile disporre del supporto di Scrypta Consortium, il contratto di rete delle aziende che operano con tecnologia Scrypta:

[**https://scryptaconsortium.org/**](https://scryptaconsortium.org/
)

13.  **Innovazione**
    
Si tratta di un processo di “tokenizzazione” dei buoni spesa, ossia della creazione di un valore digitale corrispondente in token (gettoni) emessi all’interno della blockchain Scrypta, attraverso la tecnologia Planum. L’implementazione capillare di un simile servizio determina un notevole risparmio per la Pubblica Amministrazione dovuto alla semplificazione delle attività di controllo, distribuzione e pagamenti certificati da sistemi algoritmici innovativi espressamente progettati per la validazione delle trasmissioni dei dati. 

14.  **Possibilità di espansione per altri utilizzi**
    
Il sistema SocialPay di Scrypta può essere replicato per altri utilizzi e finalità, come quello dei buoni pasto, delle gift card, ticket digitali e altri numerosi casi d’uso. Cioè In tutti quei casi in cui c’è un Amministratore che eroga il servizio, un Target di riferimento che utilizzerà le card, e dei “Punti Vendita”, anche online, dove poter utilizzare i token emessi e distribuiti.

## Guida per l'esercente
### POS Digitale e CARD BUONO SPESA


Il **Comune di "*nomecomune*"** che adotta il sistema **SocialPay** predispone, per i cittadini aventi diritto, la **Card *“Buono Spesa Digitale”*** da utilizzare esclusivamente per l’acquisto di beni di prima necessità e presidi farmaceutici.

Il Comune fornisce gratuitamente all'esercente una Card Esercente dotata di **QR-CODE** e protetta da apposito codice PIN (password numerica) che servirà per le principali operazioni di configurazoine e per l'utilizzo dell’apposita applicazione web in dotazione all'esercente stesso.

![socialpay](./assets/socialpay/card_esercente.png)

### Procedura lato esercente
#### Accesso al sistema

| <div style="width:250px"></div>| <div style="width:250px"></div>|
| :---: | :---: |
| ![socialpay](./assets/socialpay/mockup_phone_01.png) | Accedi collegandoti con il tuo smartphone/tablet, da adibire a POS virtuale, al sito: <br>[https://nomecomune.socialpay.live/](https://nomecomune.socialpay.live/).<br><br>Tocca **“SCANNERIZZA CARD”** e inquadra il **QR Code** della carta che ti è stata consegnata (Card Esercente).<br><br>Ti verrà richiesto di inserire il **PIN** che ti è stato assegnato insieme alla **CARD**.<br><br>Adesso sei in grado di ricevere pagamenti attraverso i **BUONI SPESA DIGITALI** dei cittadini aventi diritto. 

> **NOTA:** Per i dispositivi **iOS** è necessario utilizzare il browser **“Safari”**, per i dispostivi **Android** è necessario utilizzare **“Google Chrome"**.

#### Ricezione pagamento

| <div style="width:250px"></div>| <div style="width:250px"></div>|
| :---: | :---: |
| ![socialpay](./assets/socialpay/mockup_phone_02.png) | Accedi alla web-app dal tuo smartphone o tablet all’indirizzo: [https://nomecomune.socialpay.live/](https://nomecomune.socialpay.live/)<br><br>Nella **HOME** troverai il *“tastierino”* del **POS** virtuale come da immagine.<br><br>Inserisci l’importo dello scontrino dovuto e premi il tasto **“PAGA”**.
***sEUR indicato in figura è una rapresentazione digitale dell’Euro.***

Inquadra adesso con lo smartphone il QR-CODE sul retro della Card del cliente
![socialpay](./assets/socialpay/scan_qr.png)

Il cliente autorizza l’acquisto inserendo il suo **PIN** nel POS virtuale.
La transazione avviene in tempo reale.

![socialpay](./assets/socialpay/insert_pin.png)
Dopo aver effettuato la transazione, visualizzerai istantaneamente una notifica dell’avvenuto pagamento.

#### Controllo saldo, storico transazione e ricezione pagamenti

| <div style="width:250px"></div>| <div style="width:250px"></div>|
| :---: | :---: |
| ![socialpay](./assets/socialpay/mockup_tx.png) | Tramite l’applicazione, accedendo al menu tramite il simbolo <img src="../assets/icons/bars.svg" width="16"> e selezionando **“STORICO TRANSAZIONI”**, puoi controllare costantemente il tuo saldo e le transazioni effettuate. <br><br>All’interno di questa sezione è presente inoltre una specifica funzione **“RICHIEDI RIMBORSO”** per inoltrare la richiesta al Comune, che procederà al bonifico bancario delle cifre computate. 

#### Verifica rimborsi
| <div style="width:250px"></div>| <div style="width:250px"></div>|
| :---: | :---: |
| ![socialpay](./assets/socialpay/mockup_rimborso.png) | Nella sezione **“GESTIONE RIMBORSI**, raggiungibile accedendo al menu tramite il simbolo <img src="../assets/icons/bars.svg" width="16">, potrai vedere i tuoi *rimborsi in attesa* (ovvero quelli richiesti e che il Comune deve ancora prendere in carico) e *rimborsi evasi* (importi già erogati dal Comune). 

> **NOTA:** Con lo stato di ***rimborso evaso*** si intende che il Comune ha preso in carico il rimborso che avverrà secondo i tempi tecnici bancari.

#### Verifica Saldo Card Cittadino
| <div style="width:250px"></div>| <div style="width:250px"></div>|
| :---: | :---: |
| L’applicazione permette di verificare il saldo della *Card-Cliente*, riscontrabile presso tutti gli esercenti abilitati.<br><br> Nella sezione **CONTROLLA CARD**, raggiungibile accedendo al menu tramite il simbolo <img src="../assets/icons/bars.svg" width="16">, premere il tasto **"CONTROLLA ORA"** e inquadrare il **QR CODE** della card del cliente.<br><br> Verrà così visualizzato il saldo disponibile. | ![socialpay](./assets/socialpay/mockup_controlla.png)

### APPENDICE - Modalità di accesso al portale tramite Android/IOS

#### Android
| <div style="width:250px"></div>| <div style="width:250px"></div>|
| :---: | :---: |
| ![socialpay](./assets/socialpay/mockup_android.png) | - Avviare Chrome per Android e aprire la pagina web: **[https://nomecomune.socialpay.live/](https://nomecomune.socialpay.live/)**<br><br> - Accedere al **menu** tramite il simbolo <img src="../assets/icons/menu.svg" width="16"> e poi **"Aggiungi a schermata Home”**.<br><br> - Dare un nome al collegamento e Chrome per aggiungerlo alla schermata iniziale.<br><br> L'icona potrà essere spostata dove si vuole e il sito scelto apparirà, come qualsiasi altra app, toccando il collegamento.<br><br> Chrome per Android carica il sito web come fosse una "web app" in modo separato dal browser, così da poterlo aprire direttamente dall'app switcher.

#### iPhone/iPad
| <div style="width:250px"></div>| <div style="width:250px"></div>|
| :---: | :---: |
| - Avviare Safari su iOS di Apple aprire la pagina web: **[https://nomecomune.socialpay.live/](https://nomecomune.socialpay.live/)**<br><br> - Per problemi tecnici dovuti a Apple, non è possibile utilizzare SocialPay se viene aggiunto alla schermata Home di iPhone o iPad; di conseguenza consigliamo di digitare (o salvare nei preferiti) l’indirizzo url della web-app.<br><br> - Ricordiamo inoltre che Social Pay è utilizzabile solo dal browser **Safari**. |  ![socialpay](./assets/socialpay/mockup_ios.png) 


## Guida per il cittadino
### Card buono spesa digitale


Il **Comune di "*nomecomune*"** che adotta il sistema **SocialPay** predispone, per i cittadini aventi diritto, la **Card *“Buono Spesa Digitale”*** da utilizzare esclusivamente per l’acquisto di beni di prima necessità e presidi farmaceutici.

Ogni Card Cittadino è dotata di **QR-CODE** e protetta da apposito codice PIN (password numerica) che servirà per finalizzare gli acquisti presso i gli esercenti convenzionati.

![socialpay](./assets/socialpay/card_cittadino.png)

**IMPORTANTE** Si raccomanda di custodire la Card con la massima cura in quanto contiene fondi realmente spendibili, e di non rivelare a nessuno il pin collegato alla Card.

### Come utilizzare la Card

- Recarsi presso il punto vendita convenzionato e procedere all'acquisto. 
- Al momento del pagamento, mostrare la Card al negoziante che provvederà a scansionare il QR CODE addebitando l'importo speso.
- Inserire il PIN della Card nel terminale del negoziante per concludere l'acquisto.

> **NOTA:** Potrai verificare il tuo il saldo conto presso qualunque punto vendita convenzionato.

## Gestionale
### Istruzioni

#### Accesso al gestionale

| <div style="width:350px"></div>| <div style="width:250px"></div>|
| :---: | :---: |
| ![socialpay](./assets/socialpay/gest_accesso.png) | Il login avviene caricando o trascinando il **.sid file** in dotazione e, subito dopo, inserendo la password associata che vi è stata fornita. |

#### Dashboard del gestionale

| <div style="width:350px"></div>| <div style="width:250px"></div>|
| :---: | :---: |
|![socialpay](./assets/socialpay/gest_dash.png)|Effettuato l’accesso, verrete dirottati immediatamente sulla **Dashboard (Sezione HOME)** nella quale vengono visualizzati i dati generali di utilizzo. |

> **NOTA:** La dicitura **sEUR “bruciati”** indica che le somme in oggetto non sono più disponibili, in quanto già inviate *(bruciate)* sotto forma di richiesta di rimborso.

### Gestione utenti
La finestra GESTIONE UTENTI si compone di due sezioni:
- **“Carica file .csv di origine”**
- **"Elenco utenti”**

#### Carica file .csv di origine
Utilizzare questa sezione se si vogliono caricare più utenti contemporaneamente.<br>Dopo aver caricato il **file .csv**, tutti gli utenti all'interno del file verranno aggiunti al gestionale e saranno disponibili e visualizzabili nella sezione **"Elenco utenti"**.<br><br>Il file .csv viene generato in automatico durante la fase di creazione delle card e sarà composto dai seguenti campi:<br>
**SERIALE | WALLET | TIPOLOGIA | NOME | IDENTIFICATIVO | COMPONENTI NUCLEO FAMILIARE**<br>

![socialpay](./assets/socialpay/gest_dash.png)

> **NOTA:** In caso di nominativi o dati duplicati, tali nominativi verranno ignorati dal sistema.

#### Elenco utenti
La sezione **Elenco utenti** permette di visualizzare tutti gli elementi inseriti all'interno del sistema (**Esercenti** e **Cittadini**).<br>
Oltre alla visualizzazione è possibile effettuare **ricerche** specifiche, avvalendosi dei filtri di ricerca disponibili.<br>Inoltre, dalla colonna **"AZIONI"** è possibile compiere operazioni aggiuntive sul singolo utente.<br><br>
Le azioni disponibili sono nell'ordine:
- **MODIFICA**
- **VISUALIZZA**
- **ELIMINA**
![socialpay](./assets/socialpay/elenco_utenti.png)

#### Azione **MODIFICA**
Attraverso questa azione, indicata dal simbolo <img src="../assets/icons/draw.svg" width="16">, è possibile modificare i dati dell’utente.![socialpay](./assets/socialpay/modifica.png)

Una volta effettuate le modifiche desiderate, per confermare tali modifiche è necessario cliccare su **“Salva utente”**.

#### Azione **VISUALIZZA**
Attraverso questa azione, indicata dal simbolo <img src="../assets/icons/interface.svg" width="16">, è possibile visualizzare i dettagli dell'utente selezionato, il suo bilancio e lo storico transazioni.<br>Inoltre questa sezione permette di predisporre l’invio di importi in **sEUR** all’utente selezionato.<br>L’operazione è **istantanea** e richiede l’inserimento della vostra password.
![socialpay](./assets/socialpay/modifica.png)

##### *Note sulle commissioni di transazione:

Per svolgere tutte le operazioni di transazioni o richieste rimborso,è necessario pagare delle commissioni di transazione dell’infrastruttura blockchain. Tali commissioni sono nell'ordine di millesimi di euro.<br><br>
**In fase di ricarica delle card**<br>
- Durante la fase di ricarica delle card, al fine di fornire a ciascun utente la possibilità di effettuare operazioni sul network sin da subito, è necessario inviare una modica quantità di LYRA per ciascun utente.<br>

> - Si consiglia di inviare **0.1 LYRA** per ciascun utente (sia **"Cittadino"** che **"Esercente"**), quantitativo sufficiente allo svolgimento di circa 100 operazioni.<br><br>
> - Si consiglia anche di inviare **0.1 LYRA** per le transazioni ogni qual volta è prevista una “ricarica” al **"Cittadino"**.<br><br>
> - Non è indispensabile re-inviare LYRA per l'**"Esercente"** poiché riceverà automaticamente **0.001 LYRA** ogni qual volta viene inviata la notifica di avvenuto rimborso; tale operazione verrà illustrata in seguito in modo più dettagliato.

**Se si prevede di effettuare un numero di operazioni superiore a 100, sarà necessario inviare un quantitativo di LYRA adeguato al volume di transazioni previste.**<br>

#### Azione **ELIMINA**
Attraverso questa azione, indicata dal simbolo <img src="../assets/icons/trash.svg" width="16">, l’utente selezionato viene eliminato dall’elenco.<br>Si raccomanda di procedere con cura verificando i dati prima dell'eliminazione.

### Storico transazioni
In questa sezione vengono visualizzate tuttee le transazioni effettuate all’interno del sistema.

![socialpay](./assets/socialpay/storico.png)

All'interno di questa sezione, tramoite gli appositi filtri, è possibile effettuare ricerche per **indirizzo** o per **transazione**.<br>Attraverso il pulsante **“SCARICA BACKUP”**  è possibile effettuare il backup dello storico transazioni in oggetto tramite file in formato **.csv** (Excel).  

### Gestisci rimborso
Non appena viene cliccato il pulsante **“CONTABILIZZA RIMBORSO”**, viene richiesto l’inserimento della password di amministratore.![socialpay](./assets/socialpay/rimborso.png)<br>A questo punto l’Esercente riceverà una speciale transazione di notifica che conferma l’avvenuto bonifico da parte del Comune.<br>Risulta quindi evidente che questa operazione è da effettuare **SUBITO DOPO** aver predisposto lo specifico bonifico bancario di rimborso.<br><br>L’operazione sarà quindi visibile sulla colonna **“RIMBORSATO”** (nello specifico il campo verrà automaticamente riempito con **“SI”**).
Inoltre, questa speciale transazione, accrediterà nel conto dell’esercente la somma di **0.001 LYRA**, che gli permetterà di richiedere i rimborsi futuri.

Questa funzione è infine corredata dalla possibilità di aggiungere delle note di testo aggiuntive che vengono inviate all’esercente.

**Attenzione**: Le note a corredo delle transazioni sono dei dati che vengono scritti **in chiaro** nel registro distribuito della blockchain Scrypta.<br>Si **RACCOMANDA** pertanto di non inserire informazioni sensibili, che possano violare il rispetto della privacy.<br>

### Impostazioni
Attraverso questa sezione è possibile effettuare operazioni come il salvataggio e la cancellazione di tutto l’elenco utenti.
Per compiere l’operazione di **salvataggio**, è necessario cliccare sul pulsante **“SCARICA BACKUP”**.
Il file generato, in formato .csv, permetterà di conservare una copia dell'intero archivio utenti, e sarà necessario per importare nuovamente l'archivio.
![socialpay](./assets/socialpay/impostazioni.png)

**Attenzione**: Si **RACCOMANDA** fortemente di effettuare i backup dell'elenco utenti con regolarità, al fine di evitare o quantomeno limitare la perdita di dati.<br>

Per compiere l’operazione di **cancellazione** dell'archivio, è necessario cliccare sul pulsante **"CANCELLA ARCHIVIO”**. A questo punto, l’intero elenco utenti verrà azzerato.

**Attenzione**: Utilizzando questa funzione, l'attuale archivio **VERRA' INTERAMENTE E DEFINITIVAMENTE CANCELLATO"**.
<br>**L'operazione di cancellazione non e' annullabile**.
<br>Pertanto, se non avete effettuato il backup in precedenza e cancellate i dati, l'intero archivio andra' **DISTRUTTO**.

**PROCEDERE CON CAUTELA.**



## SocialPay per gli sviluppatori

Il [repository "SocialPay" di Github](https://github.com/scryptachain/socialpay) a cui si fa riferimento, contiene tutto il materiale necessario ed è diviso per regioni e comuni. All'interno si trovano i file che generano tre diversi progetti:

- **Admin:** questo progetto è una personalizzazione del software di gestione Scrypta Planum Admin, che serve a gestire le sidechain.
- **Pos:** questo progetto serve a generare il front-end per i commercianti e che permette di spendere i buoni
- **Card:** questo progetto serve a generare le card wallet stampabili in formato QR code per distribuirle ai cittadini

Una cartella generica chiamata **`documentazione`** contiene tutte le presentazioni, i sorgenti grafici delle card e i prestampati legali per la convenzione con il comune.

### Operazioni preliminari

Si consiglia di scaricare le cartelle di base aggiornate dal [branch di sviluppo su Github:](https://github.com/scryptachain/socialpay/tree/development)

Dopo aver scaricato le cartelle si dovrà installare tutte le dipendenze attraverso il comando **`npm install`** all'interno di ogni sottocartella (**`admin`**, **`card`**, **`pos`**).

### Creazione della sidechain

La creazione della rappresentazione digitale di valore avviene attraverso la tecnologia Sidechain di Planum, pertanto è necesario effettuare delle operazioni preliminari prima di poter iniziare a compilare i progetti:

- Collegati a [https://web.manent.app](https://web.manent.app) e crea un nuovo account Scrypta.
Inserisci una password forte perchè questo account sarà l'account proprietario della sidechain. 

**Importante:** Effettua il backup del file .sid e del paper wallet per sicurezza, e ricorda che sei il **SOLO** responsabile di questi dati. Custodisci questi file tenendoli al sicuro **OFFLINE**.

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


### Compilare la parte di amministrazione

Il software di amministrazione è un progetto electron e dovrai modificare il file sotto **`admin/config.json`** inserendo i parametri richiesti e dovrai inserire i loghi del comune di riferimento nella cartella **`admin/public`**.

Dopo aver modificato tutto il necessario è possibile provare in anteprima il software attraverso il comando **`npm run electron:serve`** oppure creare la build vera e propria con il comando **`npm run electron:build`**.

### Compilare il web PoS

Il web PoS è un progetto VueJS e dovrai modificare il file sotto **`admin/config.json`** inserendo i parametri richiesti e dovrai inserire i loghi del comune di riferimento nella cartella **`admin/public`**.

Dopo aver modificato tutto il necessario è possibile provare in anteprima il software attraverso il comando **`npm run serve`** oppure creare la build vera e propria con il comando **`npm run build`**.

La cartella di distribuzione **`dist`** dovrà essere pubblicata all'interno di un server Apache. E' fondamentale che venga installato un certificato SSL, consigliamo il servizio gratuito [https://letsencrypt.org/](https://letsencrypt.org/) che potrà fornire un certificato SSL gratuito.

### Creare le card wallet

Le card wallet vengono create attraverso lo script NodeJS presente nella cartella **`card`**. E' necessario modificare i file grafici nella cartella **`assets/`** al fine di personalizzare le card per il vostro comune. Il progetto genererà sotto la cartella **`prints/`** il numero di card richieste ed il solo QR Code ad mandare eventualmente alla tipografia.

Un altro file **`out.csv`** verrà creato e conterrà tutti i PIN necessari a sbloccare le card. Questo file dovrà essere conservato gelosamente offline e servirà per importare le anagrafiche all'interno del software di amministrazione. Per caricare le anagrafiche si dovrà eliminare la seconda colonna.

Per generare le card e il documento PIN accompagnatorio si deve modificare il file **`config.json`** inserendo i riferimenti necessari e dare il seguente comando **```node index.js -g=100```**. 
Per modificare la quantità è necessario modificare il numero **`100`** con la quantità desiderata. E' molto importante fare un backup della cartella **`prints`** e del file **`out.csv`** in quanto questi file vengono cancellati ad ogni nuova generazione.

## Contribuire al progetto

Se vuoi contribuire al progetto puoi creare, in accordo con la volontà comunale, una copia del progetto e richiedere l'inserimento del codice tramite Pull Request nel github dedicato:

[SocialPay Github](https://github.com/scryptachain/socialpay).

All'interno delle cartelle troverai un file **`config.json`** che ti permette di configurare i parametri di base. Questi comprendono principalmente le modifiche grafiche, di titoli e, chiaramente, permettono di collegare la sidechain tramite indrizzo univoco.

Si consiglia di forkare questo progetto e aggiungere il proprio comune così da darne evidenza a tutti i contributori del progetto. Qualora non trovassi la cartella della tua regione, dovrai crearla tu stesso.

Alla fine del processo di aggiunta e creazione del progetto per il tuo comune potrai richiedere l'aggiunta nel repository ufficiale tramite pull request.

## Supporto

Se hai bisogno di aiuto per integrare il progetto o trovi bug da risolvere, puoi aprire una issue su [github socialpay](https://github.com/scryptachain/socialpay), scrivere a [info@scrypta.foundation](mailto:info@scrypta.foundation), o contattarci tramite [i nostri social](../general-info/link.md#social-media) ti risponderemo al più presto.

## Video Tutorial

[**Buoni Spesa? Basta Sprechi! Usiamo la BLOCKCHAIN!**](https://www.youtube.com/watch?v=oRNoxwsRG5M) di Tiziano Tridico


<iframe width="560" height="315" src="https://www.youtube.com/embed/oRNoxwsRG5M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>