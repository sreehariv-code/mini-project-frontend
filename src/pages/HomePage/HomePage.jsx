import React, { useContext, useState } from "react";
import { DataContext } from "../../utils/DataContext";
import BookCard from "../../components/BookCard/BookCard";
import "./HomePage.css";

const HomePage = () => {
  const data = useContext(DataContext);
  const bookData = data.bookData;
  const [books, setBooks] = useState(bookData);
  const booksArray = books.books;
  const [user, setUser] = useState(data.userData);
  const randomNumber = Math.floor(Math.random() * user.length);
  const name =
    user[randomNumber].first_name + " " + user[randomNumber].last_name;
  console.log(name);
  return (
    <div>
      <h1 className="user-name">Welcome {name} </h1>
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
