# Trustlink

Trustlink è un tipo di indirizzo della blockchain, detto `multisignature` e che viene generato da due o più indirizzi standard. Gli indirizzi multisignature iniziano sempre con il numero `6` mentre gli indirizzi standard con la lettera `L`. 

A parte questa distinzione alfanumerica, gli indirizzi multisignature differiscono principalmente sul metodo di firma delle transazioni. Le transazioni devono essere firmate da _n_ di _m_ indirizzi, dove:
- **n:** il numero minimo di firme necessarie.
- **m:** la totalità degli indirizzi presenti.

Vedremo successivamente come si generano le transazioni e gli indirizzi multisignature.

Nella concezione di Scrypta, che ha scelto di chiamare questi indirizzi TrustLink, due o più indirizzi che decidono di firmare (e quindi scrivere) delle informazioni sulla blockchain, sono in qualche modo degli indirizzi che si fidano gli uni degli altri. Nel nostro caso le firme necessarie corrispondono sempre alla totalità degli indirizzi presenti nel TrustLink. Presto vedremo come utilizzare questi particolari indirizzi per sottoscrivere contratti.

Parliamo di *contratti* in termini decisamente differenti da quelli usati di solito. I *contratti* che noi intendiamo sono degli accordi scritti (o dei file) che vengono contestualmente firmati da tutti i partecipanti al Trustlink. In nessun caso parleremo di *smart contracts*, almeno non nell'accezione di *programma per elaboratore*. Il programma che esegue il contratto, nel nostro caso, è a tutti gli effetti la blockchain, tramite l'operazione di firma multipla.

Tutte le operazioni relative ai Trustlink vengono effettuate all'interno degli IdaNode, elencheremo ora tutti gli endpoint:

## [POST] /trustlink/init

Questo endpoint serve a generare il Trustlink partendo dalle chiavi pubbliche degli indirizzi che lo vogliono generare. E' importante sapere che l'ordine delle chiavi pubbliche incide sul risultato del Trustlink. Per agevolare la creazione di trustlink sempre uguali tra gli stessi partecipanti abbiamo deciso di implementare una funzione di ordinamento di default.

I campi da inviare saranno quindi i seguenti:

 - **addresses**: un elenco separato da virgole contenente le chiavi pubbliche degli indirizzi.
 - **airdrop**: può essere *true* o *false* e serve ad inviare la prima transazione di inizializzazione dell'importo inserito all'interno del file *.env* dell'IdaNode. Di default è **0.05 LYRA**.

Il risultato finale sarà qualcosa simile a questo:
```
{

	"data":  {

		"address":  "6ZPgAgVmd5EjYeDrWBjTXxfR2gybjVeZQo",

		"redeemScript":  "5221037794fbd3da6243079b019e15d0e2e0055b5f45825280620a7045219392d98a05210380ad898c608f92f52adec7a3c9a5bd42417218dab6d0aec60a50c299b9e0ad2052ae"

	},

	"status":  200

}
```

E' importante annotarsi il campo *redeemScript* in quanto serve a firmare le transazioni nelle operazioni di scrittura e invio.

## [POST] /trustlink/write

In modo analogo all'endpoint **write** per gli indirizzi normali questo endpoint permette di scrivere i dati all'interno della blockchain.

Ecco la lista dei possibili campi:
- **trustlink [obbligatorio]:** il trustlink che sta scrivendo l'informazione.
- **data [obbligatorio]**: l'informazione che si vuole scrivere all'interno della blockchain.
- **private_keys [obbligatorio]**: le chiavi private degli indirizzi del trustlink.
- **redeemScript [obbligatorio]**: la stessa stringa ritornata nell'operazione di creazione del trustlink.
- **file:** un file che può contestualmente essere scritto su IPFS.
- **protocol:** il protocollo che si vuole utilizzare per classificare l'informazione.
- **collection:** la collezione che si vuole utilizzare per classificare l'informazione.
- **refID:** l'id di riferimento che si vuole utilizzare per classificare l'informazione.
- **uuid:** l'identificativo unico assegnato dall'IdA Node per aggiornare un determinato dato.

Il funzionamento è analogo a quanto già descritto, consigliamo quindi di andare a vedere la pagina relativa nella sezione *IdaNode > Progressive Data Management*

##  [POST] /trustlink/send

In modo analogo all'endpoint **send** per gli indirizzi normali questo endpoint permette di inviare fondi dal trustlink ad un altro indirizzo Lyra.

Ecco la lista dei possibili campi:
- **trustlink [obbligatorio]:** il trustlink che sta scrivendo l'informazione.
- **to [obbligatorio]**: l'indirizzo Lyra che riceverà i fondi.
- **amount [obbligatorio]**: la quantità di Lyra da inviare.
- **private_keys [obbligatorio]**: le chiavi private degli indirizzi del trustlink.
- **redeemScript [obbligatorio]**: la stessa stringa ritornata nell'operazione di creazione del trustlink.
- **message:** un eventuale messaggio da inserire all'interno della transazione. Può essere di massimo 80 byte.

La risposta sarà qualcosa del genere in caso di invio positivo:
```
{

	"success":  true,
	"fees":  0.001,
	"txid":  "83f21cfff067bfb9f9002d26b9100297dc8aee8d145f8c370317349568bf3366"

}
```

## [POST] /trustlink/invalidate

Viene utilizzato per invalidare un dato, i parametri necessari affinché l'operazione vada a buon fine sono:
- **uuid [obbligatorio]:** l'identificativo unico ritornato dall'IdaNode nella fase di scrittura iniziale.
-  **private_keys [obbligatorio]:** chiave privata dell'indirizzo che ha scritto l'informazione.
- **trustlink [obbligatorio]:** l'indirizzo che ha scritto l'informazione.
- **redeemScript [obbligatorio]:** la stessa stringa ritornata nell'operazione di creazione del trustlink.


La risposta, in caso di successo, sarà di questo tipo:
```
{

	"uuid":  "07ec884b.3575.4d94.a65f.5afdd5c7bd46",

	"fees":  0.001,

	"success":  true,

	"txid":  "648ceeb581b7b26897e211ff652c5adaaa878fe16a5454156d058099a7bc87e5"

}
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTkxNDc5MzI2MiwyMDU4MzMzNTU3LC02Mz
cxMDY3MjksMzY4Mjg5ODE2LDMyNTA5NTAwNyw4NDY1MzIzMzcs
LTIzNTY5OTAzNCwxMTc5NjI4ODEzLDEyMTc4MjU2NzQsLTE3MT
Q2NjA1NzIsLTExNzg2ODI2MTMsMTI2NzY3NTE5NiwtNjUxMjQ3
NzI4XX0=
-->