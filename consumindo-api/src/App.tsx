
import { useState } from 'react';
import './App.css'
import api from './services/api';
import axios from 'axios';

function App() {
  const [imagemPato, setImagemPato]= useState('');

  const apiUrl = 'https://cors-anywhere.herokuapp.com/https://random-d.uk/api/v2/random';

  function buscaPato() {
    axios.get(apiUrl)
          .then((response: any) => {
            console.log(response);

            if (response.data.erro){
              alert('CEP inexistente');
              setImagemPato('');
            }else{
              setImagemPato(response.data.url);
            }
          })
          .catch((err: string) => {
            setImagemPato('');
            alert("ops! ocorreu um erro" + err);
        });
    
        console.log(imagemPato);
    return ''
  }

return (
    <div className="container">
        <h2>Patolindo</h2>
        <div className="row">
            <img src={imagemPato}></img>
        </div>
        <div className="row">
            <button type="button" className="btn btn-success" onClick={buscaPato}>Gerar um novo pato</button>
        </div>
        
    </div>
);
}

export default App
