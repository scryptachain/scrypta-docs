# SocialPay

## Introduction

### Purpose of the project - Dematerilization of shopping vouchers
During the emergency phase caused by the Covid-19 pandemic, the Scrypta Foundation released a system for the dematerialisation and management of **"shopping vouchers"**, also known as *"Tokenization"* of solidarity vouchers, for free use for all municipalities

The system, called **"SocialPay"**, is proposed as a solution for the rapid delivery by municipalities to citizens entitled to vouchers.
The entire project has been released in **open-source**, meaning that it is possible to generate everything needed to issue and manage the shopping vouchers for the Municipality in complete autonomy.

Visit [SocialPay website](https://socialpay.live/).

### What the system provides

The system provides a **management platform** supplied to each **Municipality** which allows:
- To keep track of each Card numbered and differentiated by QR-CODE.
- To connect the identity of the citizen entitled to their Card.
- To provide the digital representation of the economic value of the voucher through the Card (this digital value can be spent at the operators participating in the circuit)
- To monitor the service through real-time usage data.

The system is therefore composed of the following elements:

- A **Web-App** supplied to the Merchant which allows:
     - Acquire the payment of goods through the Card
     - View the transaction history and balance
     - Request a refund from the Municipality which will take the form of a bank transfer.

- The **Cards with QR-CODE** supplied to the Citizens entitled:
     - The Card will be delivered by the Municipality.
     - The Card will be presented by the citizen to the operators participating in the circuit to use the coupons.

## How it works

The municipality distributes a numbered ** Card ** assigned to a subject identified by the body directly to the entitled citizens.
Together with the card, it will provide a 5-digit **PIN code** which allows the exclusive use of funds.

Merchants who adhere to the digital shopping voucher system will be provided with a special
**web application** that allows them to use their **smartphone / tablet** as a virtual POS.
With the camera of the device it is possible to frame the QR-Code on the back of the Card assigned to
citizen and charge the amount corresponding to the amount of the purchase made in their business.

Citizens must still authorize the purchase by entering the PIN in the merchant's virtual POS.

Each operator through his application will be able to constantly check his digital account
where he will verify the crediting of the sums in real time.

In addition, within the web-app there is a specific function **"Request Refund"** to forward the refund request to the Municipality, which will take the form of a bank transfer.

## Features and comparison

Following is a comparative table between SocialPay and other systems for the delivery and management of shopping vouchers:

![confronto](../.vuepress/public/assets/socialpay/confronto.png)



1. **Anti counterfeiting**
   
Transactions are recorded on the blockchain, therefore it is not possible to alter them in order to increase or decrease the credit relating to the vouchers against the will of the municipality or citizen. You cannot print false coupon cards: the only cards enabled are those registered in the municipality's software.

2. **Security**
   
Since the technological infrastructure is not entrusted to a centralized supplier, as it is a decentralized system, if the Municipality or the Operator were to suffer an IT attack or have problems related to its operation, this will not affect SocialPay's functioning. The cards can be replaced and blocked easily as the municipality - or the citizen himself - can withdraw the funds at any time and track their movements in case of unauthorized transactions.

3. **Traceability**
   
SocialPay uses a blockchain infrastructure that allows effective traceability during the use of the system. On the contrary, systems based on paper vouchers are traceable only once the operator has returned the vouchers to the municipality. Other solutions based on rechargeable card are usually entrusted to proprietary software systems that make the tracking tied to the specific application and not perfectly transparent.

4. **Transaction fees in the system**
   
Transactions within the system, i.e. the sending of credit for the shopping vouchers by the municipality to citizens and from them to merchants, have no cost. System fees are paid in LYRA (0.001 LYRA, equal to a few thousandths of a euro per transaction: these are provided by the municipality and do not depend on the value of the transaction.

5. **Accountability**
   
It is managed in a simple and streamlined way, so that the municipality does not have a work "overflow". The software allows you to export the traces relating to transactions and refund requests. Refund requests are also managed through the blockchain, ensuring a high level of transparency of the PA.

6. **Economic sustainability**
   
The overall cost that the municipality must bear to adopt and maintain a voucher management system is measured not only in the supply itself but also in the support costs and possibly modification or evolutionary maintenance. The cards can be recharged without any limit, thus allowing the system to be used in the future for other use cases. Furthermore, since SocialPay is an open-source project, it can be adopted and developed independently by any body with technical expertise. Last but not least, there is no commission fee for any type of transaction.

7. **Monitoring**
   
The periodic and systematic detection of all transactions in real time, which can be carried out through the Planum explorer, makes the system totally transparent while guaranteeing user privacy. It is a useful tool for analyzing the progress of disbursements, expenses and reimbursements made.

8. **Activation speed**
   
The QR-Code technology of the cards, chosen by Scrypta, allows the SocialPay Card to be produced quickly in any type of printing shop.
Alternatively, it is possible to create a system that uses NFC Card (Nearfield Communication).

9. **Charging speed**
    
Through the Management Dashboard it is possible to reload the cards with a click in total safety and quickly.

10.  **Ease of use for the citizen**
    
Merchants who join the system are provided with a special web application which can be accessed from their smartphone or tablet (virtual POS). Once logged in, the application allows you to read the back of the Card assigned to the citizen and withdraw the amounts related to the purchase.

The citizen authorizes the purchase by entering the PIN in the merchant's virtual POS. Each operator through his web application can constantly check his digital account, and transactions.

Within the application there is also a function that allows the operator to formulate with a click the request for redemption of the cashed digital tokens, by simply sending a refund request to the Municipality, which will proceed with the balance by bank transfer.

11.  **Simplicity of management for the Municipality**
    
The municipality distributes a numbered QR-code card directly to eligible citizens. A PIN is provided with the card which allows the exclusive use of the funds.
Finally, the municipality, through a simple management dashboard, can pay contributions, even on several occasions, by recharging the same citizen card. The municipality also automatically receives requests for reimbursement from the operator and can constantly check the correct functioning of the entire process by the Management.

12. **Open Source**
    
It is possible to replicate the entire system to issue and manage the vouchers for any institution, in safety. In fact, the Scrypta Foundation makes its technology available to anyone who wants to contribute to the project. It is possible to create, in accordance with the municipal will, a copy of the project and request the insertion of the code by "pull request" on the dedicated Github:

[**https://github.com/scryptachain/socialpay**](https://github.com/scryptachain/socialpay)

Alternatively, you can request support from the Scrypta Consortium, the network contract of companies operating with Scrypta technology:

[**https://scryptaconsortium.org/**](https://scryptaconsortium.org/
)

13.  **Innovation**
    
Social Pay is a process of "tokenization" of the vouchers, which means the creation of a digital value in tokens issued within the Scrypta blockchain using Planum technology. The widespread implementation of such a service leads to significant savings for the Public Administration due to the simplification of control, distribution and payments activities certified by innovative algorithmic systems specifically designed for the validation of data transmissions.

14.  **Possibility of development for other uses**
    
SocialPay by Scrypta can be replicated for other uses and purposes, such as that of meal vouchers, gift cards, digital tickets and many other use cases in which there is an Administrator who provides the service, a reference Target that will use the cards, and "Points of Sale", also online, where you can use the issued and distributed tokens.

## Merchant guide
### Digital POS and shopping voucher cards


The **Municipality of "*nomecomune*"**, which adopts the **SocialPay** system, prepares, for eligible citizens, the **Card *"Digital Shopping Voucher"*** to be used exclusively for the purchase of basic necessities and pharmaceutical products.

The Municipality provides the Operator with a Merchant Card free of charge equipped with **QR-CODE** and protected by a specific PIN code (numeric password) which will be used for the main configuration operations and for the use of the specific web application supplied with the operator himself.

![socialpay](../.vuepress/public/assets/socialpay/card_esercente.png)

### Merchant procedures
#### Access to the system

| <div style="width:250px"></div>| <div style="width:250px"></div>|
| :---: | :---: |
| ![socialpay](../.vuepress/public/assets/socialpay/mockup_phone_01.png) | Log in by connecting to your site with your smartphone / tablet, to be used as a virtual POS: <br>[https://nomecomune.socialpay.live/](https://nomecomune.socialpay.live/).<br><br>Click on **SCAN CARD”** and capture the **QR Code** of the card that was delivered to you (Merchant Card).<br><br>You will be asked to enter the **PIN** that was assigned to you together with **CARD**.<br><br>You are now able to receive payments through **DIGITAL EXPENSES** of eligible citizens. 

::: tip <img src=".././.vuepress/public/assets/icons/tip.svg" width="32"> 
**NOTE:** For devices **iOS**browser must be used **“Safari”**, for devices **Android** you need to use **“Google Chrome"**.
:::

#### Receiving payment

| <div style="width:250px"></div>| <div style="width:250px"></div>|
| :---: | :---: |
| ![socialpay](../.vuepress/public/assets/socialpay/mockup_phone_02.png) | Access the web-app from your smartphone or tablet at the address: [https://nomecomune.socialpay.live/](https://nomecomune.socialpay.live/)<br><br>In **HOME**you will find the * keypad"* of the virtual **POS** as from image.<br><br>Enter the amount of the receipt due and press the button **PAY**.
***sEUR shown in the figure is a digital representation of the Euro.***

Now capture the QR-CODE on the back of the customer's card with your smartphone
![socialpay](../.vuepress/public/assets/socialpay/scan_qr.png)

The customer authorizes the purchase by entering his **PIN** in the virtual POS.
The transaction takes place in real time.

![socialpay](../.vuepress/public/assets/socialpay/insert_pin.png)
After making the transaction, you will instantly see a notification of the payment.

#### Balance control, transaction history and payment receipt

| <div style="width:250px"></div>| <div style="width:250px"></div>|
| :---: | :---: |
| ![socialpay](../.vuepress/public/assets/socialpay/mockup_tx.png) | Through the application, by accessing the menu via the symbol <img src=".././.vuepress/public/assets/icons/bars.svg" width="16"> and selecting **“TRANSACTION HISTORY”**, you can constantly check your balance and transactions. <br><br>There is also a specific function within this section **“REQUEST REFUND”** to forward the request to the Municipality, which will proceed with the bank transfer of the computed amount. 

#### Check refunds
| <div style="width:250px"></div>| <div style="width:250px"></div>|
| :---: | :---: |
| ![socialpay](../.vuepress/public/assets/socialpay/mockup_rimborso.png) |In the section **“REFUND MANAGEMENT**, accessible by accessing the menu using the symbol <img src=".././.vuepress/public/assets/icons/bars.svg" width="16">, you will be able to see your * pending refunds * (i.e. those requested and that the Municipality has yet to take charge) and *refunds processed* (amounts already paid by the Municipality).
::: tip <img src=".././.vuepress/public/assets/icons/tip.svg" width="32"> 
**NOTE:** With the status of ***refund processed** it is understood that the Municipality has taken over the reimbursement which will take place according to the banking schedule.
:::

#### Check City Card Balance
| <div style="width:250px"></div>| <div style="width:250px"></div>|
| :---: | :---: |
| The application allows you to check the balance of the * Customer-Card *, which can be found at all authorized merchants.<br><br> In the section **CHECK CARD**, accessible by accessing the menu using the symbol <img src=".././.vuepress/public/assets/icons/bars.svg" width="16">, Press the button **"CHECK NOW"** and capture the **QR CODE** of the customer's card.<br><br> This will display the available balance. | ![socialpay](../.vuepress/public/assets/socialpay/mockup_controlla.png)

### APPENDIX - How to access the portal via Android / IOS

#### Android
| <div style="width:250px"></div>| <div style="width:250px"></div>|
| :---: | :---: |
| ![socialpay](../.vuepress/public/assets/socialpay/mockup_android.png) | -Launch Chrome for Android and open the web page: **[https://nomecomune.socialpay.live/](https://nomecomune.socialpay.live/)**<br><br> -Access the **menu** via the symbol <img src=".././.vuepress/public/assets/icons/menu.svg" width="16"> and then **"Add to home screen”**.<br><br> - Assign the link a name and Chrome to add it to the home screen.<br><br>The icon can be moved wherever you want and the chosen site will appear, like any other app, by touching the link. <br> <br> Chrome for Android loads the website as if it were a "web app" separately from the browser, so you can open it directly from the switcher app.

#### iPhone/iPad
| <div style="width:250px"></div>| <div style="width:250px"></div>|
| :---: | :---: |
| - ALaunch Safari on Apple iOS open the web page: **[https://nomecomune.socialpay.live/](https://nomecomune.socialpay.live/)**<br><br> - For technical problems due to Apple, SocialPay cannot be used if it is added to the Home screen of the iPhone or iPad; consequently we recommend typing (or saving in favorites) the url address of the web-app. <br> <br> - We also remind you that Social Pay can only be used by the browser **Safari**. |  ![socialpay](../.vuepress/public/assets/socialpay/mockup_ios.png) 


## Guide for the citizens
### Digital shopping voucher card


The **Municipality of "*municipalityname*"** which adopts the **SocialPay** system, prepares, for eligible citizens, the **Card *"Digital Shopping Voucher"*** to be used exclusively for the purchase of basic necessities and pharmaceutical products.

Each Citizen Card is equipped with **QR-CODE** and protected by a specific PIN code (numeric password) which will be used to finalize purchases at the participating merchants.

![socialpay](../.vuepress/public/assets/socialpay/card_cittadino.png)

::: warning <img src=".././.vuepress/public/assets/icons/warning.svg" width="32">
**IMPORTANT** It is recommended to keep the Card with the utmost care as it contains truly expendable funds, and not to reveal the pin connected to the Card to anyone.:::

### How to use the Card

- Go to the affiliated point of sale and proceed with the purchase.
- When paying, show the Card to the shopkeeper who will scan the QR CODE by charging the amount spent.
- Enter the PIN of the Card in the shopkeeper's terminal to complete the purchase.

::: tip <img src=".././.vuepress/public/assets/icons/tip.svg" width="32">
**NOTE:** You can check your account balance at any affiliated store.
:::

## Management software
### Instructions

#### Access to the management system

| <div style="width:350px"></div>| <div style="width:250px"></div>|
| :---: | :---: |
| ![socialpay](../.vuepress/public/assets/socialpay/gest_accesso.png) | The login is done by loading or dragging the supplied **. Sid file ** and, immediately after, entering the associated password that has been provided to you. |

#### Dashboard del gestionale

| <div style="width:350px"></div>| <div style="width:250px"></div>|
| :---: | :---: |
|![socialpay](../.vuepress/public/assets/socialpay/gest_dash.png)|Once logged in, you will be immediately diverted to the **Dashboard (HOME Section)** which displays the general usage data. |

::: tip <img src=".././.vuepress/public/assets/icons/tip.svg" width="32"> 
**NOTE:** The wording **sEUR "burnt"** indicates that these amounts are no longer available, as they have already been sent * (burnt) * as a refund request.
:::

### User Management
The USER MANAGEMENT window consists of two sections:
- **"Upload source .csv file"**
- **"User list"**

#### Upload source .csv file
Use this section to upload multiple users simultaneously. <br> After uploading the **.csv file**, all users within the file will be added to the management system and will be available and viewable in the **"User list" section**. <br> <br> The .csv file is automatically generated during the card creation phase and will consist of the following fields: <br>
**SERIAL | WALLET | TYPOLOGY | NAME | IDENTIFIER | FAMILY CORE COMPONENTS** <br>

![socialpay](../.vuepress/public/assets/socialpay/gest_dash.png)

::: tip <img src=".././.vuepress/public/assets/icons/tip.svg" width="32"> 
**NOTE:** In case of duplicate names or data, these names will be ignored by the system.
:::

#### User list
The **User list** section allows you to view all the names entered in the system (**Merchants** and **Citizens**). <br>
In addition to the visualization, it is possible to carry out ** specific ** searches, using the available search filters. <br> In addition, from the **"ACTIONS"** column it is possible to perform additional operations on the individual user. <br> <br>
The available actions are:
- **MODIFY**
- **VIEW**
- **DELETE**
![socialpay](../.vuepress/public/assets/socialpay/elenco_utenti.png)

#### **MODIFY** Action
Through this action, indicated by the symbol <img src=".././.vuepress/public/assets/icons/draw.svg" width="16">, it is possible to modify user data.![socialpay](../.vuepress/public/assets/socialpay/modifica.png)

Once the changes have been made, click on **"Save user"** to confirm them.

#### Azione **VISUALIZZA**
Through this action, indicated by the symbol <img src=".././.vuepress/public/assets/icons/interface.svg" width="16">, it is possible to view the details of the selected user, his balance and the transaction history. <br> This section also allows you to arrange the sending of amounts in **sEUR** to the selected user. <br> The operation is **instant** and requires you to enter your password.
![socialpay](../.vuepress/public/assets/socialpay/modifica.png)

##### * Notes on transaction fees:

To carry out all transactions or refund requests, it is necessary to pay transaction fees for the blockchain infrastructure. These fees are in the order of thousandths of a euro. <br> <br>
**When loading cards** <br>
- During the card recharge phase, in order to provide each user with the possibility of carrying out operations on the network immediately, it is necessary to send a modest amount of LYRA for each user. <br>
::: tip <img src=".././.vuepress/public/assets/icons/tip.svg" width="32"> 
- It is recommended to send **0.1 LYRA** for each user (both **"Citizen"** and **"Merchant"**), sufficient quantity to carry out about 100 operations. <br> <br>
- We also recommend that you send **0.1 LYRA** for transactions whenever a "top-up" to the **"Citizen"** is provided. <br> <br>
- It is not essential to re-send LYRA for the **"Merchant"** as it will automatically receive **0.001 LYRA** every time the notification of the refund has been sent; this operation will be illustrated later in more detail.
:::

::: warning <img src=".././.vuepress/public/assets/icons/warning.svg" width="32"> 
**If you plan to carry out more than 100 transactions, it will be necessary to send a quantity of LYRA suitable for the volume of transactions envisaged.** <br>:::

#### ** DELETE ** Action
Through this action, indicated by the symbol <img src=".././.vuepress/public/assets/icons/trash.svg" width="16">, the selected user is deleted from the list. <br> It is recommended to proceed with care by checking the data before deleting.

### Transaction history
This section displays all the transactions carried out within the system.

![socialpay](../.vuepress/public/assets/socialpay/storico.png)

Within this section, using the appropriate filters, it is possible to search by **address** or **transaction**. <br> By pressing the button **"DOWNLOAD BACKUP"** it is possible to backup the transaction history in object through file in **. csv ** format (Excel). 

### Manage refund
By clicking on the **"REFUND ACCOUNT" button**, you are asked to enter the administrator password.![socialpay](../.vuepress/public/assets/socialpay/rimborso.png)<br>At this point the Merchant will receive a special notification transaction which confirms the bank transfer by the Municipality. <br> This operation is to be carried out **IMMEDIATELY AFTER** having prepared the specific bank transfer for refund. <br> < br> The operation will then be visible on the **"REFUNDED"** column (specifically the field will be automatically filled with **"YES"**).
In addition, this special transaction will credit the merchant's account with the sum of **0.001LYRA **, which will allow him to request future repayments.

Finally, this function is accompanied by the possibility of adding additional text notes that are sent to the merchant.

::: warning <img src=".././.vuepress/public/assets/icons/warning.svg" width="32"> 
**Warning**: The notes accompanying the transactions are written **in clear** in the distributed register of the Scrypta blockchain. <br> It is ** RECCOMENDED ** not to enter sensitive information, which could violate respect for privacy. <br>
:::

### Settings
Through this section it is possible to perform operations such as saving and deleting the entire user list.
To perform the **save** operation, you must click on the **"DOWNLOAD BACKUP"** button.
The generated file, in .csv format, will allow you to keep a copy of the entire user archive, and it will be necessary to import the archive again.
![socialpay](../.vuepress/public/assets/socialpay/impostazioni.png)

::: warning <img src=".././.vuepress/public/assets/icons/warning.svg" width="32"> 
** Warning **: It is **RECOMMENDED** to make backups of the user list regularly, in order to avoid or at least limit data loss. <br>
:::

To perform the **deletion** operation of the archive, it is necessary to click on the ** "DELETE ARCHIVE" button **. At this point, the entire user list will be reset.

::: danger <img src=".././.vuepress/public/assets/icons/danger.svg" width="32"> 
**Warning**: Using this function the current archive **WILL BE COMPLETELY AND DEFINITELY DELETED "**.
<br> **The cancellation cannot be canceled**.
<br> Therefore, if you have not previously backed up and deleted the data, the entire archive will go **DESTROYED**.

**PROCEED WITH CAUTION.**
:::


## SocialPay per gli sviluppatori

Il [repository "SocialPay" di Github](https://github.com/scryptachain/socialpay) a cui si fa riferimento, contiene tutto il materiale necessario ed è diviso per regioni e comuni. All'interno si trovano i file che generano tre diversi progetti:

- **Admin:** questo progetto è una personalizzazione del software di gestione Scrypta Planum Admin, che serve a gestire le sidechain.
- **Pos:** questo progetto serve a generare il front-end per i commercianti e che permette di spendere i buoni
- **Card:** questo progetto serve a generare le card wallet stampabili in formato QR code per distribuirle ai cittadini

Una cartella generica chiamata **`documentazione`** contiene tutte le presentazioni, i sorgenti grafici delle card e i prestampati legali per la convenzione con il comune.

### Operazioni preliminari

Si consiglia di scaricare le cartelle di base aggiornate dal [branch di sviluppo su Github:](https://github.com/scryptachain/socialpay/tree/development)

Dopo aver scaricato le cartelle si dovrà installare tutte le dipendenze attraverso il comando **`npm install`** all'interno di ogni sottocartella (**`admin`**, **`card`**, **`pos`**).

### Creazione della sidechain

La creazione della rappresentazione digitale di valore avviene attraverso la tecnologia Sidechain di Planum, pertanto è necesario effettuare delle operazioni preliminari prima di poter iniziare a compilare i progetti:

- Collegati a [https://web.manent.app](https://web.manent.app) e crea un nuovo account Scrypta.
Inserisci una password forte perchè questo account sarà l'account proprietario della sidechain. 

::: warning <img src=".././.vuepress/public/assets/icons/warning.svg" width="32"> 
**Importante:** Effettua il backup del file .sid e del paper wallet per sicurezza, e ricorda che sei il **SOLO** responsabile di questi dati. Custodisci questi file tenendoli al sicuro **OFFLINE**.
:::

- Ti serviranno almeno 1.001 LYRA per far partire la sidechain e dovrai versare almeno 0.1 LYRA per ogni account cittadino o esercente, se non dovessi esserne in possesso ti invitiamo ad effettuare una richiesta ufficiale all'email [info@scrypta.foundation](mailto:info@scrypta.foundation).

- Collegati su [Planum](https://planum.dev) e crea una nuova sidechain attraverso l'apposito tool di creazione. Rimandiamo ad una guida più dettagliata per eventuale supporto: https://medium.com/@scryptachain/scrypta-lancia-planum-un-sidechain-layer-per-lemissione-di-tokenized-asset-ee156d300f4d. 

**I parametri consigliati per la creazione sono i seguenti:**
```
nome: SocialPay - Comune di ...
ticker: sEUR
decimals: 2
supply: Quantità da assegnare
reissuable: true
burnable: true
```

- Dopo che avrai generato la sidechain dovrai appuntarti l'indirizzo univoco, che ti servirà per collegare le applicazioni alla tua sidechain. Questo indirizzo puoi trovarlo sempre su [https://planum.dev/#/explorer](https://planum.dev/#/explorer) alla riga corrispondente, sotto la colonna **`address`**.


### Compilare la parte di amministrazione

Il software di amministrazione è un progetto electron e dovrai modificare il file sotto **`admin/config.json`** inserendo i parametri richiesti e dovrai inserire i loghi del comune di riferimento nella cartella **`admin/public`**.

Dopo aver modificato tutto il necessario è possibile provare in anteprima il software attraverso il comando **`npm run electron:serve`** oppure creare la build vera e propria con il comando **`npm run electron:build`**.

### Compilare il web PoS

Il web PoS è un progetto VueJS e dovrai modificare il file sotto **`admin/config.json`** inserendo i parametri richiesti e dovrai inserire i loghi del comune di riferimento nella cartella **`admin/public`**.

Dopo aver modificato tutto il necessario è possibile provare in anteprima il software attraverso il comando **`npm run serve`** oppure creare la build vera e propria con il comando **`npm run build`**.

La cartella di distribuzione **`dist`** dovrà essere pubblicata all'interno di un server Apache. E' fondamentale che venga installato un certificato SSL, consigliamo il servizio gratuito [https://letsencrypt.org/](https://letsencrypt.org/) che potrà fornire un certificato SSL gratuito.

### Creare le card wallet

Le card wallet vengono create attraverso lo script NodeJS presente nella cartella **`card`**. E' necessario modificare i file grafici nella cartella **`assets/`** al fine di personalizzare le card per il vostro comune. Il progetto genererà sotto la cartella **`prints/`** il numero di card richieste ed il solo QR Code ad mandare eventualmente alla tipografia.

Un altro file **`out.csv`** verrà creato e conterrà tutti i PIN necessari a sbloccare le card. Questo file dovrà essere conservato gelosamente offline e servirà per importare le anagrafiche all'interno del software di amministrazione. Per caricare le anagrafiche si dovrà eliminare la seconda colonna.

Per generare le card e il documento PIN accompagnatorio si deve modificare il file **`config.json`** inserendo i riferimenti necessari e dare il seguente comando **```node index.js -g=100```**. 
Per modificare la quantità è necessario modificare il numero **`100`** con la quantità desiderata. E' molto importante fare un backup della cartella **`prints`** e del file **`out.csv`** in quanto questi file vengono cancellati ad ogni nuova generazione.

## Contribuire al progetto

Se vuoi contribuire al progetto puoi creare, in accordo con la volontà comunale, una copia del progetto e richiedere l'inserimento del codice tramite Pull Request nel github dedicato:

[SocialPay Github](https://github.com/scryptachain/socialpay).

All'interno delle cartelle troverai un file **`config.json`** che ti permette di configurare i parametri di base. Questi comprendono principalmente le modifiche grafiche, di titoli e, chiaramente, permettono di collegare la sidechain tramite indrizzo univoco.

Si consiglia di forkare questo progetto e aggiungere il proprio comune così da darne evidenza a tutti i contributori del progetto. Qualora non trovassi la cartella della tua regione, dovrai crearla tu stesso.

Alla fine del processo di aggiunta e creazione del progetto per il tuo comune potrai richiedere l'aggiunta nel repository ufficiale tramite pull request.

## Supporto

Se hai bisogno di aiuto per integrare il progetto o trovi bug da risolvere, puoi aprire una issue su [github socialpay](https://github.com/scryptachain/socialpay), scrivere a [info@scrypta.foundation](mailto:info@scrypta.foundation), o contattarci tramite [i nostri social](../general-info/link.md#social-media) ti risponderemo al più presto.

## Video Tutorial

[**Buoni Spesa? Basta Sprechi! Usiamo la BLOCKCHAIN!**](https://www.youtube.com/watch?v=oRNoxwsRG5M) di Tiziano Tridico


<iframe width="560" height="315" src="https://www.youtube.com/embed/oRNoxwsRG5M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>