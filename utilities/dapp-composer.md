# Scrypta dApp Composer

Questo middleware è scritto in NodeJS usando il framework NestJS e può essere usato per creare un servizio o un software che risponde a determinate API.

Può essere creato, ad esempio, per creare dei ponti di collegamento tra la blockchain ed un backend esistente oppure per creare un servizio ad hoc.

Questa dApp comunica con gli IdaNode direttamente, attraverso l'utilizzo di `@scrypta/core` e non richiede particolari accorgimenti in fase di start.

Non appena lo scaricate avrete tre semplici endpoint:

## [GET] /

Questo ritornerà il risultato della chiamata `/wallet/getinfo` data al primo IdaNode disponibile.

# [POST] /get

Questo endpoint effettuerà una chiamata `GET` all'endpoint desiderato passando il parametro `endpoint` come specificato in questo esempio:
```
{
	"endpoint": "/wallet/getnewaddress"
}
``` 

# [POST] /post

Questo effettuerà una chiamata `POST` all'endpoint desiderato passando il parametro `endpoint` e il parametro `params` come specificato in questo esempio:
```
{
	"endpoint": "/sidechain/shares",
	"params": {
		"sidechain_address": "6RQ54yHx2dARWkN8Biiw3gDjb4sB5hSHSH"
	}
}
``` 

## PORTA DI ESECUZIONE

La porta di default è la `3000` ma può essere cambiata all'interno del codice.

## Compilazione e deploy della dApp

Per compilare e creare un pacchetto eseguibile è possibile lanciare il comando `npm run build`. Questo creerà una versione eseguibile della dApp per Linux, macOS o Windows.