import express from 'express';
import { BookList } from './model/bookList.mjs';

const router = express.Router();
const bookList = new BookList();

router.get('/books', async (req, res) => {
   await bookList.loadBooksFromFile();
   res.render('booklist', { books: bookList.myBooks.books });
});

router.get('/addbookform', (req, res) => {
   res.render('addbookform');
});

// Προσοχή: εδώ λείπει ο έλεγχος εγκυρότητας των δεδομένων που στέλνει ο χρήστης!
router.post('/doaddbook', async (req, res) => {
   const newBook = {
      title: req.body['newBookTitle'],
      author: req.body['newBookAuthor'],
   };
   await bookList.addBookToFile(newBook);
   res.redirect('/books');
});

export { router };
