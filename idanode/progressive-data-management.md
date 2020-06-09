# Progressive Data Management

These endpoints represent the core of the IdANode functionality.
The writing, but above all the reading, of the information written on the blockchain represent the two key features of the development of any dApp.

The writing of arbitrary data is allowed thanks to the **OP_RETURN**, which allows to insert 8000 bytes of data on any transaction. It is important to note that the outputs marked with OP_RETURN are **non** expendable transactions. In fact, in this case only the fees of **0.001 LYRA** are spent for each transaction, or for every 8000 bytes.

If the size of the data to be written exceeds 8000 bytes, the IdANode (and Scrypta Core) divides the data into blocks of 7994 bytes and uses the first 3 bytes and the last 3 bytes to create a link between sequential data. The first 3 bytes are tied to the previous transaction and the last 3 to the next one. In this way the IdANodes are able to reconstruct the written information on multiple transactions.

## Types of possible operations to perform

The possible operations through Progressive Data Management are of three kinds:
1) **Writing:** by write operations we mean all those transactions with OP_RETURN from and to the same address. Each blockchain address can write information in itself. This means that an address can expressly write information whose ownership is demonstrably demonstrable.
2) **Update:** the update operations involve writing sequential data always referring to the same UUID. This does not mean that the information can be altered, but that, by convention, the most updated ones are returned. It is always possible to retrieve the update history by passing the parameter _history=**true**_ during the reading phase, as we will see below.
3) **Invalidation**: the invalidation operations are used to communicate to the IdANode that a certain data ** must not be shown during the reading phase. This invalidation (which consists of updating the data with "END" metadata) does not actually delete the data. This fact can always be recovered during the reading phase by passing the parameter _history=**true**_.

The following is a data structured according to our protocol:
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
As we have seen in the Scrypta Core documentation, we have 3 different filters:
- **collection:** defines a collection.
- **refID:** defines a single reference identifier.
- **protocol:** defines a protocol, usually interpreted by the dApp.
- **uuid:** unique identifier _assigned_ during writing. This uuid is essential for **update** and **invalidation** operations as it must be passed to the endpoints.

A fourth type of filter is the _send_, which however is not considered in the same way as the write / update / invalidation operations from the IdANode.
By sending operations we mean the single transaction with OP_RETURN from one address to **another** address. This is limited to a maximum of 80 bytes and the content is not formatted according to the above standard. As we can see in the example below, a UUID is not assigned and the elements for Collection, RefID, Protocol cannot be filtered.

There is a ** sender ** field that defines who sent the data. This type of data is useful in the processing of dApps that provide for the exchange of information between two or more addresses as shown in our voting platform Proof of Concept.

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

Writes information within the blockchain. Invoking it through the IdaNode it is necessary to send the private key of the address that is writing the information.

It is necessary to carry out the operation in safety so that the private keys remain effectively safe.
It is not recommended to expose the IdANode on the Internet without installing SSL certificates. 

Here is the list of available parameters:
- **dapp_address [mandatory]:** the address that is writing the information.
- **data [mandatory]**: the information to be written on the blockchain.
- **private_key [mandatory]**: the private key of the address that is writing the information.
- **file:** a file that can contextually be written on IPFS.
- **protocol:** the protocol to be used to rank information.
- **collection:** the collection you want to use to rank information.
- **refID:** the reference id that you want to use to rank the information.
- **uuid:** the unique identifier assigned by the IdANode to update a given data.

The answer to the call will be similar to that of writing through Scrypta Core:
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

It is used to invalidate a data. The parameters necessary for the operation to be successful are:
- **uuid [mandatory]:** the unique identifier returned by the IdANode in the initial writing phase.
-  **private_key [mandatory]:** private key of the address that wrote the information.
- **dapp_address [mandatory]:** l'indirizzo che ha scritto l'informazione.the address that wrote the information.

The answer, if successful, will look like this:
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