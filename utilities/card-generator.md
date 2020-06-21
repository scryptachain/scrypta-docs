# Card Generator

This tool is used to generate a `.csv` file inside which there are -n- wallets in encrypted format (.sid).

## Installation

Clone the repository and install all dependencies through the following commands:

```
git clone https://github.com/scryptachain/scrypta-card-generator
cd scrypta-card-generator
npm install
```

## Use

After installing the dependencies, use the tool like this:

```
node index.js -g=2
```
Where the parameter ** g ** is the number of wallets to be created.

The result of the operation will look like this:
```
The CSV file was written successfully with 2 sid.
```
The result file will be saved in the same folder with the name of `out.csv`. Open it with your favorite editor and you will see a result similar to the following:
```
Key,Password,SID
0,6fec35c621d1757d,LhtgMq5i33TX6etVWbG5SsUA96Xtr2ave5:bc99fe62e3c52edab89608b3d8a7d9af5bfd7a46dac4749a84df604a147e4ed0d29189be46bb57e329e544a35ac645a3c99b03335b61f83b9571e1e890d7d865da625967d49964c0692c5c72bbf5a4159f7d230c30db6c188e242ff9bf2d5b9d395d0467c0b1051048d1f2ecd1a2a68a1d28f36200d6c5c9f22fbed5d774101a6c86b96fd0aabc3fcd83e8b3f2a14e1452daba5bb0602b3cd9a2c15fb9c6cf873b86e91dec3402f4214375e15be4b2cf489f95da5e9b0d52b0e50dc8ef6db9dd
1,5518948e8e67f4cc,Lhkrc7H3pxQNxZToRP661ZPq9HT1rcRG8E:ad8ad21a7b88db27815c575134d479661c9fed11159f75cfec40c15e5ff813e34654125fab1804f095bfb26faac520494772f78f8914851032ec38a62735cee7283d4650b34cd6dce2555f25aaefe4f374d7eb61eea3c79dd8de2440f1874e95bdcd7a69f1204b79371d97dd6f01f96f257408037e41621e096b6a415ba4e8a6ae100a3430099950a9d2f15b245764c7f70e591027197aebc706aee7be64421725dfd05c708fd839ef481e5c464dc5b6125787dfa3d70084157b210a90c5011c
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEyMjkzNTM5NzRdfQ==
-->