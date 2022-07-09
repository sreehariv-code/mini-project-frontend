import React from "react";
import "./BookCard.css";
const BookCard = (props) => {
  return (
    <div className="book-card">
      <img src={props.imgurl} alt="book-image" />
      <p className="book-title">{props.name}</p>
    </div>
  );
};

export default BookCard;
