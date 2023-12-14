import {Link} from "react-router-dom";
import "./DrinksCard.css";



export const DrinksCard = ({drink}) => {

    const imgURL = drink.strDrinkThumb;
    
    return (
        <li className="drinksCard">
            <Link to={`/drink/${drink.idDrink}`}>
            <img className="drinkImage" src={imgURL} alt={drink.strCategory} />
            <div className="drinksName">
                {drink.strDrink}
            </div>
            </Link>
        </li>
        
    )
}