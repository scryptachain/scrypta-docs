# Transazioni

Come detto in precedenza, le transazioni delle Sidechain sono a tutti gli effetti equiparabili alle transazioni della blockchain madre, l'unica differenza è che il set di **USXO** sarà relativo alla sidechain e quindi i fondi sono unicamente all'interno di una specifica sidechain.

Le transazioni seguono inoltre i soliti processi di firma ed hash, per cui avremo a tutti gli effetti delle *TXID* che identificano  transazion. Nel caso delle sidechain, per differenziarle deciso di chiamarle **SXID**. Quindi, d'ora in poi, ci riferiremo a SXID come id delle transazione in sidechain.

Una tipica transazione dovrà contenere le seguenti proprietà:
- **Inputs:** un array di unspent sidechain transactions (USXO) il cui totale sia maggiore o uguale all'ammontare che si desidera inviare.
- **Outputs:** un oggetto contenente gli indirizzi di ricezione e di cambio. Ricordiamo che su Scrypta i cambi coincidono con l'indirizzo principale.

Questo payload verrà quindi firmato con la chiave privata dell'indirizzo mittente e ne verrà fatto l'hash. Queste informazioni verranno quindi scritte a corredo della transazione all'interno della blockchain madre.

Se tutto è corretto, e la transazione passa le validazioni degli IdaNode, saranno annullati tutti gli unspent inseriti in input e verranno creati due diversi output, uno per il ricevente e uno per il mittente con il cambio.

Ecco un esempio di transazione correttamente inviata al network:

```
{"uuid":"4c277865.a9bd.401f.856d.22f93c8905fe","address":"LchzGX6vqmanceCzNUMTk5cmnt1p6knGgT","fees":0.011000000000000003,"collection":"","refID":"","protocol":"chain://","dimension":755,"chunks":11,"stored":"*!*4c277865.a9bd.401f.856d.22f93c8905fe!*!!*!!*!chain://*=>{\"transaction\":{\"sidechain\":\"6RQ54yHx2dARWkN8Biiw3gDjb4sB5hSHSH\",\"inputs\":[{\"sxid\":\"e861776c7bb7425da282930572add577deeb5581e0c6b5dd29640ff2a9305f99\",\"vout\":1,\"address\":\"LchzGX6vqmanceCzNUMTk5cmnt1p6knGgT\",\"amount\":78,\"sidechain\":\"6RQ54yHx2dARWkN8Biiw3gDjb4sB5hSHSH\",\"block\":481918}],\"outputs\":{\"LNmYWqaU5qrZcHxCA2vVTMmvKcaXBdjKUZ\":50,\"LchzGX6vqmanceCzNUMTk5cmnt1p6knGgT\":28},\"time\":1574678683857},\"signature\":\"5bd8a9a7a0a095ebd9ab2c5c975a17a7da4d7e037e7bfe43ac4c22192414c70a77e160c353d262258744389c66bfdef50321409ed486c5eba4a74aaf7cb41be4\",\"pubkey\":\"030249ca95b9d10701d9dfb08cb43b79ee229c3c621a9d17b84320b61690e87d09\",\"sxid\":\"0ac9210cd4dbd08550a1ca7501ed7336c6ee1e0700791518ff7c3bdbaa0db22f\"}*!*","txs":["392c18024bda9ebd4b4b262f3e7eee45fbb30013d269bfc8c5763fd6428bc1e3","5caf0aea531033fa98d6de7583cb44e4ee1f5142e658d516bd0a5411ad1ead8d","a5d86c01fe0defe34384192f86bb0facd31553e6207f0d68a792f0091ac8959d","9cc44baa27a143a172e06b92d14ab78be258c5542a64082c61d519b1609decc8","e68278d57812d8bd9a2feaa8fb6500f3d8f3d571752522364d1589d180f86823","7138611a8a05c87b1eedcaaaf38f302e592fbbee83f19cdaed86298046967f39","01e94a0f7ca0592abe11a13afae637255179897eb87a363e3a21a2ddfffad593","4723b75d2407600b2bf44bc8ea1add04fb3fbb3c143fe73b49a9fe02689590d6","14bb910eaaddeeaa984516a28cf1a84bf955b14df903a1c89874f347ea83c01a","5dc99e59492dd6ad1a036000ba527219292b91116bce40315b6bec65dd620324","e084067f8d60a8bd725b97960afdfae856c4c007b9158e2934cfed0405aae1af"]}
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTc0ODU5NjcxMV19
-->