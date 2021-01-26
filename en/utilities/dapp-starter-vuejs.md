# dApp Starter

Written in VueJS, it allows you to create a Progressive Web App connected with Scrypta Blockchain.

You can download the code here:
[**dApp Starter:**](https://github.com/scryptachain/scrypta-dapp-starter). Inside you will notice a project generated through `@vue/cli`.

## Start the project in development mode

To develop the project you must first clone the repository through the command:

```
git clone https://github.com/scryptachain/scrypta-dapp-starter
```

Then you will need to go into the folder and install the dependencies:

```
cd scrypta-dapp-starter
npm install
```

Finally start the development server:
```
npm run serve
```

## Login page

Inside the starter you will find a login page that will allow you and your user to connect through a .sid file, or to generate a new one, so you can interact with the blockchain.

## Welcome page

Once logged in you can interact with the Scrypta blockchain through the library [Scrypta Core](/core) and then read, write or interact with them [IdANode](/idanode/README.md).

## Graphic Layout

The graphic layout chosen is [https://buefy.org/](https://buefy.org/) which uses the `Bulma` framework. All Scrypta dApps will conform to this graphic and UX style. It would therefore be good practice to create dApps as integrated as possible with the ecosystem.

## Deploy the dApp

Once the dApp is completed, this can be compiled through the command:

```
npm run build
```

and uploaded to an online server, a browser extension, Electron as a desktop app etc. The important aspect is that the dApps will carry out well-defined operations in the accounts of the users who activate them and will use their computational power to perform calculations or perform other operations.

If you have specific needs from the backend and database point of view, you can use the same code in a hybrid way, also using a central server.