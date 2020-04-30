# P2P Network

Questo strumento serve a creare una rete peer-to-peer tra una serie di server e client.
Di fatto è un'applicazione NodeJS/Express che permette la creazione di comunicazioni in real-time firmate da indirizzi Lyra.

Questo strumento è ancora in fase di sviluppo ed è carente di alcune funzionalità tra cui il _discovery_ di nuovi peer (server), un sistema efficiente di _relay_ dei messaggi e la stabilizzazione del sistema di _crittografia_ dei messaggi stessi tramite chiavi RSA.

In via del tutto teorica, questo tool andrebbe accoppiato ad una dApp, poichè ogni volta che viene ricevuto un messaggio questo viene rimandato ad un hook, definito nel file `.env`.

Questo tool in futuro è nativamente inserito negli IdaNodeJS, in modo che tutti gli IdaNode possano comunicare tra di loro e permettere le comunicazioni tra vari client. Per interagire con la rete degli IdaNode è necessario utilizzare ScryptaCore o le chiamate specifiche dell'IdaNode stesso.

La tecnologia di base utilizzata è quella di [https://socket.io/](https://socket.io/).

## Installazione

Clonate la repository e installate tutte le dipendenze:

```
git clone https://github.com/scryptachain/scrypta-p2p-network
cd scrypta-p2p-network
npm install
```
Adesso è necessario creare un file .env del tipo:
```
PORT=42224
NODE_KEY=YOUR_LYRA_PRIVKEY
ENCRYPT_COMMUNICATIONS=false
HOOK=http://localhost:9000/p2p-hook
EXPRESS_PORT=4000
BOOTSTRAP_NODES=idanodejs01.scryptachain.org,idanodejs02.scryptachain.org
```

## Utilizzo

Per avviare la connessione al network basta eseguire il comando:

```
npm start
```
La risposta dalla console sarà qualcosa del tipo:

![npm start](https://cdn.discordapp.com/attachments/550093442722562068/637290044842967067/unknown.png)

Come possiamo vedere, l'engine carica l'identità scritta sul file `.env` e si connette ai nodi bootstrap. Se qualcosa dovesse andare storto con i nodi o con la propria connessione, non si vedranno le righe di connessione:

```
Connected to peer: http://idanodejs01.scryptachain.org:42224
Connected to peer: http://idanodejs02.scryptachain.org:42224
```
Da questo momento in poi è possibile inviare messaggi semplicemente invocando l'endpoint `/broadcast`!

## [POST] /broadcast

Questo endpoint prevede l'invio dell'unico campo **message**. Il messaggio verrà quindi firmato dalla chiave privata e trasformato in JSON con questa formattazione:
```
{ 
  signature: '2b37797321241e28b889c3cd1b7eec6bd01d0b47a2a0fff21dc7d873954e0baa7e3b77f860c57ad53ab2009c030b885444cab6f0b94e37988bb3771768f8642e',
  pubKey: '027460a5f721e97f5e241d9767fb1b7fd778892e7c40684b79fcb4420d07d240e0',
  address: 'LdRQokR1i3XDtj1V3jnCRqMPrVc7sYkeE2',
  message: 'Hello P2P!' 
 }
  ```
Come nel caso dei messaggi firmati da _Scrypta Core_ , anche questi presentano la signature, l'indirizzo che l'ha inviato, la pubKey per verificare il messaggio e il messaggio stesso.

A questo punto tutti i nodi che ricevono il messaggio lo replicano agli altri nodi connessi. Questo sistema garantisce il relay delle informazioni. Esso farà arrivare i messaggi sia ai nodi online con porte aperte, che ai client, i quali solitamente hanno le porte di connessione in ingresso chiuse.

Questa tipologia di attività può essere analizzata facendo partire il tool su un server remoto, la cui porta (42224) è aperta:

![enter image description here](https://cdn.discordapp.com/attachments/550093442722562068/637293091996434443/unknown.png)

Chiunque riceve il messaggio, prima di far partire la relativa chiamata post verso l'_hook_, controlla che il messaggio sia stato effettivamente inviato da quell'indirizzo e, in caso positivo, trasmette il messaggio.

## Possibili casi d'uso

Questo tool può servire per qualsiasi applicazione abbia bisogno di scambiare informazioni verificate in tempo reale. Unito a tutte le altre tecnologie Scrypta, questo tool permette l'effettivo invio di informazioni da fonti certificate e, volendo, crittografando le informazioni con le chiavi RSA, è possibile inviare informazioni assolutamente private in tempo reale.

E' importante sottolineare che **nessuna** informazione viene salvata nè dagli IdaNode, nè dall'engine. Questo significa che i messaggi non possono essere recuperati e solo i peer connessi possono visualizzarli. Questa scelta architetturale si basa sulla volontà di creare un sistema snello, che non si sovraccarichi nel tempo, demandando l'effettiva necessità di storage dei messaggi agli sviluppatori che vorranno usufruirne.
<!--stackedit_data:
eyJoaXN0b3J5IjpbNTE3OTc3NTU4XX0=
-->