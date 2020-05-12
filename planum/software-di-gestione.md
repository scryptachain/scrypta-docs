# Software di gestione

## Planum Admin Tool
Per amministrare una sidechain Planum è possibile utilizzare il seguente tool:

[https://github.com/scryptachain/scrypta-planum-admin](https://github.com/scryptachain/scrypta-planum-admin)

Questo tool permette di creare un'applicazione desktop per gestire in totale sicurezza una sidechain in termini di KYC, gestione fondi e analisi delle statistiche.

Attenzione, questo tool è veramente base e permette semplicemente di annotare identificativi, inviare fondi e prelevarli. Qualsiasi altra funzionalità potrà essere sviluppata in un secondo momento.

## Controllo funzionalità

Per controllare la corretta funzionalità della sidechain presso gli IdaNode è possibile utilizzare il seguente tool: 

[https://github.com/scryptachain/scrypta-planum-check-service](https://github.com/scryptachain/scrypta-planum-admin)

Per configurarlo bisogna semplicemente collegare la giusta sidechain attraverso il file `.env` e far partire il controllo attraverso il comando `npm start`. 

Questo controllerà che la supply sia sempre la stessa in tutti gli IdaNode disponibili, in caso contrario chiederà all'IdaNode di effettuare una verifica sulla sidechain stessa.