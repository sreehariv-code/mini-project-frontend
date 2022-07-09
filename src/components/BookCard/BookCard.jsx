import React from "react";
import "./BookCard.css";
const BookCard = (props) => {
  return (
    <div className="book-card">
      <img className="book-image" src={props.imgurl} alt="book-image" />
      <div className="book-title">
        <p>{props.name}</p>
      </div>
    </div>
  );
};

export default BookCard;
