import React, { useContext, useEffect, useState } from "react";
import BookCard from "../../components/BookCard/BookCard";
import { DataContext } from "../../utils/DataContext";

const SearchPage = () => {
  const data = useContext(DataContext);

  const [items, setItems] = useState(data.bookData);
  const searchArray = items.books;
  const styles = {
    cursor: "pointer",
  };

  return (
    <div>
      <h1>Search Page</h1>
      <div className="search-form">
        <input type="text" />
        <button style={styles} className="search-button">
          Search
        </button>
      </div>
      <div className="searched-contents">
        {searchArray.slice(0, 3).map((item) => (
          <BookCard key={item.id} {...item} />
        ))}
      </div>
      <button onClick={showMoreItems}>Load More</button>
    </div>
  );
};

export default SearchPage;
