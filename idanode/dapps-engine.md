# dApps Engine

dApps Engine is the system through which dApps (Decentralized Applications) can be loaded directly onto the blockchain. If even in a _alpha_ release, the engine allows you to load (IdANode side) and execute (client side) the code and the dApps.

The philosophy of Scrypta is to start the dApps directly in the user's device so as not to overload the network (even if large) and avoid the bottlenecks that would result from the use of large-scale "cloud" computational power. In fact, the idea is that the nodes must interface with the Blockchain and the dApps must be run by the devices. The interaction between the two occurs precisely thanks to the IdANodes, which allow reading and writing operations and which can always be started locally.

The dApps, in fact, are loaded on IPFS while the folder containing the files is written on the blockchain. Since the folder is represented by a hash, it will change every time changes are made. These changes can in turn be written in the same address, so as to have a sort of versioning that can be consulted on the blockchain. The actual authenticity of the update depends on the fact that only the developer will have the private key of the address.

These operations, which are currently being done manually, can be carried out through a graphical interface in the Developer Portal which is under construction.

We can define the dApps Engine as a point of arrival for the entire ecosystem. It will be enhanced and made a stable product over the next few months. Here you can follow the development from the dedicated repository:
https://github.com/scryptachain/scrypta-dapps-engine


## [POST] /upload

The only endpoint available at the moment is the `upload` of dApps and consists of two steps:
1) Upload of the folder with the files on the IdANode.
2) Saving the transaction containing the information of the dApp.

These operations could be done through dedicated endpoints`/ipfs/upload` e `/write`.

The data to be sent are as follows:
- **files [mandatory]:** the dApp files, sent via form-data
- **dapp_address [mandatory]:** the address of the dApp
- **private_key [mandatory]:** the private key of the address

we review the possibility of inserting further data fields in the future to identify the dApp of the type `version`,` dApp name`, `logo` etc. This will serve to create a sort of decentralized dApp explorer where anyone can actually publish dApps.

The endpoint response, if everything has been correctly validated, will be like that of the write operation:
```
{

	"uuid":  "ee0e4794.7b69.476a.a49b.c4bdaa078ab6",

	"address":  "LdRQokR1i3XDtj1V3jnCRqMPrVc7sYkeE2",

	"fees":  0.002,

	"collection":  "",

	"refID":  "",

	"protocol":  "dapp://",

	"dimension":  107,

	"chunks":  2,

	"stored":  "*!*ee0e4794.7b69.476a.a49b.c4bdaa078ab6!*!!*!!*!dapp://*=>QmeHZ86FBr2nZ6fdQk32qkXQXCs6wELE6Ldo584k3TWLMA*!*",

	"txs":  [

		"f76cb402f844f4b11566b5ace76f7f94559febcf17a757f2079ed1e2a8ccd2a6",

		"5382ee73823a8676320fb554a43d78928c80babb72509d79d4b5d089483743c7"

	]

}
```

Analyzing the data entered, that is `QmeHZ86FBr2nZ6fdQk32qkXQXCs6wELE6Ldo584k3TWLMA` through the endpoint `/ipfs/ls/QmeHZ86FBr2nZ6fdQk32qkXQXCs6wELE6Ldo584k3TWLMA` we will see that it actually contains our newly loaded folder:
```
[

	{

		"hash":  "QmaWcMiVPLMePAspNqhY7U4ByDDmuTKDitogWDwUCoo49x",

		"path":  "QmeHZ86FBr2nZ6fdQk32qkXQXCs6wELE6Ldo584k3TWLMA/dapp.js",

		"name":  "dapp.js",

		"depth":  1,

		"size":  204,

		"type":  "file"

	},

	{

		"hash":  "QmYFPVBraRnzMguR7SwyKMtvo2ZzUThUAcrRkQ1TEv6Mci",

		"path":  "QmeHZ86FBr2nZ6fdQk32qkXQXCs6wELE6Ldo584k3TWLMA/index.html",

		"name":  "index.html",

		"depth":  1,

		"size":  1042,

		"type":  "file"

	},

	{

		"hash":  "QmQVKoAs9nxjRfawb6ALhZNEzpR5RFBgN7FeJdAZYWdN8h",

		"path":  "QmeHZ86FBr2nZ6fdQk32qkXQXCs6wELE6Ldo584k3TWLMA/logo.png",

		"name":  "logo.png",

		"depth":  1,

		"size":  2381,

		"type":  "file"

	},

	{

		"hash":  "QmYzaWGQM7b224S8taaiVVUzt1h56tudncDn7Ds45G7wcV",

		"path":  "QmeHZ86FBr2nZ6fdQk32qkXQXCs6wELE6Ldo584k3TWLMA/scryptacore.js",

		"name":  "scryptacore.js",

		"depth":  1,

		"size":  477293,

		"type":  "file"

	}

]
```

We can actually find that the dApp works and is loaded directly by IPFS thanks to our service: https://scryptad.app/LdRQokR1i3XDtj1V3jnCRqMPrVc7sYkeE2

As you can see, the address that wrote the information is actually recalled`LdRQokR1i3XDtj1V3jnCRqMPrVc7sYkeE2`and, in the background, the following operations occur:

1) The address `LdRQokR1i3XDtj1V3jnCRqMPrVc7sYkeE2` is read and the last data is requested.
2) The folder is read, as seen above, and the **index.html** file is served. If the file does not exist it will return an error.
3) All other assets are shown, always reading them from IPFS.

From this moment on, your device (if run from a browser) will have a cached copy and the computational power of the device will actually be used. In no case are these files downloaded to the dApp engine, which will therefore remain lean and serve all assets on-the-fly.

This is a typical engine log:
![](../.vuepress/public/assets/dappengine/npmstart.png)
As you can see, all the steps just described are carried out.

**Congratulations, you have finally created a decentralized application!**
<!--stackedit_data:
eyJoaXN0b3J5IjpbNDc3MjgwMTIzLDUyNzE3ODM2NiwtNzgxMz
c4MjYzLDkwNzM2ODg1OSw1NTU1NDY2MjddfQ==
-->