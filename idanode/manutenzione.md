# Manutenzione

La manutenzione dell'IdANode è fondamentale, questo perchè il codice, aggiornato su base giornaliera, subisce modifiche e miglioramenti continui.

E' fondamentale che si acceda regolarmente  all'IdANode e si verifichi che la versione sia l'ultima disponibile.

Ogni versione porta con se un *checksum* di controllo sul codice, che verrà confrontato con il tuo IdaNode all'avvio.

::: warning ATTENZIONE
E' fondamentale che il *checksum* risulti sempre valido, ogni modifica non ufficiale al codice corromperà l'IdANode e questo non permetterà il collegamento attraverso @scrypta/core.
:::

### Lista checksum in Blockchain

[https://proof.scryptachain.org/#/address/LQ15LT7CKygxUvXB8NsnZXd3kE5xrTMfFw](https://proof.scryptachain.org/#/address/LQ15LT7CKygxUvXB8NsnZXd3kE5xrTMfFw)

### Lista checksum Github

[https://github.com/scryptachain/scrypta-idanodejs/blob/master/checksum](https://github.com/scryptachain/scrypta-idanodejs/blob/master/checksum)

## Aggiornare l'IdANode

Per aggiornare l'IdANode è sufficiente eseguire il seguente comando da terminale:

```
cd scrypta-idanodejs
npm run update
```

## Creare un bootstrap file

Per creare un bootstrap file è necessario *a IdaNode attivo* avviare il seguente comando:

```
npm run mongodump
```