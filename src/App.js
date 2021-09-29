 
import './App.css'; 
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar"
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
 
function App() {
   
  
  return (
    <div class="wrapper">
      <header class="header"> <NavBar /></header>
      <article class="main">
        <ItemListContainer nombre="Bajos"/>
        { 
        /*<Parametros nombre={nombre} edad={12} mayorDeEdad={false} /> */
        }
      </article>
      <aside class="aside aside-1">
        Filtro
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
