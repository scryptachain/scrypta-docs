# Introduzione

L’identità digitale all’interno della Blockchain di Scrypta viene gestita attraverso due diverse componenti:

1. La componente di “identità pseudonima” - una stringa alfanumerica del tipo - *LV5RkA9AL6ncM19RT3usKRkxd5arUS7iVt* - che permette di accoppiare la firma digitale ad una persona fisica o giuridica.

2. La componente della “firma digitale”, che possiamo pensare come password di cifratura, che permette di effettuare le operazioni tecniche di firma di transazioni e di dati.
   
La corretta identificazione del soggetto porta alla creazione di un **payload di identità** che viene firmato digitalmente e scritto in blockchain per consolidare la sua rappresentazione (hash). 

## Gateway

Questa corretta identificazione viene effettuata per mezzo di un **Gateway**, ovvero una terza parte fidata che si assume la responsabilità dell’identificazione stessa.

Qui vediamo un **esempio** di identificazione:

[https://proof.scryptachain.org/#/uuid/b5e6914d.0198.4390.a85e.c9722fb1e259](https://proof.scryptachain.org/#/uuid/b5e6914d.0198.4390.a85e.c9722fb1e259)

Come è possibile intuire, all’interno della blockchain non viene salvato alcun dato di tipo personale , rivelandosi uno strumento dotato di ***privacy by design***. 


> E' il Gateway che funge da "ente cerfificatore", sia esso un'azienda o un'organizzazione, o un ente governativo, e si farà carico di creare un archivio digitale **offline** (come consigliamo), che gli permetterà di risalire alla corretta identificazione degli utenti, e come strumento di KYC (Know Your Customer).


Il payload di identità viene consegnato anche all’utente il quale lo conserverà all’interno dei propri dispositivi (Card, Mobile, PC) e sarà necessario per i processi di scambio di informazioni personali tra utenti, aziende, enti.

::: tip NOTA
Attraverso la creazione della propria identità digitale, l'utente potrà inoltre utilizzare facilmente, anche in forma solo pseudonima, tutte le [dApps di Scrypta](../dapps/README.md).


Le identità (e il relativo address) possono essere create attraverso:

- [Manent App](../dapps/manent-app.md)

- [ScryptaID Browser Extension](../dapps/extension-browser.md)

- [Scrypta Card](../dapps/manent-app.md#scrypta-card)

:::

