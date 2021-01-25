# Smart Contracts

Per avere una panoramica generale di come funzionano gli Smart Contracts occorre leggere la [guida inziale](/smart-contracts).

Di seguito gli endpoint abilitati all'interno dell'IdaNode per interagire con gli Smart Contracts di Scrypta.

## [GET] /contracts

Questo endpoint restituisce tutti i contratti pubblicati all'interno della rete di Scrypta ed i relativi codici Javascript pubblicamente consultabili, così come vengono eseguiti, aggiornati all'ultima versione disponibile.

E' importante capire che il codice mostrato è già `compilato`, ovvero viene aggiunto del codice 

## [GET] /contracts/:address

Questo endpoint restituisce un singolo contratto, la risposta sarà del tipo:

```
{
    "v": 1,
    "name": "SCRYPTA NEWS FEED MANAGER",
    "author": "SCRYPTA TASK FORCE",
    "version": "1.0.1",
    "description": "THIS feed WILL MANAGE ALL THE FEEDS RETURNING A COMPLETE LIST",
    "immutable": "false",
    "code": "const ScryptaCore = require('@scrypta/core'); const db = require('db'); const axios = require('axios');const scrypta = new ScryptaCore; scrypta.staticnodes = true;scrypta.mainnetIdaNodes = ['http://localhost:3001']; scrypta.testnetIdaNodes = ['http://localhost:3001'];/**
	 * NAME: SCRYPTA NEWS FEED MANAGER
	 * DESCRIPTION: THIS feed WILL MANAGE ALL THE FEEDS RETURNING A COMPLETE LIST
	 * AUTHOR: SCRYPTA TASK FORCE
	 * VERSION: 1.0.1
	 * IMMUTABLE: false
	 */
	
	// DEFINING COMPILER VERSION
	/* Scrypta v0.0.1 */
	
	async function constructor() {

	}
	
	async function eachBlock(block){
		    searchdata(block['data_written'])
	}
	
	async function searchdata(data){
		    if(Object.keys(data).length > 0){
		        let keys = Object.keys(data)
	        for(let k in Object.keys(data)){
		            console.log('ANALYZING DATA FOR ' + keys[k])
	            for(let j in data[keys[k]]){
		                let written = data[keys[k]][j]
	                if(written.protocol === 'rsspin://' && written.data !== 'undefined'){
		                    let check = await db.read({feed: written.data})
	                    if(check.feed === undefined){
		                        let obj = {
		                            feed: written.data,
	                            manager: keys[k],
	                            uuid: written.uuid,
	                            active: true
	                        }
	                        let result = await db.insert(obj)
	                    }else{
		                        await db.update({feed: written.data}, { $set: { active: true } })
	                    }
	                }else if(written.protocol === 'rssunpin://'){
		                    let check = await db.read({feed: written.data})
	                    if(check.feed !== undefined && keys[k] === check.manager){
		                        await db.update({feed: written.data}, { $set: { active: false } })
	                    }
	                }
	            }
	        }
	    }
	}
	
	function index(request) {
		    return new Promise(async response => {
		        if (request !== undefined && request.type !== undefined) {
		            let type
	            if(request.type === 'true' || request.type === true){
		                type = true
	            }else{
		                type = false
	            }
	            let dbo = await db.read({active: type})
	            let feeds = []
	            for(let k in dbo){
		                let feed = dbo[k]
	                if(feed.feed !== 'undefined'){
		                    feeds.push(feed)
	                }
	            }
	            response(feeds)
	        } else {
		            response('Please requests for a feed first')
	        }
	    })
	}
	module.exports.eachBlock = eachBlock;
	module.exports.index = index;
	constructor();",
    "address": "Le9G4AYSGbGqonH7QEjFHDeVAMSPxK9KWt",
    "functions": [
        "eachBlock",
        "index"
    ]
}
```
## [GET] /contracts/:address/:version

Questo endpoint restituisce una specifica versione di uno specifico contratto.

## [POST] /contracts/run

Questo endpoint fa partire una chiamata all'interno del contratto e si aspetta una richiesta (in formato esadecimale) firmata con la chiave privata del richiedente.

Utilizzarlo direttamente risulta macchinoso, è consigliato integrare la relativa chiamata all'interno di `@scrypta/core`.

La chiamata da inviare sarà del tipo: 
```
{
	"message":"7b22636f6e7472616374223a224c675341745033675055524279616e5a534d33326b664575394331757951364b6667222c2266756e6374696f6e223a22696e646578222c22706172616d73223a7b22636f6e7472616374223a224c675341745033675055524279616e5a534d33326b664575394331757951364b6667222c2276657273696f6e223a226c6174657374227d7d",

	"hash":"c20eadaf349bf63ddf8ba437310ce0d2148651f4f2ad8743cb026b2a56b0381e",

	"signature":"eda7d87752ef2b7e1cf3e5e7117306f466f3649d274fc159b4e51f0d433cbf2f1d53640ad2f69aa1bbac2d0b71f6f27489115f2f793d36df447f143f394ba835",

	"pubkey":"022030a7ea2338174bc3350a8f7d59503f7a53b81223c5fc385425562cadb5164b",

	"address":"LSJq6a6AMigCiRHGrby4TuHeGirJw2PL5c"
}
```

Per generarla useremo `@scrypta/core` in questo modo:

```
const ScryptaCore = require('@scrypta/core')
const scrypta = new ScryptaCore
let address = await scrypta.createAddress('MyPassword')
let request = await scrypta.createContractRequest(address.walletstore, 'MyPassword', { contract: "LgSAtP3gPURByanZSM32kfEu9C1uyQ6Kfg", function: "search", params: {contract: "LcD7AGaY74xvVxDg3NkKjfP6QpG8Pmxpnu", version: "latest"} })
```

Invece per inviarla useremo il metodo `sendContractRequest` in questo modo:
```
let response = await scrypta.sendContractRequest(request)
```

La risposta sarà del tipo:
```
[
    {
        "pubkey": "03b2131eef9abc87f7f1fd29b3a27c4fb9add53884ece96a4ad7696f86f5e2a168",
        "url": "https://idanodejs01.scryptachain.org",
        "ip": "134.122.56.67"
    },
    {
        "pubkey": "03b2131eef9abc87f7f1fd29b3a27c4fb9add53884ece96a4ad7696f86f5e2a168",
        "url": "https://idanodejs02.scryptachain.org",
        "ip": "104.248.93.57"
    },
    {
        "pubkey": "03b2131eef9abc87f7f1fd29b3a27c4fb9add53884ece96a4ad7696f86f5e2a168",
        "url": "https://idanodejs03.scryptachain.org",
        "ip": "134.122.58.161"
    },
    {
        "pubkey": "03b2131eef9abc87f7f1fd29b3a27c4fb9add53884ece96a4ad7696f86f5e2a168",
        "url": "https://idanodejs04.scryptachain.org",
        "ip": "64.225.74.145"
    },
    {
        "pubkey": "03b2131eef9abc87f7f1fd29b3a27c4fb9add53884ece96a4ad7696f86f5e2a168",
        "url": "https://idanodejs05.scryptachain.org",
        "ip": "64.225.79.46"
    },
    {
        "pubkey": "03b2131eef9abc87f7f1fd29b3a27c4fb9add53884ece96a4ad7696f86f5e2a168",
        "url": "https://idanodejs06.scryptachain.org",
        "ip": "134.122.50.166"
    }
]
```

In questo caso abbiamo chiesto allo smart contracts di restituirci tutti i nodi in cui è attivo e quindi dove possiamo interrogarlo.

## [POST] /contracts/pin

Questa è una funzione di amministrazione e serve per *agganciare* uno smart contract ad un IdaNode. La chiamata deve essere sempre firmata ed il messaggio deve contenere unicamente l'indirizzo del contratto da agganciare.

La firma chiaramente deve essere fatta dalla stessa chiave privata inserita all'interno del nodo, all'interno del file `.env` nel parametro `NODE_KEY`.

La chiamata sarà del tipo:
```
{
  "message": "LcD7AGaY74xvVxDg3NkKjfP6QpG8Pmxpnu",
  "hash": "bcd92f448766b7d5284670390382e56d55d91d25e9c261ef3a67e8b950583ca3",
  "signature": "ac3e69be1d8752ff3e2c45054c3fd949e642a4522469e2c9d2ae22ee5edca3d0707296e592512f9ae9a52443fbcaf004fe82bc19b7a70caafbe6c244a079fd57",
  "pubkey": "03b2131eef9abc87f7f1fd29b3a27c4fb9add53884ece96a4ad7696f86f5e2a168",
  "address": "LaoH8mrMgKoE7Egte8WuhMPpBeBJJHnT7M"
}
```

Chiaramente questo endpoint produrrà una scrittura in blockchain, si rende necessario quindi avere un minimo di 0.001 LYRA all'interno dell'indirizzo del nodo.

## [POST] /contracts/unpin

Stessa metodologia di utilizzo; serve per annullare la chiamata precedente.