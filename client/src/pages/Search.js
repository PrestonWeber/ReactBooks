import React, { useState } from "react";
import Book from "../components/book";
import Search from "../components/search";
import axios from "axios";

export default function bookSearch() {
  const [books, setBooks] = useState([]);

  const searchBooks = query => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then(googleBooks => {
        setBooks(googleBooks.data.items);
      });
  };

  const addBook = (e, bookId) => {
    console.log(e.target.value);
    const bookClicked = books.find(book => book.id === bookId);
    console.log(bookClicked);
    let bookImg = "img/noimgavail.jpg";
    if (bookClicked.volumeInfo.imageLinks) {
      bookImg = bookClicked.volumeInfo.imageLinks.smallThumbnail;
    }
    const data = {
      title: bookClicked.volumeInfo.title,
      authors: bookClicked.volumeInfo.authors,
      description: bookClicked.volumeInfo.description,
      image: bookImg,
      link: bookClicked.volumeInfo.link,
      publishedDate: bookClicked.volumeInfo.publishedDate
    };
    console.log(data);
    axios.post("/api/books/", data).then(res => {
      console.log("Book Added");
    });
  };

  const handleSearch = (event, query) => {
    event.preventDefault();
    if (query) {
      return searchBooks(query);
    }
  };

  const printBooks = () => {
    if (books.length > 0) {
      return books.map(book => {
        let bookInfo = book.volumeInfo;
        let bookImg = "img/noimgavail.jpg";
        if (bookInfo.imageLinks) {
          bookImg = bookInfo.imageLinks.smallThumbnail;
        }
        return (
          <Book
            key={book.id}
            id={book.id}
            img={bookImg}
            title={bookInfo.title}
            description={bookInfo.description}
            authors={bookInfo.authors}
            publishedDate={bookInfo.publishedDate}
            link={bookInfo.previewLink}
            button="add"
            addBook={addBook}
          />
        );
      });
    } else {
      return <div key="none">Search for a book, and press submit.</div>;
    }
  };

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <hr></hr>
      <div className="container">
        <div className="row">{printBooks()}</div>
      </div>
    </div>
  );
}
