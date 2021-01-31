# Scrypta Smart Contracts

Gli Smart Contracts all'interno della Blockchain di Scrypta sono considerati a tutti gli effetti come *un'estensione* dell'IdaNode che permette di creare funzionalità aggiuntive.

All'interno dell'IdaNode viene richiamato il modulo npm `@scrypta/vm` che permette di creare un ambiente trustless virtuale, e che consente allo smart contract di eseguire codice all'interno della macchina che lo ospita.

Qui il link alla repository della Scrypta Virtual Machine: https://github.com/scryptachain/scrypta-vm

## Disclaimer: cosa sono gli Smart Contracts e cosa non sono.

Sebbene gli `Smart Contracts` prendano tutti, nell'immaginario comune, le caratteristiche di quelli di Ethereum è bene **sottolineare** che Scrypta non ha preso spunto direttamente dagli Smart Contracts di Ethereum e quindi l'approccio agli stessi non può avvenire con i preconcetti del mondo Ethereum.

In breve cercheremo di descrivere cosa sono e cosa non sono gli Smart Contracts su Scrypta:

## Cosa non sono
- Non sono gli Smart Contracts di Ethereum
- Non sono automaticamente ospitati in tutti i nodi della rete (IdaNodes)
- Non possono gestire fondi in LYRA o detenere chiavi private
- Non scrivono informazioni per conto dell'utente, è l'utente che scrive informazioni all'interno della blockchain, lo smart contract può *validare* delle informazioni e mantenerne lo stato oppure essere richiamato da un dato scritto direttamente in blockchain dall'utente
- Non sono un'entità unica (gli smart contracts coesistono in tutti gli IdaNode che li replicano e non possono che concordare sullo stato in un determinato blocco)

## Cosa Sono
- Sono realmente automatici, ovvero si auto-eseguono ogni blocco o alla ricezione di un'informazione in mempool
- Sono immutabili ma aggiornabili, ovvero il codice è immutabile (perchè pubblicamente esposto all'interno di una transazione), ma può essere aggiornato pubblicando una nuova versione. L'aggiornamento è affidato ad ogni proprietario di IdaNode.
- Sono semplici, si scrivono con Javascript ed espongono i propri metodi per mezzo dell'IdaNode.
- Sebbene non possano scrivere per conto dell'utente, possono *generare* transazioni formalmente valide e demandare la firma ed il broadcast all'utente.
- Prevedono delle funzionalità di `consenso` per cui ogni client può richiedere se quel nodo è attendibile o meno.

Chiariti questi concetti di base possiamo iniziare possiamo procedere con la spiegazione della [Scrypta Virtual Machine](scrypta-virtual-machine.md).