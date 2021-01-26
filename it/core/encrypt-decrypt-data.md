# Encrypt-Decrypt Dati

## cryptData(data, password)

Questo metodo utilizza l'algoritmo **AES-256** per crittografare una stringa di informazioni, e ritorna la rappresentazione esadecimale della stessa.
```
let string =  'Some super secret'

let password =  'AReallyStrongPassword!!'

const scrypta = new ScryptaCore

let encrypted =  await scrypta.cryptData(string, password)

/*

 Risposta:

 befba636e2212846bf1c15ff4ef9e5a17ac3e6f1ce3935f4639849d44b8c9565 

*/
```
## decryptData(data, password)

Questo metodo decifra una stringa precedentemente crittografata e ne ritorna il contenuto originale. Ritornerà `false` in caso di password errata.
```
let hex =  'befba636e2212846bf1c15ff4ef9e5a17ac3e6f1ce3935f4639849d44b8c9565'

let password =  'AReallyStrongPassword!!'

const scrypta = new ScryptaCore

let decrypted =  await scrypta.decryptData(hex, password)

/*

 Risposta:

 Some super secret

*/
```

<!--stackedit_data:
eyJoaXN0b3J5IjpbMTIyMjgwNTEyN119
-->