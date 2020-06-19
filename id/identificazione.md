# Piattaforma di identificazione 

## Premessa

Il framework di identità digitale Scrypta permette l'accoppiamento di un indirizzo Lyra ad uno o più identificatori digitali e/o fisici.

Scrypta mette a disposizione un `gateway` pubblico privacy oriented, che vi permetterà di interagire con la tecnologia di identificazione. Tale `gateway` è raggiungibile all'indirizzo: https://me.scrypta.id

Una volta entrati all'interno del sistema con il vostro `.sid` file potrete interagire con tutti gli identificatori disponibili:

    • CIE (Carta d'Identità Elettronica)
    • Mail (anche PEC)
    • Telefono cellulare
    • Google account
    • Twitter
    • Linkedin
    • Github
    • Ethereum (indirizzo ETH)

## Esempio identificatore digitale

Google, Twitter, Github, Linkedin hanno un processo di autenticazione identico. Una volta Cliccato sull'icone del servizio che si intende associare, basterà seguire le istruzioni a schermo ed autenticarsi sia sul social sia su scrypta, inserendo la propria password

## Esempio identificazione con CIE

WIP

## Esempio identificatore con OTP (E-Mail / SMS)
L'associazione dell'email e dell'sms avviene attraverso una autenticazione a due fattori, bisognerà quindi accedere alla propria mail ed autoriazzare l'associazione, o inserire il codice ricevuto via sms.

WIP

## Esempio identificatore con Ethereum



::: warning ATTENZIONE:
Dopo essersi autenticati associando i provider desiderati è importante effettuare un backup del file *.sid *associato al proprio indirizzo, e quindi alla propria identità digitale. 

Se utilizzate [Scrypta Browser Extension](https://id.scryptachain.org/), sarà necessario dis-asocciare il precedente .sid file (tramite la funzione "*Forget Identity*") e importare il nuovo, anche se fa capo allo stesso indirizzo blockchain.
:::