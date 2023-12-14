import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { DrinkDetails } from "./pages/DrinkDetails";
import {NavBar} from "./components/NavBar";
import { Footer } from "./components/Footer";
import { useState } from "react";
import SearchContext from "./components/SearchContext";
import { DrinksGrid } from "./pages/DrinksGrid";
import { Members } from "./pages/Members";
import { FormSubs } from "./pages/FormSubs";
import { Create } from "./components/Create";
import { Edit } from "./components/Edit";
import { Show } from "./components/Show";

export const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <BrowserRouter>
      <SearchContext.Provider value={{ searchResults, setSearchResults }}>
        <NavBar />
        <Routes>          
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<DrinksGrid searchResults={searchResults} routePath="/filter.php?i=Gin"/>} />
          <Route path="/alcoholic" element={<DrinksGrid searchResults={searchResults} routePath="/filter.php?a=Alcoholic"/>} />
          <Route path="/nonAlcoholic" element={<DrinksGrid searchResults={searchResults} routePath="/filter.php?a=Non_Alcoholic"/>} />  
          <Route path="/ordinaryDrink" element={<DrinksGrid searchResults={searchResults} routePath="/filter.php?c=Ordinary_Drink"/>} /> 
          <Route path="/cocktail" element={<DrinksGrid searchResults={searchResults} routePath="/filter.php?c=Cocktail"/>} /> 
          <Route path="/cocktailGlass" element={<DrinksGrid searchResults={searchResults} routePath="/filter.php?g=Cocktail_glass"/>} /> 
          <Route path="/champagneFlute" element={<DrinksGrid searchResults={searchResults} routePath="/filter.php?g=Champagne_flute"/>} /> 
          <Route path="/drink/:idDrink" element={<DrinkDetails />} /> 
          <Route path="/members" element={<Members/>} />
          <Route path="/suscribe" element={<FormSubs/>} />          
          <Route path="/create" element={<Create/>} />
          <Route path="/edit/:id" element={<Edit/>} /> 
          <Route path="/show" element= {<Show/>} />        
        </Routes>
        <Footer />
      </SearchContext.Provider>
    </BrowserRouter>
  );
};
