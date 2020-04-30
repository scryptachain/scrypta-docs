# Progressive data management

Questi endpoint rappresentano il cuore delle funzionalità degli IdA Node. 
La scrittura, ma soprattutto la lettura, delle informazioni scritte sulla blockchain rappresentano le due funzionalità chiave dello sviluppo di qualsiasi dApp.

Ricordiamo che la scrittura di dati arbitrari è permessa grazie all' **OP_RETURN**, che permette di inserire 8000 byte di dati su qualunque transazione. E' importante capire che gli output marcati con OP_RETURN sono delle transazioni **non** spendibili, infatti vengono spese le sole fee di **0.001 LYRA** per ogni transazione, ovvero per ogni 8000 byte.

Se le dimensioni del dato che si vuole scrivere superano gli 8000 byte, l'IdaNode (e Scrypta Core) suddivide i dati in pezzi da 7994 byte e usa i primi 3 byte e gli ultimi 3 byte per creare un legame tra dati sequenziali. In particolare i primi 3 byte vengono legati alla transazione precedente e gli ultimi 3 a quella successiva. In questo modo gli IdA Node riescono a ricostruire le informazioni scritte su più transazioni. 

## Operazioni possibili

Le operazioni possibili attraverso il Progressive Data Management sono di tre tipi:
1) **Scrittura:** per operazioni di scrittura si intendono tutte quelle transazioni con OP_RETURN da e verso lo stesso indirizzo, questo significa che ogni indirizzo della blockchain può scrivere delle informazioni su se stesso. Questo comporta che un indirizzo può espressamente scrivere delle informazioni la cui proprietà è dimostrabile senza ombra di dubbio.
2) **Aggiornamento:** le operazioni di aggiornamento prevedono la scrittura di dati sequenziali facendo riferimento sempre al medesimo UUID. Ciò non comporta che le informazioni possano essere alterate, quanto invece -per convenzione-  che vengano restituite quelle più aggiornate. E' sempre possibile recuperare lo storico degli aggiornamenti passando il parametro _history=**true**_ in fase di lettura, come vedremo di seguito. 
3) **Invalidazione**: le operazioni di invalidazione servono a comunicare all'IdA Node che un determinato dato **non** deve essere mostrato in fase di lettura. Come già specificato, questa invalidazione (che consiste nell'aggiornamento del dato con metadata "END") non cancella effettivamente il dato che  può essere sempre recuperato in fase di lettura passando il parametro _history=**true**_. 

Un tipico dato strutturato secondo il nostro protocollo è il seguente:
```
{
	"_id":"5da9dd2724d7e32a34b32660",
	"address":"Lf2GteRJavZKWvVGryFuhkio5jdi1G6LeN",
	"uuid":"ddececf4.6265.4542.97c5.cabb6e320111",
	"collection":"",
	"refID":"",
	"protocol":"",
	"data":"Hello world.","block":55650,
	"blockhash":"0219d55c6ef7c33e73eab0116faee40a92541ee931ad07cabd97b5ee5c0278d8",
	"time":1548755949
}
```
Come abbiamo potuto osservare sulla documentazione relativa a Scrypta Core, abbiamo 3 diversi filtri:
- **collection:** definisce una collezione.
- **refID:** definisce un unico identificativo di riferimento.
- **protocol:** definisce un protocollo, solitamente interpretato dalla dApp.
- **uuid:** identificativo unico _assegnato_ in fase di scrittura. Questo uuid è fondamentale per le operazioni di **aggiornamento** ed **invalidazione** in quanto deve essere passato agli endpoint.

Un quarto tipo di filtro è l'_invio_, che però non viene considerato in egual modo alle operazioni di scrittura/aggiornamento/invalidazione dall'IdaNode.
Per operazioni di invio si intende la singola transazione con OP_RETURN da un indirizzo verso un **altro** indirizzo. Questa è limitata ad un massimo di 80 byte e il contenuto non viene formattato secondo lo standard di cui sopra. Come possiamo vedere nell'esempio di seguito non viene assegnato un UUID e non possono essere filtrati gli elementi per Collection, RefID, Protocol.
Chiaramente però è presente un campo **sender** che definisce chi ha inviato il dato. Questa tipologia di dati è utile nell'elaborazione di dApp che prevedono l'interscambio di informazioni tra due o più indirizzi come mostrato nel nostro Proof of Concept della piattaforma di voto.

```
{
	"_id":"5da9e65324d7e32a34b76931",
	"txid":"b1a457c270d1ecfa49bfa7b390756213a3746c15c7e21249a9010e3fbaadf7ba",
	"block":118432,
	"address":"LauYFGNdYfWfKeEpZzkXvxu7wt4r9YeUkf",
	"sender":"6JYZgQqSytCwyAFBUYPKFQAccvb6SzjeW8",
	"data":"poll://VOTE:1"
}
```

## [POST] /write

Scrive le informazioni all'interno della blockchain. Quando invocata attraverso l'IdaNode è necessario inviare anche la chiave privata dell'indirizzo che sta scrivendo le informazioni. 

E' chiaro che le misure di sicurezza devono essere prese con la necessaria cautela affinché le chiavi private rimangano effettivamente al sicuro. 
Sconsigliamo infatti di esporre l'IdA Node su Internet senza l'installazione dei certificati SSL. 

Ecco la lista dei possibili parametri:
- **dapp_address [obbligatorio]:** l'indirizzo che sta scrivendo l'informazione.
- **data [obbligatorio]**: l'informazione che si vuole scrivere all'interno della blockchain.
- **private_key [obbligatorio]**: la chiave privata dell'indirizzo che sta scrivendo l'informazione.
- **file:** un file che può contestualmente essere scritto su IPFS.
- **protocol:** il protocollo che si vuole utilizzare per classificare l'informazione.
- **collection:** la collezione che si vuole utilizzare per classificare l'informazione.
- **refID:** l'id di riferimento che si vuole utilizzare per classificare l'informazione.
- **uuid:** l'identificativo unico assegnato dall'IdA Node per aggiornare un determinato dato.

 La risposta ad una chiamata del genere sarà molto simile a quella della scrittura attraverso Scrypta Core:
 ```
 {

	"uuid":  "c95a77da.9683.499a.aeb5.8d47c202d126",

	"address":  "LdRQokR1i3XDtj1V3jnCRqMPrVc7sYkeE2",

	"fees":  0.002,

	"collection":  "",

	"refID":  "",

	"protocol":  "dapp://",

	"dimension":  107,

	"chunks":  2,

	"stored":  "*!*c95a77da.9683.499a.aeb5.8d47c202d126!*!!*!!*!dapp://*=>Qmb8PCFSp9uSUJr3eLafiTyAqcHaq2TBk4kj4wAEDG2zQo*!*",

	"txs":  [

			"1cc6ce97780634cd0a181aea539a09694592beca1cb0406d0b85a7268872ed5f",

			"33d682f861665928a634a10d4e75f7c99038d4b7536498c9d17598d8552ac007"

	]

}
```


## [POST] /invalidate

Viene utilizzato per invalidare un dato, i parametri necessari affinché l'operazione vada a buon fine sono:
- **uuid [obbligatorio]:** l'identificativo unico ritornato dall'IdaNode nella fase di scrittura iniziale.
-  **private_key [obbligatorio]:** chiave privata dell'indirizzo che ha scritto l'informazione.
- **dapp_address [obbligatorio]:** l'indirizzo che ha scritto l'informazione.

La risposta, in caso di successo, sarà di questo tipo:
```
{

	"uuid":  "07ec884b.3575.4d94.a65f.5afdd5c7bd46",

	"fees":  0.001,

	"success":  true,

	"txid": "648ceeb581b7b26897e211ff652c5adaaa878fe16a5454156d058099a7bc87e5"

}
```

## [POST] /read
La lettura delle informazioni viene eseguita unicamente da questa chiamata. E' possibile filtrare e limitare i risultati, nonché leggere tutte le informazioni scritte sulla blockchain in una sorta di feed, proprio come nel nostro servizio https://proof.scryptachain.org.

I parametri che è possibile inviare sono i seguenti:
- **history:** permette di impostare il ritorno di dati aggiornati o invalidati, di default è `false`.
-  **address:** filtra i dati scritti da un determinato indirizzo.
- **uuid:** filtra i dati scegliendo un determinato _uuid_, se usato in abbinamento al campo _history_ è possibile visualizzare la storia di un determinato dato.
- **collection**: filtra i dati per una determinata collezione.
- **refID**: filtra i dati scegliendo un determinato refID. E' possibile utilizzarlo in alternativa all'uuid, servendosi però di una propria tipologia di identificatore (numerico, alfanumerico, etc).
- **protocol:** filtra i dati per un determinato protocollo.

La risposta della proprietà `data` sarà quindi un array di oggetti contenente quanto richiesto. Questa chiamata ad esempio è stata ottenuta passando semplicemente **_limit=2_** e **_history=false_**.
```
	{

	"data":  [

		{

			"_id":  "5dad7b8d2d710a290dff6c68",

			"address":  "LdRQokR1i3XDtj1V3jnCRqMPrVc7sYkeE2",

			"uuid":  "a77da.9683.499a.aeb5.8d47c202d126",

			"collection":  "",

			"refID":  "",

			"protocol":  "dapp://",

			"data":  "Qmb8PCFSp9uSUJr3eLafiTyAqcHaq2TBk4kj4wAEDG2zQo",

			"block":  432255,

			"blockhash":  "1b0da19047e3016bc31d20fc95e66e5bd16140810d6f957c11ffd88ff487ecd0",

			"time":  1571650471,

			"is_file":  false

		},

		{

			"_id":  "5da6e5ad05e0ac4fb02ecd08",

			"address":  "LLLjx7yV4nhUzSapBAHogb5BdgUR6VCB3o",

			"uuid":  "2b33e.a4e8.401e.b32b.a2b75b012554",

			"collection":  "",

			"refID":  "",

			"protocol":  "",

			"data":  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis risus auctor, eleifend neque sit amet, ultricies nulla. Suspendisse condimentum nisi ut nunc mattis, vel congue velit congue. Aliquam sit amet pharetra tellus. Etiam tellus lacus, pretium vel commodo a, tempor nec ante. Aenean turpis nisi, pulvinar eget vehicula at, dapibus at dui. Cras vitae dictum massa. Sed in orci lorem. Nullam ut mattis lacus. Mauris ut mattis tellus. Donec et posuere lorem, id elementum ligula. Aliquam eu mollis neque, eget venenatis erat. Aenean vestibulum nunc diam, et luctus massa porttitor ac. Morbi tempor eleifend bibendum. Curabitur sed diam leo.",

			"block":  425161,

			"blockhash":  "2fba2b7988f70b035b2563444057b98ac6fc2fac4d1643e454f1f466a6d046d5",

			"time":  1571218881,

			"is_file":  false

		}

	],

	"status":  200

}
```

## [POST] /received
Permette di leggere tutte le informazioni ricevute da un determinato indirizzo. L'unico parametro che è possibile inviare è **address** e la risposta ottenuta è simile a quella dell'endpoint /read.
Qui un esempio:
```
{

	"data":  [

		{

			"_id":  "5d921a86543b974a0ef91567",

			"txid":  "0d2ad08aa7fbd2eb2a2a237b7a7082b69c8e77c038fd5aeb422a0ccadd760e30",

			"block":  267699,

			"address":  "LKXyszE4EQGRZZKuua5qdyu7PuGuowQHX4",

			"sender":  "LY6BHLvjNbHCQxnpGgt6BvXhXjfX6Nk1X2",

			"data":  "hola!",

			"is_file":  false

		}

	],

	"status":  200

}
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTc4NjA3MDE5NiwtNTQ3Nzk3NzI0LC0zMT
Y0NzQxNDAsLTI5ODc2MzI3OSwtODU2MDgwNjk2LC0yNDk3ODg4
NTcsMTc1NjY2NTM2NCwxNTkxOTYwMjE0LC0xOTUzMTg2NjI2XX
0=
-->