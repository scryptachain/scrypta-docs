# Maintenance

Maintenance of the IdANode is essential. This is because the code, updated on a daily basis, undergoes continuous changes and improvements.

It is extremely important to regularly access IdANode and to verify that the version is the latest available.

Each version carries with it a *checksum* to check the code, which will be compared with your IdANode at startup.

::: warning WARNING
It is essential that the * checksum * is always valid. Any unofficial modification to the code will corrupt the IdANode and this will not allow the connection through@scrypta/core.
:::

### Blockchain checksum list

[https://proof.scryptachain.org/#/address/LQ15LT7CKygxUvXB8NsnZXd3kE5xrTMfFw](https://proof.scryptachain.org/#/address/LQ15LT7CKygxUvXB8NsnZXd3kE5xrTMfFw)

### Github checksum list

[https://github.com/scryptachain/scrypta-idanodejs/blob/master/checksum](https://github.com/scryptachain/scrypta-idanodejs/blob/master/checksum)

## Update the IdANode

To update the IdANode run the following terminal command:

```
cd scrypta-idanodejs
npm run update
```

## Create a bootstrap file

To create a bootstrap file you need to *have IdANode active* and run the following command:

```
npm run mongodump
```

This will create the `idanode_boostrap.gz` file which will be invoked by the script `bootstrap.sh`.