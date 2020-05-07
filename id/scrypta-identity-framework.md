# Scrypta Identity Framework

Il codice sorgente dello Scrypta Identity Framework, che gestisce i Gateway di identità, è ispezionabile a questo indirizzo: https://github.com/scryptachain/scrypta-identity-framework ed è il componente che mette a disposizione le interfacce verso gli autenticatori esterni.

Tecnologicamente parlando, si tratta di un'applicazione in NodeJS e i provider sono gestiti tramite PassportJS (http://www.passportjs.org/). Eccezion fatta per e-mail, che viene integrato tramite Mailgun (https://www.mailgun.com/) ed il telefono tramite Twilio (https://www.twilio.com/). In questo caso il gateway e il provider coincideranno in quanto la verifica delle e-mail e del telefono avviene internamente.

## Riscontro dell'identità

Ogniqualvolta l'utente vorrà identificarsi, dovrà mostrare in chiaro il proprio payload di identità (operazione effettuabile tramite mobile app) e la controparte (sempre via app, in automatico) verificherà che i payload presentati siano effettivamente validi. In sostanza verrà effettuta una verifica tramite chiave pubblica, payload e blockchain.

Il risultato, riscontrabile dal sito https://me.scrypta.id, sarà qualcosa del genere, che rendiamo graficamente per questioni di privacy:


![](../.vuepress/public/assets/idframework/proof.png)

Effettivamente si potrà verificare che, ad esempio, il payload di _Github_ scritto al blocco **416667** è il seguente ed è collegato all'indirizzo `LZzzH9C7outN754hqfyTZ6Hhjk2nsoX9no`. Queste informazioni sono riscontrabili qui:
https://proof.scryptachain.org/#/uuid/3e7ce.f696.4b11.bf0c.cec51cff386e
```
{ 
	"signature": "2f04635376ef2cbbc9c083b6093e5bfc864bc779a8aa670c431f5ad14c2e261003ef2aaeaab8990f9a3cec8a67296a05b1463b5f9ba98c78d83d1269163232b7",
	"gateway": "0240f294ef20c7bbb82bae24d8d22c7ab94d195adf153162482b6bf540393d7dd5", 
	"fingerprint": "79a7c75eb20eca8ca36b781bbde1e0e960a39e4d4d92f4d4452cf47c7e5b0b936c5051690f84ee177d497003ea50dd32192cf18422130a1eb8bb6172cd48275f" 
}
```

Spiegamo meglio cosa viene scritto all'interno della blockchain: 
- **signature**: è la firma del payload da parte dell'indirizzo `LZzzH9C7outN754hqfyTZ6Hhjk2nsoX9no`.
- **gateway**: è la chiave pubblica dell'indirizzo del Gateway.
- **fingerprint**: come detto, è la firma dello stesso payload da parte dell'indirizzo del gateway.

## Schema di funzionamento

Ecco uno schema di funzionamento che riassume tutti i passaggi effettuati:

![](../.vuepress/public/assets/idframework/funzionamento.png)

## Provider integrati

Al momento i provider integrati e funzionanti sono i seguenti:
- Github
- Google
- Linkedin
- Twitter
- E-Mail
- Telefono

## Obiettivo finale

L'obiettivo finale di questo framework è dare la possibilità ad enti, istituzioni o aziende di creare il proprio set di indirizzi la cui identità viene garantita grazie alla blockchain ed il metodo sopra menzionato. 

Scrypta sta implementando questo sistema di identità all'interno dell'app mobile Manent dando la possibilità agli utenti di scambiarsi le informazioni di identità e salvarle all'interno del proprio "Address Book". Questo permetterà una duplice operazione, la prima è quella di poter avere effettivamente una lista di contatti fidati e la seconda è quella di creare TrustLink con questi contatti, così da poter siglare accordi o firmare documenti.

## Estendibilità e casi pratici

E' chiaro come nel caso ad esempio di un'azienda che vuole identificare i propri dipendenti (e le loro operazioni digitali, permettendogli -ad esempio- di firmare documenti o interagire con una dApp aziendale) che la gestione di questi payload attraverso i file .sid (decentralizzati) può essere macchinosa. 

Grazie alla natura aperta del framework, nulla vieta di creare uno storage centralizzato per tutte queste identità e collegarle, ad esempio, all'e-mail aziendale.

Grazie a questi indirizzi identificati si potranno compiere quindi le operazione più varie, dallo scambio di fondi alla firma di documenti, fino alla creazione di trustlink.
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTAxOTIzNzY2MywxNjc4NjM1NTA5LDE3MT
gxMDkxODMsMTMyMTM3MTI5OSwtMjExNDEwNjAzNF19
-->