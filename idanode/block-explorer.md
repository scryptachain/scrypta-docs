# Block explorer

Le funzionalità di block explorer servono principalmente alle dApp e ai client per creare le transazioni. Alcune di queste chiamate possono anche essere usate per analizzare lo staking di un indirizzo oppure di un masternode. Avere un block explorer sempre aggiornato è fondamentale per creare dApp funzionanti perchè senza non sarebbe possibile creare le transazioni. 

E' importante ricordare che la principale libreria (ScryptaCore) non tiene traccia nel dispositivo di tutte queste transazioni, ma solamente di quelle **non** confermate e che vengono mantenute nella cache del dispostivo solamente tra l'emissione di un blocco e un altro.


## [GET] /lastblock 
Ritorna l'ultimo blocco disponibile in blockchain, analizzando tutti gli input e tutti gli output. Ecco una risposta di esempio:
```
{"data":
	{
		"hash":"e4f17951ea0bcd129271434a69088789577f30570790148aac550e2555e113fd",
		"confirmations":1,
		"size":429,
		"height":428369,
		"version":3,
		"merkleroot":"455aafe3d6de5f5a14fa7164b86c2f41f2ba636ff39338124cfb0606b5e6a6c3",
		"time":1571413982,
		"nonce":0,
		"bits":"1b021528",
		"difficulty":31467.24810972,
		"chainwork":"000000000000000000000000000000000000000000000001a060d777b5ecaa35",
		"previousblockhash":"7bb8671f7651a4698e2dc322f3476ecd4ff5a158580f1122ea0a307b0fb6504d",
		"totvin":2150.93811893,
		"totvout":2159.93762939,
		"fees":0,
		"analysis":
			{
			"77801406838f80b7399cfb6f0d4b5d1b97e2e444daae0824fce7b8268822d452":
				{
					"vin":0,
					"vout":0,
					"balances":{},
					"movements":
						{
							"from":[],
							"to":[]
						}
				},
			"67f777aef1589a642af2f8f6766f608fa3694885429340214bdbfc15d25a81fd":
				{
					"vin":2150.93811893,
					"vout":2159.93762939,
					"balances":
						{
							"LfSejKP5TKenhuA34THSmWLex8kqgdZkHi":{"value":3.0595104599997285,
							"type":"STAKE",
							"vin":2150.93811893,
							"vout":2153.99762939
						},
					"LVb8XTirckLJSiYhG8BtrixwS4uoEPVKaw":
						{
							"value":5.94,
							"type":"REWARD",
							"vin":0,
							"vout":5.94
						}
					},
					"movements":
						{
							"from":["LfSejKP5TKenhuA34THSmWLex8kqgdZkHi"],
							"to":["LfSejKP5TKenhuA34THSmWLex8kqgdZkHi","LVb8XTirckLJSiYhG8BtrixwS4uoEPVKaw"]
						}
					}
				},
		"inputs":[{"txid":"03919a4b1f4a30b3fbe23ba680e482979c133062168abff3c0c87f1a14db5eb0","vout":1}],
		"outputs":[{"txid":"67f777aef1589a642af2f8f6766f608fa3694885429340214bdbfc15d25a81fd","vout":1,"address":"LfSejKP5TKenhuA34THSmWLex8kqgdZkHi","scriptPubKey":"21031fc0a4acb17b30a67892cca7bc86d452ea2c53a68e1079c09ca8925062108a63ac","amount":2153.99762939},{"txid":"67f777aef1589a642af2f8f6766f608fa3694885429340214bdbfc15d25a81fd","vout":2,"address":"LVb8XTirckLJSiYhG8BtrixwS4uoEPVKaw","scriptPubKey":"76a91471b28f613c9e564380014fc91bef4cd2ebb3f63488ac","amount":5.94}],
		"raw_written":{},
		"data_written":{},
		"data_received":{},
		"generated":8.999510459999783},
	"status":200
}
```

## [GET] /block/:block 
Questa chiamata è simile alla precedente, passato il numero di blocco nell'url è possibile ottenere l'analisi (come quella vista nella chiamata `lastblock`) di un blocco.

## [GET] /analyze/:block
Analizza il blocco definito dal parametro `block` inserito nell'URL.

## [GET] /resync/:block
Fa partire la sincronizzazione dell'IdaNode dal blocco definito dal parametro `block` inserito nell'URL. E' consigliabile effettuare l'operazione in momenti di inattività dell'IdaNode.

## [GET] /transactions/:address
Ritorna tutte le transazioni effettuate da uno specifico indirizzo, passato attraverso l'url. La risposta sarà un array di oggetti contenenti tutte le transazioni dell'indirizzo, ecco un esempio:
```
{
    "data": [
        {
            "_id": "5d9208e9543b974a0ef1cbc4",
            "address": "LhbWV5EJcSAyx8xQCv1J5gJdBzvMnhYFWk",
            "txid": "9970c7055fd5ed11a710013b7f8c522a73637c42cb04fe6dcd0fc704daaa25a8",
            "type": "TX",
            "from": [
                "LcyHbfJACg7zKwEp1528ZHBEr2Dj2F7G9s",
                "LLn9frmcwU5t3dr89GFTYrbUbnFzWyYS1U"
            ],
            "to": [
                "LhbWV5EJcSAyx8xQCv1J5gJdBzvMnhYFWk",
                "LhG569KNinMuCjGUZuXEAkYAg9jE56fWFs"
            ],
            "value": 1750,
            "blockhash": "7ebc7e9645b36e12416a5f363dbac8f5b058382ca1729f1c5427f38c394f399c",
            "blockheight": 174130,
            "time": 1555953763
        },
        {
            "_id": "5d9208ee543b974a0ef1cd5d",
            "address": "LhbWV5EJcSAyx8xQCv1J5gJdBzvMnhYFWk",
            "txid": "9b9711207f24bf74e934d291279caa8cf5f4da258b32e3336610089e20d157ea",
            "type": "STAKE",
            "from": [
                "LhbWV5EJcSAyx8xQCv1J5gJdBzvMnhYFWk"
            ],
            "to": [
                "LhbWV5EJcSAyx8xQCv1J5gJdBzvMnhYFWk",
                "Lh51GTiz3gZHPEo3scgRfGi5aqdHeRXaBH"
            ],
            "value": 2.9999895999999353,
            "blockhash": "73db14ee2e7b074ef7087cfb43f1fabd4819c5ab2437623613fdbeacb5f134aa",
            "blockheight": 174232,
            "time": 1555959810
        },
        {
            "_id": "5d920911543b974a0ef1da52",
            "address": "LhbWV5EJcSAyx8xQCv1J5gJdBzvMnhYFWk",
            "txid": "177e075aac94a78ed1d4ef29491195bae26d363724e3d977743d81f100c18817",
            "type": "STAKE",
            "from": [
                "LhbWV5EJcSAyx8xQCv1J5gJdBzvMnhYFWk"
            ],
            "to": [
                "LhbWV5EJcSAyx8xQCv1J5gJdBzvMnhYFWk",
                "LZg6587iwiwWGs2PatDL7NXFHbYMeJenJ5"
            ],
            "value": 3.0999896000000717,
            "blockhash": "a48d2ef872a51d7eca9119c4b0708686f73729a982b6c8f5c1da9fd63a3626a6",
            "blockheight": 175013,
            "time": 1556007208
        }
    ],
    "status": 200
}
```

## [GET] /balance/:address

Ritorna il balance di uno specifico indirizzo, ecco un esempio:
```
{
    "balance": 1756.0999792,
    "status": 200
}
```

## [GET] /stats/:address

Ritorna le statistiche di staking di uno specifico indirizzo, ecco un esempio:
```
{
    "balance": 1756.0999792,
    "received": 1756.0999792,
    "sent": 0,
    "rewards": {
        "count": 0,
        "amount": 0,
        "stats": {},
        "txns": []
    },
    "stake": {
        "count": 2,
        "amount": 6.099979200000007,
        "stats": {
            "2019-04-22": 2.9999895999999353,
            "2019-04-23": 3.0999896000000717
        },
        "txns": [
            {
                "_id": "5d9208ee543b974a0ef1cd5d",
                "address": "LhbWV5EJcSAyx8xQCv1J5gJdBzvMnhYFWk",
                "txid": "9b9711207f24bf74e934d291279caa8cf5f4da258b32e3336610089e20d157ea",
                "type": "STAKE",
                "from": [
                    "LhbWV5EJcSAyx8xQCv1J5gJdBzvMnhYFWk"
                ],
                "to": [
                    "LhbWV5EJcSAyx8xQCv1J5gJdBzvMnhYFWk",
                    "Lh51GTiz3gZHPEo3scgRfGi5aqdHeRXaBH"
                ],
                "value": 2.9999895999999353,
                "blockhash": "73db14ee2e7b074ef7087cfb43f1fabd4819c5ab2437623613fdbeacb5f134aa",
                "blockheight": 174232,
                "time": 1555959810
            },
            {
                "_id": "5d920911543b974a0ef1da52",
                "address": "LhbWV5EJcSAyx8xQCv1J5gJdBzvMnhYFWk",
                "txid": "177e075aac94a78ed1d4ef29491195bae26d363724e3d977743d81f100c18817",
                "type": "STAKE",
                "from": [
                    "LhbWV5EJcSAyx8xQCv1J5gJdBzvMnhYFWk"
                ],
                "to": [
                    "LhbWV5EJcSAyx8xQCv1J5gJdBzvMnhYFWk",
                    "LZg6587iwiwWGs2PatDL7NXFHbYMeJenJ5"
                ],
                "value": 3.0999896000000717,
                "blockhash": "a48d2ef872a51d7eca9119c4b0708686f73729a982b6c8f5c1da9fd63a3626a6",
                "blockheight": 175013,
                "time": 1556007208
            }
        ]
    },
    "status": 200
}
```

## [GET] /unspent/:address

Ritorna tutte le transazioni (UTXO) non spese dell'indirizzo, queste sono fondamentali per creare nuove transazioni. Lo stesso metodo ritorna contemporaneamente anche il balance, che ricordiamo essere la somma di tutti gli UTXO (e quindi le transazioni effettivamente spendibili).
Ecco un esempio:
```
{
    "balance": 1756.0999792,
    "unspent": [
        {
            "_id": "5d920911543b974a0ef1da54",
            "address": "LhbWV5EJcSAyx8xQCv1J5gJdBzvMnhYFWk",
            "txid": "177e075aac94a78ed1d4ef29491195bae26d363724e3d977743d81f100c18817",
            "scriptPubKey": "210257f27b84d5678163a10c7e9a8cbb70da9f3f6c53d4ad31b47989797737b0ac6aac",
            "amount": 1756.0999792,
            "vout": 1,
            "block": 175013
        }
    ],
    "status": 200
}
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE2MTU1MTE2NDQsMTAzMzU3MDU2MF19
-->