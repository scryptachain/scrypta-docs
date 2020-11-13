# Gestione Advanced Wallet (Seedphrase - BIP32/39)

## generateMnemonic (language)
Crea una frase mnemonica di 24 parole (seedphrase), che rappresenta il sistema per salvare e richiamare il proprio wallet. Lingue disponibi: inglese, italiano, spagnolo, francese, latino.
```
 async generateMnemonic(language) {
        return new Promise(response => {
            if (language !== '') {
                let supported = ['english', 'italian', 'spanish', 'french', 'latin']
                if (supported.indexOf(language) !== -1) {
                    bip39.setDefaultWordlist(language)
                }
            } else {
                bip39.setDefaultWordlist('english')
            }
            const mnemonic = bip39.generateMnemonic(256)
            response(mnemonic)
        })
    }
```

## buildxSid (password, language, saveKey, mnemonic, label)
Crea il wallet, in formato xsid file, associandolo alla frase mnemonica

```
 buildxSid(password, language = '', saveKey = true, mnemonic = '', label = '') {
        const app = this
        const db = new ScryptaDB(app.isBrowser)
        return new Promise(async response => {
            if (mnemonic === '') {
                mnemonic = await this.generateMnemonic(language)
            }
            let seed = await bip39.mnemonicToSeed(mnemonic)
            var hdkey = HDKey.fromMasterSeed(Buffer.from(seed, 'hex'))
            let xprv = hdkey.privateExtendedKey
            let xpub = hdkey.publicExtendedKey

            let wallethex = await this.cryptData(mnemonic.toString('hex'), password)
            let check = await this.decryptData(wallethex, password)

            if (check !== false && check === mnemonic.toString('hex')) {
                var walletstore = xpub + ':' + wallethex;

                if (saveKey === true) {
                    let check = await db.get('xsid', 'xpub', xpub)
                    if (!check) {
                        await db.put('xsid', {
                            xpub: xpub,
                            wallet: walletstore,
                            label: label
                        })
                    } else {
                        await db.update('xsid', 'xpub', xpub, {
                            xpub: xpub,
                            wallet: walletstore,
                            label: label
                        })
                    }
                }

                response({
                    mnemonic: mnemonic,
                    seed: seed.toString('hex'),
                    xprv: xprv,
                    xpub: xpub,
                    walletstore: walletstore
                })
            } else {
                response(false)
            }
        })
    }
```

## returnKey (xpub)
Restituisce la chiave pubblica avanzata (xpub)

```
 returnxKey(xpub) {
        const app = this
        return new Promise(async response => {
            if (xpub.length === 111) {
                const db = new ScryptaDB(app.isBrowser)
                let doc = await db.get('xsid', 'xpub', xpub)
                if (doc !== undefined) {
                    response(doc.wallet)
                } else {
                    response(false)
                }
            } else {
                response(xpub)
            }
        })
    }

```

## readxKey (password, key)
Legge la chiave privata

```
async readxKey(password, key) {
        let wallet = await this.returnxKey(key)
        if (wallet !== false) {
            if (password !== '') {
                var xSIDS = key.split(':')
                try {
                    let decrypted = await this.decryptData(xSIDS[1], password)
                    if (decrypted !== false) {
                        let seed = await bip39.mnemonicToSeed(decrypted)
                        let xsid = await this.returnXKeysFromSeed(decrypted)
                        xsid.seed = seed
                        return Promise.resolve(xsid)
                    } else {
                        return Promise.resolve(false)
                    }
                } catch (ex) {
                    // console.log('WRONG PASSWORD')
                    return Promise.resolve(false)
                }
            }
        } else {
            return false
        }
    }

```


## returnXKeysFromSeed (seed)
Restituisce la chiave partendo dal seed

```
 returnXKeysFromSeed(seed) {
        return new Promise(async response => {

            try{
                var hdkey = HDKey.fromMasterSeed(Buffer.from(seed, 'hex'))
            }catch(e){
                var hdkey = HDKey.fromMasterSeed(seed)
            }
            
            let xprv = hdkey.privateExtendedKey
            let xpub = hdkey.publicExtendedKey

            response({
                xprv: xprv,
                xpub: xpub
            })
        })
    }

```


## deriveKeyFromSeed (seed, index) 
Deriva la chiave dal seed

```
deriveKeyFromSeed(seed, index) {
        return new Promise(async response => {
            let params = lyraInfo.mainnet
            if (this.testnet === true) {
                params = lyraInfo.testnet
            }

            var hdkey = HDKey.fromMasterSeed(Buffer.from(seed, 'hex'))
            var childkey = hdkey.derive(index)
            let derivedxprv = childkey.privateExtendedKey
            let derivedxpub = childkey.publicExtendedKey
            var key = new CoinKey(childkey.privateKey, params)

            response({
                xpub: derivedxpub,
                xprv: derivedxprv,
                key: childkey.publicKey.toString('hex'),
                prv: key.privateWif,
                pub: key.publicAddress
            })
        })
    }

```



## deriveKeyFromXPrv (xprv, index)
Deriva la chiave dalla chiave privata master (XPrv)

```
 deriveKeyFromXPrv(xprv, index) {
        return new Promise(async response => {
            let params = lyraInfo.mainnet
            if (this.testnet === true) {
                params = lyraInfo.testnet
            }

            var hdkey = HDKey.fromExtendedKey(xprv)
            var childkey = hdkey.derive(index)
            var key = new CoinKey(childkey.privateKey, params)
            let derivedxprv = childkey.privateExtendedKey
            let derivedxpub = childkey.publicExtendedKey

            response({
                xpub: derivedxpub,
                xprv: derivedxprv,
                key: childkey.publicKey.toString('hex'),
                prv: key.privateWif,
                pub: key.publicAddress
            })
        })
    }

```


## deriveKeyfromXPub (xpub, index)
Deriva la chiave dalla chiave pubblica (Xpub)

```
 deriveKeyfromXPub(xpub, index) {
        return new Promise(async response => {
            let params = lyraInfo.mainnet
            if (this.testnet === true) {
                params = lyraInfo.testnet
            }

            var hdkey = HDKey.fromExtendedKey(xpub)
            var childkey = hdkey.derive(index)

            response({
                key: childkey.publicKey.toString('hex'),
                pub: await this.getAddressFromPubKey(childkey.publicKey.toString('hex'))
            })
        })
    }

```




