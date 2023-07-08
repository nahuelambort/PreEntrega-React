import './App.css';
import {NavBar} from "./components/NavBar/NavBar";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";


function App() {

  return (
    <div>
      <NavBar />
      <div className="container">
        <ItemListContainer greeting={"Cards de productos"}/>
      </div>
    </div>
  )
}

export default App
