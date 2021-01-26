# Blockchain Versioning CLI

This package was created to maintain and verify the code thanks to the blockchain. It is not an alternative to `git` but can be used with` git` to create reliable open source software.

## How does it work

Scrypta BVC or `scrypta-bvc` is a` npm` module that must be installed globally:
```
npm i -g @scrypta/bvc
```

Once installed, you can be used from any folder that you want to monitor with the blockchain.

First of all a Lyra address is required, obtainable thanks to  [https://web.manent.app](https://web.manent.app) or [https://id.scryptachain.org](https://id.scryptachain.org) or by downloading the QT wallet and creating a new address.

Now you can proceed to import the private key. The address must contain at least `0.002 LYRA`:

```
scrypta-bvc importkey YourPrivateKey AStrongPassphrase
```

## Init of a new folder

Once you have created a new project (no matter what the programming language is or if it is a software) you can insert the folder and start the project with a `scrypta-manifest.json` file like this:

```
cd myAwesomeProject
scrypta-bvc init
```

This will create a new file called `scrypta-manifest.json`, similar to this:

```
{
    "version": "1.0.0",
    "name": "",
    "alias": "",
    "options": {
        "folders": { "exclude": [".*", "node_modules", "db"] },
        "files": { "include": ["*.*"] }
    },
    "address": ""
}
```

You must complete all empty fields with your information:
- `name`: a name for the whole project
- `alias` a short alias for the project, can be used in the near future to check or download something globally from the blockchain.
- `options`: includes and excludes options for the `folder-hash` package. You can see its usage here: [https://www.npmjs.com/package/folder-hash](https://www.npmjs.com/package/folder-hash)
- `address`: this is the Lyra address we imported before (obviously not with a private key).

## Publish updates

After initializing our folder, we can publish the hashed content on the blockchain like this:

```
scrypta-bvc publish MyStrongPassphrase
```

This will create a genesis transaction with the whole `scrypta-manifest.json` file and create the first version, let's say` 1.0.0`.

Any changes to the version will allow to publish other consecutive versions, such as 1.0.1 etc.

## Checking for a folder

After publishing your folder, you can simply verify it with:

```
cd myAwesomeProject
scrypta-bvc verify
```

If your file matches that of the blockchain you will receive a success message. Otherwise you will be notified of the problem that arose.