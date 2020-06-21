# Vanity Address

This tool creates "Vanity Addresses", which are addresses that begin with the letter _L_ and are followed by a user-defined word.

Since address generation is an entirely random operation, attempts must be made to generate a * vanity address *. The amount of evidence needed is not predictable: longer combinations are more difficult to generate.

## Installation

Clone the repository and install all dependencies:

```
git clone https://github.com/scryptachain/scrypta-vanity-address
cd scrypta-vanity-address
npm install
```

## Use

After installing the dependencies, use the tool through the following commands:

```
node index.js -v ParolaDaCercare -c NumeroDiCoreDaUsare
```


Research is "case insensitive" to make the process easier.

## Example

This is a possible example:
```
node index.js -v yra -c 4
```

The result will be something like:
```
RUNNING PROCESS ON CORE #1
RUNNING PROCESS ON CORE #2
RUNNING PROCESS ON CORE #3
RUNNING PROCESS ON CORE #4
⠋ Searching for vanity address starting with: yra
{ address: 'LYraZoCPz9gC6eb2rS2NPdaqVjcxhe44Fr',
  privkey: 'SkrtDPB2CrB49XMS6S6Q5t7VcsofKK9HDJ9jEKDYWB2QDbNGuGz2' }
⠹ Searching for vanity address starting with: yra
{ address: 'LYrANPypri3q1epAxvj3FY7Em2c2c9TQQ9',
  privkey: 'SqYkQEUEMs2fxxeFfJTGmrJpK3pRJgG8W2iUGYuTY2EhdHKcLv75' }
⠧ Searching for vanity address starting with: yra
{ address: 'LYraVxwTJgW4dFXGvzMa92YAvCJ7TY9M3K',
  privkey: 'So7FaA3g6Uh842UQyP3uTmE5RpqsMBoJ1koiDiFhBc5YJXqXxJPz' }
⠋ Searching for vanity address starting with: yra
{ address: 'LYrAFm5QrnATHgeaTxMNnSEXXU6mRvj5QY',
  privkey: 'SrEkFP62FDy7EDdnU7su5hXiT1EUtqSssax9EyWtcTKB62VsbeLQ' }
⠦ Searching for vanity address starting with: yra
{ address: 'LYrAoP4gkgQeRZdLvZjbkeeRhMV5zKRYUQ',
  privkey: 'SouFSzS9SiTwrTsF4wfcfxRfBtQU7mny8Wc7Q7tRj5MGmErzFfhh' }
⠴ Searching for vanity address starting with: yra
{ address: 'LYrAaQzUhaC7ixdJa9dcmeBU9GJoeJpaNR',
  privkey: 'SmpQz2k6YzKCZbuy9HjfkSgd8Mud9A2GUxRXMhqNpGJeChJR6XLq' }
⠹ Searching for vanity address starting with: yra
{ address: 'LYrAX9iM47M9Sz2C1pnrv8NApFyQpDs1pe',
  privkey: 'SkUgZwhbC1ekwQJDP1Nd1TzCeVXrDqKHSTvx29XUxACDNoEDLwTs' }
⠧ Searching for vanity address starting with: yra
{ address: 'LYRagm7tLrgENMWeYZ2wRKcHP3kjxs5PQd',
  privkey: 'SqosAaMpHY6peTW7iF8dwEwu2oR1jh8LGf5T7xe5zec5iY4iwz8J' }
⠙ Searching for vanity address starting with: yra
{ address: 'LYraJTNFcVJfkrqGKKn2XNFXbChtgV7CJS',
  privkey: 'SqFi6DcEPAzhTcNEgCQetAPx8jcmXukvbSNcoAtTpZcAkPQE3KzM' }
```

Whenever a result is found that reflects our preferences, the address is printed with the respective private key and the process starts from scratch. In the example given, 8 different addresses were found that begin with `Lyra`.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEyNDYyNzAyMF19
-->