# Playground

Il playground è sicuramente il metodo più semplice per iniziare a capire come interagire con gli Smart Contracts o svilupparne di nuovi e lo possiamo trovare a questo indirizzo: [https://playground.scryptachain.org](https://playground.scryptachain.org/#/).

Per entrare chiaramente ci servirà un'identità Scrypta, consigliamo sempre l'utilizzo di Manent Wallet Extension, che è possibile trovare [qui](/dapps/manent).

![panoramica](/assets/smartcontracts/playground.png)

## Panoramica sulle funzionalità

Entrando in piattaforma vi ritroverete con il contratto di `Hello World` già in modalità di modifica ed è possibile farlo partire ed interagirvi utilizzando i metodi esposti.

Sul lato destro invece potrete iniziare a lavorare sul codice, che ricordiamo essere Javascript, e vedere in tempo reale la pubblicazione o la modifica di un nuovo metodo.

La parte in basso invece mostra una `console` che ritornerà tutte le informazioni necessarie a far capire cosa sta facendo la virtual machine.

Il menu laterale invece mostra le altre 2 pagine disponibili, quella che riporta i tuoi contratti, ovvero quelli che hai immesso in blockchain e una parte di "discovery" che permette di interagire con i contratti realmente disponibili nel network.

## Editing locale

Usando la prima schermata si potrà quindi creare nuovi contratti locali, il codice verrà salvato all'interno del `localStorage` quindi rimarrà nel vostro PC finchè non decidete di pubblicarlo o _svuotate la cache_. Si raccomanda sempre di effettuare delle copie locali del codice o di lavorare direttamente in locale, se avete intenzione di lavorare con più serenità. Se vuoi subito passare allo sviluppo in locale degli smart contracts vai [qui](/smart-contracts/sviluppo-locale).

## Deploy di un contratto

Non appena sarete pronti per scrivere in blockchain il vostro contratto non vi resterà che premere il pulsante verde `DEPLOY`, inserire la vostra password e aspettare la conferma di avvenuta pubblicazione. Da questo momento in poi chiunque abbia un IdaNode potrà agganciarlo utilizzando il [tool di sviluppo locale](/smart-contracts/sviluppo-locale#rendere-disponibile-il-contratto) oppure l'apposito [endpoint](/idanode/smart-contracts#post-contractspin). Risulta quindi _fondamentale_ avere almeno un proprio IdaNode per mettere realmente in rete degli Smart Contracts.

## I propri contratti

Andando nella sezione dei propri contratti vedremo quindi gli indirizzi e la versione corrente per ogni nostro contratto, cliccando sul nome entreremo in modalità modifica locale. Cliccando invece l'icona "play" andremo in modalità esecuzione.


## Discovery

Andando invece nella sezione di discovery potremo interagire con ogni contratto immesso in rete, basterà cliccare l'icona "play" relativa alla riga del contratto stesso per entrare in modalità live.

Se invece vogliamo leggere il codice del contratto o utilizzarlo come "base" per un contratto locale possiamo cliccare sul `nome` e passeremo immediatamente in modalità modifica locale, utilizzando come base il codice pubblicato.