import './App.css';
import Home from './components/home-page/home';
import Detaile from './components/detaile-page/detaile';
import Layout from './layout/layout';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import React, { createContext, useState } from 'react';
import useTheme from './useTheme'; // Import custom hook

export const contextStates = createContext(null);

function App() {

  const [theme, setTheme] = useState((theme) => {
    theme = JSON.parse(localStorage.getItem('darkMode'));
    if (theme === null) {
      localStorage.setItem('darkMode', 1);
      theme = 1;
    }
    return theme
  });

  const [showFavourite, setShowFavourite] = useState((showFavourite) => {
    showFavourite = JSON.parse(localStorage.getItem('showFavourite'));
    if (showFavourite === null) {
      localStorage.setItem('showFavourite', 0);
      showFavourite = 0;
    }
    return showFavourite
  });

  const [favouriteList, setFavouriteList] = useState(() => {
    let storedFavouriteList = JSON.parse(localStorage.getItem('favouriteList'));

    if (storedFavouriteList === null) {
      localStorage.setItem('favouriteList', '[]'); // Set to an empty array string
      storedFavouriteList = [];
    }

    return storedFavouriteList;
  });


  useTheme(theme === 1);

  return (
    <contextStates.Provider value={{ theme, setTheme, showFavourite, setShowFavourite, favouriteList, setFavouriteList }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/detaile/:id" element={<Detaile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </contextStates.Provider>
  );
}
export default App;
