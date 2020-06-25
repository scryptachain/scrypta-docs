# SHAMIR BACKUP
**stai comodo e rilassato con il tuo segreto**

### Dividi il Segreto

Basato su [Shamir’s Secret Sharing](https://en.wikipedia.org/wiki/Shamir's_Secret_Sharing), un algoritmo crittografico creato da Adi Shamir, *Scrypta Shamir Backup *è un metodo per suddividere un dato/segreto (in forma di testo digitale) in più *share* unici. Per recuperare il dato/segreto, è necessario raccogliere e utilizzare un numero specifico di share (threshold). Questo standard di sicurezza è la chiave per sconfiggere i due maggiori rischi legati alla protezione dei seed, passphrase, chiavi private: furto e distruzione. Inizia ora con la sicurezza extra di *Scrypta Shamir Backup*! 

## Come funziona

### Crea
Disattiva la connessione o imposta il dispositivo in modalità aereo. Scrivi il tuo segreto. Scegli il numero di *share* di ripristino che desideri generare e decidi quante di esse sarà necessario utilizzare per il recupero(*).

### Distribuisci
Distribuisci gli *share* dove vuoi, tra persone fisiche o luoghi sicuri.

### Rilassati
Rilassati ora sapendo che i tuoi "segreti" sono protetti da *Scrypta Shamir Backup*.

(*) Il numero di *share* può variare da 1 a un massimo di 100.
La soglia (*threshold*) è il numero predeterminato di *share* necessari per recuperare un segreto.

## Applicazione decentralizzata affidabile

- Questa dApp Web funziona solo in **modalità offline** per prevenire la perdita o il furto di informazioni.
- Backup offline sicuro degli *share* di ripristino.
- Elimina il rischio di furto o smarrimento.

## Domande

**Cosa succede se alcuni *share* vengono persi o rubati?**
I singoli *share* non contengono alcuna informazione sul segreto condiviso, purché il numero di *share* compromessi non raggiunga la soglia richiesta (*threshold*).

** Cosa succede se perdo molti *share* di recupero? **
Se non riesci a raggiungere la soglia richiesta, i dati  diventeranno irrecuperabili.


## CLI mode 

Questo tool vi permette di utilizzare Scrypta Shamir Backup sul vostro computer e controllarlo da terminale. Per un'archiviazione offline vengono anche creati dei file *.pdf* che contengono dei QR code rappresentanti gli *share*.

### Installazione
Per l'installazione è necessario `NodeJS` (che dovrà essere già installato). Basterà semplicemente installare l'applicazione globalmente attraverso il comando:

```
sudo npm install -g @scrypta/shamir
```

### Creare un backup per un qualsiasi dato

Se vuoi creare un backup per un qualsiasi dato (stringa) bisogna dare il seguente comando:

```
scrypta-shamir secure
```
Questo comando avvierà un'interfaccia dinamica dove verrà chiesto di inserire il numero di share e la soglia di recupero.

Puoi anche scegliere di crittografare gli shares con una password (oltre gli shares sarà quindi necessaria la password per recuperare il segreto).

A questo punto vi verrà chiesto di inserire il dato da custodire, e avrete completato la procedura di backup.

### Creare un nuovo wallet

E' possibile creare un nuovo indirizzo della rete Scrypta e conservarne la chiave privata attraverso *Scrypta Shamir Backup*. Se vuoi creare un nuovo wallet basta inserire il comando:

```
scrypta-shamir create
```

Questo comando avvierà l'interfaccia dinamica dove andranno inseiriti il numero di share e la soglia di recupero.

Puoi anche scegliere di crittografare gli shares con una password (oltre gli shares, per recuperare il wallet, sarà quindi necessaria la password).

### Recuperare un backup

Se si vuole recuperare un backup è necessario inserire il seguente comando, includendo come parametro `--path` la cartella contenente gli share:

```
scrypta-shamir restore --path=/PATH/TO/FOLDER/BACKUP 
```

Se invece hai crittografato con password i dati, dovrai includere anche il parametro `--password` con la password di cifratura utilizzata.

```
scrypta-shamir restore --path=/PATH/TO/FOLDER/BACKUP --password=YourStrongPassword
```