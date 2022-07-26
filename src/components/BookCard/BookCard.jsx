import React from "react";
import { useNavigate } from "react-router-dom";
import "./BookCard.css";
const BookCard = (props) => {
  // let navigate = useNavigate();
  return (
    <div className="book-card" onClick>
      <div className="image-wrapper">
        <img className="book-image" src={props.imgurl} alt="book-image" />
      </div>
      <div className="book-title">{props.name}</div>
    </div>
  );
};

export default BookCard;
