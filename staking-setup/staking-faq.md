# Staking FAQ
**Q: MUST MY WALLET BE STARTED TO RECEIVE REWARDS?**

A: Yes, your wallet must be started and unlocked for staking. We advise you in the unlock window to check the "unlock only for staking" box to verify that your wallet is able to "stakare" without being able to initiate transactions. This reduces the chances of an attacker being able to empty your wallet if he can access it while on the net.

**Q: DO MY COMPUTER MUST STAY ON?**

A: Yes, to be enabled for staking the computer must be fully active. Turning it off or closing the wallet means that you are not participating in the validation, so you are not eligible for rewards.

**Q: DO I HAVE TO ENTER SOME CODE IN MY LYRA.CONF FILE TO ENABLE STAKING?**

A: No, you just have to make sure that the `staking = 0` string is not present and unlock the wallet for staking only (by ticking the box next to the password field and typing the password).

**Q: HOW MANY LYRA DO I HAVE TO TAKE PART IN THE STAKING?**

A: Any quantity allows you to participate in the staking

**Q: WHAT DO YOU MEAN BY INPUT or UTXO?**

A: An input is a transaction in which you received LYRA. It is also called UTXO or "not spent (*unspent*)" transaction output. Whenever you receive coins, regardless of whether you have already received coins at that address or not, a new input is created.

**Q: HOW DO I CREATE AN INPUT (UTXO)?**

A: Creating an input is as simple as sending a transaction to yourself.

1. Open the * Coin Control * panel and select the coins you want to group in a single input by selecting the box located on the left of the menu.

2. Paste the address to which you wish to send the coins in the * "Pay To *" field.

3. Copy the amount of the "* After Fee *" field into the "* Amount *" field.

4. Confirm the information and send the transaction.

5. When the coins reach 60 confirmations, they will be admitted to staking.

**Q: HOW CAN I SEE MY INPUTS?**

A: You can view your input sizes by opening the *Coin Control* panel.

**Q: WHERE CAN I FIND THE COIN CONTROL PANEL?**

A: First of all you have to activate *Coin Control*. You can do this by going to your wallet, clicking on *settings* (located at the top left of yours) and then on *options*. Next you need to select "*enable coin control*". After these steps you will be able to see the *Coin Control* button in the "*send*" tab.

**Q: HOW LONG MUST THE COINS MATURE BEFORE BEING VALID FOR STAKING?**

A: To be eligible for staking, coins must have 60 confirmations, which takes around 1 hour.

**Q: TO RECEIVE A REWARD A DAY ON AVERAGE, HOW MANY LYRA DO YOU NEED?**

A: You currently need around 500 LYRA to receive a staking reward every day.

**Q: WHAT IS STAKESPLIT AND WHAT DOES IT DO?**

A: The stakesplit value, which you can get by executing the `getstakesplitthreshold` statement in your debug console, is the amount of coins your wallet will automatically split the inputs into. The default is 2000, which means that if you have an input of 4000 LYRA or more, when it receives the first reward it will automatically be divided into two 2000 LYRA inputs.

**Q: HOW CAN I CHANGE THE STAKE-SPLIT-THRESHOLD VALUE?**

A: You can change it via the debug console, by typing: `setstakesplitthreshold x`, where x is the value you want to be your new stake threshold.

**Q: WHAT IS THE AUTOCOMBINEREWARDS?**

A: `autocombinerewards true x` will enable a function that automatically combines all the masternode rewards received in an input within the address itself, up to the amount specified with x. So if you want your minimum input size to be 500 LYRA, then you should run the command in your debug console as follows: `autocombinerewards true 500`. Note: if you have more than one masternode with more than one address, this will not combine prizes with each other.

**Q: IS IT POSSIBLE TO USE AUTO-COMBINE-REWARDS AND SET-STAKE-SPLIT-THRESHOLD SIMULTANEOUSLY TO AUTOMATE MY INPUT SIZE?**

A: In general, yes. You should find a correct range to use them both. For example: `autocombinerewards true 750` and` stakesplitthreshold 1000` will combine all the inputs of a given address under 750 LYRA, into a single 750 input, but will divide them into two separate inputs when they reach 2000 LYRA.

**Q: WHAT IS AN "ORPHAN BLOCK?" OR, WHY DO I SEE A "GRAY" REWARD THAT IS NOT GETTING CONFIRMED?**

A: An orphan block "*orphan block*" is generated when two nodes solve a block at the same time. The network then reaches consensus on who actually solved the block to which the reward is awarded first. The other party will display the reward in the form of a grayed out transaction.

You can see the statistics of the orphaned blocks [here](https://chainz.cryptoid.info/lyra/orphans.dws).

