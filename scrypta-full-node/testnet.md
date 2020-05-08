# Testnet

Per utilizzare la versione testnet della blockchain Scrypta avrete bisogno di scaricare ed installare il wallet ufficiale. Potete trovare una guida all'installazione nella seguente sezione:

[Installazione](installazione.md) 

Successivamente dovrete avviarlo in modalità Testnet.

Per fare ciò è necessario inserire la riga di testo `testnet=1` nel file di configurazione `lyra.conf` e riavviare il wallet.

Il file di configurazione si trova nella Directory dei Dati che viene creata automaticamente al primo avvio del wallet. 

Per maggiori informazioni consultate la relativa sezione [Directory dei dati](data-directory.md).

## Passaggi per l’avvio di Scrypta Testnet

1. Scaricare il wallet ed avviarlo. In questo modo avrete permesso la creazione della directory dei dati;
2. Chiudere il wallet e recarsi nella directory dei dati chiamata lyra;
3. Aprire il file lyra.conf con un editor di testo; 
4. Aggiungere la stringa  testenet=1;
5. Salvare le modifiche nel file lyra.conf;
6. Avviare lyra-qt (wallet con interfaccia grafica) o lyrad (versione senza interfaccia grafica).

::: tips Nota
 se successivamente desideri avviare il wallet in modalità mainnet, basterà sostituire nel file di configurazione testnet=1 con testenet=0, salvare le modifiche e riavviare il wallet.
 ::::

## Faucet tLYRA (testnet LYRA)
Per ricevere delle LYRA di test (*tLyra*), puoi utilizzare il sistema Faucet realizzato attraverso la tecnologia IdANode:

[Faucet Link](https://testnet.scryptachain.org/#)

Genera un indirizzo di ricezione Lyra testnet nel tuo wallet e inseriscilo nel campo *INIT* della sezione *Tool*. 

In questo modo riceverai **50 tLyra**.

Attraverso l’IdANode Testnet puoi anche generare un nuovo indirizzo, inviare a quest’ultimo delle *tlyra* attraverso la funzione *INIT* ed importare nel desktop wallet la chiave privata attraverso la *console di debug*, utilizzando il comando `importprivkey YOURPRIVATEKEY`. 