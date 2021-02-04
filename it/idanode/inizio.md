# Introduzione


[IdANode](https://github.com/scryptachain/scrypta-idanodejs) (Interconnected dApp Node) è sicuramente la tecnologia più importante sviluppata da Scrypta. E' il cuore di tutte le operazioni di scrittura e lettura dei dati, nonché la principale fonte di dati per le dApp.

IdANode è un'applicazione NodeJS scritta in TypeScript con una moltitudine di funzionalità:

1.  **Blockchain explorer:** tiene traccia di tutte le transazioni e di tutti i blocchi, può essere usato al pari di un block explorer visuale.
    
2.  **Relay:** viene usato dai client (scrypta-core) per inviare le transazioni al network.
    
3.  **Data explorer:** serve da interfaccia per la lettura delle informazioni scritte sulla blockchain; questa è una delle funzionalità più importanti per lo sviluppo di dApp.
    
4.  **IPFS:** serve da interfaccia per il file system distribuito (InterPlanetary File System), utile per caricare e scaricare i dati.
    
5.  **Replica:** IdANode è la principale replica di tutte le informazioni e di tutti i file caricati sulla Blockchain di Scrypta.
    
6.  **Wallet**: può anche funzionare da "client", ovvero può compiere le stesse operazioni dei client scrypta-core, semplicemente richiamando delle API e passando le informazioni necessarie.
    
7.  **Trustlink**: le operazioni relative ai Trustlink sono gestite internamente all'IdANode, tra cui la creazione e la scrittura di informazioni da parte di un Trustlink.
    
8. **Smart Contracts**: permette di eseguire del codice esterno grazie alla virtual machine interna.

9. **P2P Network**: permette la comunicazione istantanea tra i vari client collegati attraverso `@scrypta/core`.

## Panoramica di funzionamento

Il primo script che viene chiamato è il file `Index.ts` , questo file verifica che il wallet ed il database siano raggiungibili, in caso contrario si preoccupa di avviarli ed attendere finchè non lo siano. Questo sistema garantisce un certo grado di automazione nel caso in cui qualche processo dovesse interrompersi inaspettatamente.

Dopo aver verificato che tutto sia raggiungibile, lo script inizia a controllare che le collezioni e gli indici siano esistenti, in caso contrario inizializza il database.

Dopo di che, se nel `.env` il parametro `SYNC` è `true` inizia a sincronizzare tutta la blockchain e tutti i dati inseriti all'interno.

Contemporaneamente l'applicazione Express serve le API, che saranno immediatamente disponibili, non importa se il sync è completo. Chiaramente in questo caso il set di dati disponibili non corrisponderà all'ultimo blocco.

L'applicazione Express è definita nel file `App.ts` e da lì si possono evincere tutte le varie chiamate. Queste verranno analizzate nei capitoli successivi.

## Postman
Tutti gli endpoint possono essere testati attraverso Postman. La collezione è disponibile cliccando il seguente pulsante:

[![Run in Postman](https://run.pstmn.io/button.svg)](https://documenter.getpostman.com/view/3143294/S11Ltxfq?version=latest)
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTI1NDgwMzQ0Miw5NTkwNTc5OCwtMTEzMj
M3NjgxMl19
-->