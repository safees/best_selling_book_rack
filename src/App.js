import React, { useEffect, useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import getBooks from './api/GetBooks';
import Navbar from './layout/Navbar';
import BookList from './components/books/BookList';

const App = () => {
  const [books, setBooks] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    M.AutoInit();
    getBooksFromAPI();
  }, []);

  const getBooksFromAPI = async () => {
    const data = await getBooks();
    setBooks(data);
    setLoading(false);
  };

  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <BookList books={books} loading={loading} />
      </div>
    </div>
  );
};

export default App;
