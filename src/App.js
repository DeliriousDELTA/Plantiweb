import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import MainContainer from './containers/MainContainer';
import PlantasContainer from './containers/PlantasContainer';
import NavBar from './components/NavBar';
import ShopContainer from './containers/ShopContainer';

function App() {
  return (
      <BrowserRouter>
          <NavBar />
        <Switch>
          <Route exact path ="/" component={MainContainer}></Route>
          <Route exact path ="/plantas" component={PlantasContainer}></Route>
          <Route exact path ="/shop" component={ShopContainer}></Route>
        </Switch>
      </BrowserRouter>
    
  );
}

export default App;
