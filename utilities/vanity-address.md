# Vanity Address

Questo strumento serve a creare quelli che vengono chiamati "Vanity Address" ovvero degli indirizzi che iniziano come sempre con la lettera _L_ ma vengono seguiti da una parola definita dall'utente.

Essendo la generazione di indirizzi un'operazione assolutamente casuale, per generare un *vanity address* bisogna fare dei tentativi. La quantità di prove necessaria non è prevedibile, ma è semplicemente questione di tempo. E' chiaro che combinazioni più lunghe sono più difficili da generare.

## Installazione

Clonate la repository e installate tutte le dipendenze:

```
git clone https://github.com/scryptachain/scrypta-vanity-address
cd scrypta-vanity-address
npm install
```

## Utilizzo

Dopo aver installato le dipendenze, usate lo strumento attraverso i seguenti comandi:

```
node index.js -v ParolaDaCercare -c NumeroDiCoreDaUsare
```


La ricerca è, chiaramente, "case insensitive" per rendere il processo più semplice.

## Esempio

Un esempio concreto potrebbe essere il seguente:
```
node index.js -v yra -c 4
```

Il risultato sarà qualcosa del tipo:
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

Ogni qualvolta  viene trovato un risultato che rispecchia le nostre preferenze, viene stampato l'indirizzo con la rispettiva chiave privata  e il processo ricomincia da zero. Come possiamo evincere dall'esempio, sono stati trovati 8 indirizzi diversi che iniziano con `Lyra`.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEyNDYyNzAyMF19
-->