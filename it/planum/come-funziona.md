# Come Funziona

## Uno sguardo più approfondito sulla tecnologia sidechain

Il processo di creazione dei token si compone dei seguenti step, gestiti in modo automatico dagli [IdANode](../idanode/inizio.md):

### Definizione dei campi di Genesi.
- Creazione di un nuovo indirizzo da [IdANode](https://medium.com/developers/ida-node).
- Creazione del [Trustlink](../idanode/trustlink.md).
- Invio di un minimo di 1 LYRA da parte dell’owner al [Trustlink](../idanode/trustlink.md).
- Scrittura su blockchain della transazione di Genesi.
- Invio dell’intera token supply dal [Trustlink](../idanode/trustlink.md) al creatore della sidechain.

Con [Trustlink](../idanode/trustlink.md) si definisce un indirizzo multisignature generato da due o piu’ indirizzi standard, e viene creato tra l’utente che desidera emettere il token e l’IdANode richiamato per la creazione dell’asset tokenizzato.
Per garantire l’unicità, l’orizzontalità e la non replicabilità della sidechain, l’indirizzo viene generato *on-the-fly* e la sua chiave privata viene distrutta immediatamente dopo aver scritto la prima transazione di genesi.

Nel momento in cui il Trustlink trasferisce l’intera token supply all’owner, sara’ possibile inviare transazioni usando la prima transazione come USXO, il corrispondente dell’UTXO ma relativo alle sidechain).

> Ci siamo quindi focalizzati a creare una replica del sistema di UTXO usando la blockchain di Scrypta come database e delegando la validazione delle transazioni direttamente agli [IdANode](https://medium.com/developers/ida-node) e agli altri client come [Manent App](https://medium.com/manent-scrypta-blockchain-wallet/manent-mobile-app).
Tutte le informazioni immesse e scritte nella blockchain sono validate dagli [IdANode](../idanode/inizio.md) e rese disponibili dal database degli stessi [IdANode](../idanode/inizio.md)), proprio come le altre informazioni.

## Emissione di un nuovo token

Uno dei primi problemi affrontati nel protocollo Sidechain di Scrypta riguarda l'unicità del token e di conseguenza l'emissione sicura del token stesso. L'unicità del token non può chiaramente essere demandata all'utente-creatore, poichè potrebbe in modo malevolo cercare di "copiare" un altro token per controllarne i balance.

La risoluzione a questo primo problema è avvenuta introducendo il Trustlink nel processo di creazione. Il Trustlink viene fatto tra l'utente che vuole emettere il token ed l'IdANode che viene invocato. Per garantire l'unicità, l'orizzontalità e la non replicabilità delle Sidechain abbiamo deciso di generare questo indirizzo *on-the-fly* e bruciare la chiave privata subito dopo la scrittura della prima transazione di genesi.

### Genesis transaction

I campi necessari, definiti dall'utente, per la genesi del token sono i seguenti:

 - **name**: Il nome del token, questo è un campo puramente descrittivo e non viene garantita l'unicità. Per la sicurezza tua e dei tuoi utenti genera un nome caratterizzante il progetto.
 - **symbol**: ticker alfanumerico del token
 - **decimals**: La divisione potenziale del token, può essere anche `0` e il token non sarà divisibile
 - **reissuable**: Se il token è a supply fissa oppure può essere riemesso
 - **burnable**: Se il token si può bruciare o meno
 - **version**: La versione del protocollo, al momento è la `1`

E' possibile testare l'emissione di una sidechain direttamente via interfaccia a questo link:
 [https://sidechain.scryptachain.org/#/create](https://sidechain.scryptachain.org/#/create)

### Processo di creazione

Il processo di creazione prevede i seguenti passaggi: 

 1. Definizione campi di genesi
 2. Creazione di un nuovo indirizzo da parte dell'IdANode
 3. Creazione del Trustlink
 4. Invio di un minimo di 1 LYRA da parte dell'owner al trustlink
 5. Scrittura sulla blockchain della transazione di genesi
 6. Invio dell'intera supply da parte del Trustlink all'owner della Sidechain

Dal momento in cui il Trustlink *cede* tutta la supply all'owner, è possibile iniziare ad effettuare transazioni usando come **USXO** (Utxo relativa alla sidechain) questa prima transazione.

### Esempio di emissione

Ecco la risposta tipica dell'IdANode a seguito della creazione di un nuovo token:

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

### Processo di riemissione

Qualora avessimo stabilito che il token è a supply indeterminata, è possibile per l'owner creare delle transazioni simili a quella di genesi per riemettere il token in un secondo momento. La scelta di creare un token a supply fissa o variabile è unicamente affidata all'utente e questa impostazione non potrà essere cambiata in un secondo momento.

Il processo di riemissione del token è molto semplice, bisogna richiamare l'endpoint `/sidechain/reissue` come descritto all'interno della sezione riguardante gli IdANode, inviando i seguenti campi:

- **dapp_address**: L'indirizzo dell'owner.
 - **sidechain_address**: L'indirizzo della sidechain.
 - **private_key**: La private key dell'owner.
 - **pubkey**: La pubkey dell'owner.
 - **supply**: La quantità di token che volete riemettere.

A seguito di questa chiamata, la risposta sarà molto simile a quella di genesi: 

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
## Transazioni

Come detto in precedenza, le transazioni delle Sidechain sono a tutti gli effetti equiparabili alle transazioni della blockchain madre, l'unica differenza è che il set di **USXO** sarà relativo alla sidechain e quindi i fondi sono unicamente all'interno di una specifica sidechain.

Le transazioni seguono inoltre i soliti processi di firma ed hash, per cui avremo a tutti gli effetti delle *TXID* che identificano  transazion. Nel caso delle sidechain, per differenziarle deciso di chiamarle **SXID**. Quindi, d'ora in poi, ci riferiremo a SXID come id delle transazione in sidechain.

Una tipica transazione dovrà contenere le seguenti proprietà:
- **Inputs:** un array di unspent sidechain transactions (USXO) il cui totale sia maggiore o uguale all'ammontare che si desidera inviare.
- **Outputs:** un oggetto contenente gli indirizzi di ricezione e di cambio. Ricordiamo che su Scrypta i cambi coincidono con l'indirizzo principale.

Questo payload verrà quindi firmato con la chiave privata dell'indirizzo mittente e ne verrà fatto l'hash. Queste informazioni verranno quindi scritte a corredo della transazione all'interno della blockchain madre.

Se tutto è corretto, e la transazione passa le validazioni degli IdANode, saranno annullati tutti gli unspent inseriti in input e verranno creati due diversi output, uno per il ricevente e uno per il mittente con il cambio.

Ecco un esempio di transazione correttamente inviata al network:

```
{"uuid":"4c277865.a9bd.401f.856d.22f93c8905fe","address":"LchzGX6vqmanceCzNUMTk5cmnt1p6knGgT","fees":0.011000000000000003,"collection":"","refID":"","protocol":"chain://","dimension":755,"chunks":11,"stored":"*!*4c277865.a9bd.401f.856d.22f93c8905fe!*!!*!!*!chain://*=>{\"transaction\":{\"sidechain\":\"6RQ54yHx2dARWkN8Biiw3gDjb4sB5hSHSH\",\"inputs\":[{\"sxid\":\"e861776c7bb7425da282930572add577deeb5581e0c6b5dd29640ff2a9305f99\",\"vout\":1,\"address\":\"LchzGX6vqmanceCzNUMTk5cmnt1p6knGgT\",\"amount\":78,\"sidechain\":\"6RQ54yHx2dARWkN8Biiw3gDjb4sB5hSHSH\",\"block\":481918}],\"outputs\":{\"LNmYWqaU5qrZcHxCA2vVTMmvKcaXBdjKUZ\":50,\"LchzGX6vqmanceCzNUMTk5cmnt1p6knGgT\":28},\"time\":1574678683857},\"signature\":\"5bd8a9a7a0a095ebd9ab2c5c975a17a7da4d7e037e7bfe43ac4c22192414c70a77e160c353d262258744389c66bfdef50321409ed486c5eba4a74aaf7cb41be4\",\"pubkey\":\"030249ca95b9d10701d9dfb08cb43b79ee229c3c621a9d17b84320b61690e87d09\",\"sxid\":\"0ac9210cd4dbd08550a1ca7501ed7336c6ee1e0700791518ff7c3bdbaa0db22f\"}*!*","txs":["392c18024bda9ebd4b4b262f3e7eee45fbb30013d269bfc8c5763fd6428bc1e3","5caf0aea531033fa98d6de7583cb44e4ee1f5142e658d516bd0a5411ad1ead8d","a5d86c01fe0defe34384192f86bb0facd31553e6207f0d68a792f0091ac8959d","9cc44baa27a143a172e06b92d14ab78be258c5542a64082c61d519b1609decc8","e68278d57812d8bd9a2feaa8fb6500f3d8f3d571752522364d1589d180f86823","7138611a8a05c87b1eedcaaaf38f302e592fbbee83f19cdaed86298046967f39","01e94a0f7ca0592abe11a13afae637255179897eb87a363e3a21a2ddfffad593","4723b75d2407600b2bf44bc8ea1add04fb3fbb3c143fe73b49a9fe02689590d6","14bb910eaaddeeaa984516a28cf1a84bf955b14df903a1c89874f347ea83c01a","5dc99e59492dd6ad1a036000ba527219292b91116bce40315b6bec65dd620324","e084067f8d60a8bd725b97960afdfae856c4c007b9158e2934cfed0405aae1af"]}
```
