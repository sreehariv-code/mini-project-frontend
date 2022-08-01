import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../utils/DataContext";
import BookCard from "../../components/BookCard/BookCard";
import "./HomePage.css";
import { UserAuth } from "../../context/UserAuthContext";
import Wrapper from "../../components/Wrapper";

const HomePage = () => {
  const data = useContext(DataContext);
  const bookData = data.bookData;
  console.log(bookData);
  const [books, setBooks] = useState(bookData);
  const booksArray = books.books;

  const { user } = UserAuth();
  // const [user, setUser] = useState(data.userData);
  // const randomNumber = Math.floor(Math.random() * user.length);
  // const name =
  //   user[randomNumber].first_name + " " + user[randomNumber].last_name;
  // console.log(name);
  return (
    <Wrapper>
      <h1 className="user-name">Welcome &nbsp;{user.name} </h1>
      <div className="book-section">
        {booksArray.map((book) => (
          <Link key={book.key} className="book-links" to={`/book/${book.id}`}>
            <BookCard key={book.id} {...book} />
          </Link>
        ))}
      </div>
    </Wrapper>
  );
};

export default HomePage;
