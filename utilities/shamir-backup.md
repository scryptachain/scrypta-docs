# SHAMIR BACKUP
**sit back and relax with your secret**

### Splitting the Secret

Based on [Shamir’s Secret Sharing](https://en.wikipedia.org/wiki/Shamir's_Secret_Sharing), a cryptographic algorithm created by Adi Shamir, *Scrypta Shamir Backup* is a method of splitting a secret (in digital text form) into multiple unique shares. To recover the secret, a specified number of shares has to be collected and used (threshold). This security standard is the key to defeat the two greatest risks involved with protecting your seeds, passphrase, private-keys: theft and destruction. Start now with the extra security of *Scrypta Shamir Backup*!

## How to use

### Create
Turn off your connection or put the device in airplane mode. Write your secret. Choose how many recovery shares you want to generate, and decide how many of them you want to use for recovery (*).

### Distribute
Distribute those shares however you want, among people or secure locations.

### No Worries
Relax now knowing that your “secrets” are secured by *Scrypta Shamir Backup*.

(*) The number of shares can range from 1 to a maximum of 100. 
The threshold is the predetermined number of shares necessary to recover a secret.


## Trustworthy decentralized application

- This web dApp works only on **offline mode** to prevent any leak of information. 
- Secure offline backup of recovery *shares*.
- Eliminated risk of theft or loss.

## Questions

**What happens if some of the shares get lost or stolen?**
Individual shares do not leak any information about the shared secret, as long as the number of compromised shares does not reach the required threshold.

**What happens if I lose so many recovery shares?**
If you can’t meet the required threshold, your bacckuped seeds, passphrase, pivate keys will become unrecoverable.

## CLI mode

This tool allows you to use *Scrypta Shamir Backup* directly on your computer and control it from the terminal. For offline storage, *.pdf* files are also created which contain QR codes representing the *shares*.

### Installation

For installation you need `NodeJS` (which must already be installed). Simply install the application globally through the command:
```
npm install -g @scrypta/shamir
```
### Secure random data

If you want to secure your own data you can use this command :
```
scrypta-shamir secure
```
This command will create an interface where you choose the number of total *shares* and the number of minimum *shares* (*threshold*) to restore your wallet.

You can even choose a password to encrypt the data (and you will need it again to restore il segreto).

Now you've to enter a string to backup, in order to complete the procedure.

### Create a brand new wallet
It is possible to create a new address of the Scrypta network and keep its private-key through *Scrypta Shamir Backup*. If you want to create a new wallet just enter the command:
```
scrypta-shamir create
```
This command will create the interface where you choose the number of total *shares* and the number of minimum *shares* (*threshold*) to restore your wallet.

You can even choose a password to encrypt the data (and you will need it again to restore the wallet).

## Restore a backup

If you want to recover a backup you must enter the following command, including the folder containing the *shares* as the `--path` parameter:

 ```
scrypta-shamir restore --path=/PATH/TO/FOLDER/BACKUP 
```

If you've encrypted the data you need to use the tool as follows:

```
scrypta-shamir restore --path=/PATH/TO/FOLDER/BACKUP --password=YourStrongPassword
```