# Documenta

Documenta is the enterprise-grade distributed storage system that allows anyone to upload and notarize files to blockchain. We can imagine it as a more controllable version of IPFS based on [S3](https://aws.amazon.com/s3/) and IdANode technology.

By means of notarization in the blockchain any data is simultaneously received and redundant in all IdANode that have this technology enabled. It can then be retrieved through a specific call later. The data structure that is created is then arranged by `addresses` and `hashes` so you can quickly filter data that belongs to the same owner.

It's good to emphasize that the data remains public and visible to the whole network so the data must be public or, alternatively, encrypted with secure keys.

To enable it in an IdANode it is necessary to set the following parameters in the `.env` file:

```
S3_KEY_ID=S3KeyID
S3_SECRET_KEY=AccessKey
S3_ENDPOINT=UrlEnpointS3
S3_BUCKET=S3BucketName
```

As soon as this data is entered the node will start to receive and synchronize ``all`` files uploaded to Documenta indiscriminately. At the moment a filter for addresses or other has not been integrated, surely a Smart Contract will be integrated to manage eventual `fee` from users over time.

## [POST] /documenta/add

This endpoint is for adding files and can be used in two different ways:

- By sending a signed message with the buffer in hexadecimal format.

- Sending the data through the form-data

The two examples can be found on [Postman](https://documenter.getpostman.com/view/3143294/S11Ltxfq?version=latest#ea8b37ca-f30c-40b0-a015-ed97f9ae2ef0).

In the second case the body must be formed by:

- **file**: the file to send

- **private_key**: the private key that will be used to write the data

- **title**: a possible title that will be written in compressed format inside the blockchain (public)

## [GET] /documenta/:address

Returns an array with all documents notarized and stored by a specific address, e.g.:

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

Returns the object from the storage as it was loaded, for example this link will return the Bitcoin whitepaper: https://idanodejs01.scryptachain.org/documenta/LQ3xZY2GG33s5n87vLkoYcv6ZL8ZmSXf8A/b1674191a88ec5cdd733e4240a81803105dc412d6c6708d53ab94fc248f4f553

Clearly you can also use S3 links directly without going through the IdaNode.

## [GET] /documenta/doc/:address/:hash

Returns the object complete with timestamp and block, to analyze when it was loaded and what is its hash.