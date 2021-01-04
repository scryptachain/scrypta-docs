# Cosa è Scrypta

## Introduzione

Scrypta è una **blockchain permissionless**, decentralizzata e pubblica. Il suo metodo di consenso è il Proof of Stake (PoS), con una rete aggiuntiva di validatori chiamati Masternode.

La filosofia open-source sta alla base dell'intero progetto Scrypta. Attraverso [GitHub](https://github.com/scryptachain) è possibile monitorare il lavoro di ricerca e di sviluppo quotidianamente portato avanti dall'intero ecosistema.

I blocchi vengono estratti dagli stakers ogni minuto, questo garantisce un "timeframe" rapido per l'esecuzione di transazioni e la scrittura di informazioni. Ogni blocco può contenere un massimo di 1MB di informazioni. La capacità di ogni singola transazione di contenere dati arbitrari (attraverso l'OP_RETURN) è di 50 kilobyte.

Il team di Scrypta ha sviluppato un secondo layer di funzionamento, attraverso gli **IdANode**, che permette (in via facilitata, ma non esclusiva) la gestione di informazioni arbitrarie attraverso quello che abbiamo definito: **Progressive Data Management** (PDM). Il PDM permette operazioni di lettura, scrittura e invalidazione, che a sua volta costituiscono l'essenza di ogni applicazione (decentralizzata o meno).

Questa documentazione comprende lo stato attuale delle librerie open-source attualmente sviluppate da Scrypta Foundation ed il loro sistema di funzionamento, per ulteriori chiarimenti potete contattarci inviando una mail a: info@scryptachain.org o unendovi al nostro canale [Discord](https://discord.me/scryptachain).

## Architettura

### Pilastri

L'ecosistema di Scrypta si basa su **cinque pilastri** fondamentali grazie ai quali si possono sviluppare applicazioni decentralizzate più o meno complesse, che interagiscono a vari livelli con la Blockchain:

-   **Scrypta Core:** è la libreria javascript principale. Permette la creazione e la gestione dei file .sid, la firma delle transazioni e dei dati, e l'interfacciamento di base con gli IdANode.
    
-   **Scrypta IdANode:** è la libreria NodeJS necessaria per sviluppare i nodi di interfacciamento con la blockchain, questi nodi svolgono svariate funzioni tra cui: block explorer, tracciamento degli UTXO, archiviazione dei file su sistema IPFS (Interplanetary File System) ed esecuzione degli Smart Contracts.

-   **Scrypta Identity Framework:** è la libreria NodeJS che gestisce l'interazione tra le identità digitali esterne e gli indirizzi della blockchain di Scrypta. Grazie al framework è possibile identificare e "marchiare" gli indirizzi Lyra avvalendosi di vari provider esterni.
    
-   **Scrypta Trustlink:** integrato all'interno degli IdANode, il Trustlink è un meccanismo grazie al quale è possibile creare dei wallet detti "multisignature" che prevedono l'obbligo della compresenza di più firme per eseguire transazioni e quindi scritture di dati.

-   **Scrypta Planum:** è la soluzione per favorire processi di tokenizzazione: un sistema di sidechain aperto e permissionless che permette di creare, scambiare e tracciare i propri asset digitali (tokenized asset) unicamente attraverso la blockchain di Scrypta.

-   **Scrypta Smart Contracts:** è il sistema di scripting che permette di realizzare dei particolari applicativi, direttamente incorporati all'interno degli IdaNode. Per approfondire il sistema è possibile leggere un approfondimento [qui](https://it.scrypta.wiki/idanode/smart-contracts.html).

Attraverso l'utilizzo di questi strumenti è possibile sviluppare infinite applicazioni, decentralizzate e non, per molteplici casi d'uso.