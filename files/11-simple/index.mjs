import express from 'express';
const app = express();

const myMiddleware1 = (req, res, next) => {
   console.log('MW-1');
   next();
};

const myMiddleware2 = (req, res, next) => {
   console.log('MW-2');
   next();
};

const myMiddleware3 = (req, res, next) => {
   console.log('MW-3');
   let resString = '';
   for (const key in req.query) {
      resString += '\t' + key + ':' + req.query[key] + '\n';
   }
   console.log(resString);
   //    res.send('Ok!');
   next();
};

const pipeline = [myMiddleware1, myMiddleware2, myMiddleware3];
app.use(pipeline);
// const pipeline = [myMiddleware1, myMiddleware2, myMiddleware3]
// app.use("/path1", pipeline)
app.get('/', (req, res) => {
   res.send('/');
});
// app.use(myMiddleware3)

// app.get('/', (req, res) => {
//     console.log('Ένα αίτημα στο "/"')
//     res.send('Γειά σου express!')
// })

app.get(
   '/t',
   (req, res, next) => {
      console.log('/t handler');
      for (const key in req.query) {
         console.log(key, ':', req.query[key]);
      }
      next();
   },
   (req, res, next) => {
      console.log('callback 2');
      next();
   },
   (req, res) => {
      console.log('callback 3');
      res.send('/t OK!');
   }
);

app.listen(3000, () => console.log('Ready'));
