# Definition

The **Staking** procedure starts from the addition of LYRA cryptocurrency to the wallet, which must be connected to the network and online.

Once the coins have reached maturity, you can begin to participate in the validation process of the blocks: start the wallet and unlock it in "*exclusively for staking*" mode.

Now your node is ready to compete with the other nodes to win the validation of subsequent blocks. As a reward for keeping the network safe, an online wallet is chosen for validation every minute and receives a stake reward in Lyra coin.

After receiving the reward, the coin age (confirmations acquired) will return to zero and will have to mature again.

A minimum amount for LYRA staking is not necessary, but having more coins in play will give you more weight and therefore a greater chance of receiving rewards and more frequently.

> The minimum stake age on Scrypta Blockchain is set at 60 confirmations (about 60 minutes). In other words, Lyra are "mintable" after 60 confirmations.

## How does it work
Unlike the Proof Of Work blockchains (like Bitcoin), the **Proof of Stake** system solves the hashing problems by representing the hashes with the ***coin ag*** and the **UTXO** existing (unspent transaction output).

> An unspent transaction output (UTXO) is a transaction hash, located on a wallet that contains unspent funds. Every time funds from a UTXO leave the wallet for any reason, for example in the case of a transaction, a new UTXO is created containing the remaining funds.

See also the frequently asked questions section:
[Staking Faq](faq.md)

### Coin Age
The "Coin Age" is a property of each UTXO and can be represented by the time that has elapsed since the creation of a UTXO. It is expressed in number of "confirmations".

### Maturation
You will receive a reward for keeping your network secure each time you successfully validate a block. When you are rewarded, the Coin Age of your winning UTXO, containing X Lyra, will be reset.

This operation generates a new UTXO in which you will receive X + Reward at the same address.

> In order to consolidate network stability, staking rewards cannot be spent before **20 confirmations** (20 blocks) and cannot enter staking before **60 confirmations** (60 blocks). These not yet expendable coins are considered "*immature*".