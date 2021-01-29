# Sviluppo locale

Per sviluppare in locale abbiamo bisogno di un paio di un paio di tool essenziali ed un po' di pazienza per configurare il tutto. 
Come prima cosa assicuriamoci di avere [NodeJS](https://nodejs.org/en/download/) installato (consigliamo la versione 14).
Consigliamo anche di avere Docker installato per procedere ad una veloce installazione dell'IdaNode in locale.

Se abbiamo NodeJS possiamo procedere ad installare i requisiti ovvero:

-  Virtual Machine: https://github.com/scryptachain/scrypta-vm

- IdANode: https://github.com/scryptachain/scrypta-idanodejs

### Installare ScryptaVM

Il seguente comando installerà a livello globale la virtual machine, assicuratevi di avere i permessi per farlo con `sudo` o il suo equivalente:

```
sudo npm install -g @scrypta/vm
```

### Installare IdanodeJS

La cosa più semplice per installare l'IdaNode è usare Docker:

```
git clone https://github.com/scryptachain/scrypta-idanodejs
cd scrypta-idanodejs
bash docker/docker.sh
```

Questo installera l'IdaNode, non appena è tutto pronto potrai testare con `cURL` o andare direttamente con il browser su http://localhost:3001.

```
curl http://localhost:3001/wallet/getinfo
```

## Preparare la cartella locale

Come prima cosa consigliamo di clonare integralmente [questo](https://github.com/scryptachain/scrypta-smart-contracts) repository che contiene una serie di Smart Contracts di test ed il necessario per far partire il tutto senza errori:

```
git clone https://github.com/scryptachain/scrypta-smart-contracts
cd scrypta-smart-contracts
npm install
```

Dopo aver installato tutto possiamo procedere con l'avvio del playground locale digitando il comando:
```
scrypta-contracts start &
```

Per la modifica del contratto consigliamo l'utilizzo di un IDE come Atom, ricordiamo che sebbene i contratti siano con l'estensione `ssc` sono di fondo dei file javascript con delle leggere modifiche. Questo significa che un eventuale `linter` potrebbe dirvi che sono presenti degli errori ed è meglio quindi usare un editor che non vi forzi in tal senso.

Siamo quindi pronti a scrivere ed interagire con il nostro contratto!

## Leggere un contratto

Per testare un contratto è sufficiente usare un comando del tipo:

```
scrypta-contracts read -m=helloworld.ssc
```

## Testare un contratto

Per testare un contratto è sufficiente usare un comando del tipo:

```
scrypta-contracts test -f=helloworld -p='{"me": "alan"}' -m=helloworld.ssc -i=SsmVKf8eb8ME3Bhrs3GPELuLjoKYcvrwkigDBocAi7pbiCdprve3
```

Come possiamo vedere i parametri possibili sono i seguenti:
- f: la funzione che vogliamo far partire
- p: i parametri che si vogliono inviare (è possibile inviare sia oggetti che stringhe)
- m: il path del contratto
- i: la chiave privata dell'identità che deve interagire con il contratto, se non viene inserito il sistema ne crea una in automatico

## Pubblicare di un contratto

Per pubblicare un contratto è sufficiente usare un comando del tipo:

```
scrypta-contracts publish -m=helloworld.ssc -i=SsmVKf8eb8ME3Bhrs3GPELuLjoKYcvrwkigDBocAi7pbiCdprve3
```

Se tutto procede per il verso giusto vedrete qualcosa del tipo:

![publish](/assets/smartcontracts/publish.png)

## Rendere disponibile il contratto

A questo punto, per rendere disponibile il contratto in rete, dovrete semplicemente firmare l'indirizzo del vostro contratto (che nel caso precedente è `LdS3uF52kzdq3qnv8jgsAb8MnMLqVnZjnB`) con la stessa identità presente all'interno dell'IdaNode e scrivere lo stesso messaggio in blockchain.

Per farlo è sufficiente scrivere un comando del tipo:

```
scrypta-contracts pin -c=LdS3uF52kzdq3qnv8jgsAb8MnMLqVnZjnB -i=SsmVKf8eb8ME3Bhrs3GPELuLjoKYcvrwkigDBocAi7pbiCdprve3
```

dove `c` è l'indirizzo del contratto, `i` la chiave privata presente sul vostro (o sui vostri) IdaNode. Complimenti, il vostro contratto è online! 

Siete ora pronti ad interagire con il contratto usando il [playground online](https://playground.scryptachain.org) oppure scrivendo il vostro frontend usando [`@scrypta/core`](/core/interazione-smart-contracts).

## Togliere il contratto dalla rete

Se per qualche motivo voleste togliere il contratto dalla rete sarà sufficiente dare un comando simile a quello di prima, solo che dovremo scrivere `unpin`:

```
scrypta-contracts unpin -c=LdS3uF52kzdq3qnv8jgsAb8MnMLqVnZjnB -i=SsmVKf8eb8ME3Bhrs3GPELuLjoKYcvrwkigDBocAi7pbiCdprve3
```