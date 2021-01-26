# Emissione e Gestione dei Token 
### Planum: dalla creazione alla gestione degli asset digitali

Accedendo alla piattaforma attraverso [https://planum.dev](https://planum.dev) sarà possibile creare il proprio token oppure consultare l’explorer per i token già esistenti.

Il processo è molto veloce, non richiede specifiche o approfondite competenze tecniche se non una consapevolezza di ciò che si sta facendo.
Il processo può essere riassunto in 4 step:

- Login a ["Planum"](https://planum.dev) attraverso l’identità digitale di Scrypta.
- Definizione dei parametri della sidechain del token.
- Creazione dell’asset.
- Gestione dell’asset.

## Login a Planum 

Per iniziare a creare la propria sidechain, e’ necessario accedere a https://planum.dev effettuando il login attraverso uno dei diversi tools sviluppati e messi a disposizione da Scrypta per la creazione e la gestione dell’identità digitale.
Per un’esperienza ottimale di usabilità e sicurezza si richiede di scaricare ed usare ["ManentApp"](https://manent.app) disponibile in entrambe le versioni [web](https://web.manent.app) e mobile ([IOS](https://apps.apple.com/us/app/scrypta-manent/id1484816083)/[Android](https://play.google.com/store/apps/details?id=foundation.scrypta.manent)).

![planum](../assets/planum/manent_link.png)
Ciò consentirà di creare facilmente la vostra prima identità digitale, oppure di importarne una già esistente.
*Per completezza, vi invitiamo a consultare la [sezione wiki](https://wiki.scryptachain.org/developers/scryptaid) relativa.*

Una volta che la vostra identità digitale è stata creata, è possibile effettuare il login a “Planum” con il vostro .sid file o usando [l’estensione per browser Scrypta ID](https://id.scryptachain.org/) (un tool che permette di creare e gestire le identità digitali per usare con facilità le dApps di Scrypta).

## Definizione dei parametri della sidechain

Dopo il login, si aprirà l’interfaccia principale, dove verrà richiesto di introdurre tutti i parametri di configurazione della vostra sidechain.
Questi parametri descrivono gli attributi del vostro asset tokenizzato, che funzionerà sul suo corrispondente layer della sidechain.

Riempiendo i campi richiesti verranno definiti i parametri della nostra sidechain:
![planum](../assets/planum/token_creation.png)


- **Asset public name:** Nome del token
- **Symbol:** Ticker del token
- **Total issued supply:** supply totale desiderata.
- **Decimal division:** numero di decimali in cui e’ divisibile il nuovo digital asset.

Tra le opzioni a disposizione, l’utente può scegliere se creare un token “reissuable” (cioè per il quale sarà possibile incrementare la supply anche dopo l’emissione del token), o “burnable” (è possibile ridurre la supply “bruciando” una parte o tutta la supply di tokens).
Premendo il tasto **"confirm configuration"** si aprirà una finestra di riepilogo con tutti i parametri scelti per la creazione della nostra sidechain.

![planum](../assets/planum/create_confirm.png)

Una volta confermata la vostra scelta attraverso il tasto **"CREATE"**, si procederà immediatamente all'emissione del vostro token, sulla blockchain Scrypta, coi parametri da voi scelti, con la token supply totale che viene automaticamente trasferita all'indirizzo corrispondente all'identità digitale del creatore del token.

Cliccando su **"Manage"** vi ritoreverete nella pagina in cui sono presenti i token emessi sotto la vostra identità digitale Scrypta. 

![planum](../assets/planum/token_page.png)

Cliccando sul nome del token di vostro interesse, si aprirà la finestra di gestione del token in oggetto con le opzioni disponibili.

![planum](../assets/planum/token_management.png)

Allo stesso tempo, il nostro asset tokenizzato viene reso disponibile nel balance del portafoglio digitale creato tramite Manent APP sotto la stessa identità digitale del creatore del token.
Il token apparirà nella lista, con tutti gli altri token emessi o posseduti dallo stesso creatore, oltre al balance di Lyra (in quanto main chain).
![planum](../assets/planum/manent_app.png)

Allo stesso modo, il balance del nuovo token sara' presente all'interno di Manent web app
![planum](../assets/planum/manent_webapp.png)

## Gestione degli asset
Una volta che il token e’ stato emesso e diventa visibile all’indirizzo principale, il token può’ essere trasferito a chiunque, conservato dentro le dApp di Scrypta o scambiato elettronicamente con altri token o con Lyra in quanto valuta principale del network.
In accordo con la nostra roadmap, stiamo già lavorando ad una piattaforma dove sara’ possibile scambiare digitalmente tutti i token emessi attraverso **“Planum”**.

Poiché i token non hanno un proprio specifico indirizzo per ciascuna sidechain, per trasferire un ammontare di token è necessario semplicemente conoscere l’indirizzo Lyra del ricevente.
Dalla propria finestra di invio del wallet, basta scegliere il token che si vuole inviare, l’indirizzo Lyra del ricevente e l’ammontare, proprio come si fa quando si inviano cryptovalute tradizionali.
![planum](../assets/planum/send_token.png)

## Costi e velocità delle transazioni
Vale la pena fare notare che i costi di emissione e di scambio dei token sono rappresentati solo dalle fee di sistema che sono equivalenti, come negli altri casi, a 0.001 LYRA per una singola transazione di 8000 Bytes (l’ammontare di dati che e’ possibile trasmettere tramite blockchain e’ stato di recente incrementato dagli sviluppatori dal valore originale di 80 Bytes).

Ciò significa che ciascun trasferimento di token costerà 0,001 LYRA e le fee delle transazioni non sono correlate all'ammontare di token che si vuole generare o trasferire ad altri utenti.

Il trasferimento degli asset avviene in modo quasi istantaneo grazie alla lettura della mempool eseguita dagli [IdANode](https://wiki.scryptachain.org/developers/ida-node) che permettono la validazione delle transazioni anche senza la prima conferma della rete.
La validazione e’ fatta a livello di [IdANode](https://wiki.scryptachain.org/developers/ida-node), per cui permette di essere sicuri che la transazione trasmessa sia valida e che venga inserita nel primo blocco disponibile.

***


## Manent Card Integration
Tutte le identità digitali e i rispettivi balances possono essere collegati ad una [Scrypta Card Wallet](scrypta-card-wallet.md), uno strumento potente e affifabile che puo’ essere utilizzato per creare backup sicuri del vostro wallet, per la gestione quotidiana dei vostri fondi Lyra, la gestione delle identità digitali e delle informazioni in esse contenute o come sistema di pagamento all'interno delle sidechain o dei POS fisici.


![planum](../assets/planum/card.png)

## Video Tutorial

[PLANUM - Creare TOKEN tramite una Sidechain su Scrypta](https://www.youtube.com/watch?v=qWlfWYl6kfM) di Tiziano Tridico

<iframe width="560" height="315" src="https://www.youtube.com/embed/qWlfWYl6kfM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>