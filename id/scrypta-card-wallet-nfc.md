# Scrypta Card Wallet NFC

La card wallet completa il sistema di identità di Scrypta fornendo di fatto uno strumento semplice, sicuro e potente. La card può essere utilizzata sia per creare dei backup sicuri e duraturi dei propri wallet o può essere creata per la gestione quotidiana delle proprie Lyra, delle proprie informazioni o come sistema di pagamento nell'ambito delle Sidechain. 

La card non è altro che la rappresentazione fisica di quello che spesso è stato chiamato *"file .sid"*, ovvero la rappresentazione digitale di un'identità Scrypta. La dimensione di tali file, che ricordiamo essere crittografati, richiede card NFC con chip **NTAG216** che permette di scrivere fino ad 888 byte di informazioni.

Così come ogni altra tecnologia Scrypta questa è facilmente replicabile ed è chiaro che il nodo cruciale, per la sicurezza degli utenti, è generare delle password sicure in grado di proteggere le chiavi private contenute all'interno della card.

Per generare le card abbiamo creato un apposito tool, disponibile qui: https://github.com/scryptachain/scrypta-card-generator, che permette di creare un numero infinito di card e salvare un file *.csv* contenente le informazioni necessarie alla scrittura in serie delle stesse.
Maggiori informazioni sull'utilizzo del tool possono essere trovate all'interno della sezione *Strumenti di utilità* > *Card Generator*.

## Utilizzo

Una volta realizzata una card wallet questa può essere utilizzata come strumento per effettuare operazioni all'interno della blockchain nel modo più semplice possibile, ovvero inserendo la propria password (o PIN) all'interno di un'applicazione fidata. 

Tra tutte, Manent App è l'applicazione che permette di testare questo tipo di tecnologia in quanto permette di scambiare Lyra *-on the fly-* attraverso la sezione *Ricevi*.
Dopo aver inserito l'ammontare da ricevere è possibile richiedere il pagamento della cifra attraverso la card; questa verrà letta e successivamente decodificata grazie all'inserimento della password da parte del debitore.
Se la password è corretta e i fondi sono effettivamente a disposizione verrà realizzata una transazione contenente l'ammontare in Lyra richiesto e le *fee* per la transazione saranno unicamente quelle relative alla blockchain, che ricordiamo essere di **0.001 LYRA**.

Abbiamo creato quindi un perfetto sistema POS, dove le fee sono effettivamente 0 per il commerciante e la sicurezza negli scambi è elevatissima. La password, la chiave privata o il wallet stesso non vengono mai memorizzati dal dispositivo, rendendo sicure tutte le operazioni di scambio.

## Token e Sidechain

Questa card non contiene, chiaramente, le sole informazioni relative a Lyra, ma contiene tutte le informazioni relative ai token realizzati attraverso il sistema di Sidechain di Scrypta. Questo fa sì che ogni token può effettivamente essere scambiato in modo *fisico* utilizzando tecnologia blockchain in modo assolutamente trasparente per l'utente. 

Se vi state chiedendo quali possono essere gli ambiti di applicazione di una tecnologia del genere pensate a: mense aziendali, ticket per ristoranti, ticket per eventi o concerti, scambi di beni mobili o immobili e così via.

Di sicuro la card wallet rappresenta lo strumento più semplice ed immediato per un utilizzatore medio, che preferisce avere uno strumento tangibile.


<!--stackedit_data:
eyJoaXN0b3J5IjpbMTE4OTA2MzcwOF19
-->