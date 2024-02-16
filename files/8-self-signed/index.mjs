// Στη γραμμή εντολών: openssl req -nodes -new -x509 -keyout server.key -out server.cert
// Χρειάζεται να έχει εγκατασταθεί το openssl

import express from 'express';
import https from 'https';
import fs from 'fs';

const port = process.env.PORT || 3000;
const securePort = process.env.PORT || 3443;

const app = express();

app.get('/', (req, res) => {
   if (!req.secure) return res.redirect('https://' + req.headers.host + req.url);
   res.send('Είμαι ο server');
});

https
   .createServer(
      {
         key: fs.readFileSync('server.key'),
         cert: fs.readFileSync('server.cert'),
      },
      app
   )
   .listen(securePort, () => {
      console.log(`Η εφαρμογή τρέχει στο http://127.0.0.1:${securePort}/`);
   });

app.listen(port, () => console.log(`Η εφαρμογή τρέχει στο http://127.0.0.1:${port}/`));
