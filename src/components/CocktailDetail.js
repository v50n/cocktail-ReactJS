import {useParams} from 'react-router-dom';
import {useGetValCocktailContext} from './../AppContext';
import './../css/cocktailDetail.css';

const CocktailDetail = () => {
    const {cocktailData} = useGetValCocktailContext();
    console.log(cocktailData)
    let { id } = useParams();
    var currentData = cocktailData.filter(item => item.idDrink === id)
    console.log(currentData)
    const {idDrink,strDrinkThumb,strDrink,strCategory,strAlcoholic,strGlass,strInstructions} = currentData[0]
    return (
        <div className="cocktailDetail">
            <h1 className="name">{strDrink}</h1>
            <div className="cocktailInfo">
                
            </div>
        </div>
    )
}
export default CocktailDetail;