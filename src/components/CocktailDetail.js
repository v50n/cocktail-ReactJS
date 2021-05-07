import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import './../css/cocktailDetail.css';
import {Link} from 'react-router-dom'

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const CocktailDetail = () => {
    const [cocktailDetail, setCocktailDetail] = useState(null);
    let { id } = useParams();
    async function getData(){
        var response = await fetch(url+id);
        var data = await response.json()
        setCocktailDetail(data.drinks)
    }
    useEffect(()=>{
        getData();
    },[id])
    if(cocktailDetail === null){
        return (
            <div className="cocktailDetail">
                <h1 className="name">Loading...</h1>
            </div>
        )
    }else{
        const { strDrink,strCategory,strAlcoholic,strGlass, strInstructions,strDrinkThumb} = cocktailDetail[0];
        return (
            <div className="cocktailDetail">
                <h1 className="name">{strDrink}</h1>
                <div className="cocktailInfo">
                    <img src={strDrinkThumb} alt="cocktail" />
                    <div className="info">
                        <div>
                            <span className="info-label">Name : </span> <span className="info-description">{strDrink}</span>
                        </div>
                        <div>
                            <span className="info-label">Category : </span> <span className="info-description">{strCategory}</span>
                        </div>
                        <div>
                            <span className="info-label">Info : </span> <span className="info-description">{strAlcoholic}</span>
                        </div>
                        <div>
                            <span className="info-label">Glass : </span> <span className="info-description">{strGlass}</span>
                        </div>
                        <div>
                            <span className="info-label">Instructions : </span> <span className="info-description">{strInstructions}</span>
                        </div>
                    </div>
                </div>
                <Link to="/">
                    <button className="btn-homepage">Back to homepage</button>
                </Link>
            </div>
        )
    }

}
export default CocktailDetail;