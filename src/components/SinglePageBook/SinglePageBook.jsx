import React, { useContext, useState, useEffect } from "react";
import "./SinglePageBook.css";
import { useParams } from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import { DataContext } from "../../utils/DataContext";

const SinglePageBook = () => {
  const { bookData } = useContext(DataContext);
  const [isAvailable, setIsAvailable] = useState();
  const bookArray = bookData.books;

  const { id } = useParams();
  const match = bookArray.filter((book) => book.id == id);

  const book = {
    name: match[0].name,
    author: match[0].author,
    imgUrl: match[0].imgurl,
    count: match[0].count,
  };

  useEffect(() => {
    if (book.count > 0) {
      setIsAvailable(true);
    } else {
      setIsAvailable(false);
    }
  }, []);

  return (
    <Wrapper>
      <div className="single-page-container">
        <div className="book-left-image">
          <img className="book-image" src={book.imgUrl} alt="book-image" />
        </div>
        <div className="book-right-content">
          <h1 className="book-name">{book.name}</h1>
          {book.author && <h3 className="author-name">{book.author}</h3>}
          <div
            className={
              book.count > 0 ? "stock-container green" : "stock-container red"
            }
          >
            {book.count ? (
              <p className="available">Available</p>
            ) : (
              <p className="not-available">Not Available</p>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SinglePageBook;
