# Scrypta Card Wallet

## Implementazione con tecnologia NFC

La card wallet completa il sistema di identità di Scrypta fornendo di fatto uno strumento semplice, sicuro e potente. La card può essere utilizzata sia per creare dei backup sicuri e duraturi dei propri wallet o può essere creata per la gestione quotidiana delle proprie Lyra, delle proprie informazioni o come sistema di pagamento nell'ambito delle Sidechain. 

La card non è altro che la rappresentazione fisica di quello che spesso è stato chiamato *"file .sid"*, ovvero la rappresentazione digitale di un'identità Scrypta. La dimensione di tali file, che ricordiamo essere crittografati, richiede card **NFC** con chip **NTAG216** che permette di scrivere fino ad 888 byte di informazioni.

Così come ogni altra tecnologia Scrypta, è facilmente replicabile. Il nodo cruciale, per la sicurezza degli utenti, è generare delle password forti in grado di proteggere le chiavi private contenute all'interno della card.

Per generare le card abbiamo creato un apposito tool, disponibile qui:

[https://github.com/scryptachain/scrypta-card-generator](https://github.com/scryptachain/scrypta-card-generator)

Questo strumento permette di creare un numero infinito di card e salvare un file *.csv* contenente le informazioni necessarie alla scrittura in serie delle stesse.

Maggiori informazioni sull'utilizzo del tool possono essere trovate all'interno della sezione:

[**Card Generator**](../utilities/card-generator.md)

## Implementazione con tecnologia QR

La card wallet non è solamente gestibile attraverso l'NFC. E' possibile creare una card wallet in formato cartaceo e usarla in lettura con il QR code.

Il vantaggio di questo tipo di soluzione è l'economicità e sicuramente la più immediata realizzazione di dApp, in quanto la funzionalità di lettura del QR code esiste anche nelle normali web app.

Un altro aspetto da non sottovalutare è la compatibilità con i dispositivi, la tecnologia NFC non è sempre disponibile negli smartphone. Con la QR card potrai garantire massima compatibilità.

## Utilizzo card NFC

Una volta realizzata una card wallet, questa può essere utilizzata come strumento per effettuare operazioni all'interno della blockchain in modo semplice, ovvero inserendo la propria password (o PIN) all'interno di un'applicazione fidata. 

Tra tutte, [Manent App](../dapps/manent-app.md) è l'applicazione che permette di testare questa tecnologia, con possibilità di scambiare Lyra *-on the fly-* attraverso la sezione *Ricevi*.

Dopo aver inserito l'ammontare da ricevere è possibile richiedere il pagamento della cifra attraverso la card; questa verrà letta e successivamente decodificata grazie all'inserimento della password da parte del debitore.

Se la password è corretta e i fondi sono effettivamente a disposizione verrà effettuata una transazione contenente l'ammontare in Lyra richiesto. Le *fee* per la transazione saranno unicamente quelle relative alla blockchain, che ricordiamo essere di **0.001 LYRA**.

Abbiamo creato quindi un perfetto sistema POS, dove le fee sono effettivamente 0 per il commerciante e la sicurezza negli scambi è elevatissima. 

La password, la chiave privata o il wallet stesso non vengono mai memorizzati dal dispositivo, rendendo sicure tutte le operazioni di scambio.

## Utilizzo Card QR

La card QR può essere testata attraverso il PoS Virtuale di Planum, andando direttamente all'indirizzo: https://pay.planum.dev/#/

Qui dovrete prima inizializzare la vostra card QR, dopo potrete richiedere pagamenti leggendo direttamente le card dei vostri clienti (o altre card di prova).

## Token e Sidechain

Questa card non contiene, chiaramente, le sole informazioni relative a LYRA, ma contiene tutte le informazioni relative ai token realizzati attraverso il sistema di Sidechain di Scrypta - [**Planum**](../planum/README.md). Questo fa sì che ogni token può effettivamente essere scambiato in modo *fisico* (attraverso la card) utilizzando tecnologia blockchain in modo assolutamente trasparente per l'utente. 

Se vi state chiedendo quali possono essere gli ambiti di applicazione di una tecnologia del genere pensate a: mense aziendali, buoni spesa, gift card, ticket per ristoranti, ticket per eventi e concerti, e così via.

La card wallet rappresenta lo strumento più semplice ed immediato per un utente finale che preferisce avere uno strumento tangibile.