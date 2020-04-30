# Firma/Verifica Messaggi

## signMessage(key, message)

Questo metodo serve a firmare un messaggio attraverso una chiave privata. E' possibile utilizzare questo metodo per dimostrare di possedere un determinatoindirizzo o per firmare un determinato dato.

Il metodo ritornerà quindi il messaggio firmato, l'hash dello stesso, la firma vera e propria, la chiave pubblica necessaria alla verifica del dato e l'indirizzo che ha generato la firma.
```
const scrypta = new ScryptaCore

var privkey =  'Sq9GWa9vyM1HghsnVan5UJhtx2GumTaLBTHgDhCW4abjzZLmsYmr'

var message =  'Any cool message to sign and verify!'

let signed =  await scrypta.signMessage(privkey, message)

/*

 {

 "message":"Any cool message to sign and verify!",

 "hash":"b03f58edbc303aae60f1a9fee1bb0640e39062db114f9ba85d85d5475ac49009",

 "signature":"a6587004976105f4fee0cc88aa5afbf8281ff29f2510b04fec66b970a5facd5a06e4c5bc31de10e9ceeb3eae36151cb9b5a2ee10f4d01d2a0959b8148d776abd",

 "pubkey":"027460a5f721e97f5e241d9767fb1b7fd778892e7c40684b79fcb4420d07d240e0",

 "address":"LdRQokR1i3XDtj1V3jnCRqMPrVc7sYkeE2"

 }

*/
```
## verifyMessage(pubkey, signature, message)

Per verificare un messaggio è necessario possedere il messaggio stesso, la firma che vi è stata apposta e la chiave pubblica che ha generato quella firma. Se è tutto corretto, quindi non è stato alterato il messaggio e la firma è verificata tramite la chiave pubblica, verrà ritornato un oggetto contenente gli stessi elementi del metodo precedente. Se qualcosa non corrisponde, il metodo risponderà con `false`.

```
const scrypta = new ScryptaCore

var message =  'Any cool message to sign and verify!'

let signature =  'a6587004976105f4fee0cc88aa5afbf8281ff29f2510b04fec66b970a5facd5a06e4c5bc31de10e9ceeb3eae36151cb9b5a2ee10f4d01d2a0959b8148d776abd'

let pubkey =  '027460a5f721e97f5e241d9767fb1b7fd778892e7c40684b79fcb4420d07d240e0'

let verified =  await scrypta.verifyMessage(pubkey, signature, message)

​

/*

 {

 "address":"LdRQokR1i3XDtj1V3jnCRqMPrVc7sYkeE2",

 "pubkey":"027460a5f721e97f5e241d9767fb1b7fd778892e7c40684b79fcb4420d07d240e0",

 "signature":"a6587004976105f4fee0cc88aa5afbf8281ff29f2510b04fec66b970a5facd5a06e4c5bc31de10e9ceeb3eae36151cb9b5a2ee10f4d01d2a0959b8148d776abd","hash":"b03f58edbc303aae60f1a9fee1bb0640e39062db114f9ba85d85d5475ac49009",

 "message":"Any cool message to sign and verify!"

 }

*/
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE2ODYzMTgzNzldfQ==
-->