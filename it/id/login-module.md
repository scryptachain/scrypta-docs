# ScryptaID Login Module

## Descrizione

*ScryptaID Login Module* è il tool  per implementare il login con ScryptaID all'interno di qualsiasi sito!

- Interazione con Manent App, le credenziali di accesso passano dal dispositivo mobile alla dApp in pochi secondi.
- Possibilità di richiedere uno o più identificatori obbligatori: hanno accesso al sito web solo identità blockchain contro verificate da, ad esempio, e-mail o telefono.
- Possibilità di forzare il Gateway: costruisci il tuo Gateway proprietario di identità.
::: tip NOTA
Il codice di ScryptaID Login Module è verificato (e verificabile) in blockchain grazie al tool di blockchain versioning.
:::

Ricordiamo che ScryptaID Login Module è un software open-source, la repository è ispezionabile al [seguente link](https://github.com/scryptachain/scrypta-login).

### Test
Ecco una semplice pagina di test per sperimentare il funzionamento del modulo:
[https://scryptachain.github.io/scrypta-login/](https://scryptachain.github.io/scrypta-login/)

## Funzioni principali

Questo strumento è utile per implementare facilmente un sistema di accesso con ScryptaID. Per impostazione predefinita, lo strumento produce un'interfaccia utente in cui l'utente può accedere con:

- [Manent App](../dapps/manent-app.md): utilizzando lo strumento di firma remota
- File Sid: importa manualmente il file .sid memorizzato in precedenza
- QR card: utilizzando una carta stampata

Puoi anche scegliere il livello di autenticazione di identità richiesto all'utente per essere riconosciuto  come utente qualificato, o lasciare vuoto l'attributo richiesto per consentire l'accesso agli utenti anonimi.

## Come si usa

Prima di tutto devi aggiungere il modulo al tuo progetto includendo il file  `scrypta.login.min.js` come nell'esempio:

```
<script src="./scrypta.login.min.js"></script>
```

Puoi anche usare la versione IPFS, l'hash è il seguente: `Qmf8VEsWNnYP9KSV4FybEKPqxeiAG6eWyWo63USfmqkybY` esempio:

```
<script src="https://ipfs.io/ipfs/Qmf8VEsWNnYP9KSV4FybEKPqxeiAG6eWyWo63USfmqkybY"></script>
```

Quindi è necessario scrivere il rendering HTML nel punto in cui si desidera eseguire il pulsante:

```
<div id="scrypta-login" dapp="Demo dApp" callback="testCallback" required="phone"></div>
```

È possibile personalizzare il processo di accesso includendo questi attributi:
- _dapp_: personalizza il titolo mostrato.
- _callback_: chiama il callback dato quando il login ha esito positivo, è **required** se includi una o più identità richieste, l'oggetto di ritorno lo includerà.
- _required_: tl'elenco degli identificatori richiesti separati da una virgola (es. telefono, posta, ethereum, twitter).
- _gateway_: se si desidera ammettere uno o più gateway di identità, in questo caso è necessario inserire uno o più pubkeys (es. `0240f294ef20c7bbb82bae24d8d22c7ab94d195adf153162482b6bf540393d7dd5`)

## Test del modulo

Se vuoi testarlo puoi semplicemente scaricare il pacchetto con `git clone`, installare tutte le dipendenze con` npm install` ed eseguire l'ambiente di sviluppo con `npm run dev`.

## Verifica l'integrità con la blockchain

Se è necessario verificare l'integrità del file, utilizzare lo strumento `scrypta-bvc` come documentato qui: 

 [https://github.com/scryptachain/scrypta-blockchain-versioning-cli](https://github.com/scryptachain/scrypta-blockchain-versioning-cli).

Tutti gli aggiornamenti saranno caricati su: [https://proof.scryptachain.org/#/address/LiRXTmP4fe8Q3C3c9VtzzPHaxhMWnVRpTh](https://proof.scryptachain.org/#/address/LiRXTmP4fe8Q3C3c9VtzzPHaxhMWnVRpTh)

## Pagina di demo

Dai un'occhiata a questo link per eseguire una semplice demo, disponibile anche su `webpack/dist/index.html`: 
[https://scryptachain.github.io/scrypta-login/](https://scryptachain.github.io/scrypta-login/)
