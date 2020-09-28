import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Usuarios from './components/Usuarios';
import Actualizar from './components/Actualizar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Usuarios}/>
        <Route path="/actualizar/:id" exact component={Actualizar}/>
      </Switch>
    </Router>
  );
}

export default App;
