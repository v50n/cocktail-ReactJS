import './../css/cart.css';
import {Link} from 'react-router-dom'

const CocktailCart = ({strDrink, strDrinkThumb, strAlcoholic, strGlass, idDrink}) => {
    return (
        <div className="cart">
            <img className="imgDrink" src={strDrinkThumb} alt="drink"/>
            <div className="cartContain">
                <div className="title">{strDrink}</div>
                <div className="glass">{strGlass}</div>
                <div className="alcoholic">{strAlcoholic}</div>
                   <Link to={`cocktail/${idDrink}`}>
                    <button className="btn-detail">DETAILS</button>
                   </Link> 
            </div>

        </div>
    )
}

export default CocktailCart;