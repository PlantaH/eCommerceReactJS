 
import './App.css'; 
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar"
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
 
function App() {
  let nombre = "hernan"
  
  return (
    <body>   
      <NavBar />
      <ItemListContainer nombre={nombre}/>
      { 
      /*<Parametros nombre={nombre} edad={12} mayorDeEdad={false} /> */
      }
      <Footer/>
    </body>
  );
}

export default App;   
