import { get } from "../../utils/httpCliente";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./DrinkDetails.css";

export const DrinkDetails = () => {
  const [drink, setDrink] = useState(null);
  const { idDrink } = useParams();

  useEffect(() => {
    get(`/lookup.php?i=${idDrink}`).then((data) => {
      setDrink(data?.drinks?.[0]);
    });
  }, [idDrink]);

  if (!drink) {
    return null;
  }

  // Function to get ingredients and measures in Spanish
  const getIngredientsAndMeasuresInSpanish = () => {
    const ingredientsAndMeasures = [];

    for (let i = 1; i <= 15; i++) {
      const ingredient = drink[`strIngredient${i}`];
      const measure = drink[`strMeasure${i}`];

      if (ingredient && measure) {
        // Check if Spanish translations are available for ingredients and measures
        const translatedIngredient = drink[`strIngredient${i}ES`] || ingredient;
        const translatedMeasure = drink[`strMeasure${i}ES`] || measure;

        ingredientsAndMeasures.push(`${translatedMeasure} de ${translatedIngredient}`);
      } else if (ingredient) {
        // Check if Spanish translation is available for ingredient
        const translatedIngredient = drink[`strIngredient${i}ES`] || ingredient;

        ingredientsAndMeasures.push(translatedIngredient);
      }
    }

    return ingredientsAndMeasures;
  };

  const ingredientsAndMeasuresInSpanish = getIngredientsAndMeasuresInSpanish();

  return (
    <div className="contenedorDetalle">
      <img className="imagenDrink col" src={drink.strDrinkThumb} alt={drink.strDrink} />
      <div className="tragoDetalle col">
        <p className="item">
          <strong>{drink.strDrink}</strong>
        </p>
        <p>
          <strong>Instrucciones</strong><br/>
          {drink.strInstructions}
        </p>
        <p>
          <strong>Ingredientes</strong><br/>
          {ingredientsAndMeasuresInSpanish.map((ingredient, index) => (
            <span key={index}>{ingredient}<br /></span>
          ))}
        </p>
        <p>
          <strong>Categoria:</strong><br/>
          {drink.strCategory}
        </p>
      </div>
      <div className="backgroundImage">
        <img src={drink.strDrinkThumb} alt={drink.strDrink} />
      </div>
    </div>
  );
};
