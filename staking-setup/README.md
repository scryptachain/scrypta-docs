# Definizione

La procedura di **Staking** comincia dall'inserimento di cryptovaluta LYRA all'interno del wallet, che deve essere collegato alla rete. 

Una volta che le monete avranno raggiunto la maturazione,  potrai cominciare a partecipare al processo di validazione dei blocchi: avvia il wallet e sbloccalo in modalità "*esclusivamente per staking*". 

Adesso il tuo nodo è pronto a competere con gli altri nodi per aggiudicarsi la validazione dei blocchi successivi. Come ricompensa per mantenere sicura la rete, ogni minuto un wallet online viene scelto per la validazione e riceve una ricompensa di stake in Lyra coin.

Dopo aver ricevuto la ricompensa, la coin age (conferme acquisite) tornerà a zero , e dovrà arrivare a maturazione nuovamente. 

Non è necessario un importo minimo per lo staking LYRA, ma avere più monete in gioco ti darà un peso maggiore, e quindi una maggiore possibilità di ricevere ricompense e con maggior frequenza.

::: tip NOTA
Il Minimum stake age  (maturazione) su Scrypta Blockchain è settato a 60 conferme (circa 60 minuti). In altri termini, le Lyra sono "mintable" dopo 60 conferme.
:::

## Come funziona
In generale, invece che i rig di mining utilizzati per le classiche blockchain Proof Of Work (come Bitcoin), il sistema **Proof of Stake**  risolve gli stessi problemi di hashing ma gli hash sono rappresentati dalla ***coin age*** (età delle monete) e dagli **UTXO** esistenti (output di transazione non spesi).

::: tip NOTA
Un output di transazione non speso (UTXO) è un hash di transazione, situato in un wallet che contiene fondi non spesi. Ogni volta che i fondi di un UTXO escono dal wallet per qualsiasi motivo, nel caso di una transazione ad esempio,  viene creato un nuovo UTXO contenente i fondi rimanenti.
:::

Consulta anche la sezione domande frequenti:
[Staking Faq](../staking-setup/staking-faq.md)

### Coin Age
La "Coin Age" (età della moneta) è una proprietà di ogni UTXO, ed è concepibile come il tempo che trascorre dal momento della creazione di un UTXO. E' espressa in numero di "conferme".

### Maturazione
Ogni volta che validi con successo un blocco, riceverai una ricompensa per mantenere sicuro il network. Quando vieni ricompensato, la Coin Age della tua UTXO vincente, contenente  X Lyra,  verrà resettata. 

Questa operazione genera una nuova UTXO nella quale riceverai X + Ricompensa allo stesso indirizzo.

::: tip Nota
Per consolidare la stabilità della rete, le ricompense di staking non sono spendibili prima di **20 conferme** (20 blocchi) e non possono entrare in staking prima di **60 conferme** (60 blocchi). Queste monete non ancora spendibili sono considerate "*immature*".
:::