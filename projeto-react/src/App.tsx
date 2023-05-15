import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [IMC, setIMC] = useState(0)

  function calculaIMC(){
    if ( !peso|| !altura)  return; 

    const valorImc = peso / (altura * altura)
    setIMC(valorImc.toFixed(2))
  }

  useEffect( () => {
    calculaIMC()
  }, [peso, altura])

  return (
    <>
      <h1>Calculando IMC</h1>

      <label>Peso</label>
      <input name="peso" type="number" value={peso} min={0.1} step={0.1} onChange={(event) => setPeso(Number(event.target.value))}></input>  

      <label>Altura</label>
      <input name="altura" type="number" value={altura}  min={0.3} max={3} step={0.01} onChange={(event) => setAltura(Number(event.target.value))}></input>  

      <button onClick={calculaIMC}>Calcular</button>

      { IMC && 
        <label>Seu IMC é {IMC}</label>
      }

    </>
  )
}

export default App
