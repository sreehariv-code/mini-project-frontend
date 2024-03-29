import React, { createContext } from "react";
import bookData from "../data/bookData";
import userData from "../data/userData";

const data = {};

//export DataContext to obtain book data 
export const DataContext = createContext();

export const DataProvider = (props) => {
  return (
    <DataContext.Provider value={{ bookData, userData }}>
      {props.children}
    </DataContext.Provider>
  );
};
