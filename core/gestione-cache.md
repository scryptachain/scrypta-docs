# Gestione Cache

## clearCache()

Cancella la cache temporanea che viene generata durante la creazione delle transazioni. Non è obbligatorio invocare questo metodo e non fornisce alcuna risposta visibile.

## returnTXIDCache()

Ritorna la cache delle transazioni e può essere usata per generare transazioni consecutive non confermate sulla blockchain. Questo metodo viene invocato internamente.

## pushTXIDtoCache(txid)

Inserisce una TXID all'interno della cache. Questo metodo viene invocato internamente.

## returnUTXOCache()

Ritorna la cache degli UTXO e può essere usata per generare transazioni consecutive non confermate sulla blockchain. Questo metodo viene invocato internamente.

## pushUTXOtoCache(utxo)

Inserisce una UTXO all'interno della cache. Questo metodo viene invocato internamente.
