import React, { useContext, useState } from "react";
import { DataContext } from "../../utils/DataContext";
import BookCard from "../../components/BookCard/BookCard";
import "./HomePage.css";

const HomePage = () => {
  const bookData = useContext(DataContext);
  const [books, setBooks] = useState(bookData);
  const booksArray = books.books;
  const [user, setUser] = useState("John Doe");

  return (
    <div>
      <h1 className="user-name">Welcome {user} </h1>
      <div className="book-section">
        {booksArray.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
      <div className="book-section">
        {booksArray.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
      <div className="book-section">
        {booksArray.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
      <div className="book-section">
        {booksArray.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
