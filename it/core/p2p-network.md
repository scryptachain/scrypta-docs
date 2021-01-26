# P2P Network

La rete degli IdANode è collegata, grazie alla libreria `socket.io`, ad una seconda rete peer-to-peer che permette di inviare e ricevere messaggi firmati crittograficamente dagli indirizzi. Per poter utilizzare questa rete è necessario inizializzarla, di seguito tutti i metodi relativi.

## connectP2P(key, password, callback)

Questo metodo permette di collegarsi al network e recepire eventuali messaggi ricevuto grazie alla chiamata di callback. Può essere utilizzata nel seguente modo:

```
// PRIMA CREIAMO UN NUOVO INDIRIZZO
let password = 'ASuperStrongPassword'
let address = await scrypta.createAddress(password, true)

// COLLEGHIAMOCI ALLA RETE
scrypta.connectP2P(address.walletstore, password, function(received){
    response(received)
})

// INIZIAMO AD INVIARE UN MESSAGGIO AL NETWORK
setTimeout(function(){
    scrypta.broadcast(address.walletstore, password, 'message', 'Now are '+ new Date() +'!')
},3500)
```

## broadcast(key, password, protocol, message, socketID = '', nodeID = '')

Questo metodo permette di inviare messaggi all'interno network (client e IdANode) e va utilizzato come visto in precedenza. E' possibile personalizzare il protocollo, che di default è `message` oppure inviare a specifici nodi o socket.