# IPFS

Questo tool è l'implementazione di IPFS in NodeJS / Express  (https://ipfs.io/).
Tramite una serie di chiamate POST e GET è possibile interagire direttamente via browser con IPFS. Queste chiamate sono in tutto e per tutto quelle presenti all'interno di IdaNode, facciamo quindi riferimento a queste per un'analisi più dettagliata.

## Installazione

Clonate la repository e installate tutte le dipendenze:

```
git clone https://github.com/scryptachain/scrypta-ipfs
cd scrypta-ipfs
npm install
```

Adesso è possibile avviare lo strumento con il comando:
```
npm start
```
Se tutto è stato installato correttamente, vedrete sulla vostra console qualcosa del genere:

![npm start](https://cdn.discordapp.com/attachments/550093442722562068/637296882455937024/unknown.png)

Da questo momento è possibile utilizzare tutti gli endpoint già descritti su IdaNode semplicemente puntando il vostro localhost alla porta 3000.

Ad esempio, usando curl potrete effettivamente vedere la versione di IPFS installata:
```
curl http://localhost:3000/info
> 0.39.0
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE1MTQ1MTYyMjJdfQ==
-->