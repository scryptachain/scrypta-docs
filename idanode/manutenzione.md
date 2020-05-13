# Manutenzione

La manutenzione dell'IdaNode è fondamentale, questo perchè il codice, aggiornato su base giornaliera, subisce modifiche e miglioramenti continui.

E' fondamentale che regolarmente si accede all'IdaNode e si controlla se la versione è quella aggiornata.

Le versioni aggiornate sono disponibili in due diversi posti, ogni versione porta con se un checksum di controllo sul codice, che verrà confrontato con il tuo IdaNode all'avvio e dai vari servizi di controllo.

**E' fondamentale che il checksum risulti sempre valido, ogni modifica non ufficiale al codice corromperà l'IdaNode e questo non permetterà il collegamento attraverso @scrypta/core.**

### Lista checksum in Blockchain

https://proof.scryptachain.org/#/address/LQ15LT7CKygxUvXB8NsnZXd3kE5xrTMfFw

### Lista checksum Github

https://github.com/scryptachain/scrypta-idanodejs/blob/master/checksum

## Aggiornare l'IdaNode

Per aggiornare l'IdaNode è sufficiente eseguire i seguenti comandi da terminale: 

```
cd scrypta-idanodejs
pm2 stop npm
git pull
npm run build
pm2 start npm
```