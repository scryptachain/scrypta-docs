# Progressive Data Management
Tramite questi metodi è possibile scrivere, aggiornare ed invalidare dati all'interno della blockchain.

## write(password, metadata, collection = '', refID = '', protocol = '', key = '', uuid = '')

Permette di scrivere una quantità indefinita di dati all'interno del proprio indirizzo. Questi dati verranno processati dagli IdANode e potranno essere letti invocando delle API.

Ecco i parametri che è possibile impostare:

-   **password:** la password per decifrare il payload di identità
    
-   **metadata:** i dati che si vogliono scrivere, sotto forma di stringa. Non c'è un limite di caratteri in quanto vengono concatenate più transazioni. E' chiaro che la maggiore lunghezza comporta un dispendio maggiore di LYRA. E' da sottolineare, chiaramente, che concatenare un gran numero di transazioni è sconsigliato in quanto anche il fallimento di una singola transazione renderebbe invalido l'intero dato.
    
-   **collection:** un parametro che permette di catalogare i dati all'interno di una collezione. Utile per strutturare i dati, questo parametro può essere usato come filtro durante la lettura dei dati dagli IdANode.
    
-   **refID:** un parametro che permette di dare un'unica referenza al dato, una sorta di ID aggiuntivo che è possibile filtrare, sempre dagli IdANode.
    
-   **protocol:** altra tipologia di filtro, viene usato per definire i protocolli e quindi la tipologia di dati inseriti. Scrypta ha ad esempio utilizzato i protocolli **E://** per i dati criptati, **I://** per l'identità, eccetera. Non c'è un vincolo di qualche tipo nell'utilizzo di protocolli.
    
-   **key:** il payload di identità da utilizzare; se omesso viene usato quello del localStorage.
    
- **uuid:** un eventuale uuid per scrivere in maniera sequenziale su uno stesso dato. 

Il metodo ritornerà un oggetto contenente una serie di informazioni:

-   **uuid:** l'identificatore univoco (uuid/v4) generato dall'IdANode per identificare lo specifico dato oppure quello passato nel metodo.
    
-   **address:** l'indirizzo dove è stata scritta l'informazione.
    
-   **fees:** la quantità totale delle fee usate.
    
-   **collection / refID / protocol:** i parametri passati precedentemente.
    
-   **dimension:** la dimensione finale del dato inserito.
    
-   **chunks:** la quantità di transazioni concatenate.
    
-   **stored:** il dato grezzo che è stato effettivamente scritto in blockchain.
    
-   **txs:** le txid delle transazioni effettivamente inviate.
    
Di seguito un esempio concreto:
```
{

 "uuid":"9022b33e.a4e8.401e.b32b.a2b75b012554",

 "address":"LLLjx7yV4nhUzSapBAHogb5BdgUR6VCB3o",

 "fees":0.010000000000000002,

 "collection":"",

 "refID":"",

 "protocol":"",

 "dimension":702,

 "chunks":10,

 "stored":"*!*9022b33e.a4e8.401e.b32b.a2b75b012554!*!!*!!*!*=>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis risus auctor, eleifend neque sit amet, ultricies nulla. Suspendisse condimentum nisi ut nunc mattis, vel congue velit congue. Aliquam sit amet pharetra tellus. Etiam tellus lacus, pretium vel commodo a, tempor nec ante. Aenean turpis nisi, pulvinar eget vehicula at, dapibus at dui. Cras vitae dictum massa. Sed in orci lorem. Nullam ut mattis lacus. Mauris ut mattis tellus. Donec et posuere lorem, id elementum ligula. Aliquam eu mollis neque, eget venenatis erat. Aenean vestibulum nunc diam, et luctus massa porttitor ac. Morbi tempor eleifend bibendum. Curabitur sed diam leo.*!*",

 "txs":["2432e4f57d355122d6c55331593ac3fc1c0095b2c9bcd7ba7c6e65fcf4cf07c7","c6d592889105c2989c43df50197f3b0d35449497001be69842602b9a72306a03","cf52acfc5384813ea65741354066962e10c33db826e575d300326850f0761c7f","b3d38ee224f8f82bbf0c4f878740dea5664ce3b90c2f5fea38e53ee1caa3a5d8","915ff12007dc738761c4746087fca2d03c17cefb272504d04f3378d3038816d1","76e3d9427575a82550e3461dad453d006c1d79bb59fd64eadcd6ce2f884ca582","d7650a8357fe031eec3672210c4d96bc41383375eeeac87062efb7c273daf924","27a00bc5478d6e50e04375271066c6ad7e0ac923d5553ab41358643942baf859","bedec596bf4117cea73095ec32361aef2425a65b9f1be23fd842181552c7d00e","6b4959c76eb57e3e913965901bf627f3e82e6c1332ae34d571f1222c68a24d49"]

}
```

Questa stessa informazione può essere recuperata e filtrata dall'IdANode. L'esempio può essere consultato al seguente link: [https://proof.scryptachain.org/#/uuid/2b33e.a4e8.401e.b32b.a2b75b012554](https://proof.scryptachain.org/#/uuid/2b33e.a4e8.401e.b32b.a2b75b012554)​

Ecco di seguito l'esempio che ha prodotto il risultato appena descritto:
```
const scrypta = new ScryptaCore

var metadata =  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis risus auctor, eleifend neque sit amet, ultricies nulla. Suspendisse condimentum nisi ut nunc mattis, vel congue velit congue. Aliquam sit amet pharetra tellus. Etiam tellus lacus, pretium vel commodo a, tempor nec ante. Aenean turpis nisi, pulvinar eget vehicula at, dapibus at dui. Cras vitae dictum massa. Sed in orci lorem. Nullam ut mattis lacus. Mauris ut mattis tellus. Donec et posuere lorem, id elementum ligula. Aliquam eu mollis neque, eget venenatis erat. Aenean vestibulum nunc diam, et luctus massa porttitor ac. Morbi tempor eleifend bibendum. Curabitur sed diam leo.'

var password =  'AStrongPassword'

var collection =  ''

var refID =  ''

var protocol =  ''

​let written =  await scrypta.write(password, metadata, collection, refID, protocol)
```

## update(password, metadata, uuid, collection = '', refID = '', protocol = '', key = '')

Questo metodo richiama il precedente ed è un alias, in questo però il campo uuid è obbligatorio, utile per verificare che non venga effettivamente creato un dato doppione. 

Occorre precisare che l'update di dati presenti in blockchain **non** è una sovrascrittura, tutte le transazioni sono **immutabili**. Di fatto l'operazione che viene fatta è quella di aggiornamento sequenziale del dato. In caso di dati aggiornati l'IdANode restituirà sempre e comunque l'ultimo anche se lo storico può essere recuperato passando il parametro _history=**true**_ in fase di lettura. 

## invalidate(key, password, uuid)

Questo metodo, come quello sopra, richiama sempre l'operazione di scrittura. In questo caso il dato scritto è sempre composto dall'**UUID** e dall'informazione **END**. Questa verrà interpretata dall'IdANode come un dato da **non** mostrare in fase di lettura. Come già specificato però le informazioni **non** possono essere cancellate dalla blockchain e possono essere recuperate dagli stessi IdANode passando il parametro _history=**true**_ in fase di lettura. 
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTE1MTc4MjkwOF19
-->