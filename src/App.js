 
import React, { useState } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'; 

import NavBar from "./components/NavBar/NavBar"
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
 
function App() {
  
  
  const [totalItemsCarrito, setTotalItemsCarrito] = useState(0)
 
 /*
  const mensaje = "Hola"

  const getMensaje = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mensaje);
    }, 3000); 
  });

  getMensaje.then((res) => {
    console.log(res);    
  });*/
  
  return (
    <div class="wrapper">
      <header class="header"> 
        <NavBar totalItemsCarrito={totalItemsCarrito}/>
      </header>
      
      <article class="main">        

        <ItemListContainer nombre="Bajos" totalItemsCarrito={totalItemsCarrito} setTotalItemsCarrito={setTotalItemsCarrito}/>
       
      </article>

      <aside class="aside aside-1">
      Filtros

      </aside>
      <aside class="aside aside-2">
        Banners
      </aside>
      <footer class="footer"> 
        <Footer/> 
      </footer>
    </div>
  );
}

export default App;   
