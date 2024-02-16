import express from 'express';
const app = express();
const port = 3000;

const myLogger = function (req, res, next) {
   console.log('LOGGED');
   next();
};

app.use(myLogger);

app.get('/', (req, res) => {
    console.log("Εκτέλεση GET /")
   res.send('Γειά σου express!');
});

app.listen(port, () => console.log(`Έτοιμο! (http://localhost:${port})`));
