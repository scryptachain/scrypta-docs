# Interazione con gli Smart Contracts

Questi metodi servono per inviare chiamate agli Smart Contracts in forma semplificata. Viene automaticamente gestita la ricerca del nodo da interrogare e l'effettiva chiamata allo stesso.

## createContractRequest(key, password, request)

Questo metodo serve per generare una richiesta verso uno smart contracts. Richiede di passare:
- *key*: la chiave pubblica o il sid che effettuerà la chiamata
- *password*: la password per sbloccare il sid
- *request*: la richiesta vera e propria al contratto, sottoforma di oggetto, che contiene le proprietà `contract`, `function` e `params`.

Ecco un esempio di come usarla:

```
const ScryptaCore = require('@scrypta/core')
const scrypta = new ScryptaCore
let address = await scrypta.createAddress('MyPassword')
let request = await scrypta.createContractRequest(address.walletstore, 'MyPassword', { contract: "LgSAtP3gPURByanZSM32kfEu9C1uyQ6Kfg", function: "search", params: {contract: "LcD7AGaY74xvVxDg3NkKjfP6QpG8Pmxpnu", version: "latest"} })
```

La risposta sarà del tipo:

```
{"message":"7b22636f6e7472616374223a224c675341745033675055524279616e5a534d33326b664575394331757951364b6667222c2266756e6374696f6e223a22696e646578222c22706172616d73223a7b22636f6e7472616374223a224c4c734e577179687248327748706838373956585446614e4c4c597434334a6a7136222c2276657273696f6e223a226c6174657374227d7d","hash":"2b8cfaafda8ab93046fcc5e5135472b7c0be2259e8d414eadee99d662cd3934d","signature":"54cb580b23bc0fc63857be8c30f5cb2a37cc016ad64abfeee0a44463f67a84f461f995a287562b6245e80458ce0e97b63b8101511f0f1459ee6fd5bbd5b215f8","pubkey":"0366c39e2700b045c247bce4d8f1a858deae30fac80bf2ce3e1b428dd849f35c01","address":"LXHGeHh83wdMi2sd6tkgnhpPrgWUQSAjTb"}
```

## sendContractRequest(request)

Questo metodo invia la richiesta al primo IdaNode disponibile e ne restituisce il risultato. Dopo aver creato quindi la richiesta è possibile inviarla direttamente con:

```
let response = await scrypta.sendContractRequest(request)
```

La risposta sarà presente quindi nella variabile.