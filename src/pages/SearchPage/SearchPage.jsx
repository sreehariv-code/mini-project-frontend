import React, { useContext, useEffect, useState } from "react";
import BookCard from "../../components/BookCard/BookCard";
import Wrapper from "../../components/Wrapper";
import { DataContext } from "../../utils/DataContext";
import "./SearchPage.css";

const SearchPage = () => {
  const data = useContext(DataContext);

  const [items, setItems] = useState(data.bookData);
  // const [visible, setVisible] = useState(3);
  const searchArray = items.books;
  const [searchTerm, setSearchTerm] = useState("");

  function showMoreItems() {
    setVisible((prevValue) => prevValue + 3);
  }

  return (
    <Wrapper>
      <div className="search-container">
        {/* <h1>Search Page</h1> */}
        <div className="search-form">
          <input
            type="text"
            placeholder="Search..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        <div className="searched-contents">
          {searchArray
            .filter((val) => {
              if (searchTerm == "") {
                return null;
              } else if (
                val.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((item) => (
              <BookCard key={item.id} {...item} />
              // <div>{item.name}</div>
            ))}
        </div>
        {/* <button onClick={showMoreItems}>Load More</button> */}
      </div>
    </Wrapper>
  );
};

export default SearchPage;
