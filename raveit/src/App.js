import './App.css';
import './assets/styles/index.css';
import './assets/styles/ri.css';
import './assets/styles/eventos.css';
import './assets/styles/detalles.css';
import IndexComponentes from './componentes/index/Index';
import EventosComponentes from './componentes/eventos/eventos';
import DetallesComponentes from './componentes/detalles/detalles';
import {BrowserRouter as Router,Route,Switch,} from 'react-router-dom';
import React from 'react';

function App() {
  return (
          <Router>
        <div className="Contenedor">
          <Switch>
            <Route path ="/" exact>
                 <IndexComponentes></IndexComponentes>
             </Route>    
                 
                 
              
              <Route path="/eventos"exact>
                <EventosComponentes></EventosComponentes>
              </Route>
              <Route path="/detalles/:id" exact render={props => <DetallesComponentes {...props}></DetallesComponentes>}> 
               
             </Route> 
             </Switch>
        </div>
           
  </Router>);
}

export default App;
