# IPFS (Interplanetary File System).
 IPFS è uno dei file system distribuiti, decentralizzati, più importanti che sia mai stato creato dopo Torrent. E' fondamentale, prima di iniziare a sviluppare con IPFS, consultare la documentazione ufficiale reperibile al seguente link: [https://ipfs.io/](https://ipfs.io/).

La versione IPFS che abbiamo incluso negli IdaNode è in Javascript. Il repository è il seguente: [https://github.com/ipfs/js-ipfs](https://github.com/ipfs/js-ipfs).

Scrypta ha deciso di favorire l'utilizzo di IPFS creando degli endpoint che accettano in ingresso (POST) i file inviati via form-data oppure sotto forma di Buffer.

E' importante notare che è possibile inviare un file e salvarne una copia su IPFS anche attraverso l'endpoint `/write`.

Analizzeremo di seguito gli endpoint e faremo degli esempi pratici (che si possono riscontrare anche analizzando la libreria Scrypta Core).

Tra i vari metodi presenti nell'IdA Node troviamo anche quelli di lettura e analisi del file ai fini di ottenerne il mime-type ed effettuare il giusto rendering lato dApp. 

## [GET] /ipfs/info

Ritorna la versione e lo stato di IPFS nell'IdA Node:
```
{

	"info":  {

		"version":  "0.36.4",

		"repo":  7,

		"commit":  ""

	},

	"status":  200

}
```

## [POST] /ipfs/add

Permette di aggiungere un file o una cartella all'interno di IPFS. E' possibile inviare i file sotto forma di *form data* o di *buffer* ed è possibile aggiungere più di un file contemporaneamente. 
Per inserire più di un file è necessario specificare il nome della cartella da aggiungere. 

Ecco i parametri che è possibile inviare:
- **file:** per inviare un singolo file attraverso il *form-data*
- **files:** per inviare più di un file attraverso il *form-data*
- **buffer**: per inviare un singolo file sotto forma di *Buffer*

Quando viene caricato un file, viene contestualmente effettuata l'operazione di _pin_, ovvero di salvataggio dello stesso file nella cartella di IPFS. Questa stessa operazione verrà effettuata da tutti gli IdA Node che sincronizzano la blockchain.

Affinchè questo accada è necessario salvare su blockchain un dato del tipo:

```
ipfs:HASH_IPFS
```

Un esempio dettagliato può essere analizzato sia  con Postman che nel Testing Tool di Scrypta Core: [https://github.com/scryptachain/scrypta-core/blob/master/index.html](https://github.com/scryptachain/scrypta-core/blob/master/index.html)

## [POST] /ipfs/verify/:hash

Verifica se il file inviato corrisponde all'hash specificato. Il parametro da inviare via POST è il campo **file**. Verrà successivamente effettuato l'hash e comparato con quello passato nell'URL. La risposta potrà essere `true` o `false`.

## [GET] /ipfs/type/:hash

Recupera il file richiesto attraverso l'hash e ritorna la tipologia di file.
Ad esempio la risposta per il file con hash _QmQVKoAs9nxjRfawb6ALhZNEzpR5RFBgN7FeJdAZYWdN8h_ è la seguente:
```
{

	"data":  {
		
		"ext":  "png",

		"mime":  "image/png",

		"type":  "image"

	},

	"status":  200

}
```

## [GET] /ipfs/ls/:hash

Ottiene la struttura della cartella con l'hash specificato. La risposta sarà un array di hash, che sarà possibile richiamare attraverso l'apposita chiamata.

Ad esempio il risultato per la cartella di hash _Qmb8PCFSp9uSUJr3eLafiTyAqcHaq2TBk4kj4wAEDG2zQo_ è il seguente:
```
[

	{

		"hash":  "QmaWcMiVPLMePAspNqhY7U4ByDDmuTKDitogWDwUCoo49x",

		"path":  "Qmb8PCFSp9uSUJr3eLafiTyAqcHaq2TBk4kj4wAEDG2zQo/dapp.js",

		"name":  "dapp.js",

		"depth":  1,

		"size":  204,

		"type":  "file"

	},

	{

		"hash":  "QmQnpb58B4BbZMq9Xc1FtLiKHnnsWLF4V7hi2czL3kMjWe",

		"path":  "Qmb8PCFSp9uSUJr3eLafiTyAqcHaq2TBk4kj4wAEDG2zQo/index.html",

		"name":  "index.html",

		"depth":  1,

		"size":  1149,

		"type":  "file"

	},

	{

		"hash":  "QmQVKoAs9nxjRfawb6ALhZNEzpR5RFBgN7FeJdAZYWdN8h",

		"path":  "Qmb8PCFSp9uSUJr3eLafiTyAqcHaq2TBk4kj4wAEDG2zQo/logo.png",

		"name":  "logo.png",

		"depth":  1,

		"size":  2381,

		"type":  "file"

	},

	{

		"hash":  "QmYzaWGQM7b224S8taaiVVUzt1h56tudncDn7Ds45G7wcV",

		"path":  "Qmb8PCFSp9uSUJr3eLafiTyAqcHaq2TBk4kj4wAEDG2zQo/scryptacore.js",

		"name":  "scryptacore.js",

		"depth":  1,

		"size":  477293,

		"type":  "file"

	}

]
```

## [GET] /ipfs/:hash

Ritorna il file con l'hash specificato. La risposta sarà immediatamente visualizzabile dal browser o da altri eventuali dispositivi. Il logo Scrypta, ad esempio, può essere recuperato dal seguente link: [https://idanodejs01.scryptachain.org/ipfs/QmQVKoAs9nxjRfawb6ALhZNEzpR5RFBgN7FeJdAZYWdN8h](https://idanodejs01.scryptachain.org/ipfs/QmQVKoAs9nxjRfawb6ALhZNEzpR5RFBgN7FeJdAZYWdN8h)

## [GET] /ipfs/buffer/:hash

Ritorna il *Buffer* che rappresenta l'hash specificato. Facendo sempre l'esempio del logo Scrypta, la risposta è la seguente:
```
{"data":
	[
		{
			"hash":"QmQVKoAs9nxjRfawb6ALhZNEzpR5RFBgN7FeJdAZYWdN8h",
			"path":"QmQVKoAs9nxjRfawb6ALhZNEzpR5RFBgN7FeJdAZYWdN8h",
			"name":"QmQVKoAs9nxjRfawb6ALhZNEzpR5RFBgN7FeJdAZYWdN8h",
			"depth":1,
			"size":2381,
			"type":"file",
			"content":
				{
					"type":"Buffer",
					"data":[137,80,78,71,13,10,26,10,0,0,0,13,73,72,68,82,0,0,0,130,0,0,0,129,8,6,0,0,0,12,151,98,83,0,0,0,9,112,72,89,115,0,0,11,19,0,0,11,19,1,0,154,156,24,0,0,0,25,116,69,88,116,83,111,102,116,119,97,114,101,0,65,100,111,98,101,32,73,109,97,103,101,82,101,97,100,121,113,201,101,60,0,0,8,218,73,68,65,84,120,218,236,157,223,107,28,85,20,199,207,236,206,110,118,243,163,77,98,218,38,198,216,141,165,244,65,77,11,182,165,4,196,248,230,91,251,160,160,79,93,5,193,199,252,5,178,8,130,143,193,87,65,38,224,171,144,254,7,155,151,130,125,74,31,165,160,9,37,74,85,116,235,75,106,119,147,120,207,246,206,50,217,78,118,103,103,238,207,185,231,192,80,74,218,164,189,243,217,123,190,223,51,231,158,241,142,143,143,193,213,248,249,242,106,141,253,178,206,174,58,187,118,216,181,113,229,209,253,45,23,215,194,115,17,4,6,192,26,191,249,119,99,190,188,199,174,6,3,34,32,16,242,11,64,157,3,240,94,130,63,254,20,119,8,190,75,180,8,4,251,111,254,52,191,249,152,2,46,166,248,22,8,68,192,129,216,37,16,236,206,255,103,5,125,219,77,158,54,118,9,4,187,243,191,168,216,230,64,52,9,4,187,243,191,168,120,200,83,70,64,32,216,157,255,69,69,215,105,176,107,203,86,97,105,37,8,146,242,191,136,176,214,105,88,5,130,162,252,47,10,136,45,155,132,165,21,32,104,202,255,162,2,157,70,96,186,176,52,22,4,131,242,191,19,78,195,56,16,12,206,255,66,133,165,105,78,195,24,16,44,202,255,34,129,216,224,105,163,229,60,8,150,231,127,145,78,35,208,41,44,181,128,144,195,252,47,82,88,106,113,26,74,65,112,32,255,139,138,123,188,22,209,204,21,8,14,230,127,145,78,67,73,179,140,84,16,40,255,219,227,52,132,131,64,249,95,137,176,20,94,194,22,6,2,229,127,229,64,4,32,176,89,38,51,8,148,255,141,112,26,8,196,142,22,16,40,255,27,41,44,83,151,176,71,2,129,242,191,21,145,170,89,38,17,8,60,255,55,216,117,135,242,191,93,78,3,18,54,203,12,4,129,231,127,252,244,223,166,117,205,183,211,136,5,129,231,127,4,224,42,173,99,238,132,101,108,9,187,7,2,207,255,235,236,119,159,121,0,75,180,102,185,7,226,68,179,140,247,99,237,230,202,92,161,176,49,91,240,86,75,0,99,180,70,110,58,13,239,135,139,215,143,175,151,74,180,36,238,234,7,124,142,177,238,125,60,253,198,241,89,223,135,27,227,83,240,78,169,12,85,143,86,199,69,1,217,5,33,252,106,165,80,128,183,170,147,176,90,169,192,172,71,68,228,213,82,198,213,24,78,128,16,141,183,199,39,225,86,165,10,139,12,14,138,92,104,129,129,143,179,79,5,33,140,165,177,10,172,177,180,113,169,72,64,88,24,137,27,92,134,130,16,6,234,136,119,39,206,0,9,75,187,235,5,153,65,136,2,177,82,157,128,213,114,133,132,165,225,2,112,148,24,25,4,18,150,102,10,64,200,120,0,55,53,8,36,44,181,135,208,35,249,66,64,32,97,169,220,1,8,63,58,39,20,4,18,150,102,9,64,237,32,144,176,20,46,0,165,159,130,146,10,66,84,88,94,174,140,195,251,213,113,18,150,201,5,160,210,115,145,74,64,232,23,150,215,198,170,164,35,6,56,0,29,39,165,149,131,16,21,150,183,152,253,124,211,47,210,237,55,96,118,130,54,16,72,88,246,4,96,230,86,244,92,128,16,213,17,55,38,166,92,16,150,70,78,114,53,6,132,40,16,171,12,136,155,229,49,168,228,75,88,62,102,215,247,96,232,196,53,223,164,127,204,124,169,12,203,126,25,224,240,8,30,28,28,192,121,150,54,46,20,125,152,177,88,88,62,59,62,134,221,118,27,254,232,116,176,15,180,134,215,149,23,175,4,48,42,180,239,8,62,251,212,207,179,155,191,228,151,88,74,136,223,1,206,20,139,176,88,242,225,92,193,30,97,249,15,131,121,191,211,134,191,15,15,79,19,135,27,159,239,239,108,57,15,2,2,176,84,26,99,0,248,108,91,74,150,2,48,85,44,149,203,176,80,52,23,136,223,217,141,127,210,233,192,191,241,0,196,218,69,118,109,49,40,90,78,129,80,41,32,0,149,238,205,76,10,64,28,68,175,178,29,98,177,88,130,146,1,50,162,205,86,240,175,163,67,120,252,252,121,55,21,164,20,144,221,2,18,3,98,55,215,32,32,0,203,229,42,44,8,222,222,81,71,212,152,245,212,33,44,17,128,253,195,54,252,214,238,64,71,220,156,137,77,14,68,51,87,32,76,51,177,135,219,249,57,79,238,118,62,139,58,130,233,12,21,194,50,34,0,101,254,152,109,14,68,96,53,8,8,192,50,179,128,51,158,90,197,143,194,242,2,219,37,100,232,8,20,128,79,14,59,178,1,136,211,17,97,218,104,89,3,2,90,64,116,0,83,158,94,203,23,10,203,57,150,138,178,234,136,63,89,254,223,111,39,22,128,178,162,55,232,91,134,142,16,6,66,88,3,168,26,86,4,202,34,44,209,1,100,16,128,50,227,30,183,159,77,35,64,8,45,224,60,75,3,85,11,170,128,73,132,165,36,1,40,43,30,114,32,2,45,32,164,169,1,152,20,113,194,50,20,128,88,0,234,216,247,50,19,212,17,1,135,162,37,29,4,89,22,80,87,132,194,242,41,187,249,138,5,160,204,216,76,163,35,18,129,144,55,0,28,137,109,14,68,51,51,8,186,44,32,133,240,180,209,128,33,101,236,88,16,8,128,92,198,192,50,246,9,16,76,181,128,20,82,116,4,10,203,157,19,32,16,0,78,235,136,110,25,219,251,118,97,229,27,230,171,191,0,154,159,232,92,240,186,202,209,131,131,131,87,122,83,213,190,91,188,86,231,162,130,38,170,230,56,194,74,43,22,1,195,194,218,149,71,247,189,151,230,44,50,32,112,186,42,206,88,164,25,203,57,10,188,233,231,79,41,181,199,130,16,1,98,13,104,234,122,46,0,24,214,213,53,16,132,8,16,53,160,57,204,214,5,86,77,47,38,236,207,72,4,66,4,136,105,158,50,214,9,8,179,5,224,168,157,223,35,129,208,7,5,9,75,51,29,64,170,150,189,212,32,144,176,52,203,1,100,109,226,205,12,66,4,136,107,28,8,18,150,138,4,224,2,251,244,163,5,20,209,197,45,12,132,62,97,73,47,248,146,20,19,133,2,219,1,74,194,251,49,133,131,16,35,44,235,164,35,212,58,0,163,64,32,97,41,78,0,190,198,0,152,44,200,125,6,164,4,132,8,16,107,28,8,18,150,67,4,32,182,210,169,60,180,163,20,4,18,150,106,28,128,53,32,144,176,124,217,1,136,58,127,97,37,8,174,11,75,89,14,192,90,16,92,19,150,178,29,64,46,64,200,179,176,212,121,106,219,90,16,48,62,153,185,84,155,245,253,175,231,253,242,135,243,133,98,217,86,1,248,194,2,250,70,207,131,50,18,4,6,192,26,244,245,65,224,128,45,60,89,149,101,184,134,43,14,192,122,16,24,0,117,24,242,246,217,112,222,210,235,190,153,91,172,13,163,125,140,4,129,221,252,212,61,14,216,121,141,64,76,26,112,246,66,230,76,134,92,131,192,0,16,86,84,154,41,50,17,166,233,48,142,137,14,192,10,16,248,246,95,151,225,6,80,71,44,151,43,74,206,103,154,236,0,140,5,129,111,255,97,254,151,94,31,64,32,22,112,106,75,81,236,145,253,184,54,240,188,132,84,16,208,254,129,198,166,87,81,194,114,80,27,56,129,48,24,0,227,218,215,210,8,75,91,29,128,86,16,248,246,127,7,12,47,15,39,17,150,54,142,251,213,14,2,223,254,173,123,130,24,39,44,85,206,105,204,13,8,188,250,135,0,220,182,121,1,66,97,249,209,228,25,24,119,248,36,56,130,224,143,8,64,168,254,175,230,97,1,158,29,29,193,175,255,61,131,241,41,234,179,245,19,220,252,90,196,254,209,138,185,6,130,200,234,31,133,133,32,200,172,254,81,24,14,66,228,225,79,29,168,237,220,77,16,24,4,1,208,145,119,151,3,199,239,1,154,230,6,188,152,250,253,148,214,196,169,192,57,206,159,50,235,136,102,0,122,117,4,151,211,67,99,238,130,75,255,221,216,183,206,198,22,148,242,86,47,32,16,186,177,201,1,216,141,251,226,192,202,98,92,255,32,129,96,85,244,166,173,14,123,235,108,162,18,179,173,207,20,28,6,161,55,127,57,233,91,103,71,122,214,160,186,201,132,64,72,149,255,241,211,31,140,250,23,83,63,125,52,177,239,192,97,16,54,57,0,205,180,223,32,115,63,66,30,74,209,150,130,208,123,217,151,136,183,206,11,235,80,178,249,225,148,101,32,132,2,80,232,91,231,165,244,44,114,251,217,176,69,71,88,2,194,30,255,244,7,50,190,185,212,46,102,110,63,27,166,235,8,195,65,136,45,0,89,5,66,95,218,64,32,140,124,166,97,40,8,155,124,251,223,81,241,195,84,31,112,49,178,140,109,16,8,137,11,64,86,131,16,163,35,140,40,99,27,0,194,94,4,128,150,142,127,128,246,211,208,38,148,177,53,130,240,144,111,255,129,110,18,77,58,22,95,3,77,101,108,13,32,220,227,0,52,193,144,48,113,80,134,242,50,182,66,16,6,62,1,36,16,78,135,66,73,25,91,50,8,82,10,64,78,129,16,1,66,106,25,91,18,8,82,11,64,78,130,208,167,35,194,180,113,214,80,16,182,249,167,127,11,44,10,171,64,136,177,159,13,17,58,66,16,8,153,159,0,18,8,217,237,103,166,115,152,25,64,192,252,31,240,29,96,215,230,117,180,30,132,190,180,129,59,196,200,101,236,20,32,236,69,0,104,229,97,253,114,3,66,159,253,28,169,140,61,2,8,198,20,128,8,132,209,117,68,125,152,253,76,0,130,146,39,128,4,130,26,29,81,63,205,126,14,0,193,216,2,16,129,144,93,71,188,84,198,238,3,65,219,19,64,2,65,143,142,232,205,124,66,16,216,42,60,246,0,190,132,17,90,192,9,132,124,65,113,231,238,204,220,202,7,191,252,244,149,203,235,240,191,0,3,0,125,220,74,74,112,211,188,121,0,0,0,0,73,69,78,68,174,66,96,130]
				}
		}
	],
	"status":200
}
```

## [GET] /ipfs/pins

Ritorna la lista di tutti i file con _pin_ presenti sull'IdA Node. La lista comprende gli hash dei soli file _pinnati_ in modo ricorsivo.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTIwODEyNjU0OTYsOTA3MjQ3OTksLTc3MT
k5Mjk0MiwxMzE5MTYxMzk0LC0xMjM2OTA2MzQ5LDUxMDk4NzY2
MSwtMTE3OTg2Nzk3OCwtMTQ4MjU3NzA3NSwtMjIwNDk3MjI2LC
0xNTg2MjE0NDYwLDExMjgwODg4NzgsLTIwODg3NDY2MTJdfQ==

-->