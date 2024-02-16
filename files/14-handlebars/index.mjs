import express from 'express';
import { engine } from 'express-handlebars';

const app = express()
const port = process.env.PORT || 3000

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');

app.get('/', (req, res) => {
    console.log("hello")
    let a=1;
    a++;
    console.log(a)
    //..,
    //...
    res.render('home', { greeting: "σαγιονάρα" })//, layout: "other-layout" })
})


// app.get('/other-layout', (req, res) => {
//     res.render('home'() => console.log('waiting for form data')), { layout: "other-layout" })
// })

app.listen(port, () => console.log(`Σας περιμένουμε στο http://localhost:${port}`))