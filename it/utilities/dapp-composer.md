# dApp Composer

Questo middleware è scritto in NodeJS usando il framework NestJS e può essere usato per creare un servizio o un software che risponde a determinate API.

Può essere implementato, ad esempio, per creare dei ponti di collegamento tra la blockchain ed un backend esistente, oppure per sviluppare un servizio ad hoc.

Questa dApp comunica direttamente con gli IdANode , attraverso l'utilizzo di `@scrypta/core` e non richiede particolari accorgimenti in fase di start.

In via assolutamente esemplificativa possiamo paragonare questo dApp Composer ad uno Smart Contract della rete Ethereum, ovvero una porzione di software che, dopo essersi collegato alla blockchain esegue del codice prestabilito.

Questo software può essere, inoltre, caricato all'interno di un IdANode (via IPFS) e fatto partire attraverso il dApp engine. Questo utilizzo tutta via è sperimentale e verrà consolidato successivamente.

## Utilizzo

Dopo aver scaricato il codice da qui [https://github.com/scryptachain/scrypta-dapp-composer](https://github.com/scryptachain/scrypta-dapp-composer) è possibile modificare i file contenenti il codice principale oppure estendere il progetto con i propri endpoint. Quelli di default sono i seguenti.

### [GET] /

Questo ritornerà il risultato della chiamata `/wallet/getinfo` data al primo IdANode disponibile.

### [POST] /get

Questo endpoint effettuerà una chiamata `GET` all'endpoint desiderato passando il parametro `endpoint` come specificato in questo esempio:
```
{
	"endpoint": "/wallet/getnewaddress"
}
``` 

### [POST] /post

Questo effettuerà una chiamata `POST` all'endpoint desiderato passando il parametro `endpoint` e il parametro `params` come specificato in questo esempio:
```
{
	"endpoint": "/sidechain/shares",
	"params": {
		"sidechain_address": "6RQ54yHx2dARWkN8Biiw3gDjb4sB5hSHSH"
	}
}
``` 

## Porta di esecuzione

La porta di default è la `3000` ma può essere cambiata all'interno del codice.

## Compilazione e deploy della dApp

Per compilare e creare un pacchetto eseguibile è possibile lanciare il comando `npm run build`. Questo creerà una versione eseguibile della dApp per Linux, macOS o Windows.