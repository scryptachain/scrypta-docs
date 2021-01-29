# Documenta

Documenta è il sistema di archiviazione distribuita di livello enterprise che permette a chiunque di caricare e notarizzare dei file in blockchain. Possiamo immaginarlo come una versione di IPFS più controllabile e basata su tecnologia [S3](https://aws.amazon.com/s3/) ed IdANode.

Per mezzo della notarizzazione in blockchain ogni dato viene contemporaneamente recepito e ridondato in tutti gli IdANode che hanno questa tecnologia abilitata. Potrà quindi essere richiamato tramite specifica chiamata successivamente. La struttura di dati che si viene a creare è quindi sistemata per `indirizzi` ed `hash` così da poter filtrare velocemente dati che appartengono allo stesso proprietario.

E' bene sottolineare che i dati rimangono pubblici e visibili a tutto il network quindi i dati devono essere pubblici o, in alternativa, cryptati con delle chiavi sicure.

Per abilitarlo in un IdANode è necessario impostare i seguenti parametri nel file `.env`:

```
S3_KEY_ID=IdChiaveDiAccesso
S3_SECRET_KEY=ChiaveDiAccesso
S3_ENDPOINT=UrlEnpointS3
S3_BUCKET=NomeS3Bucket
```

Non appena questi dati vengono inseriti il nodo inizierà a recepire e sincronizzare `tutti` i file caricati su Documenta indistintamente. Al momento non è stato integrato un filtro per indirizzi o altro, sicuramente verrà integrato uno Smart Contract di gestione di eventuali `fee` continuative da parte degli utenti nel tempo.

## [POST] /documenta/add

Questo endpoint serve per aggiungere file e può essere utilizzato in due modi diversi:

- Inviando un messaggio firmato con il buffer in formato esadecimale

- Inviare i dati attraverso il form-data

I due esempi si possono trovare su [Postman](https://documenter.getpostman.com/view/3143294/S11Ltxfq?version=latest#ea8b37ca-f30c-40b0-a015-ed97f9ae2ef0).

Nel secondo caso il body dovrà essere formato da:

- **file**: il file da inviare

- **private_key**: la chiave privata che servirà per scrivere i dati

- **title**: un eventuale titolo che verrà scritto in formato compresso all'interno della blockchain (pubblico)

## [GET] /documenta/:address

Ritorna un array con tutti i documenti notarizzati ed archiviati da uno specifico indirizzo, ad esempio:

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

Ritorna l'oggetto dallo storage per come è stato caricato, ad esempio questo link ritornerà il whitepaper di Bitcoin: https://idanodejs01.scryptachain.org/documenta/LQ3xZY2GG33s5n87vLkoYcv6ZL8ZmSXf8A/b1674191a88ec5cdd733e4240a81803105dc412d6c6708d53ab94fc248f4f553

Chiaramente si possono anche usare direttamente i link degli S3 senza passare dall'IdaNode.

## [GET] /documenta/doc/:address/:hash

Ritorna l'oggetto completo di timestamp e blocco, per analizzare quando è stato caricato e qual'è il suo hash.