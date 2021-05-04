import './../css/pageContainer.css';
import CocktailCart from './CocktailCart';
import {useEffect, useState} from 'react';
import {useGetValCocktailContext} from './../AppContext';


const PageContainer = () => {
    const {isLoading, cocktailData } = useGetValCocktailContext()

    console.log(cocktailData)
    return(
        <div className="container">
            <div className="formSearch">
                <form action="">
                    <label htmlFor="">Search your cocktail</label>
                    <input type="text" placeholder=""/>
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
                            cocktailData.map(data => <CocktailCart key={data.idDrink} {...data} />)
                        }
                            
                        </div>
                    </div>
                )
            }

        </div>
    )
}
export default PageContainer;