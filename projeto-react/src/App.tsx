import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Imc from './Imc/Imc';
import Home from './Home/Home';
import './App.css';
import SuaMetade from './SuaMetade/SuaMetade';
import PedraPapelTesoura from './PedraPapelTesoura/PedraPapelTesoura';
import ConsumirApi from './ConsumirApi/ConsumirApi';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route extact path="/" Component={Home} />
        <Route path="/imc" Component={Imc} />
        <Route path="/sua-metade" Component={SuaMetade} />
        <Route path="/pedra-papel-tesoura" Component={PedraPapelTesoura} />
        <Route path="/api-cardapio" Component={ConsumirApi} />
      </Routes>
    </BrowserRouter>

    
  );
}

export default App
