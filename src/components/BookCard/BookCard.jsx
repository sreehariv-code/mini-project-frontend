import React from "react";
import "./BookCard.css";
const BookCard = (props) => {
  return (
    <div className="book-card">
      <div className="image-wrapper">
        <img className="book-image" src={props.imgurl} alt="book-image" />
      </div>
      <div className="book-title">{props.name}</div>
    </div>
  );
};

export default BookCard;
