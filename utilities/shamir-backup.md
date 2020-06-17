# Scrypta Shamir Backup 

Questo tool serve per creare dei backup di sicurezza per i wallet Scrypta o semplicemente per dei dati di vostro interesse. 

Per chi non conoscesse questo sistema di backup facciamo un piccolo riepilogo. 

Il sistema di condivisione dei segreti inventato da Shamir serve per dividere il rischio di perdita di dati in quanto il dato viene diviso in un numero di parti (shares) e viene impostata una soglia (threshold) ovvero il numero minimo di parti che servono per ricostituire il segreto.

Questo tool vi permetterà di creare queste parti e ricostituirle, usando semplicemente il terminale. Per un'archiviazione offline vengono anche creati dei file .pdf che contengono un QR code contenente la parte.

Per installarlo bisogna avere `NodeJS` e si potrà installare globalmente attraverso il comando:

```
npm install -g @scrypta/shamir
```

## Creare un nuovo wallet

Se vuoi creare un nuovo wallet basta dare il comando:

```
scrypta-shamir create
```

Questo creerà un'interfaccia dinamica dove verrà chiesto di inserire il numero di parti totali e la soglia.

PUoi anche scegliere una password per criptare i dati (ti servirà nuovamente la password per recuperare il wallet).

## Creare un backup per un qualsiasi dato

Se vuoi creare un backup per un qualsiasi dato (stringa) bisogna dare il seguente comando:

```
scrypta-shamir secure
```

Funziona esattamente come il comando `create`, l'unica differenza è che alla prima domanda vi verrà chiesto di inputare il dato.

## Recuperare un backup

Se invece si vuole recuperare un backup è necessario dare il seguente comando, inserendo come parametro `--path` la cartella contenente gli share.

```
scrypta-shamir restore --path=/PATH/TO/FOLDER/BACKUP 
```

Se invece hai criptato i dati all'inizio della procedura dovrai passare anche il parametro `--password` con la password usata in principio.

```
scrypta-shamir restore --path=/PATH/TO/FOLDER/BACKUP --password=YourStrongPassword
```