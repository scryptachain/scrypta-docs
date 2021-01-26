# Staking FAQ
**D: IL MIO WALLET DEVE ESSERE AVVIATO PER RICEVERE LE RICOMPENSE?**

R: Sì, il tuo wallet deve essere avviato e sbloccato per lo staking. Ti consigliamo nella finestra di sblocco di selezionare la casella "sblocca solo per lo staking", in modo che il tuo wallet sia in grado di "stakare", ma non è possibile avviare transazioni. Ciò riduce le possibilità che un attaccante sia in grado di svuotare il tuo wallet se riesce ad accedervi durante l'attività in rete.

**D: IL MIO COMPUTER DEVE RIMANERE ACCESO?**

R: Sì, per essere abilitato allo staking il computer deve essere completamente attivo. Spegnerlo o chiudere il wallet significa che non stai partecipando alla validazione, quindi non sei idoneo per le ricompense.

**D: DEVO INSERIRE QUALCHE CODICE NEL MIO LYRA.CONF FILE PER ABILITARE LO STAKING?**

R: No, devi solo assicurarti che non ci sia la stringa `staking=0` e sbloccare il wallet solo per lo staking (spuntando la casella accanto al campo della password e digitando la password).

**D: QUANTE LYRA DEVO AVERE PER PARTECIPARE ALLO STAKING?**

R: Qualsiasi. Nessuna dimensione di input minima è necessaria.

**D: COSA SI INTENDE PER INPUT o UTXO?**

R: Un input è una transazione in cui hai ricevuto LYRA ed è rappresentata sulla blockchain, viene chiamata  anche UTXO o Output di transazione "non speso (*unspent*)". Ogni volta che ricevi monete, indipendentemente dal fatto che tu abbia già ricevuto o meno monete a quell'indirizzo, viene creato un nuovo input.

**D: COME CREO UN INPUT (UTXO)?**

R: Creare un input è semplice come inviare una transazione a te stesso.

1. Apri il pannello *Coin Control* e seleziona le monete che desideri raggruppare in un'unico input selezionando la casella che si trova a sinistra del menu.

2. Incolla l'indirizzo al quale desideri inviare le monete nel campo  *"Pay To*" .

3. Copia l'ammontare del campo "*After Fee*" nel campo "*Amount*" .

4. Conferma le informazioni e invia la transazione.

5. Quando le monete raggiungeranno 60 conferme, saranno ammesse allo staking.

**D: COME POSSO VEDERE I MIEI INPUT?**

R: Puoi vedere i tuoi input size aprendo il pannello *Coin Control*.

**D: DOVE POSSO TROVARE IL PANNELLO COIN CONTROL?**

R: Prima di tutto devi attivare il *Coin Control*. Puoi farlo andando sul tuo wallet, cliccando su *settings* (che si trova nella parte superiore sinistra del tuo) e quindi su *options*, dopodiché devi selezionare "*enable coin control*". Dopo questi passaggi sarai in grado di vedere il pulsante di *Coin Control* nella scheda "*send*".

**D: PER QUANTO TEMPO DEVONO MATURARE LE MONETE PRIMA DI ESSERE VALIDE PER LO STAKING?**

R: Per essere ammessi allo staking, le monete devono avere 60 conferme, il che richiede circa 1 ora.

**D: PER RICEVERE IN MEDIA UNA RICOMPENSA AL GIORNO,  QUANTE LYRA SERVONO?**

R: Attualmente hai bisogno di circa 500 LYRA per ricevere ogni giorno una ricompensa di staking.

**D: CHE COS'È LO STAKESPLIT E COSA FA?**

R: Il valore di stakesplit, che puoi trovare eseguendo l'istruzione `getstakesplitthreshold` nella tua console di debug, è la quantità di monete a cui il tuo portafoglio suddividerà automaticamente gli input. Il valore predefinito è 2000, il che significa che se si dispone di un input di 4000 LYRA o più, quando riceverà la prima ricompensa verrà automaticamente diviso in due input di 2000 LYRA.

**D: COME POSSO CAMBIARE IL VALORE STAKE-SPLIT-THRESHOLD?**

R: Puoi cambiarlo tramite la console di debug, digitando: `setstakesplitthreshold x`, dove x è il valore che desideri sia la tua nuova soglia di stake.

**D: COSA E' L' AUTOCOMBINEREWARDS?**

R: `autocombinerewards true x` abiliterà una funzione che combina automaticamente tutte le ricompense masternode ricevute in un input all'interno dell'indirizzo stesso, fino all'importo specificato con x.Quindi, se vuoi che la tua dimensione di input minima sia di 500 LYRA, allora dovresti eseguire il comando nella tua console di debug come segue: `autocombinerewards true 500`. Nota: se possiedi più di un masternode con più di un indirizzo, questo non combinerà i premi tra di loro.

**D: È POSSIBILE UTILIZZARE CONTEMPORANEAMENTE AUTO-COMBINE-REWARDS E SET-STAKE-SPLIT-THRESHOLD PER AUTOMATIZZARE I MIEI INPUT SIZE?**

R: In generale, sì. Dovresti trovare un range corretto per utilizzarli entrambi. Per esempio: `autocombinerewards true 750` e `stakesplitthreshold 1000` combinerà tutti gli input  di un determinato indirizzo sotto 750 LYRA, in un'unico input da 750, ma li dividerà in due input separati quando raggiungono 2000 LYRA.

**D: CHE COS'È UN "ORPHAN BLOCK?" OPPURE, PERCHÉ VEDO UNA RICOMPENSA "IN GRIGIO" CHE NON STA OTTENENDO CONFERME?**

R: Un blocco orfano "*orphan block*" è ciò che accade quando due nodi risolvono un blocco contemporaneamente. La rete raggiunge quindi il consenso su chi ha effettivamente risolto per primo il blocco e quella parte riceve la ricompensa, come se non fosse successo nulla. L'altra parte invece ha dimostrato di non aver ricevuto la ricompensa sotto forma di una transazione in grigio che non riceve mai conferme. 

Puoi vedere le statistiche dei blocchi orfani [qui](https://chainz.cryptoid.info/lyra/orphans.dws).

