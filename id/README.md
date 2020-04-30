# Introduzione

Il sistema di identità di Scrypta si articola in due componenti fondamentali, la prima riguarda la gestione delle identità strettamente digitali, ovvero gli indirizzi Lyra; la seconda riguarda l'autenticazione degli indirizzi con autenticatori esterni.

La prima componente può essere gestita in vari modi, ma sostanzialmente riguarda i file .sid che abbiamo menzionato nella documentazione di _Scrypta Core_. Questi payload di identità possono essere gestiti tramite:

- **ScryptaID Browser Extension** (Chrome, Firefox, etc): https://github.com/scryptachain/scrypta-id
- **Manent Mobile App** (iOS, Android): https://github.com/scryptachain/scrypta-manent-app
- **Manent Web App** (Chrome, Firefox, Mobile browser): https://github.com/scryptachain/scrypta-manent-web

La seconda componente può essere utilizzata tramite un Gateway di identità, come quello che mette a disposizione Scrypta  attraverso l'URL: https://me.scrypta.id/ oppure attraverso altri Gateway messi a disposizione da altri soggetti esterni.

I payload di identità, la cui struttura ha a che fare unicamente con gli indirizzi, presentano un'ulteriore proprietà chiamata *identity*:
```
{

 "pub":"LLLjx7yV4nhUzSapBAHogb5BdgUR6VCB3o",

 "api_secret":"33239857dbe3d37fd35b807578a0132b",

 "key":"03097163386854cde5801aec574948e15b9e24c79da65414d4e5588e7140846165",

 "prv":"SnvpeER7kdeMFGRimBzV5EJfX2ZfxmAQwin1qAHD2kXb8XRF983g",

 "identity": {
	Provider: {
		"identity": {
			"created_at": Timestamp,
			"method": Provider,
			"username": Username,
			"token": TokenReleasedByProvider
		},
		"fingerprint": PayloadSignedByGateway
	}
  }

}
```

Come possiamo intuire, per ogni **Provider** (Twitter, Github, E-mail) dopo la corretta verifica da parte del **Gateway**, viene scritto un payload contenente:
- **created_at**: Il timestamp dell'operazione.
- **method**: una ripetizione del provider utilizzato.
- **id**: l'id dell'utente presso il provider.
- **username**: l'username dell'utente presso il provider.
- **token**: il token rilasciato dal provider (che potrà essere usato per la verifica dell'account).

Questo payload viene firmato dal gateway (la cui chiave privata dovrà risiedere all'interno dello stesso) e la firma viene inserita all'interno della proprietà **fingerprint**.

Questo stesso payload viene firmato dall'indirizzo che richiede l'autenticazione. La firma viene scritta all'interno della blockchain in modo da poterla comparare per verifica con quella presentata dall'utente in fase di identificazione.

**N.B.** il payload di identità viene nuovamente cryptato e la custodia viene comunque demandata all'utente, questo per garantire decentralizzazione e sicurezza. 
<!--stackedit_data:
eyJoaXN0b3J5IjpbOTc0OTEwMTEyLC0xNTM4OTc0ODI2LC0xNT
gwMjY0OTE0LDE1NzEzOTAzOTAsOTU0Njc2ODUzXX0=
-->