 
import React, { useState } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'; 

import NavBar from "./components/NavBar/NavBar"
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  
  
  const [totalItemsCarrito, setTotalItemsCarrito] = useState(0)
  const [mensaje, setMensaje] = useState("")
 

  const getMensaje = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mensaje);     
    }, 5000); 
  });
  
  getMensaje.then((resp) =>  {
    setMensaje("banner publicidad");
  });

  return (
    <div class="wrapper">
      <header class="header"> 
        <NavBar totalItemsCarrito={totalItemsCarrito}/>
      </header>
      
      <article class="main">        
        <ItemDetailContainer totalItemsCarrito={totalItemsCarrito} setTotalItemsCarrito={setTotalItemsCarrito}/>
        <hr />
        <ItemListContainer nombre="Otros Bajos" totalItemsCarrito={totalItemsCarrito} setTotalItemsCarrito={setTotalItemsCarrito}/>       
      </article>

      <aside class="aside aside-1">
        {mensaje}&nbsp;
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
