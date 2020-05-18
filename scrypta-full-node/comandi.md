# Lista dei Comandi

I comandi del wallet elencati qui sono i metodi con i quali è possibile eseguire operazioni con il client LYRA RPC. Sul wallet desktop è possibile utilizzare questi comandi dalla [***Debug Console***](../scrypta-full-node/console.md) (*Tools menu*).

::: tip
Nella versione client è necessario chiamare tutti questi comandi preceduti da `./lyra-cli`
:::

## Test-CLI

Puoi testare i comandi del wallet attraverso la consolle dello strumento test-CLI, raggiungibile qui:

[**test-CLI**](https://cli.scryptachain.org/)


![upvote](../.vuepress/public/assets/other/test-cli.png)

## Istruzioni Blockchain
`getbestblockhash` Fornisce semplicemente l'ultimo/miglior hash di blocco nella rete.

`getblock <hash>` Passare un hash di blocco specifico a questo comando produrrà una risposta con tutti i dettagli del blocco richiesto.

`getblockchaininfo` Restituisce tutte le informazioni sulla blockchain corrente.

`getblockcount` Restituisce il numero corrente di blocchi sincronizzati.

`getblockhash <index>` Restituisce l'hash del blocco in corrispondenza di un indice specificato. 

> Ad esempio `getblockhash 10000` ritornerebbe `3f18205d5884fdcbf95f2adc7a933b28fd6ec4a474b7dffb41c7a2733d0c4c2d`

`getblockheader <hash>` Fornisce l'intestazione dell' hash specificato.

> Esempio: 
 `getblockheader 3f18205d5884fdcbf95f2adc7a933b28fd6ec4a474b7dffb41c7a2733d0c4c2d`

> Risposta:
`
{
    "version" : 3,
    "previousblockhash" : "8614cb01c9c97c7424e2ada9ca726700804feedb80e7a730676752e8ea1e7be2",
    "merkleroot" : "bcb013dc62d59f01baca55f1d264e7b0574ce45821e44dbd1b52758657a09947",
    "time" : 1545994896,
    "bits" : "1c051271",
    "nonce" : 0
}
`

`getchaintips` Restituisce i suggerimenti sui rami del network da tutti i rami noti dal nodo.

`getdifficulty` Restituisce l'attuale difficoltà a trovare un hash al di sotto di un determinato obiettivo.

`getrawmempool` Restituisce l'array mempool corrente.

`gettxout <txid>` Restituisce dettagli su un output della transazione non spesa.

`gettxoutsetinfo` Restituisce le statistiche sul database degli output di transazione non spesi gestiti dal nodo.

`verifychain` Restituisce il valore vero o falso in base alla validità della blockchain ospitata dal nodo.

## Istruzioni di Controllo

`getinfo` Restituisce informazioni generali sulla blockchain.

`help` Elenco di tutti i comandi.

`stop` Stop del software.

## Istruzioni Masternode

`masternode "command"...` 

Set di comandi per eseguire operaziozioni relative ai masternode. 

### Comandi Disponibili

`count`            - Restituisce il numero di tutti i masternode rilevati dalla rete (opzionale: 'ps', 'enabled', 'all', 'qualify').

`current`          - Stampa le informazioni sull'attuale masternode vincitore  da pagare al blocco successivo (calcolato localmente).

`genkey`           - Genera una nuova masternodeprivkey.

`outputs`          - Stampa gli output compatibili per masternode.

`start-alias`      - Avvia un singolo masternode remoto tramite l'alias assegnato configurato in *masternode.conf*.

`start-<mode>`     - Avvia un singolo masternode remoto tramite l'alias assegnato configurato in masternode.conf (mode: 'all', 'missing', 'disabled').

`status`           - Stampa le informazioni sullo stato del masternode.

`list`             - Stampa una lista di tutti i masterno conosciuti (consulta masternodelist per maggiori informazioni).

`list-conf`        - Stampa il masternode.conf in formato JSON.

`masternodelist ( "mode" "filter" )`     Ottieni un elenco di masternode in diverse modalità.

## Istruzioni del Network
`addnode <node_ip> <add|remove|onetry>` Connettersi manualmente a un peer utilizzando l'indirizzo IP della controparte.

`getconnectioncount` Restituisce il numero di connessioni peer-to-peer del nodo.

`getnettotals` Restituisce il totale dei byte ricevuti e inviati, nonché il tempo di attività in millisecondi.

`getnetworkinfo` Restituisce informazioni statistiche sulla rete.

`getpeerinfo` Restituisce una matrice di informazioni statistiche relative ai peer connessi.

`ping` Richiede che un ping venga inviato a tutti gli altri nodi, per misurare il tempo di ping. 

::: tip Nota
I risultati forniti da getpeerinfo, pingtime sono in secondi decimali.
:::

## Istruzioni per transazioni Raw
`createrawtransaction [{"txid":"id","vout":n},...] {"address":amount,"data":"hex",...} ( locktime )` Crea una transazione spendendo gli input dati e creando nuovi output. Le uscite possono essere indirizzi o dati. Restituisce la transazione grezza con codifica esadecimale. Si noti che gli input della transazione non sono firmati e non sono memorizzati nel portafoglio o trasmessi alla rete.

`decoderawtransaction "hexstring"` Restituisce un oggetto JSON che rappresenta la transazione serializzata con codifica esadecimale. decodescript "hex" decodifica uno script con codifica esadecimale.

`fundrawtransaction "hexstring"` Aggiungi input a una transazione fino a quando non ha abbastanza valore per soddisfare il suo valore out. Ciò non modificherà gli ingressi esistenti e aggiungerà un output di modifica agli output stessi.

`getrawtransaction "txid" ( verbose )` Restituisce i dati di transazione grezzi. Se verbose = 0, restituisce una stringa serializzata, con codifica esadecimale per 'txid'. Se verbose è diverso da zero, restituisce un oggetto con informazioni sulla 'txid'. 

`sendrawtransaction "hexstring"` Invia la transazione non elaborata (serializzata, con codifica esadecimale) al nodo locale e alla rete. Vedi anchecreaterawtransaction e signrawtransaction. 

`signrawtransaction "hexstring" ( [{"txid":"id","vout":n,"scriptPubKey":"hex","redeemScript":"hex"},...] ["privatekey1",...] sighashtype )` Firma gli input per la transazione grezza (serializzata, codificata in esadecimale). Il secondo argomento, facoltativo (può essere null), è un array di output delle transazioni precedenti da cui dipende questa transazione ma che potrebbe non essere ancora trasferita alla catena di blocchi. Il terzo argomento, facoltativo (può essere null), è un array di chiavi private codificate in base58 che, se fornite, saranno le uniche chiavi utilizzate per firmare la transazione.

## Istruzioni Wallet

`addmultisigaddress nrequired ["key",...] ( "account" )`

Aggiunge un indirizzo multisignature per firmare il wallet. Ogni chiave è un indirizzo LYRA o chiave pubblica con codifica esadecimale. Se si specifica "account" (DEPRECATED), assegna l'indirizzo a quell'account. 

`autocombinerewards <true/false> threshold`

il Wallet monitorerà automaticamente eventuali "pacchetti" monete (utxo) con un valore inferiore all'importo della soglia (threshold)  le combinerà (solo se risiedono sullo stesso indirizzo LYRA).

`backupwallet "destination"`

Copia in modo sicuro wallet.dat nella destinazione, che può essere una directory o un percorso con nome file.

`bip38decrypt "lyraaddress"`

Decodifica e quindi importa la chiave privata protetta da password.

`dumpprivkey "lyraaddress"`

Rivela la chiave privata corrispondente al "lyraaddress".

`dumpwallet "filename"`

Scarica tutte le chiavi del wallet in un formato leggibile dall'uomo.

`encryptwallet <passphrase>`

Crittografa il portafoglio con la passphrase scelta .

`getaccount "lyraaddress"`

Restituisce l'account associato all'indirizzo indicato.

`getaccountaddress "account"`

Restituisce l'indirizzo LYRA corrente per ricevere pagamenti su questo account. Se non esiste, verrà creato insieme a un nuovo indirizzo associato che verrà mostrato.

`getaddressesbyaccount "account"`

Restituisce l'elenco di indirizzi per l'account specificato.

`getbalance ( "account" minconf includeWatchonly )`

Se [account] non è specificato, restituisce il saldo disponibile totale del server. Se si specifica [account], restituisce il saldo nel conto.

`getaddressesbyaccount "account"`

Restituisce un nuovo indirizzo LYRA per ricevere pagamenti. Se si specifica [account], i pagamenti ricevuti con l'indirizzo verranno accreditati su [account].

`getaddressesbyaccount "account"`

Restituisce l'elenco di indirizzi per l'account specificato.

`getbalance ( "account" minconf includeWatchonly )`

Se [account] non è specificato, restituisce il saldo disponibile totale del server. Se si specifica [account], restituisce il saldo nel conto.

`getnewaddress ( "account" )`

Restituisce un nuovo indirizzo LYRA per ricevere pagamenti. Se si specifica [account], i pagamenti ricevuti con l'indirizzo verranno accreditati su [account].

`getrawchangeaddress`

Restituisce un nuovo indirizzo LYRA per un cambio di ricezione . Questo è per l'uso con transazioni Raw, NON normali.

`getreceivedbyaccount "account" ( minconf )`

Restituisce l'importo totale ricevuto dagli indirizzi con [account] nelle transazioni con almeno [minconf] conferme. Se [account] non specificato, mostrerà tutte le transazioni su tutti gli account.

`getreceivedbyaddress "lyraaddress" ( minconf )`

Restituisce l'importo ricevuto dalle transazioni in ingresso con almeno [minconf] conferme. Tieni presente che gli indirizzi vengono sempre e solo utilizzati per ricevere transazioni. Funziona solo per gli indirizzi nel portafoglio locale, gli indirizzi esterni mostreranno sempre 0.

`getstakesplitthreshold`

Restituisce la soglia a cui è impostata la divisione dei pacchetti (utxo) in staking

`getstakingstatus`

restituisce un messaggio contenente informazioni dettagliate sullo staking.

`gettransaction "txid" ( includeWatchonly )`

Mostra informazioni dettagliate sulla specifica transazione nel wallet.

`getunconfirmedbalance`

Restituisce il saldo totale non confermato del server.

`getwalletinfo`

Restituisce un messaggio contenente varie informazioni sullo stato del wallet.

`importaddress "address" ( "label" rescan )`

Aggiunge un indirizzo o uno script (in esadecimale) che possono essere importati nel tuo wallet ma solo in modalità "watch", quindi monitoritati ma che non possono essere spesi.

`importprivkey "lyraprivkey" ( "label" rescan )`

Aggiunge una chiave privata (come restituita da dumpprivkey) al tuo Wallet.
Questa operazione importa l'indirizzo con tutto il suo contenuto di Lyra Coin.

`importwallet "filename"`

Importa le chiavi (e i relativi indirizzi) da un file di dump del wallet (vedi dumpwallet).

`keypoolrefill ( newsize )`

Riempie il keypool.

`listaccounts ( minconf includeWatchonly )`

Mostra i nomi account, chiavi, saldi account.

`listaddressgroupings`

Restituisce tutti gli indirizzi del wallet e le informazioni utilizzate per il coincontrol.

`listlockunspent`

Restituisce un elenco di output temporaneamente settati come non spendibili.

`listreceivedbyaccount ( minconf include empty includeWatchonly )`

Elenca il bilancio dell'account.

`listreceivedbyaddress ( minconf include empty includeWatchonly )`

Elenca il bilancio dell'indirizzo di ricezione

`listsinceblock ( "blockhash" target-confirmations includ Watchonly )`

Ottieni tutte le transazioni in blocchi, dal blocco [blockhash].

`listtransactions ( "account" count from includeWatchonly )`

Restituisce le transazioni più recenti per [account]. Se [account] non specificato restituirà le transazioni recenti da tutti gli account.

`listunspent ( minconf maxconf  ["address",...] )`

Restituisce un array di output di transazioni non spese con conferme tra minconf e maxconf (incluso). Facoltativamente, si può filtrare per includere solo txout inviate a indirizzi specificati.

`lockunspent unlock [{"txid":"txid","vout":n},...]`

Elenco aggiornato degli outputs temporaneamente non spendibili.

`move "fromaccount" "toaccount" amount ( minconf "comment" )`

Passa da un account nel tuo Wallet a un altro.

`multisend <command>`

**MultiSend** consente a un utente di inviare automaticamente una percentuale delle proprie ricompense (staking o masternode) a degli indirizzi desiderati. La transazione MultiSend viene inviata quando le coin hanno almeno 60 conferme (circa 60 min.). 

> ### Comandi
> `print` - displays the current MultiSend vector.
> 
> `clear` - deletes the current MultiSend vector.
> 
> `enablestake/activatestake` - activates the current MultiSend vector to be activated on stake rewards.
> 
> `enablemasternode/activatemasternode` - activates the current MultiSend vector to be activated on masternode rewards
> 
> `disable/deactivate` - disables the current MultiSend vector.
> 
> `delete <Address #>` - deletes an address from the MultiSend vector.
> 
> `disable` - prevents a specific address from sending MultiSend transactions.
> 
> `enableall` - enables all addresses to be eligible to send MultiSend transactions.
> 
> Se hai fatto configurazioni precedenti, puoi verificare se ne hai già esistenti e conoscere il loro stato di attività con `multisend print`. Se non l'hai mai usato, il tuo messaggio sarà simile al seguente:
> `~ $ ./Lyra-cli multisend print
[
  {
    "MultiSendStake Activated?": false,
    "MultiSendMasternode Activated?": false
  },
  "MultiSend Addresses to Send To:",
  {
  }
]`

`sendfrom "fromaccount" "tolyraaddress" amount ( minconf "comment" "comment-to" )`

È un valore reale ed è arrotondato al secondo decimale. Invierà l'importo indicato all'indirizzo indicato, assicurando che l'account abbia un saldo valido utilizzando le conferme [minconf]. Restituisce l'ID transazione se ha esito positivo (non nell'oggetto JSON).

`sendmany "fromaccount" {"address":amount,...} ( minconf "comment" )`

Invia più volte. Gli importi sono numeri in virgola mobile a precisione doppia

`sendtoaddress "lyraaddress" amount ( "comment" "comment-to" )`

Invia un importo a un determinato indirizzo. è un valore reale ed è arrotondato a 8 cifre decimali. Restituisce l'ID transazione in caso di successo.

`sendtoaddressix "lyraaddress" amount ( "comment" "comment-to" )`

Invia un importo a un determinato indirizzo utilizzando SwiftX. è un valore reale ed è arrotondato a 8 cifre decimali. Restituisce l'ID transazione in caso di successo.

`setaccount "lyraaddress" "account"`

Imposta l'account associato all'indirizzo indicato. L'assegnazione dell'indirizzo già assegnato allo stesso account creerà un nuovo indirizzo associato a tale account.

`setstakesplitthreshold <1 - 999,999>`

Divisione automativa degli utxo. Questo farà in modo che la dimensione dell'output dei tuoi pacchetti (utxo) in stake,  non sia mai inferiore al valore dato.

`settxfee amount`

Imposta la commissione di transazione per KB.

`signmessage "lyraaddress" "message"`

Firma un messaggio con la chiave privata di un indirizzo.

`walletlock`

Rimuove la chiave di crittografia del wallet dalla memoria, bloccando il wallet.

`walletpassphrase "passphrase" timeout ( anonymizeonly )`

Memorizza la chiave di decodifica del portafoglio in memoria per "timeout" secondi.

`walletpassphrasechange "oldpassphrase" "newpassphrase"`

Cambia la passphrase del wallet da "oldpassphrase" a "newpassphrase".