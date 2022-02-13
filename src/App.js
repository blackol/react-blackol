import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Detailsprojets from './pages/Detailsprojets';
import Home from './pages/Home';
import Projets from './pages/Projets';
import NotFound from './pages/NotFound';

const App = () => {
  return (
   <BrowserRouter>
      <Switch>
        <Route exact path='/'  component={Home} />
        <Route exact path='/projets'  component={Projets} />
        <Route exact path='/detailsprojets'  component={Detailsprojets} />
        <Route component={NotFound} />
      </Switch>
   </BrowserRouter> 
  );
};

export default App;