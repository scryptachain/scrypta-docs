
# Introduzione

Scrypta è una **blockchain permissionless**, decentralizzata e pubblica. Il suo metodo di consenso è il Proof of Stake (PoS), con una rete aggiuntiva di validatori chiamati Masternode.

I blocchi vengono estratti dagli stakers ogni minuto, questo garantisce un "timeframe" rapido per l'esecuzione di transazioni e la scrittura di informazioni. Ogni blocco può contenere un massimo di 1MB di informazioni. La capacità di ogni singola transazione di contenere dati arbitrari (attraverso l'OP_RETURN) è di 80 byte.

Il team di Scrypta ha sviluppato un secondo layer di funzionamento, attraverso gli **IdaNode**, che permette (in via facilitata, ma non esclusiva) la gestione di informazioni arbitrarie attraverso quello che abbiamo definito: **Progressive Data Management** (PDM). Il PDM permette operazioni di lettura, scrittura e invalidazione, che a sua volta costituiscono l'essenza di ogni applicazione (decentralizzata o meno).

Questa documentazione comprende lo stato attuale delle librerie open-source attualmente sviluppate da Scrypta Foundation ed il loro sistema di funzionamento, per ulteriori chiarimenti potete contattarci inviando una mail a: info@scryptachain.org o unendovi al nostro canale [Discord](https://discord.me/scryptachain).

# Architettura

Pilastri**[](https://wiki-it.scryptachain.org/sviluppatori/architettura#pilastri)

L'ecosistema di Scrypta si basa su **quattro pilastri** fondamentali grazie ai quali si possono sviluppare applicazioni decentralizzate più o meno complesse, che interagiscono a vari livelli con la Blockchain:

-   **Scrypta Core:** è la libreria javascript principale. Permette la creazione e la gestione dei file .sid, la firma delle transazioni e dei dati, e l'interfacciamento di base con gli IdaNode.
    
-   **Scrypta IdaNode:** è la libreria NodeJS necessaria per sviluppare i nodi di interfacciamento con la blockchain, questi nodi svolgono svariate funzioni tra cui: block explorer, tracciamento degli UTXO e archiviazione dei file su sistema IPFS (Interplanetary File System).
    
-   **Scrypta Identity Framework:** è la libreria NodeJS che gestisce l'interazione tra le identità digitali esterne e gli indirizzi della blockchain di Scrypta. Grazie al framework è possibile identificare e "marchiare" gli indirizzi Lyra avvalendosi di vari provider esterni.
    
-   **Scrypta Trustlink:** integrato all'interno degli IdaNode, il Trustlink è un meccanismo grazie al quale è possibile creare dei wallet detti "multisignature" che prevedono l'obbligo della compresenza di più firme per eseguire transazioni e quindi scritture di dati.
    

Attraverso l'utilizzo di questi strumenti è possibile sviluppare infinite applicazioni, decentralizzate e non, per molteplici casi d'uso.

## 

**Note tecniche**[](https://wiki-it.scryptachain.org/sviluppatori/architettura#note-tecniche)

Abbiamo deciso di ribaltare il concetto di "Smart Contract" e delle piattaforme che mettono a disposizione sistemi simili alle Ethereum Virtual Machine. Crediamo che la Blockchain debba essere contenitore di informazioni e non esecutore. Questo approccio chiaramente non permette la realizzazione di script e dApp che eseguono i loro codici all'interno dei nodi. Come vedremo, questo non è uno svantaggio in quanto sarà l'utente stesso ad eseguire la propria applicazione decentralizzata, che - a tutti gli effetti - opererà dall'interno del proprio dispositivo (Laptop, Mobile, Embedded).

Scrypta **non è** una piattaforma simile ad Ethereum, non permette di realizzare Smart Contract comunemente intesi, anche se è possibile realizzare una quantità vasta di applicazioni il cui funzionamento può essere accomunato a quello degli Smart Contract.

Inoltre la possibilità di creare delle applicazioni decentralizzate di questo tipo permette lo sviluppo di codice che può interagire sia con la blockchain di Scrypta che con altre blockchain o altri sistemi (anche centralizzati). Questo garantisce massima elasticità e interoperabilità in fase di realizzazione di progetti concreti.