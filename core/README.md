# Introduzione

[**Scrypta Core**](https://github.com/scryptachain/scrypta-core), come anticipato nei capitoli introduttivi, è la libreria Javascript che sta alla base delle interazioni lato client (quindi lato utente) e assolve, in maniera locale - ovvero senza interpellare server esterni - tutte le funzioni necessarie alla gestione degli indirizzi e delle transazioni.

##  SID File

La libreria Scrypta Core, non salva MAI in chiaro le chiavi private e le usa unicamente "on the fly", dopo che l'utente ha sbloccato il proprio payload di identità. Questo payload, che citeremo più volte, è una stringa criptata attraverso protocollo AES-256 e viene comunemente salvato in file con estensione **.sid (Scrypta ID)**.

la password con cui la chiave viene criptata non viene MAI salvata in chiaro. Chiediamo agli sviluppatori di attenersi a queste semplici regole, che garantiscono una prima, ma essenziale, barriera di sicurezza verso l'utilizzo non autorizzato degli indirizzi.

La gestione locale dei file .sid avviene di default attraverso il localStorage se usata nel browser o attraverso dei file, salvati nella directory `db` se usata con NodeJS. La libreria permette di default di utilizzare più di un indirizzo e, ognuno di questi, può essere richiamato in fase successiva o utilizzato nelle dApp attraverso il browser.

## Per iniziare

La libreria Scrypta Core mette in collegamento il client con uno degli IdaNode disponibili di Scrypta. Questi nodi tuttavia possono essere personalizzati e sovrascritti in fase di inizializzazione così da utilizzare un set di IdaNode personalizzati, consigliato soprattutto in fase di produzione di una dApp.

In questa sezione analizzeremo a fondo il funzionamento di ogni singolo metodo presente all'interno della libreria. La libreria si deve inserire all'interno di webpack o di altri compilatori per utilizzarla all'interno di una pagina web, oppure può essere richiamata direttamente da NodeJS semplicmente installlandola con:

```
npm install --save @scrypta/core
```

Una volta installata si deve inserire all'interno dello script di javascript e inizializzarla. Si badi bene che è importante inizializzarla con il parametro `true` nel caso di utilizzo nel browser. Questa impostazione permette alla libreria di usare il localStorage invece del File System.

```
const ScryptaCore = require('@scrypta/core')
let scrypta = new ScryptaCore(true)

let address =  await scrypta.createAddress('AStrongPassword')

/*

 {

 "pub":"LbcJVdgiJoX55HUSDrdPTw58iC465tbEnG",

 "api_secret":"3d25258d0fe27521eb78d2b9a5ff7242",

 "key":"034c6155cb500844ee0e6674a3237a7d3e6be8f0c0080b18cc3f58289724ee5072",

 "prv":"SninxEoZ9qfuPCSsbZm2E8aB61wqpH94nVdDJ7XutoTNMPvzQt8z",

 "walletstore":"LbcJVdgiJoX55HUSDrdPTw58iC465tbEnG:72363f2891a3f7db7b5c9be07cd9a03d727ac0728b80850b3a21e120c9c18fac226c911eff7d95850f01acd3b6b00406abba764aa14bd0d7c75301a8dc4dc0286c6414be3c4d8d16eee9e35faf635ae439070859b4ac29b1d9e12c983b5aa84b8adbd6dbc69dbf731aad802dfe07df1b7dcff793911fb6e027b989ffcc1189fe4646e9a3db211401bb0b1c92a4740779f6178046299c4dacb37e398d0cf93efac018bd7b6c24426787947fefcd6c0bcb9736ab2d1ba4c0b1b87dc6a8720b819c"

 }

*/
```

## Lavorare con la testnet

Per lavorare con la testnet di Scrypta basta impostare il parametro `testnet = true` subito dopo averla inizializzata:

```
const ScryptaCore = require('@scrypta/core')
let scrypta = new ScryptaCore(true)
scrypta.testnet = true
```

Da questo momento sia gli indirizzi che gli IdaNode saranno di testnet.

## Test e debug della libreria

Per testare localmente la libreria bisogna aver installato NodeJS e GIT, di seguito l'elenco dei comandi necessari per avviare l'interfaccia web di test:
```
git clone https://github.com/scryptachain/scrypta-core

cd scrypta-core

npm  install

npm run test:local
```
