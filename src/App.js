import Navbar from "./components/Navbar";
import {Switch, Route} from 'react-router-dom'
import PageContainer from "./components/PageContainer";
import About from "./components/About";
import CocktailDetail from "./components/CocktailDetail";

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
