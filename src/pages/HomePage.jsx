import React, { useContext, useState } from "react";
import { DataContext } from "../utils/DataContext";
import BookCard from "../components/BookCard/BookCard";

const HomePage = () => {
  const bookData = useContext(DataContext);
  const [books, setBooks] = useState(bookData);
  const booksArray = books.books;

  return (
    <div>
      <div className="book-sections">
        {booksArray.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
