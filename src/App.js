 
import React  from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'; 

import NavBar from "./components/NavBar/NavBar" 
import Cart from './components/Cart/Cart'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Search from './components/Search/Search'
import Detail from './components/Detail/Detail'

import Footer from './screens/Footer/Footer'
import Error404 from './screens/Error404/Error404'

import CartContextProvider from './context/CartContext'
import CartCheckOut from './components/CartCheckOut/CartCheckOut';
 
function App() {   
  return (      
        <CartContextProvider>      
              <BrowserRouter>
                <div className="wrapper">
                  <header className="header"> 
                    <NavBar />
                  </header> 
                  <article className="main">     
                    <Switch>
                      <Route exact path="/">
                        <ItemListContainer />
                      </Route>
                      <Route exact path="/list/:name">
                        <ItemListContainer />
                      </Route>
                      <Route exact path="/search/:name">
                        <Search />
                      </Route>
                      <Route exact path="/detail/:name">
                        <Detail/>
                      </Route>
                      <Route exact path="/cart">
                        <Cart />
                      </Route>
                      <Route exact path="/checkout">
                        <CartCheckOut />
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
        </CartContextProvider> 
  );
}

export default App;   
