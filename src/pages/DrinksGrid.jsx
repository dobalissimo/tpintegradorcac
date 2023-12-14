//rfce =>atajo para la creacion del componente
import { DrinksCard } from "../components/DrinksCard";
import "./DrinksGrid.css";
import { get } from "../../utils/httpCliente";
import { useState, useEffect } from "react";


export const DrinksGrid = ({ searchResults, routePath  }) => {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    if (searchResults.length > 0) {
      setDrinks(searchResults);
    } else {
      get(routePath)
        .then((data) => {
          setDrinks(data.drinks);
        })
        .catch((error) => {
          console.error("Error fetching drinks:", error);
        });
    }
  }, [searchResults]);

  return (
    <ul className="drinksGrid">
      {drinks.map((drink) => (
        <DrinksCard key={drink.idDrink} drink={drink} />
      ))}
    </ul>
  );
};
