# IPFS

This tool is the implementation of IPFS in NodeJS / Express (https://ipfs.io/).
Through a series of POST and GET calls it is possible to interact directly via browser with IPFS. These calls are the same as those present within IdANode: therefore we refer to these for a more detailed analysis.

## Installation

Clone the repository and install all dependencies:

```
git clone https://github.com/scryptachain/scrypta-ipfs
cd scrypta-ipfs
npm install
```

Now you can start the tool with the command:
```
npm start
```
If everything has been installed correctly, you will see something like this on your console:

![npm start](../.vuepress/public/assets/ipfs/npmstart.png)

From this moment it is possible to use all the endpoints already described on IdANode simply by pointing your localhost to port 3000.

For example, using curl you can actually see the version of IPFS installed:
```
curl http://localhost:3000/info
> 0.39.0
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE1MTQ1MTYyMjJdfQ==
-->