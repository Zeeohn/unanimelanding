"use client";
import React, { createContext, useState, useContext } from "react";

// Create Context
const StateContext = createContext();

export const useStateContext = () => useContext(StateContext); // Custom hook for context access

const StateProvider = ({ children }) => {
  const [currentpage, setCurrentPage] = useState("overview"); // Shared state

  return (
    <StateContext.Provider value={{ currentpage, setCurrentPage }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
