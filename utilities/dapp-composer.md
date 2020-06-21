# dApp Composer

This middleware, written in NodeJS using the NestJS framework, can be used to create a service or software that responds to certain APIs.

It can be implemented, for example, to create bridges of connection between the blockchain and an existing backend, or to develop ad hoc services.

This dApp communicates directly with the IdANodes through the use of `@scrypta/core` and does not require any particular precautions during the start-up phase.

By way of example, we can compare this dApp Composer to a Smart Contract of the Ethereum network, or a portion of software that, after connecting to the blockchain, executes pre-established code.

In addition, this software can be loaded into an IdANode (via IPFS) and started via the dApp engine. However, this use is experimental and will be consolidated later.

## use

After downloading the code from [https://github.com/scryptachain/scrypta-dapp-composer](https://github.com/scryptachain/scrypta-dapp-composer) you can edit the files containing the main code or extend the project with your own endpoints. The default ones are as follows.

### [GET] /

This will return the result of the `/wallet/getinfo` call given to the first available IdANode.

### [POST] /get

This endpoint will make a `GET` call to the desired endpoint by passing the` endpoint` parameter as specified in this example:
```
{
	"endpoint": "/wallet/getnewaddress"
}
``` 

### [POST] /post

This method will make a `POST` call to the desired endpoint by passing the` endpoint` parameter and the `params` parameter as specified in this example:
```
{
	"endpoint": "/sidechain/shares",
	"params": {
		"sidechain_address": "6RQ54yHx2dARWkN8Biiw3gDjb4sB5hSHSH"
	}
}
``` 

## Execution port

The default port is `3000` but can be changed within the code.

## Compiling and deploying the dApp

To compile and create an executable package you can run the `npm run build` command. This will create an executable version of the dApp for Linux, macOS or Windows.