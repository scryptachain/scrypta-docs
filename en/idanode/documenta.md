# Documenta

Documenta is the enterprise-grade distributed storage system that allows anyone to upload and notarize files to Scrypta blockchain. We can see it as a more "controllable" version of IPFS based on [S3](https://aws.amazon.com/s3/) and IdANode technology.

Through the notarization in the blockchain, each data is simultaneously received and distributed in all the IdANodes enabled with this technology. The data can then be recalled later through a specific call. The data structure that is created is organized by `addresses` and` hash` so as to allow you to quickly filter data belonging to the same owner.

It should be emphasized that the data remain public and visible to the entire network. Consequently, notarized data must be published for free use or, alternatively, encrypted with secure keys.

To enable this technology in an IdANode it is necessary to set the following parameters in the `.env` file:

```
S3_KEY_ID=S3KeyID
S3_SECRET_KEY=AccessKey
S3_ENDPOINT=UrlEnpointS3
S3_BUCKET=S3BucketName
```

As soon as the data is entered, the node will start to load and synchronize them `all without distinction` on Documenta. There is currently no address or other filter. Surely in the future a Smart Contract will be integrated to manage any ongoing `fee` by users.

## [POST] /documenta/add

 This endpoint has the function of adding files and can be used in two different ways:

- By sending a signed message, with the buffer in hexadecimal format

- Send the data through the form-data

The two examples can be found on [Postman] (https://documenter.getpostman.com/view/3143294/S11Ltxfq?version=latest#ea8b37ca-f30c-40b0-a015-ed97f9ae2ef0).

In the second case, the body must be made up of:

- **file**: the file to send

- **private_key**: the private key that will be used to write the data

- **title**: any title that will be written in compressed format within the blockchain (public)

## [GET] /documenta/:address

This endpoint returns an array with all notarized and archived documents from a specific address, for example:

```
{
    "file": "b1674191a88ec5cdd733e4240a81803105dc412d6c6708d53ab94fc248f4f553",
    "endpoint": "idanodejslocal.ams3.digitaloceanspaces.com",
    "address": "LQ3xZY2GG33s5n87vLkoYcv6ZL8ZmSXf8A",
    "refID": "Bitcoin Whitepaper",
    "block": 1094891,
    "time": 1611912158244,
    "space": "https://idanodejslocal.ams3.digitaloceanspaces.com/LQ3xZY2GG33s5n87vLkoYcv6ZL8ZmSXf8A/b1674191a88ec5cdd733e4240a81803105dc412d6c6708d53ab94fc248f4f553"
}
```

## [GET] /documenta/:address/:hash

This endpoint Returns the object from storage as it was loaded: for example this link will return the Bitcoin whitepaper: https://idanodejs01.scryptachain.org/documenta/LQ3xZY2GG33s5n87vLkoYcv6ZL8ZmSXf8A/b1674191a88ec5cdd733e4240a81803105dc412d6c6708d53ab94fc248f4f553

Of course you can also use the S3 links directly without having to go through the IdaNode.

## [GET] /documenta/doc/:address/:hash

Return the object complete with timestamp and block, in order to be able to analyze when it was loaded and what its hash is.