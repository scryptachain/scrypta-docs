# Blockchain Versioning CLI

Questo pacchetto è stato creato per mantenere e verificare il codice grazie alla blockchain. Non è un'alternativa a `git` ma può essere usato con `git` per creare software open source affidabile.

## Come Funziona

Scrypta BVC o `scrypta-bvc` è un modulo `npm` che deve essere installato a livello globale:

```
npm i -g @scrypta/bvc
```

Una volta installato, puoi usarlo da qualsiasi cartella che desideri monitorare con la blockchain.

Prima di tutto hai bisogno di un indirizzo Lyra, puoi ottenere un indirizzo grazie a  [https://web.manent.app](https://web.manent.app) o [https://id.scryptachain.org](https://id.scryptachain.org) o scaricando il wallet QT e creando un nuovo indirizzo.

Adesso puoi importare la chiave privata; nell'indirizzo dovrai avere almeno `0.002 LYRA`:

```
scrypta-bvc importkey YourPrivateKey AStrongPassphrase
```

## Init di una nuova cartella

Quando hai creato un nuovo progetto (non importa quale sia il linguaggio di programmazione o se si tratta di un software) puoi inserire la cartella e avviare il progetto con un file `scrypta-manifest.json` come questo:

```
cd myAwesomeProject
scrypta-bvc init
```

Questo creerà un nuovo file chiamato `scrypta-manifest.json`, come questo:

```
{
    "version": "1.0.0",
    "name": "",
    "alias": "",
    "options": {
        "folders": { "exclude": [".*", "node_modules", "db"] },
        "files": { "include": ["*.*"] }
    },
    "address": ""
}
```

Devi scrivere tutti i campi vuoti con le tue informazioni:
- `name`: un nome per l'intero progetto
- `alias` un breve alias per il progetto, può essere usato in un prossimo futuro per controllare o scaricare globalmente qualcosa dalla blockchain.
- `options`: include ed esclude le opzioni per il pacchetto` folder-hash`. Puoi vedere l'utilizzo qui: [https://www.npmjs.com/package/folder-hash](https://www.npmjs.com/package/folder-hash)
- `address`: questo è l'indirizzo di Lyra che abbiamo importato prima (ovviamente non con chiave privata).

## Pubblicare gli update

Dopo aver inizializzato la nostra cartella, possiamo pubblicare i contenuti con hash nella blockchain in questo modo:

```
scrypta-bvc publish MyStrongPassphrase
```

Questo creerà una transazione di genesi con l'intero file `scrypta-manifest.json` e creerà la prima versione, supponiamo la `1.0.0`.

Qualsiasi modifica alla versione consentirà di pubblicare altre versioni consecutive, come la 1.0.1 ecc.

## Verifica di una cartella

Dopo aver pubblicato la tua cartella, puoi verificarla semplicemente con: 

```
cd myAwesomeProject
scrypta-bvc verify
```

Se il tuo file corrisponde a quello della blockchain riceverai un messaggio di successo. Se sono diversi verrai avvisato in senso opposto.