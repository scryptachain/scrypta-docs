# Electio

  *E-Voting over blockchain*

## Features

Electio is a platform created for e-voting, even remotely. Decentralized and permissionless Scrypta Blockchain guarantees a high level of transparency, security and reliability in all stages of the vote.

- **Safe procedure thanks to the blockchain e RSA**
<br>
The combination of two cryptographic algorithms makes voting through electio extremely safe and reliable.

- **Anti-handling mechanism** 
<br>
Only the last vote of the voter is valid and counted. Coercive or exchange voting is difficult to practice.

- **Immediate voting results**
<br>
The distributed ledger allows an immediate counting of the votes, without waiting times.

- **Verification of the vote**
<br> 
Each voter will be able to verify the correct acquisition of their vote.

## Types of voting

### Vote with authorization

- **Public question with authorization / Secret Vote**
<br>
The voting question can only be viewed through a dedicated password. The voter  is authorized to vote by the creator of the question. The vote is secret.

- **Public question with authorization / Open vote**
<br>
The voting question can be viewed clearly;  The voter  is authorized to vote by the creator of the question. The vote is clear.

### Secret Question

- **Secret question / Open Vote**
<br>
The voting question can only be viewed through a dedicated password; the voter  is pre-authorized to vote by the creator of the question. The vote is clear.

- **Secret question / Secret vote**
<br>
The voting question can only be viewed through a dedicated password. The voter  is pre-authorized to vote by the creator of the question. The vote is secret.

### Public Question (survey)

- **Public question / Open Vote**
<br>
The voting question can be viewed in the clear, the voter's vote is in the clear and everyone can vote without authorization. This mode is also useful for survey purposes.

## Guide to creating a poll

As previously described, different types of e-voting can be developed within Electio, each with different characteristics.
<br>However, the steps to configure the voting in the desired mode are almost similar and will be illustrated below.

First you need to access the voting creation window via [Electio](https://vote.electio.app/#/), and log in via the *.sid* file o [Scrypta Extension Browser](https://id.scryptachain.org/).
![Electio](../.vuepress/public/assets/electio/login.png)
<br>After entering the password and completing the login procedure, the system will ask you to create an RSA key.
![Electio](../.vuepress/public/assets/electio/rsa.png)
<br> By clicking on "Create Poll Keys", the system will ask us for the password of our digital identity, and immediately after authentication we will be on the personal home page of Electio, where we will be shown a summary of the existing activities.
<br><br>At the first access you will find something similar to what is shown in the figure.
![Electio](../.vuepress/public/assets/electio/main_empty.png)

Let's proceed with the creation of your first poll by clicking on **"Create a Poll Now!"**, so that you can continue in the voting configuration window.

<br> You will find on a page similar to this one, where all the parameters of our survey must be entered.
![Electio](../.vuepress/public/assets/electio/full.png)

As highlighted above, Electio offers us the possibility to create voting types with different visibility settings (Public, Authorized or Secret), and this choice is made from the "*Poll Visibility*" drop-down menu.
![Electio](../.vuepress/public/assets/electio/type_poll.png)

By selecting one of the items in the drop-down menu, Electio will automatically adapt the type of poll on the basis of the choices made by us, presenting the fields required for that specific type of vote.

<br>With **"Public"** mode there will be no further fields to fill in, as the survey will be completely public.

<br>Choosing the **"Authorized"** or **"Secret"** modes, an additional drop-down menu will appear asking you to choose the setting for the visibility of the vote (which can be  **"Public"** or **"Secret"**).
![Electio](../.vuepress/public/assets/electio/dropdown.png).

Once you have chosen the settings by type of question and type of vote, you can proceed with the creation of the poll.

::: warning PLEASE NOTE
If you choose the type of vote with authorization **(Authorized)** we will have to fill the list of addresses that represent the digital identities of the users authorized to vote.
:::

::: warning ATTENTION
If you choose the type of secret question **(Secret)** it is necessary to set a specific password to be given to the voters, in order to be able to read the question clearly and therefore be able to vote.
:::

## Voting guide

If you access the platform for the first time, to vote you must log in, click on the "Create Poll Key" button and re-enter the password to proceed with the creation of the RSA key. Polls in which we are authorized to participate will appear immediately afterwards.

Just access the desired poll and make your choice by clicking on the relevant box. We remind you that it is possible to vote several times within the deadline set by the auctioneer of the poll, but only the last vote will be counted.

After voting, you will be able to enter the voting screen again and the system will show you the choice counted by placing an "X" next to it. 

::: warning PLEASE NOTE
The auctioneer of the vote is not authorized to vote. In some specific cases, the "creator" of the vote is therefore to be considered as an "entity"; in this case the eventual president of a hypothetical board of directors will be endowed with a digital identity (through the address of the Scrypta network) like the other members, but will also manage the address related to the body (e.g. board of directors) that banishes the vote.
:::

## Guide to reading the results

The vote is counted automatically by analyzing the block explorer of the Scrypta network. Each vote is therefore indelibly written on the blockchain with time stamping and digital signature, while maintaining (if necessary) the anonymity of the participants in the vote, and can be counter-verified if necessary thanks to the distributed ledger typical of the Scrypta permissionless blockchain .

Once the vote is over, which ends on the basis of the times set at the time of creation, the results will be visible to anyone who participated in the vote in the section called *My History*, accessible from the top menu.

In the poll section of our interest, clicking on the "Show Result" button will show the results of the specific vote.

The voter can verify that his vote has been correctly registered as the choice made will be marked with the "X" symbol.