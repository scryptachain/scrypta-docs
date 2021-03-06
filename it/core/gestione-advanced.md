# Gestione Advanced Wallet (Seedphrase - BIP32/39)

## generateMnemonic (language)
Crea una frase mnemonica di 24 parole (seedphrase), che rappresenta il sistema per salvare e richiamare il proprio wallet. 
I possibili valori per `language` sono: `english`, `italian`, `spanish`, `french`, `latin`.

La risposta sarà del tipo:
```
vespa definire exite foedor quia scando mentio fessus texo fervo malitia ferula lectio mobili praesenti cursoriam initio conditura vocalis calceus fratrem blande invite maligno
```

## buildxSid (password, language, saveKey = false, mnemonic = '', label = '')
Questo metodo, che viene normalmente invocato internamente, serve a costruire la versione crittografata del wallet, in formato xsid, partendo dalla frase mnemonica.

Il parametro `mnemonic` può essere passato al metodo per ricostruire un wallet, se lasciato in bianco il metodo creerà un wallet nuovo.

La risposta sarà del tipo:
```
 {
  mnemonic: 'supera involucrum quantum nucleus tempus rigidas fimbria linearis porta fontana ignis altum corporis gemitus corporatio mane digno mare ferula canna temere quoque liquescimus motricium',
  seed: '8cdd667aa57d709bf8949a949eeba37cf3719fe564cf02ce7cc5a4e0e14d21471e714132a0d62900f05baa2ce69859e96748bc3ed1b6e696308bf1bde780e3a9',
  xprv: 'xprv9s21ZrQH143K2K3M4nD4kb7qRwSNBYhYSQyHcx6soWm6TXKnxXFY8siipmQXeHPpQ6bt5HC9uUnbuAZiPbNBmzYTRj4bCa3heAwv7HZhPhd',
  xpub: 'xpub661MyMwAqRbcEo7pAok57j4ZyyGrb1RPodttRLWVMrJ5LKewW4Zngg3Cg3i3XaeWBaxp2EYgZA2V1mvY8QtE3hK6Un4pWyPLSFBqCPd89ZM',
  walletstore: 'xpub661MyMwAqRbcEo7pAok57j4ZyyGrb1RPodttRLWVMrJ5LKewW4Zngg3Cg3i3XaeWBaxp2EYgZA2V1mvY8QtE3hK6Un4pWyPLSFBqCPd89ZM:3c76af024e93e793edf6922fa621416f*b3c7e8859ea6aa0e1a9edc79114c83f6a0df7d0c7092af4c022b99b467229dcbc606ef97b5652e777a3b8827900d6cea0eb867afba45d372a02eef50a3407091e41db39365529d95d85b753825d8f393091750af2f2ceaf5454f2458d9e3f4e8d8b2a4fa19c6dfeca3dd835f4fa9a0b6a5acf50c29f12be9063add70a5bc02c675e6b0811a461a2fdf5b09176694cd97079d2ef1ed3ed5144d04b60f190362589ad97fe940b94a0766709db7bc3c0f1c274bd7308ef56dfe'
}
```

Dove `walletstore` è la proprietà da salvare in locale, che rappresenta la forma crittografata dell'xsid.

## returnxKey (xpub)
Restituisce l'xsid partendo da un xpub dato.

## returnXKeysFromSeed (seed)
Restituisce le chiavi di derivazione `xpub` e `xprv` dato un seed. Il seed può essere passato sia sottoforma di buffer che sottoforma di esadecimale.

La risposta sarà del tipo:
```
{
  xprv: 'xprv9s21ZrQH143K4BiZMkPAfiGhUrZZApVnobQ4TRDNdbqzBbjG3LnSsWCG8qBoZgfCP2ZFdNvqEDvsHYojuzW5wdw1eqR4saxm5iij387tRYg',
  xpub: 'xpub661MyMwAqRbcGfo2TmvB2rDS2tQ3aHDeApKfFoczBwNy4Q4Qat6hRJWjz8mBWbD27z65cfuszxmrcUQxQRepeYJ4tibfW7Q8fjVaLe6bPVf'
}
```


## deriveKeyFromSeed (seed, index) 
Questo metodo serve per derivare un indirizzo partendo da un determinato seed. Il seed deve essere passato sottoforma di esadecimale e l'indice deve rispettare le direttive BIP32.

Ecco un esempio completo:
```
const ScryptaCore = require('@scrypta/core')
const scrypta = new ScryptaCore

scrypta.buildxSid('YourAwesomePassword', 'latin', false).then(async response => {
    let derived = await scrypta.deriveKeyFromSeed(response.seed, 'm/0')
    console.log(derived)
})
```

La risposta sarà del tipo e come potremo vedere avremo nuovamente gli `xpub` e `xprv` derivati dall'indice `m/0` (e che potranno essere usati per derivare ulteriormente delle chiavi) e ritroveremo anche i classici `prv`, `key` e `pub`, ovvero le chiavi da utilizzare per effettuare transazioni in blockchain.

```
{
  xpub: 'xpub684TvGdzE8Fm4aQoWY3XvnabLXEkrfaceGhonV8cWJYWJB6aqTL6YbtUSQpKrSZ9U2Ks5WSCfeYfDFKkrELSk56p81R2nekwwDFKQ5LePwU',
  xprv: 'xprv9u57Wm76PkhTr6LLQWWXZedrnVQGTCrmH3nCz6izwy1XRNmSHv1qzoZzb7BCP8uBYi6tPVAUfcjawrV2oW8Q3KhMJoAu9dZw1D1QBXf8nLY',
  key: '03846cb51e41b7f5867023b8088461022aef505878a9adea0f1a20af7e06e7bb84',
  prv: 'SmPgNxuKaj2P6HKYbbdjo1PiYpa5UtTb2YYndB9vWWj1wbWWtwK3',
  pub: 'LXzAMht11qUuX3J4p34aLZqXwNrTC9nQTA'
}
```


## deriveKeyFromXPrv (xprv, index)
Deriva un indirizzo partendo dall'xprv, l'utilizzo è simile a quello precedentemente esposto, così come la risposta.


## deriveKeyFromMnemonic (mnemonic, index)
Deriva un indirizzo partendo dalla mnemonic phrase, l'utilizzo è simile a quello precedentemente esposto, così come la risposta.

## deriveKeyfromXPub (xpub, index)
Deriva un indirizzo partendo dall'xpub, l'utilizzo è simile a quello precedentemente esposto, la differenza sta nel risultato, in quanto non conterrà le *chiavi private* ma unicamente le chiavi pubbliche. 

Questo metodo è molto utile se utilizzato nei gateway di pagamento.

La risposta sarà quindi del tipo:
```
{
  key: '03a94b4ca4f1c70f5271bcbb34fff862dbd26149bfea442e019b5d72f8a2eebd92',
  pub: 'LdXmmVfZcXjEVCKHKLpnfrZkR12AKRvsmg'
}
```

## hashtopath(hash, hardened = false) 

Questo metodo serve per calcolare, dato un determinato *hash*, l'indice relativo. E' molto utile se utilizzato per calcolare degli indirizzi che riferiscono sempre alla stessa informazione, dato un determinato seed.

Il parametro `hardened` farà sì di restituire una chiave appunto `hardened` ovvero che può derivare ulteriori chiavi, oppure no.

Qui un esempio concreto:
```
const ScryptaCore = require('@scrypta/core')
const scrypta = new ScryptaCore

scrypta.buildxSid('YourAwesomePassword', 'latin', false).then(async response => {
    let information = 'MyUniqueAndImportantInformation'
    let hash = await scrypta.hash(information)
    let index = await scrypta.hashtopath(hash)
    let derived = await scrypta.deriveKeyFromSeed(response.seed, index)
    console.log(derived)
})
```
L'indice calcolato sarà sempre: **m/23559354/10589217/16016918/92402432/91797913/43958111/25117371/23712615/23493219/2410221** e il risultato sarà del tipo:
```
{
  xpub: 'xpub6SKuGyKdaSwH8DvhnPVz5se4J2x6BA3AJiFFcvZF4s7g4Re2NttSdSb52E2CiZv9Xc11xKkRyieBURVVEu159ivFbmVf3GVrZ5mQhz76pQR',
  xprv: 'xprvADLYsTnjk5NyujrEgMxyijhKk17bmhKJwVKepY9dWXahBdJsqMaC5eGbAzEcZD5S6R46caiiqipFmiXMvHcDvoS3iYQFfAJwLGtvAw6L846',
  key: '0214bc8fe8d4e3256214da13c32f18d270beded71d99ac0bb9ba8eea116132c5b3',
  prv: 'Sr5bo2kT6KiLKb95aUz37cPLvJGBrGiwFgyzC3qhK4k7Y6uXwrRz',
  pub: 'Lh7ZbcC5CVCnJwRkfut3m8WfSgB4vdAQow'
}
```
