import express from 'express';
import expSession from 'express-session';

const port = process.env.PORT || 3000;
const app = new express();

const sessionConf = {
   secret: 'έναμεγάλοτυχαίοαλφαριθμητικό',
   cookie: { maxAge: 10 * 1000 }, // μόλις 10 δευτερόλεπτα!
   resave: false,
   saveUninitialized: false,
};

app.use(expSession(sessionConf));

app.use((req, res, next) => {
   console.log('session id:', req.sessionID, res.locals);
   if (!req.session.hits) {
      req.session.hits = 1;
   }
   if (req.query['close']) {
      console.log('επανεκκίνηση συνεδρίας');
      req.session.regenerate((callback) => next());
   } else next();
});

function logHit(req, res, next) {
   const startColor = '\x1B[31;41;4m';
   const endColor = '\x1B[m';
   console.log(
      `Το προηγούμενο αίτημα ήταν στο ${startColor}${req.session.mostRecentHit}${endColor}, ${startColor}${req.session.hits}${endColor}, ${startColor}${res.locals.localTest}${endColor}`
   );
   next();
}

app.get('/ping', logHit, (req, res) => {
   res.locals.localTest = 'localTest';
   req.session.mostRecentHit = 'ping';
   req.session.hits++;
   res.send("<a href='/pong/'>pong<a><br><a href='/pong?close=true'>close session</a>");
});

app.get('/pong', logHit, (req, res) => {
   req.session.mostRecentHit = 'pong';
   req.session.hits++;
   res.send("<a href='/ping/'>ping<a><br><a href='/pong?close=true'>close session</a>");
});

app.listen(port, () => console.log(`Η εφαρμογή τρέχει στο http://127.0.0.1:${port}/ping`));
