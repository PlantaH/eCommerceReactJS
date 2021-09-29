 
import './App.css'; 
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar"
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
 
function App() {
   
  
  return (
    <div>   
      <NavBar />
      <ItemListContainer nombre="Bajos"/>
     
      { 
      /*<Parametros nombre={nombre} edad={12} mayorDeEdad={false} /> */
      }
      <Footer/>
    </div>
  );
}

export default App;   
