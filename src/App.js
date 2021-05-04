import Navbar from "./components/Navbar";
import {Switch, Route} from 'react-router-dom'
import PageContainer from "./components/PageContainer";
import About from "./components/About";
import CocktailDetail from "./components/CocktailDetail";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
function App() {
  return (
    <>
      <div className="App">
        <Navbar />
      </div>
      <Switch>
        <Route exact path="/">
          <PageContainer />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cocktail/:id" children={<CocktailDetail  />} />
      </Switch>
    </>
  );
}

export default App;
