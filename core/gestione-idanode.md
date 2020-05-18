# Gestione IdANode

## returnNodes()

Ritorna la lista completa dei nodi, la risposta è un array del tipo:
```
['https://idanodejs01.scryptachain.org',  'https://idanodejs02.scryptachain.org',  'https://idanodejs03.scryptachain.org']
```
## checkNode(node)

Controlla che il nodo risponda correttamente. In caso negativo invia una risposta `false:`

const scrypta = new ScryptaCore

let node =  await scrypta.checkNode('https://idanodejs01.scryptachain.org')
```
/*

 Esempio di risposta positiva:

 {"version":1000000,"protocolversion":70920,"walletversion":61000,"balance":50.55998489,"obfuscation_balance":0,"blocks":424073,"timeoffset":0,"connections":21,"proxy":"","difficulty":32391.37336531,"testnet":false,"keypoololdest":1568297083,"keypoolsize":1001,"paytxfee":0,"relayfee":0.0001,"staking status":"Staking Active","errors":"","indexed":424073,"toindex":0}

 Esempio di risposta negativa: 

 false

*/
```

## connectNode()

Combina i due metodi precedenti ritornando il primo nodo disponibile in modo casuale. Questo nodo può essere usato per richiamare funzioni specifiche all'interno dello stesso.

```
const scrypta = new ScryptaCore

let node =  await scrypta.connectNode()

/*

 Esempio di risposta:

 'https://idanodejs01.scryptachain.org'

*/
```

## post(endpoint, params, node = '')

Effettua una chiamata `POST` al primo IdANode disponibile, l'elenco degli endpoint può essere trovato nella sezione relativa. Questo metodo effettua la connessione in automatico con il nodo anche se è possibile forzare il nodo ed usarne uno specifico passandolo alla variabile `node`.

Ad esempio si può utilizzare in questo modo per ottenere e leggere i dati inseriti in blockchain da uno specifico indirizzo:

```
let response = await scrypta.post('/read', { address: "LbR8m1kkLSiiTDaEU8sHeeeh1jGbGho8uo" })
```

## get(endpoint, node = '')

Effettua una chiamata `GET` al primo IdANode disponibile, l'elenco degli endpoint può essere trovato nella sezione relativa. Questo metodo effettua la connessione in automatico con il nodo anche se è possibile forzare il nodo ed usarne uno specifico passandolo alla variabile `node`.

Ad esempio si può utilizzare in questo modo per ottenere e leggere i dati relativi al wallet.

```
let response = await scrypta.get('/wallet/getinfo')
```
