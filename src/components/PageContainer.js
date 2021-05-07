import './../css/pageContainer.css';
import CocktailCart from './CocktailCart';
import {useEffect, useState} from 'react';

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const PageContainer = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [inputVal, setInputVal] = useState("");

    const handleOnChange = (e) =>{
        setInputVal(e.target.value);
    }
    const getData = async () =>{
        var response = await fetch(url);
        var data = await response.json();
        setData(data.drinks)
        setIsLoading(false);
    }
    const getDataOnChange = async () =>{
        var response = await fetch(url+inputVal);
        var data = await response.json();
        setData(data.drinks)
        setIsLoading(false);
    }

    useEffect(()=>{
        getData()
    },[])
    useEffect(()=>{
        getDataOnChange()
    },[inputVal])

    return(
        <div className="container">
            <div className="formSearch">
                <form action="">
                    <label htmlFor="">Search your cocktail</label>
                    <input type="text" placeholder="" value={inputVal} onChange={handleOnChange} />
                </form>
            </div>
            
            {
                isLoading ? (
                    <div>
                        <h2 className="sectionTitle">Cocktails</h2>
                        <div className="sectionCocktails">
                            Loading
                        </div>
                    </div>
                ) : (
                    <div>
                        <h2 className="sectionTitle">Cocktails</h2>
                        <div className="sectionCocktails">
                        {
                           data === null ? 'No cocktail available' :  data.map(data => <CocktailCart key={data.idDrink} {...data} />)
                        }
                            
                        </div>
                    </div>
                )
            }

        </div>
    )
}
export default PageContainer;