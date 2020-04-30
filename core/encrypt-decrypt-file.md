# Encrypt-Decrypt File

## cryptFile(file, password)

Questo metodo serve per la crittografia un file, prelevato attraverso un campo di input HTML e ritorna una stringa esadecimale rappresentante il file crittografato. Questa stringa potrà essere anche piuttosto lunga e l'operazione potrebbe richiedere del tempo di attesa, dipende chiaramente dalla dimensione del file stesso.

La stringa ritornata non può essere inviata direttamente ad IPFS in quanto dovrà essere trasformata in Buffer. Più avanti vedremo un esempio completo che potrete richiamare e utilizzare dall'interfaccia di test.
```
<input  type="file"  onChange="testCryptFile(event)">
```
```
const scrypta = new ScryptaCore​

function  testCryptFile(ev){

 const file = ev.target.files[0];

 let password =  'AStrongPassword'

 let crypted = scrypta.cryptFile(file,password)

 /*

 Risposta di esempio:

 e1e3a70ef671b920636e5b72f8f002024c567bd9ad5aa92d456e2306400303ac4465ee153872740984b2c08148ebcca268567c400328fad443a6a6c83326a33f274869be734b2bbce91644651f149e16a74b31947f936aca2d5835484209393d58f04efd0cf53fff57c26c23f5cb484ca4338a6a9c5a080e03179dfe6bd731e346bbdb75bcff48532e649bef90f4ad09d2ba29dd102827ba04d972bcee5fb2a0411b8815391619036dbb34fa6f05505a031cbee3fd85ff44cd575b2c4dcf7ab2d5ceb98b7e30d28e03ee25259c9b4d6b49510e0feb80469f963b6640217830ba5bb8793b0896ff4ec9ae9370d1c05371a559fbc9e822ed04ea0f541fdd4ad150837f33d5ade14341d3d6611455180cb6886941d58dacd32c8a8f7d713dc66697ea678ac789a78df247586b34f3c77aee3c6b93d56d37546bd0260886cce47190d29cd2636fec0120f4e9ee9790b4e1beb45113858d54c8196511f2d1d08014722eecc645f18aaec9af3f316cd1c47eeb1a72fa5a6ac3567d86c4bc4994012c0742359a4dd1878725462c73a76e7ad33581d0ab03711e08cf774253882f40da7c2f197ff2ecacd61284a96e8095dc736e

 */

}
```
## decryptFile(file, password)

Questo metodo decripta un buffer, crittografato precedentemente, e lo trasforma in un buffer contenente il file decifrato. Il metodo restituirà `false` se la password inserita è errata.

```
const scrypta = new ScryptaCore

let encrypted =  new  Buffer('e1e3a70ef671b920636e5b72f8f002024c567bd9ad5aa92d456e2306400303ac4465ee153872740984b2c08148ebcca268567c400328fad443a6a6c83326a33f274869be734b2bbce91644651f149e16a74b31947f936aca2d5835484209393d58f04efd0cf53fff57c26c23f5cb484ca4338a6a9c5a080e03179dfe6bd731e346bbdb75bcff48532e649bef90f4ad09d2ba29dd102827ba04d972bcee5fb2a0411b8815391619036dbb34fa6f05505a031cbee3fd85ff44cd575b2c4dcf7ab2d5ceb98b7e30d28e03ee25259c9b4d6b49510e0feb80469f963b6640217830ba5bb8793b0896ff4ec9ae9370d1c05371a559fbc9e822ed04ea0f541fdd4ad150837f33d5ade14341d3d6611455180cb6886941d58dacd32c8a8f7d713dc66697ea678ac789a78df247586b34f3c77aee3c6b93d56d37546bd0260886cce47190d29cd2636fec0120f4e9ee9790b4e1beb45113858d54c8196511f2d1d08014722eecc645f18aaec9af3f316cd1c47eeb1a72fa5a6ac3567d86c4bc4994012c0742359a4dd1878725462c73a76e7ad33581d0ab03711e08cf774253882f40da7c2f197ff2ecacd61284a96e8095dc736e')

let password =  'AStrongPassword'

let decrypted =  await scrypta.decryptFile(encrypted, password)

/*

 Risposta: 

 Uint8Array(419) [76, 76, 49, 99, 104, 90, 83, 71, 55, 80, 72, 110, 89, 65, 50, 101, 114, 68, 104, 97, 76, 50, 101, 54, 55, 84, 80, 49, 121, 97, 101, 54, 110, 49, 58, 99, 51, 97, 52, 56, 56, 56, 102, 100, 98, 53, 99, 97, 53, 57, 102, 101, 51, 54, 52, 53, 50, 97, 54, 51, 49, 50, 54, 51, 53, 98, 53, 99, 98, 102, 52, 48, 48, 54, 100, 51, 54, 49, 101, 99, 99, 50, 100, 99, 97, 49, 49, 51, 54, 50, 54, 48, 48, 101, 101, 55, 101, 49, 48, 102, …]

*/
```
# Un esempio concreto

Un esempio pratico può essere trovato all'interno della Testing Suite. Riportiamo di seguito il codice per evidenziare i vari passaggi che portanno all'hashing del file con IPFS, al download dello stesso file (sempre attraverso IPFS) e alla conseguente ricostruzione del file originario.
```
<input  type="file"  onChange="testCryptFile(event)">
```
```
function  testCryptFile(ev){

 const file = ev.target.files[0];

 let password =  'test'

 let isWriting =  false

 document.getElementById('cryptfileresponse').innerHTML =  'Crypting file...'

 if(isWriting ===  false){

 new ScryptaCore.cryptFile(file,password).then(crypted =>  {

 isWriting =  true

 const form_data =  new  FormData();

 form_data.append("buffer", crypted);

 console.log(crypted)

 document.getElementById('cryptfileresponse').innerHTML =  'Posting file to IPFS...'

 axios.post(

 'https://idanodejs01.scryptachain.org/ipfs/add', 

 form_data, 

 {

 "Content-Type":  "multipart/form-data"

 }).then(function  (response)  {

 console.log(response.data)

 document.getElementById('cryptfileresponse').innerHTML =  'Retrieving file from IPFS...'

 axios.get('https://idanodejs01.scryptachain.org/ipfs/buffer/'  + response.data.data[0].hash).then(ipfs =>  {

 console.log(ipfs)

 document.getElementById('cryptfileresponse').innerHTML =  'Decrypting file...'

 let data = ipfs.data.data[0].content.data

 console.log('DATA',data)

 new ScryptaCore.decryptFile(data, password).then(decrypted =>  {

 console.log('DECRYPTED', decrypted)

 document.getElementById('cryptfileresponse').innerHTML =  'Downloading file...'

 var saveByteArray =  (function  ()  {

 var a = document.createElement("a");

 document.body.appendChild(a);

 a.style =  "display: none";

 return  function  (data, name)  {

 var blob =  new  Blob(data,  {type:  "octet/stream"}),

 url = window.URL.createObjectURL(blob);

 a.href = url;

 a.download = name;

 a.click();

 document.getElementById('cryptfileresponse').innerHTML =  ''

 window.URL.revokeObjectURL(url);

 };

 }());

​

 saveByteArray([decrypted], file.name);

 })

 })

 })

 })

 }

}
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTAzNzUzMDQzNF19
-->