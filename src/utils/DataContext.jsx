import React, { useState, createContext } from "react";
import bookData from "../data/bookData";

export const DataContext = createContext();

export const DataProvider = (props) => {
  return (
    <DataContext.Provider value={bookData}>
      {props.children}
    </DataContext.Provider>
  );
};
