# Scrypta dApp Starter

Scritto in VueJS, ti permette di creare una Progressive Web App collegata con Scrypta Blockchain.

Puoi scaricare il codice da qui:
[**dApp Starter:**](https://github.com/scryptachain/scrypta-dapp-starter). All'interno potra notare un progetto generato attraverso `@vue/cli`.

## Avviare il progetto in development mode

Per sviluppare il progetto è necessario innanzitutto clonare la repository attraverso il comando:

```
git clone https://github.com/scryptachain/scrypta-dapp-starter
```

dopo di che è necessario entrare nella cartella e installare le dipendenze:

```
cd scrypta-dapp-starter
npm install
```

Infine avviare il server di sviluppo:
```
npm run serve
```

## Pagina di login

All'interno dello starter troverai una pagina di login che permetterà a te e al tuo utente di collegarsi attraverso un file .sid, o generarne uno nuovo così da poter interagire con la blockchain.

## Pagina di benvenuto

Una volta effettuato il login è possibile interagire con la blockchain di Scrypta attraverso la libreria [Scrypta Core](/core) e quindi leggere, scrivere o interagire con gli [IdaNode](/idanode/README.md).

## Layout Grafico

Per il layout grafico è stato scelto [https://buefy.org/](https://buefy.org/) che usa il framework `Bulma`. Tutte le dApp Scrypta cercheranno di uniformarsi a tale stile grafico e di UX e sarebbe buona prassi creare dApp quanto più possibile integrate con l'ecosistema.

## Deploy della dApp

Una volta ultimata la dApp questa può essere compilata attraverso il comando: 

```
npm run build
```

e caricata su un server online, su un'estensione del browser, su Electron come desktop app etc. L'aspetto importante è che le dApp effettueranno operazioni ben determinate negli account degli utenti che le attivano e useranno la loro potenza computazionale per effettuare calcoli o compiere altre operazioni.

Qualora si avessero esigenze specifiche dal punto di vista backend e database, è chiaro che si può usare il medesimo codice in modo ibrido, servendosi anche di un server centrale.