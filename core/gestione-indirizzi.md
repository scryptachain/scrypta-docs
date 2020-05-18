# Gestione Indirizzi
## createAddress(password, saveKey = true)

Crea un indirizzo e salva il payload (di default) nel localStorage. Se al secondo parametro viene passato `false` il metodo non salva il payload nel localStorage.

Attenzione, non viene controllato il localStorage! In caso di presenza di un payload precedente questo verrà sovrascritto. Controllate attentamente le fasi di backup e scrittura dei payload nella vostra dApp.
```
const scrypta = new ScryptaCore

let password =  'AStrongPassword'

let payload =  await scrypta.createAddress(password,  false)

/*

 {

 "pub":"LLLjx7yV4nhUzSapBAHogb5BdgUR6VCB3o",

 "api_secret":"33239857dbe3d37fd35b807578a0132b",

 "key":"03097163386854cde5801aec574948e15b9e24c79da65414d4e5588e7140846165",

 "prv":"SnvpeER7kdeMFGRimBzV5EJfX2ZfxmAQwin1qAHD2kXb8XRF983g",

 "walletstore":"LLLjx7yV4nhUzSapBAHogb5BdgUR6VCB3o:d287884b4af9e3e844da643646cb17e364cffc018f3704dfe5db1e04429b6a26986c0151a1008403209e6087ba3eaf75c79544ea93437053f60eb527dabba4acee76fad8e9821c4ce3e5cc54e04b0baa100476fb6010a9c426f8372bc9a4f67297244737f9631e02655fff1f10d04fce8f22743b623f024144f1efc7bc91cc3604e8a87a8f080cde7ef140c9f2c1b93d6d5fe275293cc33e8adae78a63ce63e84250fa59e75fb016cb2f4b3871ed32e0e182b56ec4f6578065f782e961606b3e"

 }

*/
```

### Composizione payload di identità

-   **pub:** l'indirizzo pubblico appena generato.
    
-   **api_secret:** una chiave "forte" che è possibile usare come chiave di cifratura delle informazioni scritte in blockchain.
    
-   **key:** la chiave pubblica dell'indirizzo appena generato. Questa serve per la validazione delle informazioni scritte e per la creazione dei Trustlink.
    
-   **prv:** la chiave privata dell'indirizzo, utilizzata per spendere i fondi.
    
-   **walletstore:** la versione crittografata del payload, che dovrà essere salvata dall'utente (in localStorage e separatamente)
    

## buildWallet(password, pub, wallet, saveKey)

Questo metodo, che viene normalmente invocato internamente, serve a costruire la versione crittografata del wallet; cioè quello che il metodo `createAddress` chiama `walletstore`. Tuttavia può essere necessario richiamare questo metodo in altri contesti. Per fare un esempio: potrebbe essere richiamato se si vuole cambiare la password del proprio payload salvato.

In questo caso si dovrebbe procedere come segue:
```
const scrypta = new ScryptaCore

let oldpassword =  'WeakPassword'

let newpassword =  'AStrongPassword'

let payload =  await scrypta.readKey(oldpassword)

​
if(payload !==  false){

 scrypta.buildWallet(

 newpassword, 

 payload.pub,

 {

 prv: payload.prv,

 api_secret: payload.api_secret,

 key: payload.key

 },

 true  //Salva il wallet nel localStorage

}
```


Come potrete notare, l'indirizzo pubblico sta fuori dal payload di identità, infatti può essere salvato senza compromettere la sicurezza: l'indirizzo pubblico è di sola consultazione.

La chiave pubblica e l'indirizzo pubblico sono due entità separate. L'indirizzo pubblico è ottenuto facendo una doppia funzione di hash dalla chiave pubblica. La chiave pubblica invece viene ottenuta direttamente dalla chiave privata ed è quella che permette la validazione delle informazioni scritte e firmate sulla blockchain.

## initAddress(address)

Questo metodo inizializza l'indirizzo, ovvero fa sì che un IdANode disponibile invii una minima quantità di LYRA all'indirizzo inizializzato. Nel caso degli IdANode Scrypta la quantità è di **0.05 LYRA**. La risposta che si ottiene dall'IdANode comprende la TXID della transazione.
```
const scrypta = new ScryptaCore

let address =  'LLLjx7yV4nhUzSapBAHogb5BdgUR6VCB3o'

let init =  await scrypta.initAddress(address)

/*

 Risposta:

 {

 airdrop_tx: "202d34a32e0deaa897bddac60109b844f3be72d2511d56057dd15470f04b6252",

 dapp_address: "LLLjx7yV4nhUzSapBAHogb5BdgUR6VCB3o"

 }

*/
```

## importPrivateKey(key, password) 

Questo metodo permette di importare una qualsiasi chiave privata all'interno del wallet locale. Utile per importare altri indirizzi e utilizzarli successivamente.

## getPublicKey(privateWif)

Questo metodo permette di ricreare la chiave pubblica dell'indirizzo partendo dalla sua chiave privata.
```
const scrypta = new ScryptaCore

let prv =  'SnvpeER7kdeMFGRimBzV5EJfX2ZfxmAQwin1qAHD2kXb8XRF983g'

let key = scrypta.getPublicKey(prv)


/*

 Risposta: 

 03097163386854cde5801aec574948e15b9e24c79da65414d4e5588e7140846165

*/
```

## getAddressFromPubKey(pubKey)

Questo metodo permette di ricreare un indirizzo partendo dalla sua chiave pubblica, utile per verificare che la chiave pubblica sia effettivamente corrispondente all'indirizzo.
```
const scrypta = new ScryptaCore

let key =  '03097163386854cde5801aec574948e15b9e24c79da65414d4e5588e7140846165'

let address =  await scrypta.getAddressFromPubKey(key)


/*

 Risposta: 

 LLLjx7yV4nhUzSapBAHogb5BdgUR6VCB3o

*/
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE3OTIxODI2ODFdfQ==
-->