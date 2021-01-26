# Wallet

Le operazioni legate al wallet sono assimilabili a quelle di Scrypta Core o del Qt-Wallet. In generale è possibile sempre richiamare le funzioni RPC del wallet, anche se non tutte le chiamate sono specificate come endpoint.

## Crypto.ts
Il modulo responsabile di tutte le operazioni di interfacciamento si trova in `src/libs/Crypto.ts`. Questo permette di richiamare qualsiasi funzione RPC attraverso il metodo `request`. Sono presenti svariati altri metodi che vengono chiamati internamente e che è possibile analizzare direttamente. Vale la pena descrivere il metodo `request` in quanto è fondamentale nel caso in cui si voglia estendere la funzionalità dell'IdANode.

### request(method, params  = [])

Permette di inviare qualsiasi chiamata al wallet attraverso il protocollo RPC. La lista delle chiamate possibili si trova qui: [https://wiki.scryptachain.org/scrypta-full-node/lyra-cli](https://wiki.scryptachain.org/scrypta-full-node/lyra-cli)

E' quindi possibile, ad esempio, richiamare il metodo `getnewaddress` direttamente attraverso il metodo `request`:
```
import  *  as  Crypto  from  '../libs/Crypto'
let  wallet  =  new  Crypto.Wallet
let address = await wallet.request('getnewaddress')
```

**_Da sottolineare che esternamente questo metodo non è raggiungibile._**

## [POST] /init

Questo endpoint serve ad inizializzare un indirizzo. In termini strettamente blockchain questa operazione non ha un risvolto particolare. Un indirizzo esiste in quanto generato (l'operazione avviene offline) e non necessita di fondi per compiere operazioni legate alla firma.

Tuttavia può essere necessario "inizializzarlo", ovvero rendere nota la sua esistenza in un determinato momento nel tempo, inviando dei fondi. 
La quantità di fondi inviata è decisa a monte, all'interno del file _.env_ . Negli IdANode di Scrypta ammonta a **0.05 LYRA**.

La chiamata ammette il solo campo **address** e risponderà con la _txid_ relativa ,se vengono effettivamente inviati dei fondi. L'operazione potrebbe fallire se nell'IdANode non sono presenti abbastanza fondi per inviare la transazione.

Ecco un esempio di risposta: 
```
{

	"data":  {

		"dapp_address":  "LY6BHLvjNbHCQxnpGgt6BvXhXjfX6Nk1X2",

		"airdrop_tx":  "d963d9d2d4862868ec3a1fa93beca49b4427a5fbb39722face624a06eabe6848"

	},

	"status":  200

}
```

**N.B** questa chiamata non può essere richiamata più di una volta per IdANode in quanto viene tenuto un registro interno.

##  [GET] /getnewaddress/:internal

Permette di generare un nuovo indirizzo e ne restituisce la chiave privata e la chiave pubblica.

_E' sconsigliato usare questa funzione se l'IdANode è pubblico su Internet. Sarebbe più corretto generare gli indirizzi offline o lato client attraverso la libreria Scrypta Core._

Il parametro **internal**, che è opzionale, permette di generare degli indirizzi interni all'IdANode; cioè indirizzi che vengono salvati all'interno del wallet.dat (Il file del wallet di Scrypta).

```
{
	"address":"LXVTCseqosHJDD4BzU2Xb1XH6RPJQu7ZUq",
	"private_key":"SpeJ9q3wDSDqsPYmMr5A1zUtgeFPkhDjHRcttN6PonAGhY4JazAK",
	"pub_key":"03b635b83e1473a4b0cd91696926cfa69d1dec030b3e97213f52a45cbc976103a7",
	"status":200
}
```

## [POST] /send
Permette di inviare dei fondi direttamente dall'IdANode, specificando i seguenti parametri:
- **from**: l'indirizzo che intende inviare i fondi
- **to**: l'indirizzo a cui volete mandare i fondi
- **amount**: l'ammontare che si intende inviare
- **private_key**: la chiave privata dell'indirizzo da cui si intende inviare i fondi
- **message**: un eventuale messaggio testuale che non può superare 7500 Byte e che viene inserito come OP_RETURN all'interno della transazione in un output secondario

## [POST] /sendrawtransaction
Permette di inviare una raw transaction precedentemente impostata e firmata al network.

## [POST] /decoderawtransaction
Permette di decodificare una raw transaction convertendola da esadecimale a oggetto JSON.

## [GET] /wallet/getinfo
Restituisce la risposta del wallet alla chiamata `getinfo`. Contiene le informazioni di sincronizzazione con la blockchain.

## [GET] /wallet/masternodelist
Restituisce la risposta del wallet alle chiamate `masternode list`, `masternode count` e `masternode current` permettendo così di analizzare l'attuale network.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTIwODE0Njg4MiwtMTkzMjU2NTYzNCw0MD
A2NDU0OCwtOTUxNTc3NDk1LDIwNTE1NDA2MzksLTU2ODQ4MTAw
LDE5OTU0ODYzNDYsODczMTE0NjE1LC0xMTY5ODM3MjI0LC0xMj
Q1MTU4OTczLDExNzgxNjc5NDIsLTIxODE1MzAxMSwtMjA4ODc0
NjYxMl19
-->