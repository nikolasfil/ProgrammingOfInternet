import express from 'express';
import 'dotenv/config';

const port = process.env.PORT || 3000;
const app = new express();

function myMiddleware(req, res, next) {
   next("οουπς");
   console.log('myMiddleware');
   //res.send("<a href='/'>myMiddleware</a>"); // Αν έχει σταλεί απάντηση, τότε δεν μπορούμε να στείλουμε και άλλη...

   throw new Error('Σφάλμα στο middleware');
   next();
}

function myMiddleware2(req, res, next) {
   console.log('myMiddleware2');
   next();
}
function errorHandler2(err, req, res, next) {
   console.log('errorHandler2');
   if (res.headersSent) {
      // Αν έχει σταλεί απάντηση, τότε δεν μπορούμε να στείλουμε και άλλη οπότε παραπέμπουμε στον default error handler
      return next(err); // ο default error handler
   }
   res.status(500);
   res.send('<p>Σφάλμα: ' + err.message + '</p><a href="/">Επιστροφή</a>');
}

app.get('/', myMiddleware, myMiddleware2, (req, res) => {
   console.log('Το αίτημα ολοκληρώθηκε επιτυχώς');
   res.send("<a href='/'>OK</a>");
});

// Οι χειριστές σφαλμάτων χρησιμοποιούνται τελευταίοι, μετά τους δρομολογητές και τα άλλα middleware
app.use((err, req, res, next) => {
    //πρώτος χειριστής σφαλμάτων
   console.log('Κάποιο σφάλμα συνέβη');
   next(err); // καλούμε τον επόμενο χειριστή σφαλμάτων
});
// Μπορούμε να έχουμε πολλούς
app.use(errorHandler2);

app.listen(port, () => console.log(`Η εφαρμογή τρέχει στο http://127.0.0.1:${port}/`));
