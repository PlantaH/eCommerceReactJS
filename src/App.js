 
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'; 

import NavBar from "./components/NavBar/NavBar" 
import Cart from './components/Cart/Cart'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Detail from './components/Detail/Detail'

import Footer from './screens/Footer/Footer'
import Error404 from './screens/Error404/Error404'


function App() {
   
  const [totalItemsCarrito, setTotalItemsCarrito] = useState(0)

  return (
          
        <BrowserRouter>
          <div className="wrapper">

            <header className="header"> 
              <NavBar totalItemsCarrito={totalItemsCarrito}/>
            </header> 

            <article className="main">     
              <Switch>
                <Route exact path="/">
                  <ItemListContainer nombre="Destacados" totalItemsCarrito={totalItemsCarrito} setTotalItemsCarrito={setTotalItemsCarrito} />
                </Route>
                <Route exact path="/list/:name">
                  <ItemListContainer nombre="Productos" totalItemsCarrito={totalItemsCarrito} setTotalItemsCarrito={setTotalItemsCarrito} />
                </Route>
                <Route exact path="/cart">
                  <Cart />
                </Route>
                <Route exact path="/detail/:name">
                  <Detail totalItemsCarrito={totalItemsCarrito} setTotalItemsCarrito={setTotalItemsCarrito}/>
                </Route>
                <Route exact path="*">
                  <Error404 />
                </Route>
              </Switch>
            </article>

            <footer className="footer"> 
              <Footer/> 
            </footer>

          </div>
        </BrowserRouter>         
   
  );
}

export default App;   
