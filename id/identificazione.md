# Piattaforma di identificazione 

## Premessa

Il framework di identità digitale Scrypta permette l'accoppiamento di un indirizzo Lyra ad uno o più identificatori digitali e/o fisici.

Scrypta mette a disposizione un *Gateway* pubblico privacy oriented che vi permetterà di interagire con la tecnologia di identificazione. Tale *Gateway* è raggiungibile all'indirizzo: https://me.scrypta.id

Una volta entrati all'interno del sistema con il vostro `.sid` file potrete interagire con tutti gli identificatori disponibili:

    • CIE (Carta d'Identità Elettronica)
    • Mail (anche PEC)
    • Telefono cellulare
    • Google account
    • Twitter
    • Linkedin
    • Github
    • Ethereum (indirizzo ETH)

Per maggiori informazioni sul *.sid* file e il sistema di login nelle dApp Scrypta, visita la sezione [Scrypta Browser Extension](../dapps/extension-browser.md).

## Identificazione digitale

Google, Twitter, Github, Linkedin hanno un processo di autenticazione molto simile. Una volta cliccato sull'icona del servizio che si intende associare, basterà seguire le istruzioni a schermo ed autenticarsi sia sul social, sia su scrypta, inserendo la propria password.

## Identificazione con CIE

Per l'identificazione con CIE è necessario innanzitutto inserire il proprio numero di Carta d'Identità e cominciare il processo. Il sistema creerà un file (p7m) che ti inviterà a scaricare. Adesso dovrai firmare questo file attraverso un app di firma digitale come [Firmo con CIE](https://www.firmoconcie.it/). Adesso potrai  effettuare l'upload del file firmato all'interno di Scrypta ID e completare l'autenticazione.

## Identificazione con OTP (E-Mail / SMS)
L'associazione di e-mail ed sms avviene attraverso un'autenticazione a due fattori, bisognerà quindi accedere alla propria mail ed autoriazzare l'associazione, o inserire il codice ricevuto via sms, nel caso dell'associazione del proprio numero telefonico.

## Identificazione con Ethereum

Per identificare un indirizzo ETH è necessario installare [MetaMask](https://metamask.io/).
Non appena richiederete l'autenticazione  si aprirà automaticamente MetaMask chiedendovi la conferma di associazione tra Scrypta ID e il vostro account Ethereum.

![Metamask](../.vuepress/public/assets/scryptaid/metamask.png)


::: warning ATTENZIONE:
Dopo essersi autenticati associando i provider desiderati è importante effettuare un backup del file *.sid *associato al proprio indirizzo, e quindi alla propria identità digitale.
In sostanza il .sid file conterrà nuove informazioni relative al vostro *payload* di identità. 

Se utilizzate [Scrypta Browser Extension](https://id.scryptachain.org/), sarà necessario dis-asocciare il precedente *.sid* file (tramite la funzione "*Forget Identity*") e importare il nuovo, anche se fa capo allo stesso indirizzo blockchain.
:::