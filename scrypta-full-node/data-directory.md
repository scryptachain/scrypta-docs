# Directory dei Dati

La Directory dati è la cartella di sistema Scrypta Blockchain che contiene tutte le informazioni relative alla rete blockchain e p2p. 

Questa cartella contiene anche un file importante chiamato "**wallet.dat**" che memorizza le chiavi private per i tuoi indirizzi.

::: danger
Perdere il file "wallet.dat" significa perdere l'accesso a tutte le tue monete LYRA. Eseguite regolarmente dei backup!
:::

## Posizione della directory
​
La Data Directory chiamata "lyra" si trova, per impostazione predefinita, nei seguenti percorsi specifici per ciascun sistema operativo:

### Windows
Vai su Start > Run > E scrivi: `%APPDATA%\lyra`

### macOS
 `~/Library/Application Support/lyra`

 (/Users/“username”/Library/Application Support/lyra)

Si noti che la cartella "Library" potrebbe essere nascosta.

### Linux
`~/.lyra`

## Descrizione dei file

***backups***: cartella per i backup automatici del wallet

***blocks***: cartella che contiene il database dei blocchi scaricati dalla rete p2p.

***chainstate***: cartella che contiene il database dell'indice dei blocchi necessario per navigare nei blocchi stessi

***debug.log***: stampe di debug dal client. Di solito è necessario per conoscere l'origine di alcuni problemi.

***lyra.conf***: file che contiene la configurazione di avvio.

***fee_estimates.dat***: cache delle ultime commissioni pagate sulla blockchain, necessarie per la stima delle commissioni stesse.

***masternode.conf***: contiene la configurazione per i masternode controllati da questo wallet. Questo file deve essere compilato se l'utente vuole avviare un masternode.

***mncache.dat***: database che memorizza informazioni sui masternode noti a questo nodo. Utilizzato per impedire lo spamming della rete con richieste masternode ad ogni esecuzione.

***mnpayments.dat***: database che memorizza informazioni sui pagamenti masternode. Utilizzato per verificare e confermare che il pagamento del masternode è valido.

***netfulfilled.dat***: cache locale delle richieste di rete completate.

***peers.dat***: database che memorizza informazioni sui nodi in p2p del network. Utilizzato dal client per connettersi rapidamente a nodi noti.

***sporks***: cartella che contiene il database degli sporks sincronizzati dalla rete p2p.

***testnet2***: cartella opzionale che contiene la stessa struttura di cartelle della cartella mainnet ma con dati per la testnet.

***wallet.dat***: il file più importante. Memorizza le chiavi private per i tuoi indirizzi. Perdere questo automaticamente significa perdere l'accesso a tutte le tue coin LYRA.