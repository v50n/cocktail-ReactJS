import React, { useContext, useState, useEffect} from 'react';

const CocktailCartContext = React.createContext();
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [cocktailData, setCocktailData] = useState([]);

    const getData = async () =>{
        var response = await fetch(url);
        var data = await response.json();
        setCocktailData(data.drinks)
        setIsLoading(false);
    }

    useEffect(() => {
        getData()
    },[])

    return(
        <CocktailCartContext.Provider value={{
            isLoading,
            cocktailData
        }}>
            {children}
        </CocktailCartContext.Provider>
    )
}

// custom hook, make sure have useXXXXXXX
const useGetValCocktailContext = () =>{
    return useContext(CocktailCartContext); 
}


export {AppProvider, CocktailCartContext, useGetValCocktailContext};