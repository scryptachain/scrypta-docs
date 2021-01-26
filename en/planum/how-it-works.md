# How Planum works

## A closer look at sidechain technology

The token creation process consists of the following steps, managed automatically by the [IdANode](https://wiki.scryptachain.org/developers/ida-node):

### Definition of the Genesis fields.
- Creating a new address from the [IdANode](https://medium.com/developers/ida-node).
- Creation of the [Trustlink](https://wiki.scryptachain.org/developers/ida-node/trustlink).
- Sending a minimum of 1 LYRA by the owner to [Trustlink](https://wiki.scryptachain.org/developers/ida-node/trustlink).
- Writing on the blockchain of the Genesis transaction.
- Sending the entire token supply from the [Trustlink](https://wiki.scryptachain.org/developers/ida-node/trustlink) to the creator of the sidechain.

The [Trustlink](https://wiki.scryptachain.org/developers/ida-node/trustlink) is a multisignature address, generated from two or more standard addresses, created between the user who wishes to issue the token and the IdANode called up for the creation of the tokenized asset.
To guarantee the uniqueness, horizontality and non-replicability of the sidechain, the address is generated *on-the-fly* and its private key is destroyed immediately after writing the first genesis transaction.

When the Trustlink transfers the entire token supply to the owner, it will be possible to send transactions using the first transaction as USXO, the correspondent of UTXO but related to the sidechains).

When the Trustlink transfers the entire token supply to the owner, it will be possible to send transactions using the first transaction as USXO, the correspondent of UTXO but related to the sidechains).

> We therefore focused on creating a replica of the UTXO system using the Scrypta blockchain as a database and delegating the validation of the transactions directly to the [IdANode](https://medium.com/developers/ida-node) and to other clients such as [Manent App](https://medium.com/manent-scrypta-blockchain-wallet/manent-mobile-app).
All information entered and written in the blockchain is validated by the [IdANode](https://wiki.scryptachain.org/developers/ida-node) and made available from the database of the [IdANode](https://wiki.scryptachain.org/developers/ida-node) themselves, just like other information.

## Issuing a new token

One of the first problems addressed in the Scrypta Sidechain protocol concerns the uniqueness of the token and, consequently, the secure issue of the token itself. The uniqueness of the token cannot be delegated to the user-creator, as he could maliciously try to "copy" another token to check its balance.

The solution to this problem occurred by introducing the Trustlink in the creation process. The Trustlink is created between the user who wants to issue the token and the IdANode that is invoked. To ensure the uniqueness, horizontality and non-replicability of the Sidechains we decided to generate this address * on-the-fly * and burn the private key immediately after writing the first genesis transaction.

### Genesis transaction

The necessary fields, defined by the user, for the genesis of the token are the following:

 - **name**: The name of the token, this is a purely descriptive field and uniqueness is not guaranteed. For your and your users' safety, generate a name characterizing the project.
 - **symbol**: alphanumeric token ticker.
 - **decimals**: The potential division of the token. It can also be `0`, in which case the token will not be divisible.
 - **reissuable**: If the token has a fixed supply or it can be reissued.
 - **burnable**: Whether the token can burn out or not.
 - **version**: The version of the protocol. At the moment the version is `1`.

It is possible to test the issue of a sidechain directly via the interface at this link:
 [https://sidechain.scryptachain.org/#/create](https://sidechain.scryptachain.org/#/create)

### Creation process

The creation process involves the following steps:

 1. Definition of genesis fields
 2. Creation of a new address by the IdANode
 3. Trustlink creation
 4. Sending a minimum of 1 LYRA by the owner to the trustlink
 5. Genesis transaction writing on the blockchain
 6. Sending the entire supply by the Trustlink to the Sidechain owner

From the moment the Trustlink *transfers* the entire supply to the owner, it is possible to start making transactions using as **USXO** (Utxo related to the sidechain) this first transaction.

### Example of issue

Here is the typical IdANode response following the creation of a new token:

```
{
    "issue": {
        "genesis": {
            "name": "tScryptaToken",
            "supply": 100000,
            "symbol": "TST",
            "decimals": "8",
            "reissuable": "false",
            "owner": "LdRQokR1i3XDtj1V3jnCRqMPrVc7sYkeE2",
            "pubkey": "027460a5f721e97f5e241d9767fb1b7fd778892e7c40684b79fcb4420d07d240e0",
            "version": "1",
            "time": 1574499539348
        },
        "signature": "ad6af516d89d9610e17296d10b63d2bd26bb34cd29157860f8d68314f469b2dd521d16c969d8fbd9af5b377b18095f9716b1f1de782662f33d74f585295d210e",
        "pubkey": "027460a5f721e97f5e241d9767fb1b7fd778892e7c40684b79fcb4420d07d240e0",
        "sxid": "325179d9602bd342c2e5fa15771d5f1490e519f2560eef752bf5c9a6f592cdd5"
    },
    "funds_txid": "810dba7c891220058c9745942177651751ac0a33a2494317884829fe10c85520",
    "sidechain": {
        "uuid": "f7757e33.9892.4d5c.8de8.977a95f65a57",
        "address": "6RQ54yHx2dARWkN8Biiw3gDjb4sB5hSHSH",
        "fees": 0.009000000000000001,
        "collection": "",
        "refID": "",
        "protocol": "chain://",
        "dimension": 618,
        "chunks": 9,
        "stored": "*!*f7757e33.9892.4d5c.8de8.977a95f65a57!*!!*!!*!chain://*=>{\"genesis\":{\"name\":\"tScryptaToken\",\"supply\":100000,\"symbol\":\"TST\",\"decimals\":\"8\",\"reissuable\":\"false\",\"owner\":\"LdRQokR1i3XDtj1V3jnCRqMPrVc7sYkeE2\",\"pubkey\":\"027460a5f721e97f5e241d9767fb1b7fd778892e7c40684b79fcb4420d07d240e0\",\"version\":\"1\",\"time\":1574499539348},\"signature\":\"ad6af516d89d9610e17296d10b63d2bd26bb34cd29157860f8d68314f469b2dd521d16c969d8fbd9af5b377b18095f9716b1f1de782662f33d74f585295d210e\",\"pubkey\":\"027460a5f721e97f5e241d9767fb1b7fd778892e7c40684b79fcb4420d07d240e0\",\"sxid\":\"325179d9602bd342c2e5fa15771d5f1490e519f2560eef752bf5c9a6f592cdd5\"}*!*",
        "txs": [
            "928eb4a8e0cc5ab73e625e0d33c3a0de0c81af843cdc4d33d4823908dbc86b8e",
            "a52efca66ffcb1513cb0c8ec74641c4d551a9057d179ce4b41af88ee70c21939",
            "4fca012f893cc8e13ad1bb4907d4c2ecafd7be920e335d7d56bd4c0e1bfb4e62",
            "c1135d8b98186d6e30e5093d0e01434f784ac14cd9a2837dcc1fb028cdbcc814",
            "30e1388c44da9b0094e6f25e09b3b7630dcd060d2c33a63ea48b42fc08eaa531",
            "13cf04afd9b1717df94749029de08dd14dc3f41bff9a129d1edd578b636e726c",
            "36becc354ab609536c9bd939ba310f3f83e4e6a7f1b037fabb7c6a3d0203b731",
            "0b00c5779a40b88c2ab610ae4bfa4e30f74bfd8a01bdfc915a930f7ba64b31e1",
            "28e6c27cf9436f3ea90848d71f568faaee8148de65ba143c8b94b520dc6e4ccb"
        ]
    },
    "genesis": {
        "uuid": "aa0bfac6.9c04.4e7a.9357.a97ce85db56f",
        "address": "6RQ54yHx2dARWkN8Biiw3gDjb4sB5hSHSH",
        "fees": 0.008,
        "collection": "",
        "refID": "",
        "protocol": "chain://",
        "dimension": 583,
        "chunks": 8,
        "stored": "*!*aa0bfac6.9c04.4e7a.9357.a97ce85db56f!*!!*!!*!chain://*=>{\"transaction\":{\"sidechain\":\"6RQ54yHx2dARWkN8Biiw3gDjb4sB5hSHSH\",\"inputs\":[{\"sxid\":\"325179d9602bd342c2e5fa15771d5f1490e519f2560eef752bf5c9a6f592cdd5\",\"vout\":\"genesis\"}],\"outputs\":{\"LdRQokR1i3XDtj1V3jnCRqMPrVc7sYkeE2\":100000}},\"pubkey\":\"027460a5f721e97f5e241d9767fb1b7fd778892e7c40684b79fcb4420d07d240e0\",\"signature\":\"55617773eef21c3526bc96e3002b229b4cd59c2f5511971171cef1a5665bc47d4e9c26ad057c0a6a964707224aac3a4b85e78756b3a9430c1ebe86a31bd140e3\",\"sxid\":\"60cc5945f43cf91f12b5214fb402228106003aec857f867b8ab6624d7e410f1e\"}*!*",
        "txs": [
            "9dacba6935fa0bbcca9b2dd53434634c7d2c1bbc624539daf4c24f12da6098ca",
            "a8ae6fc8316b5f46788570517a92bb73d7c30ef97448339ba266aa541f2d7601",
            "2382f1382371727d3f343446430734592a35a607fd85f22bdca9923f61b5243b",
            "651c30212f6e8cf4bbc2f433e3be2cfe092960737ca78a29f6f3705c8cf54c5e",
            "15b5e6285914becc4fd04441a7fffb75f54b809d9c1957030b110b980c823cf2",
            "6aaad72ae7198eda3496dd136cce24817ecc78bc63a188bdac6e15800ca58e09",
            "683d56b318db63cde7513b4633da31216045f18db446db2952cb393ee89d8e4d",
            "ce17605b2d0cba97adbe0d4d665b217974c5667a59b8a74f0c092de2b9b8fe4a"
        ]
    },
    "issued": true
}
```

### Reissue process

If we have established that the token is indefinite, the owner will be able to create transactions similar to the genesis transaction to reissue the token later. The choice to create a fixed or variable supply token is solely up to the user. This setting cannot be changed later.

The process of reissuing the token is very simple: you need to call the `/sidechain/reissue` endpoint, as described in the section on IdANodes, by sending the following fields:

- **dapp_address**: The owner's address.
 - **sidechain_address**: The sidechain address.
 - **private_key**: The owner's private key.
 - **pubkey**: The owner's pubkey.
 - **supply**: The amount of tokens you want to reissue.

The response of this call will be very similar to that generated by the genesis:

```
{

	"reissue":  {

		"reissue":  {

		"sidechain":  "6VheKpdJZD7dv6xCP8cEgaXFAMZ7HtgMvK",

		"owner":  "LdRQokR1i3XDtj1V3jnCRqMPrVc7sYkeE2",

		"supply":  1777,

		"time":  1577088825519

		},

		"signature":  "2e8dad74fb222f7d6f081d87287cc8fbeaf338c27dd3b43a5c162ae31439519f079812a7e84565a3c8e34a342d8638ff157900e1ae946178476c23d85cad602a",

		"pubkey":  "027460a5f721e97f5e241d9767fb1b7fd778892e7c40684b79fcb4420d07d240e0",

		"sxid":  "ea772733c8c7e87f08d30e7774b4e6181e3fcac2b002cb1e3ea6746f5ed3724f"

	},

	"written":  {

		"uuid":  "1b9189ec.f58a.4c55.afb6.4da23564a8a4",

		"address":  "LdRQokR1i3XDtj1V3jnCRqMPrVc7sYkeE2",

		"fees":  0.007,

		"collection":  "",

		"refID":  "",

		"protocol":  "chain://",

		"dimension":  499,

		"chunks":  7,

		"stored":  "*!*1b9189ec.f58a.4c55.afb6.4da23564a8a4!*!!*!!*!chain://*=>{\"reissue\":{\"sidechain\":\"6VheKpdJZD7dv6xCP8cEgaXFAMZ7HtgMvK\",\"owner\":\"LdRQokR1i3XDtj1V3jnCRqMPrVc7sYkeE2\",\"supply\":1777,\"time\":1577088825519},\"signature\":\"2e8dad74fb222f7d6f081d87287cc8fbeaf338c27dd3b43a5c162ae31439519f079812a7e84565a3c8e34a342d8638ff157900e1ae946178476c23d85cad602a\",\"pubkey\":\"027460a5f721e97f5e241d9767fb1b7fd778892e7c40684b79fcb4420d07d240e0\",\"sxid\":\"ea772733c8c7e87f08d30e7774b4e6181e3fcac2b002cb1e3ea6746f5ed3724f\"}*!*",

		"txs":  [

		"24148a68dbe4559e153feb6c0c2e022305c54f1f818db7299dbd8a1bcdec0e63",

		"9937b70c439d8e410ceac564d431b9f80e89e715c965c50bfcc262d447777997",

		"bb5828f381f0e7119cb9f4bc1848eddfd62fe06f843bbfa986a7da7724c49d16",

		"ef109c64273d28dcfc20bf2d35b353135b022e2dc68a0e6cf4a5f173c862a23d",

		"94cecbfd4a9ebb1382756bf9152b84fd9e3077c5e553218a5480d6f0a8235725",

		"d84e5b8cadf5675c48cf8e6d6fb756389b1a9038923b58bc98e2d973cd300261",

		"39437091ef99967049b5c89d1aa3a9bf8b44bc1c1d411c10893bcfb361bb9cbe"

		]

	},

	"unspent":  {

		"uuid":  "1b9189ec.f58a.4c55.afb6.4da23564a8a4",

		"address":  "LdRQokR1i3XDtj1V3jnCRqMPrVc7sYkeE2",

		"fees":  0.009000000000000001,

		"collection":  "",

		"refID":  "",

		"protocol":  "chain://",

		"dimension":  602,

		"chunks":  9,

		"stored":  "*!*bb315710.22ff.426c.b1a7.f20796c37eaf!*!!*!!*!chain://*=>{\"transaction\":{\"sidechain\":\"6VheKpdJZD7dv6xCP8cEgaXFAMZ7HtgMvK\",\"inputs\":[{\"sxid\":\"ea772733c8c7e87f08d30e7774b4e6181e3fcac2b002cb1e3ea6746f5ed3724f\",\"vout\":\"reissue\"}],\"outputs\":{\"LdRQokR1i3XDtj1V3jnCRqMPrVc7sYkeE2\":1777},\"time\":1577088826253},\"pubkey\":\"027460a5f721e97f5e241d9767fb1b7fd778892e7c40684b79fcb4420d07d240e0\",\"signature\":\"e86612bbf59a80ed7367aa67aa10d30445c4515080f2804586b9a50d7a959c4e00abf17dc2375fb5aa75d62942ca785556ab51a6663226c5dd47f83fc2759462\",\"sxid\":\"0b3f0ec772b9cbef01cb67c824a982c30924e5c5b75ccdf95bacf283c0ed759e\"}*!*",

		"txs":  [

		"1982ec304e4d35d652e9e02d5e240b15ae07c23e37c2c681f56a832f915e5352",

		"7917b069d4262a21d1628542aa34acfa7e925248c2a51af0cc5cd304ce148a62",

		"ccec9488c6a2baed342d1f8d63affa65bc20f589a55c05482c44e0955b38acb3",

		"63dd3734a2feee14070bb71cda507b7cc36100e6ae1407f559d06bb93bf1c6fe",

		"404f2a35ac4ea8e2866f960b5a9c9e8e33ff061853a04b65ce3215088aebb02f",

		"89c5ce47285da1bff8cbda226912169992011cf4813fa3d9ee9374817ec84b0c",

		"29ddcf7ce7effbbc4b6f8a34d4bea569c61be0afa7c842258a784fd8f78ac3aa",

		"595b7cc6e09ea8cf1a14609628340fce2fe410624a77db29b0d739af412a5ae3",

		"8b71443058da520f1b34c764e44404d686092be2affd5449723f3eea34bff9bd"

		]

	},

	"status":  200

}
```
## Transactions

As mentioned above, Sidechain transactions are in all respects comparable to the transactions of the mother blockchain. The only difference is that the set of **USXO** will be relative to the sidechain and therefore the funds will only be within a specific sidechain.

Transactions also follow the usual signature and hash processes. As a result we will for all intents and purposes have * TXID * identifying transactions, called **SXID**. From now on, we will refer to SXID as the sidechain transaction id.

A typical transaction should contain the following properties:
- **Inputs:** an array of unspent sidechain transactions (USXO) whose total is greater than or equal to the amount you want to send.
- **Outputs:** an object containing the reception and exchange addresses. Recall that on Scrypta the changes coincide with the main address.

This payload will be signed with the private key of the sender's address and hashed. This information will be written to accompany the transaction within the mother blockchain.

If everything is correct and the transaction passes the IdANode validations, all unspent inserted in the input will be canceled and two different outputs will be created, one for the receiver and one for the sender with the change.

Here is an example of a transaction correctly sent to the network:

```
{"uuid":"4c277865.a9bd.401f.856d.22f93c8905fe","address":"LchzGX6vqmanceCzNUMTk5cmnt1p6knGgT","fees":0.011000000000000003,"collection":"","refID":"","protocol":"chain://","dimension":755,"chunks":11,"stored":"*!*4c277865.a9bd.401f.856d.22f93c8905fe!*!!*!!*!chain://*=>{\"transaction\":{\"sidechain\":\"6RQ54yHx2dARWkN8Biiw3gDjb4sB5hSHSH\",\"inputs\":[{\"sxid\":\"e861776c7bb7425da282930572add577deeb5581e0c6b5dd29640ff2a9305f99\",\"vout\":1,\"address\":\"LchzGX6vqmanceCzNUMTk5cmnt1p6knGgT\",\"amount\":78,\"sidechain\":\"6RQ54yHx2dARWkN8Biiw3gDjb4sB5hSHSH\",\"block\":481918}],\"outputs\":{\"LNmYWqaU5qrZcHxCA2vVTMmvKcaXBdjKUZ\":50,\"LchzGX6vqmanceCzNUMTk5cmnt1p6knGgT\":28},\"time\":1574678683857},\"signature\":\"5bd8a9a7a0a095ebd9ab2c5c975a17a7da4d7e037e7bfe43ac4c22192414c70a77e160c353d262258744389c66bfdef50321409ed486c5eba4a74aaf7cb41be4\",\"pubkey\":\"030249ca95b9d10701d9dfb08cb43b79ee229c3c621a9d17b84320b61690e87d09\",\"sxid\":\"0ac9210cd4dbd08550a1ca7501ed7336c6ee1e0700791518ff7c3bdbaa0db22f\"}*!*","txs":["392c18024bda9ebd4b4b262f3e7eee45fbb30013d269bfc8c5763fd6428bc1e3","5caf0aea531033fa98d6de7583cb44e4ee1f5142e658d516bd0a5411ad1ead8d","a5d86c01fe0defe34384192f86bb0facd31553e6207f0d68a792f0091ac8959d","9cc44baa27a143a172e06b92d14ab78be258c5542a64082c61d519b1609decc8","e68278d57812d8bd9a2feaa8fb6500f3d8f3d571752522364d1589d180f86823","7138611a8a05c87b1eedcaaaf38f302e592fbbee83f19cdaed86298046967f39","01e94a0f7ca0592abe11a13afae637255179897eb87a363e3a21a2ddfffad593","4723b75d2407600b2bf44bc8ea1add04fb3fbb3c143fe73b49a9fe02689590d6","14bb910eaaddeeaa984516a28cf1a84bf955b14df903a1c89874f347ea83c01a","5dc99e59492dd6ad1a036000ba527219292b91116bce40315b6bec65dd620324","e084067f8d60a8bd725b97960afdfae856c4c007b9158e2934cfed0405aae1af"]}
```
