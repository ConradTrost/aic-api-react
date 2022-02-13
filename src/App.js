import React, { useEffect, useState } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import MasonryImage from "./components/MasonryImg";
import NavButton from "./components/NavButton";

const App = () => {
  const [page, setPage] = useState();

  const loadRandomPage = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomPage = Math.floor(Math.random() * (max - min) + min);
    setPage(randomPage);
  };

  const handleClick = () => {
    loadRandomPage(1, 500);
  };

  useEffect(() => {
    loadRandomPage(1, 500);
  }, []);

  return (
    <Box className="App">
      <MasonryImage key={page} page={page} />
      <NavButton onButtonClick={handleClick} />
    </Box>
  );
};

export default App;
