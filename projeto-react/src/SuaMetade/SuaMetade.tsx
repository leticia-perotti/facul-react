import { useEffect, useState } from 'react'
import './SuaMetade.css'

function SuaMetade() {
  const [pessoa1, setPessoa1] = useState('')
  const [pessoa2, setPessoa2] = useState('')
  const [probabilidade, setProbabilidade] = useState(0)

  function verificaSuaMetade(){
    let probabilidade = Math.random() * 100
    setProbabilidade(Math.trunc(probabilidade))
  }

  return (
    <>
      <h1>Calculando a probabilidade para o amor...</h1>

      <label>Qual a sua inicial?</label>
      <input name="pessoa1" type="text" value={pessoa1} onChange={(event) => setPessoa1(event.target.value)}></input>  

      <label>Qual a inicial do/da crush?</label>
      <input name="pessoa2" type="text" value={pessoa2} onChange={(event) => setPessoa2(event.target.value)}></input>  

      <button onClick={verificaSuaMetade}>Calcular a probabilidade...</button>

      { probabilidade && 
        <label>A probabilidade é de {probabilidade}</label>
      }

    </>
  )
}

export default SuaMetade
function random(arg0: number, arg1: number): import("react").SetStateAction<number> {
  throw new Error('Function not implemented.')
}

function randomNumber(arg0: number, arg1: number) {
  throw new Error('Function not implemented.')
}

function randomNumberInRange(arg0: number, arg1: number): import("react").SetStateAction<number> {
  throw new Error('Function not implemented.')
}

