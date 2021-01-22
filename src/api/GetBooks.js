const getBooks = async () => {
  const res = await fetch(
    'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=4GuFMrCQND0hqMFG9r62bRpINDgu9WDJ'
  );
  const data = await res.json();
  const dataObject = data.results.books;
  return dataObject;
};

export default getBooks;
