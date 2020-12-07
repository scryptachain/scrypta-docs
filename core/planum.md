# Gestione Transazioni Planum

Questa sezione descriverà come utilizzare la tecnologia Planum, ovvero come gestire le transazioni, gli unspent etc. 

## usePlanum(sidechain)

La prima cosa da fare non appena iniziamo ad operare con la tecnologia Planum e ScryptaCore è scegliere la sidechain di riferimento, così che l'istanza sappia da dove andare a prendere i dati.  

Scegliamo quindi la sidechain con cui vogliamo operare, ad esempio: `6Kk2jkJ76wjZiBvDr6j1R9Ub9z9TWXBK18`

```
const scrypta = new ScryptaCore
scrypta.usePlanum('6Kk2jkJ76wjZiBvDr6j1R9Ub9z9TWXBK18')
```

## verifyPlanum()

Permette di verificare lo stato ed il consenso di una sidechain all'interno del network stabilito. Si consiglia di utilizzare questa funzionalità in accoppiamento a `scrypta.staticnodes = true` in quanto richiedere il consenso ad una rete estesa può essere un'operazione lunga. Impostando la proprietà `staticnodes` come `true` si chiede al client di collegarsi unicamente ai nodi `mainnetIdaNodes` o `testnetIdaNodes`. Di default `idanodejs01...06`.

## listPlanumUnspent(address, safe = false)

Permette di ottenere la lista degli "unspent" (USXO) di un determinato indirizzo. La risposta contiene un array di USXO che serviranno per costruire le transazioni.

Solitamente questo metodo è invocato internamente ma può essere usato per verificare ad esempio il balance dell'indirizzo.

Il parametro `safe` permette di tenere in considerazione solamente gli unspent confermati, consigliato nella maggior parte dei casi.

## sendPlanumAsset(key, password, to, amount, changeaddress = '', memo = '', time = '', safe = false, inputs = [])

Questo è il metodo principale per l'invio delle transazioni. Invoca internamente tutti i metodi elencati precedentemente.

I parametri sono descritti di seguito:

-   **key:** il payload di identità da utilizzare.

-   **password:** la password per decriptare il payload di identità.
        
-   **to:** l'indirizzo di ricezione.
    
-   **amount:** l'ammontare di token da inviare.

-   **changeaddress:** l'eventuale indirizzo di cambio, se diverso da quello di partenza.
    
-   **memo:** eventuale stringa di testo da scrivere in transazione.
    
-   **time:** il timestamp della transazione, di default viene usato lo smart contract di Proof of Timestamp, può essere usato in alternativa un timestamp prestabilito, per bloccare i token fino alla data scelta. E' importante capire che tutti gli output verranno bloccati, quindi conviene utilizzare un indirizzo intermedio dal quale inviare i token "nel futuro".
    
-   **safe:** permette di stabilire se usare solo input confermati

- **inputs:** permette di stabilire quali input utilizzare, molto utile nel caso di invio di NFT (che notoriamente fanno riferimento ad un input specifico)
    

## returnPlanumBalance(address)

Ritorna il balance dell'indirizzo richiesto. La risposta ritornerà anche l'eventuale balance bloccato nel futuro rispetto al momento della richiesta.

## returnPlanumTransactions(address)

Ritorna la lista delle transazioni dell'indirizzo richiesto.