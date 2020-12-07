# Sidechain

Il protocollo Sidechain di Scrypta è descritto nella sezione apposita . Vediamo qui come interagire con le Sidechain attraverso gli enpoint dell'IdANode.

## [POST] /sidechain/issue

Questo endpoint serve a creare una Sidechain, i processi interni sono descritti nel capitolo "Emissione" della sezione dedicata. Consigliamo la creazione di un nuovo indirizzo personale direttamente da manent web, così da poter gestire i token via interfaccia grafica. E' richiesta inoltre **1 LYRA** nel balance dell'indirizzo, altrimenti la creazione non andrà a buon fine.

Ecco i campi da inviare per creare una nuova Sidechain:
- **dapp_address**: l'indirizzo che diventerà l'owner della sidechain
- **private_key**: Chiave privata dell'indirizzo dell'owner
- **pubkey**: chiave pubblica dell'indirizzo dell'owner
- **version**: la versione del protocollo, al momento è `1`
- **name**: nome descrittivo della sidechain
- **symbol**: ticker alfanumerico della sidechain
- **supply**: l'ammontare di token da creare
- **decimals**: il numero di cifre con cui è possibile dividere il token
- **burnable**:  può essere `true` o `false` e determina se il token può essere inviato o meno all'indirizzo del trustlink per effettuare un burn di token.
- **reissuable**: può essere `true` o `false` e determina se il token è a supply fissa oppure è possibile riemetterlo in un secondo momento.
- **permissioned**: può essere `true` o `false` e determina se la sidechain è permissioned oppure no, se impostato su `true` si dovranno autorizzare tutti gli utenti.
- **extendable** (WIP): può essere `true` o `false` e determina se il token è esteso da uno smart contract oppure no (ancora in work in progress, non usare).

Se tutto è andato per il verso giusto, la nuova sidechain verrà visualizzata qui: https://sidechain.scryptachain.org e sarà anche visibile il balance disponibile.


## [POST] /sidechain/reissue

Questo endpoint serve a riemettere token all'interno di una sidechain già esistente. Questo processo può essere effettuato solo dall'owner della sidechain e solamente se è stata marcata come `reissuable`.

Ecco i campi da inviare per riemettere token:
- **dapp_address**: L'indirizzo dell'owner
- **sidechain_address**: L'indirizzo della sidechain
- **private_key**: La private key dell'owner
- **pubkey**: La pubkey dell'owner
- **supply**: La quantità di token che volete riemettere

La risposta conterrà le informazioni necessarie a verificare che tutto sia andato bene e successivamente vedrete nella lista dei vostri unspent questa nuova transazione di reissue. 

## [POST] /sidechain/send

Tramite questo enpoint è possibile inviare i token in proprio possesso ad un altro indirizzo. Per farlo è necessario inviare i seguenti campi:

- **from**: l'indirizzo da cui volete mandare i token
- **private_key**: la chiave privata dell'indirizzo che invia i token
- **pubkey**: la chiave pubblica dell'indirizzo che invia i token
- **sidechain_address**: l'indirizzo della sidechain
- **to**: l'indirizzo che riceverà i token
- **amount**: l'ammontare da inviare, si ricorda di rispettare la divisione dei decimali in quanto l'IdANode arrotonda la cifra per assicurarsi dell'esattezza edell'operazion;  uneventuale diffr comporta l'invio di un ammontare arrotondato, quindi diverso da quello richiesto.

Come potete notare, la risposta è molto simile a quella di scrittura di qualsiasi altro dato:

```
{
	
	"uuid":  "9ae3751c.5448.46df.adf3.07626213bc01",

	"address":  "LdRQokR1i3XDtj1V3jnCRqMPrVc7sYkeE2",

	"fees":  0.011000000000000003,

	"collection":  "",

	"refID":  "",

	"protocol":  "chain://",

	"dimension":  771,

	"chunks":  11,

	"stored":  "*!*9ae3751c.5448.46df.adf3.07626213bc01!*!!*!!*!chain://*=>{\"transaction\":{\"sidechain\":\"6RQ54yHx2dARWkN8Biiw3gDjb4sB5hSHSH\",\"inputs\":[{\"sxid\":\"c623e7d599b335bd60f3ca371824ea0882bad80173f76e8d1c454173b4fca763\",\"vout\":1,\"address\":\"LdRQokR1i3XDtj1V3jnCRqMPrVc7sYkeE2\",\"amount\":99080.5986,\"sidechain\":\"6RQ54yHx2dARWkN8Biiw3gDjb4sB5hSHSH\",\"block\":482119}],\"outputs\":{\"LMnX7FrofprX5UY5M1KjsYAdhkCVL5vR1i\":18,\"LdRQokR1i3XDtj1V3jnCRqMPrVc7sYkeE2\":99062.5986},\"time\":1574700620860},\"signature\":\"037595724e395b1c01472871f542465c3264299f7c079d477d21c6d0a75e8c177f9ac99c73d38c680f189ab543be02e951656e6a76913adc45e93fd59f512d43\",\"pubkey\":\"027460a5f721e97f5e241d9767fb1b7fd778892e7c40684b79fcb4420d07d240e0\",\"sxid\":\"8db6cf7c0de249607d8771b12f318ae7c7173eb965b675e55fcb807f96e4186a\"}*!*",

	"txs":  [

		"bd8415460b31d4fad510b1f2f3e41ee410c1240935774489f16352378fd004f6",

		"49029166c852ff00a5215ee95020bfd5c20e770adccfe3fa44c1508de84df797",

		"c433fcba4fb2c59262feb3b2f07aca8a48b69c0abdafe38e609b16af70ffa1b1",

		"08d32aa928d40980fa10ab662e3512b2090ad1bc9c256673b2c60199e0ac2bfc",

		"2e8295fa1a5dcd47370aefe33cc7ff4941abd37d0d67846fe442d46a266a8806",

		"18f9f72a1a8c30e326bf3937886443db9d36530f218f2bbb3b32729913c8e402",

		"416490028397c5bd221af56e87e6529b6520ab0a2409c980ea280950ffbd3d68",

		"7f42b6698494d2057ad96ec9dd09ad65d09547a13ee839a1f7619b07c309b7d8",

		"c4dcc0d68131ebcc3cfaa0cbe12141055caf6903d527d2967a261316a1d53002",

		"fe9ce2fe695e8c99e969c3f14382c7b56d13bd681f5b38337355b30e2c7f3b62",

		"f81feaaf0a2fea766dacc97bbf060b214cfe435578ce42d2dc460da8e96022a5"

	]

}
```

## [POST] /sidechain/balance

Questa operazione Permette di visualizzare il proprio balance presso una specifica sidechain. Bisogna inviare i seguenti campi:

- **dapp_address**: l'indirizzo Lyra che si vuole ispezionare
- **sidechain_address**: l'indirizzo della sidechain.

La risposta sarà  di questo tipo :
```
{

	"balance":  99062.5986,

	"symbol":  "TST",

	"sidechain":  "6RQ54yHx2dARWkN8Biiw3gDjb4sB5hSHSH"

}
```

## [POST] /sidechain/shares

Permette di visualizzare tutti i wallet attivi all'interno della sidechain e verificare bilanci e peso all'interno della sidechain stessa. Riporta inoltre la supply totale comprensiva di eventuali riemissioni e bruciature di token.

La risposta sarà simile a questa:
```
{
    "shares": {
        "LdRQokR1i3XDtj1V3jnCRqMPrVc7sYkeE2": {
            "balance": 800,
            "shares": 80
        },
        "LYghqiod3pb3NStSMWLShntiFrcnVrdEwo": {
            "balance": 200,
            "shares": 20
        }
    },
    "cap": 1000,
    "burned": 0,
    "sidechain": "6TbMDNr3Nnnpi4H6F3EMzU25FkWVz6quLE"
}
```

## [POST] /sidechain/transactions

Permette di visualizzare le transazioni effettuate da un indirizzo presso una specifica sidechain. Necessita l'invio dei seguenti campi:

- **dapp_address**: l'indirizzo LYRA che si vuole ispezionare
- **sidechain_address**: l'indirizzo della sidechain.

La risposta sarà  simile a questa:

```
{

	"transactions":  [

		{

		"sxid":  "5aa7b97e1b22eec134781af42d11501f0701b771451dda9be4361b5a0f07eaa1",

		"from":  "LdRQokR1i3XDtj1V3jnCRqMPrVc7sYkeE2",

		"to":  "LchzGX6vqmanceCzNUMTk5cmnt1p6knGgT",

		"amount":  10,

		"block":  482075

		},

		{

		"sxid":  "0ac9210cd4dbd08550a1ca7501ed7336c6ee1e0700791518ff7c3bdbaa0db22f",

		"from":  "LchzGX6vqmanceCzNUMTk5cmnt1p6knGgT",

		"to":  "LNmYWqaU5qrZcHxCA2vVTMmvKcaXBdjKUZ",

		"amount":  -50,

		"block":  482061

		},

		{

		"sxid":  "ac6b491fa140464427b3cb933796a4820d22a454d125d6e744b7fcce8b6acac5",

		"from":  "LchzGX6vqmanceCzNUMTk5cmnt1p6knGgT",

		"to":  "LRJRsP9ZhszTNAmtubwiSzzLFGn4DfZZcU",

		"amount":  -150,

		"block":  481989

		},

		{

		"sxid":  "e861776c7bb7425da282930572add577deeb5581e0c6b5dd29640ff2a9305f99",

		"from":  "LchzGX6vqmanceCzNUMTk5cmnt1p6knGgT",

		"to":  "LR7nXWy7gb8LhGvgWkaGaLqDm4uvSAKqJc",

		"amount":  -34,

		"block":  481918

		},

		{

		"sxid":  "39bd8b6fe8b470e606e044216be3c5c26fc364e49e6d28893f117b314e2f9724",

		"from":  "LdRQokR1i3XDtj1V3jnCRqMPrVc7sYkeE2",

		"to":  "LchzGX6vqmanceCzNUMTk5cmnt1p6knGgT",

		"amount":  112,

		"block":  481913

		},

		{

		"sxid":  "f8743b1d468ec8982c325a7e8fd050112952a7d0c294f218596c249703207ea2",

		"from":  "LdRQokR1i3XDtj1V3jnCRqMPrVc7sYkeE2",

		"to":  "LchzGX6vqmanceCzNUMTk5cmnt1p6knGgT",

		"amount":  229.4934,

		"block":  480427

		}

	],

	"symbol":  "TST",

	"sidechain":  "6RQ54yHx2dARWkN8Biiw3gDjb4sB5hSHSH"

}
```

## [POST] /sidechain/listunspent

Permette di visualizzare le transazioni spendibili (**USXO**) da un indirizzo presso una specifica sidechain. E' necessario l'invio dei seguenti campi:

- **dapp_address**: l'indirizzo Lyra che si vuole ispezionare
- **sidechain_address**: l'indirizzo della sidechain.

Esempio di risposta:
```
	{

	"unspent":  [

	{

		"sxid":  "8db6cf7c0de249607d8771b12f318ae7c7173eb965b675e55fcb807f96e4186a",

		"vout":  1,

		"address":  "LdRQokR1i3XDtj1V3jnCRqMPrVc7sYkeE2",

		"amount":  99062.5986,

		"sidechain":  "6RQ54yHx2dARWkN8Biiw3gDjb4sB5hSHSH",

		"block":  482413

	}

	],

	"sidechain":  "6RQ54yHx2dARWkN8Biiw3gDjb4sB5hSHSH"

}
```

## [POST] /sidechain/scan/address

Permette di visualizzare tutte le sidechain con balance per un determinato indirizzo.

- **dapp_address**: l'indirizzo Lyra che si vuole ispezionare

La risposta sarà di questo tipo:
```
{

	"data":  [

	{

		"sidechain":  "6RQ54yHx2dARWkN8Biiw3gDjb4sB5hSHSH",

		"symbol":  "TST",

		"balance":  555

	}

	],

	"status":  200

}
```


## [GET] /sidechain/list

Permette di visualizzare tutte le sidechain create e valide all'interno della rete Scrypta.


Esempio di risposta:
```
{

	"data":  [

		{

			"genesis":  {

			"name":  "tScryptaToken",

			"supply":  100000,

			"symbol":  "TST",

			"decimals":  "8",

			"reissuable":  "false",

			"owner":  "LdRQokR1i3XDtj1V3jnCRqMPrVc7sYkeE2",

			"pubkey":  "027460a5f721e97f5e241d9767fb1b7fd778892e7c40684b79fcb4420d07d240e0",

			"version":  "1",

			"time":  1574499539348

		},

		"signature":  "ad6af516d89d9610e17296d10b63d2bd26bb34cd29157860f8d68314f469b2dd521d16c969d8fbd9af5b377b18095f9716b1f1de782662f33d74f585295d210e",

		"pubkey":  "027460a5f721e97f5e241d9767fb1b7fd778892e7c40684b79fcb4420d07d240e0",

		"sxid":  "325179d9602bd342c2e5fa15771d5f1490e519f2560eef752bf5c9a6f592cdd5",

		"address":  "6RQ54yHx2dARWkN8Biiw3gDjb4sB5hSHSH"

		},

		{

		"genesis":  {

			"name":  "gioconda",

			"supply":  1,

			"symbol":  "GIOC",

			"decimals":  "0",

			"reissuable":  "false",

			"owner":  "Lbj39Vysy4YUuAct9Yo2hFnETApQKV8EfK",

			"pubkey":  "02e40a0edd697bf59c38b26903f7f46401d312b4fac8fc3989ea0753db64444fbd",

			"version":  "1",

			"time":  1574679790587

		},

		"signature":  "12154510cde6d5179025ccb1176c1ec1fa486b57cbe80e6679a7bd46003f62517f1925e62a466abf9ff8c4ed2971021b8f7058ae4aa161d0562d134c5a967c2a",

		"pubkey":  "02e40a0edd697bf59c38b26903f7f46401d312b4fac8fc3989ea0753db64444fbd",

		"sxid":  "cb9c15f37b340b6988adee38a0175abe366325abeb21459bae6e97ab195c767d",

		"address":  "6WmU2zVLvDRkxHmqkiSETRmm89HtM2y4Wj"

		}

	],

	"status":  200

}
```


## [POST] /sidechain/get

Ritorna l'oggetto della sidechain.

- **sidechain_address**: l'indirizzo della sidechain che si vuole ispezionare

## [POST] /sidechain/verify

Verifica l'intera sidechain partendo dall'inizio della catena e verificando che ogni transazione sia valida, serve per rimuovere eventuali double spend o altri errori. 

- **sidechain_address**: l'indirizzo della sidechain che si vuole ispezionare

## [POST] /sidechain/scan

Permette di visualizzare tutte le transazioni di una specifica sidechain.

- **sidechain_address**: l'indirizzo della sidechain che si vuole ispezionare

Esempio di risposta:
```
{
	
	"data":  [

	{

		"transaction":  {

		"sidechain":  "6WmU2zVLvDRkxHmqkiSETRmm89HtM2y4Wj",

		"inputs":  [

		{

		"sxid":  "8903dd2cc9428a0a879c7ee43376657d6a93a95f2d94830751eee5d9bb10fb4f",

		"vout":  0,

		"address":  "LchzGX6vqmanceCzNUMTk5cmnt1p6knGgT",

		"amount":  1,

		"sidechain":  "6WmU2zVLvDRkxHmqkiSETRmm89HtM2y4Wj",

		"block":  482128

		}

		],

		"outputs":  {

		"LRJRsP9ZhszTNAmtubwiSzzLFGn4DfZZcU":  1

		},

		"time":  1574698567404

	},

	"signature":  "1574c802484602234d0be73992f673d24526cd0580a64c3243e3680f2cd34c681164edc704344bc330979629732efb8921576e6d948ca482c539f259c9eb553d",

	"pubkey":  "030249ca95b9d10701d9dfb08cb43b79ee229c3c621a9d17b84320b61690e87d09",

	"sxid":  "baca71e1fb87faacca7b772b0c2ecaf3de13bcba4501b7a980bcda49d1dac484",

	"block":  482383

	},

	{

		"transaction":  {
		
			"sidechain":  "6WmU2zVLvDRkxHmqkiSETRmm89HtM2y4Wj",

			"inputs":  [

			{

			"sxid":  "992ba66c6cf9c1b4bd8375d9525909020ab9ebd208173e36547e1ae5581b2f3d",

			"vout":  0,

			"address":  "Lbj39Vysy4YUuAct9Yo2hFnETApQKV8EfK",

			"amount":  1,

			"sidechain":  "6WmU2zVLvDRkxHmqkiSETRmm89HtM2y4Wj",

			"block":  482071

			}

			],

			"outputs":  {

			"LchzGX6vqmanceCzNUMTk5cmnt1p6knGgT":  1

			},

			"time":  1574683028721

		},

		"signature":  "972de254a686f1358c5de2c7ddd4a28da0e8b41e02f3c55971e97d10ff67911327a9335380575bd24cee5894ea3ee55ec4503f2a309cbf8d0fbc684d4625d08f",

		"pubkey":  "02e40a0edd697bf59c38b26903f7f46401d312b4fac8fc3989ea0753db64444fbd",

		"sxid":  "8903dd2cc9428a0a879c7ee43376657d6a93a95f2d94830751eee5d9bb10fb4f",

		"block":  482128

		},

		{

		"transaction":  {

		"sidechain":  "6WmU2zVLvDRkxHmqkiSETRmm89HtM2y4Wj",

		"inputs":  [

		{

		"sxid":  "cb9c15f37b340b6988adee38a0175abe366325abeb21459bae6e97ab195c767d",

		"vout":  "genesis"

		}

		],

		"outputs":  {

		"Lbj39Vysy4YUuAct9Yo2hFnETApQKV8EfK":  1

		},

		"time":  1574679790945

	},

	"pubkey":  "02e40a0edd697bf59c38b26903f7f46401d312b4fac8fc3989ea0753db64444fbd",

	"signature":  "b87e2de54fe6b8676c60b7fc050c39f7357c6cb863c088e40a8bb1222a54ab0422c64c89ff8892a6b8942168c2c87894672d3edcf964b0f018730aee5f6ff6a2",

	"sxid":  "992ba66c6cf9c1b4bd8375d9525909020ab9ebd208173e36547e1ae5581b2f3d",

	"block":  482071

	}

	],

	"status":  200

}
```


## [POST] /sidechain/transaction

Permette di visualizzare una specifica **SXID**.
 
Bisogna inviare i seguenti campi:
- **sxid**: l'id della transazione che si vuole ispezionare.
- **sidechain_address**: l'indirizzo della sidechain a cui appartiene la transazione.

La risposta sarà di questo tipo:
```
{
	
	"transaction":  {

	"address":  "LdRQokR1i3XDtj1V3jnCRqMPrVc7sYkeE2",

	"uuid":  "99a60.a13e.4cf1.a7d9.18bf065885ee",

	"collection":  "",

	"refID":  "",

	"protocol":  "chain://",

	"data":  {

	"transaction":  {

	"sidechain":  "6RQ54yHx2dARWkN8Biiw3gDjb4sB5hSHSH",

	"inputs":  [

	{

	"sxid":  "60cc5945f43cf91f12b5214fb402228106003aec857f867b8ab6624d7e410f1e",

	"vout":  0,

	"address":  "LdRQokR1i3XDtj1V3jnCRqMPrVc7sYkeE2",

	"amount":  100000,

	"sidechain":  "6RQ54yHx2dARWkN8Biiw3gDjb4sB5hSHSH"

	}

	],

	"outputs":  {

	"LhhoDjf9pWenaAA89LqSGemr1KWBhr9uuZ":  555,

	"LdRQokR1i3XDtj1V3jnCRqMPrVc7sYkeE2":  99445

	},

	"time":  1574525110177

	},

	"signature":  "61d950526c8d381c389c899232f77eab7706aff3f2c0064768134d6c33dc53b06efb74d1483dcd9a643b1e87397164aea5e13c2c5d50c930a19416e31251bf55",

	"pubkey":  "027460a5f721e97f5e241d9767fb1b7fd778892e7c40684b79fcb4420d07d240e0",

	"sxid":  "c2f218f13325c052b16ed10a42ce5415155ec898d97fc7c8365d8cea33d4513b"

	},

	"block":  479518,

	"blockhash":  "8e616b72272143cc9f2d62bdb41d198932ecc8f3777814b1b367ec9266ae2bb5",

	"time":  1574525178

	},

	"symbol":  "TST",

	"sidechain":  "6RQ54yHx2dARWkN8Biiw3gDjb4sB5hSHSH"

}
```


## [GET] /sidechain/check/:sidechain/:extended

Permette di fare un check di coerenza sulla sidechain e possono essere passati soltanto due parametri, via URL:

- Sidechain: questo è obbligatorio e rappresenta l'indirizzo della sidechain stesso
- Extended: questo serve per effettuare il controllo di coerenza anche con gli altri nodi collegati (ovvero inseriti all'interno del file `.env` nella proprietà `LINKED_NODES`) e controllare il consenso

Questo endpoint è molto importante in produzione in quanto permette di effettuare non solo un controllo di coerenza formale sulla sidechain (se ad esempio i token emessi corrispondono alla somma degli unspent) ma permette di controllare anche lo stato del nodo rispetto al proprio "network" di IdaNode.

Ad esempio la chiamata `/sidechain/check/6ShzCp8oXAqVSZdrkNMSj13ghobwZZRzGm/true` ritornerà un risultato del tipo:
```
{
    "user_count": 6,
    "cap": 10000,
    "issued": 10000,
    "nodes": [
        "https://idanodejs02.scryptachain.org",
        "https://idanodejs03.scryptachain.org",
        "https://idanodejs04.scryptachain.org",
        "https://idanodejs05.scryptachain.org",
        "https://idanodejs06.scryptachain.org",
        "https://idanode01.beesy24.net",
        "https://idanode02.beesy24.net"
    ],
    "verified": true,
    "sidechain": {
        "name": "ScryptaBTC",
        "supply": 10000,
        "symbol": "sBTC",
        "decimals": 8,
        "reissuable": true,
        "owner": "LchzGX6vqmanceCzNUMTk5cmnt1p6knGgT",
        "pubkey": "030249ca95b9d10701d9dfb08cb43b79ee229c3c621a9d17b84320b61690e87d09",
        "burnable": true,
        "version": 1,
        "time": 1582118140204,
        "address": "6ShzCp8oXAqVSZdrkNMSj13ghobwZZRzGm"
    },
    "status": "95d424632eb9ac98f1698fb260378a5e69981cb02837361f81d5ebb9a385a250",
    "users": [
        "LV5RkA9AL6ncM19RT3usKRkxd5arUS7iVt",
        "LUvRq5GygoJ4WMjiW8Zjis19jWK2mHdL2b",
        "LKbNrug6n72v52nwBFCdgK6atqh5RFBRDk",
        "LPriRhN69EKQnVPf3xYN9EWxYk3SywYbus",
        "LaoH8mrMgKoE7Egte8WuhMPpBeBJJHnT7M",
        "LchzGX6vqmanceCzNUMTk5cmnt1p6knGgT"
    ],
    "consensus": "7/7",
    "reliability": 100
}
```

Come è facile notare le ultime due proprietà dell'oggetto sono `consensus` e `reliability` ovvero ci danno il numero di nodi collegati che riportano lo stesso stato e l'affidabilità del nodo stesso.

La libreria `@scrypta/core` ritiene inaffidabili i nodi che hanno un valore inferiore a 50 collegandosi di conseguenza ad un altro nodo automaticamente.

## [POST] /sidechain/allow

Permette di abilitare, nelle sidechain di tipo `permissioned` un utente ad operare. L'utente può avere due tipi di livelli: 
- `user`: ovvero che può operare in ricezione ed invio delle transazioni
- `validator`: ovvero che può operare all'interno della sidechain e può anche **gestire** gli utenti, esattamente come l'owner. A differenza dell'owner non potrà aggiungere altri *validatori*.

Bisogna inviare i seguenti campi:
- **dapp_address**: l'indirizzo che si vuole abilitare.
- **sidechain_address**: l'indirizzo della sidechain a cui appartiene l'utente.
- **private_key**: la chiave privata con cui si desidera operare.
- **level**: il livello che si vuole abilitare, può essere solo `user` o `validator`.

## [POST] /sidechain/deny

Permette di disabilitare, nelle sidechain di tipo `permissioned` un utente ad operare. 
E' necessario disabilitare l'utente per lo stesso livello a cui è stato abilitato precedentemente per operare correttamente in quanto l'utente potrebbe essere stato abilitato ad entrambi i livelli.

Bisogna inviare i seguenti campi:
- **dapp_address**: l'indirizzo che si vuole abilitare.
- **sidechain_address**: l'indirizzo della sidechain a cui appartiene l'utente.
- **private_key**: la chiave privata con cui si desidera operare.
- **level**: il livello che si vuole disabilitare, può essere solo `user` o `validator`.
