# Token Emission and Management
### Planum: from creation to management of digital assets

By accessing the platform through [https://planum.dev](https://planum.dev) you will be able to create your own token or consult the explorer for existing tokens.

The process is very fast and does not require specific or in-depth technical skills, if not an awareness of what is being done.
The process can be summarized in 4 steps:

- Login to ["Planum"](https://planum.dev) using the digital identity of Scrypta.
- Definition of the token sidechain parameters.
- Creation of the asset.
- Asset management.

## Login to Planum 

To start creating your own sidechain, you need to log in to https://planum.dev by logging in through one of the various tools developed and made available by Scrypta for the creation and management of digital identity.
For an optimal usability and safety experience it is preferable to download and use ["ManentApp"](https://manent.app) available in both versions: [web](https://web.manent.app) and mobile ([IOS](https://apps.apple.com/us/app/scrypta-manent/id1484816083)/[Android](https://play.google.com/store/apps/details?id=foundation.scrypta.manent)).

![planum](./assets/planum/manent_link.png)
This will allow you to easily create your first digital identity, or to import an existing one.
*For completeness, we invite you to consult the related [wiki section](https://wiki.scryptachain.org/developers/scryptaid).*

Once your digital identity has been created, you can log in to "Planum" with your .sid file or by using [the Scrypta ID browser extension](https://id.scryptachain.org/) (a tool that allows you to create and manage digital identities to easily use Scrypta dApps).

## Definition of the sidechain parameters

After logging in, the main interface will open where you will be asked to enter all the configuration parameters of your sidechain.
These parameters describe the attributes of your tokenized asset which will operate on its corresponding sidechain layer.

By filling in the required fields, the parameters of our sidechain will be defined:
![planum](./assets/planum/token_creation.png)

- **Asset public name:** Token Name
- **Symbol:** Token ticker
- **Total issued supply:** desired total supply.
- **Decimal division:** number of decimals in which the new digital asset is divisible.

Among the available options, users can choose whether to create a "reissuable" token (ie for which it will be possible to increase the supply even after the token is issued), or "burnable" (it is possible to reduce the supply by "burning") part or all of the tokens supply).
Pressing the **"confirm configuration"** button will open a summary window with all the parameters chosen for the creation of our sidechain.

![planum](./assets/planum/create_confirm.png)

Once your choice has been confirmed using the **"CREATE"** button, you will immediately proceed to issue your token on the Scrypta blockchain with the parameters you have chosen. The total token supply that is automatically transferred to the address corresponding to the digital identity of the token creator.

By clicking on **"Manage"** you will return to the page where the tokens issued under your Scrypta digital identity are present.

![planum](./assets/planum/token_page.png)

Clicking on the name of the token of your interest will open the token management window in question with the available options.

![planum](./assets/planum/token_management.png)

At the same time, the new tokenized asset will be made available in the balance of the digital wallet created through Manent APP under the same digital identity as the token creator.
The token will appear in the list, with all the other tokens issued or owned by the same creator, in addition to Lyra's balance (as the main chain).
![planum](./assets/planum/manent_app.png)

The balance of the new token will be present in the Manent web app
![planum](./assets/planum/manent_webapp.png)

## Asset management
Once the token has been issued and becomes visible at the main address, it can be transferred to anyone, stored in the Scrypta dApps, exchanged electronically with other tokens or with Lyra (as the network's main currency).
In accordance with our roadmap, we are already working on a platform where it will be possible to digitally exchange all the tokens issued through **"Planum"**.

Since the tokens do not have their own specific address for each sidechain, to transfer an amount of tokens it is necessary to simply know the recipient's Lyra address.
From your wallet sending window, just choose the token you want to send, the Lyra address of the recipient and the amount, just like you do when sending traditional cryptocurrencies.
![planum](./assets/planum/send_token.png)

## Costs and speed of transactions
The costs of issuing and exchanging tokens are represented exclusively by the system fees, equivalent as in other cases to 0.001 LYRA for a single transaction of 8000 Bytes (the amount of data that can be transmitted via blockchain has been recently increased by the developers from the original value of 80 Bytes).

This means that each token transfer will cost 0.001 LYRA and that the transaction fees are therefore not related to the amount of tokens that you want to generate or transfer to other users.

The transfer of assets takes place almost instantly thanks to the mempool reading performed by the [IdANode](https://wiki.scryptachain.org/developers/ida-node) which allow the validation of transactions even without the first confirmation of the network.
Validation is done at the level of [IdANode](https://wiki.scryptachain.org/developers/ida-node),thus being certain that the transmitted transaction is valid and that it is inserted in the first available block.

***

## Manent Card Integration
All digital identities and their balances can be linked to a Scrypta Card Wallet. This is a powerful and reliable tool that can be used to create secure backups of your wallet, manage your Lyra funds on a daily basis, manage digital identities and the information they contain, or it can also be used as a payment system within sidechain or physical POS.

![planum](./assets/planum/card.png)

## Video Tutorial

[PLANUM - Create TOKEN via a Sidechain on Scrypta]](https://www.youtube.com/watch?v=qWlfWYl6kfM) by Tiziano Tridico

<iframe width="560" height="315" src="https://www.youtube.com/embed/qWlfWYl6kfM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>