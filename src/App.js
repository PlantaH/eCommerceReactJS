 
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'; 

import NavBar from "./components/NavBar/NavBar"

import Home  from './screens/Home/Home'
import Cart from './screens/Cart/Cart'
import List from './screens/List/List'
import Detail from './screens/Detail/Detail'
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
                  <Home totalItemsCarrito={totalItemsCarrito} setTotalItemsCarrito={setTotalItemsCarrito} />
                </Route>
                <Route exact path="/list/:name">
                  <List totalItemsCarrito={totalItemsCarrito} setTotalItemsCarrito={setTotalItemsCarrito} />
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
