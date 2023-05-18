import { useEffect, useState } from 'react'
import './SuaMetade.css'

function SuaMetade() {
  const [pessoa1, setPessoa1] = useState('')
  const [pessoa2, setPessoa2] = useState('')
  const [probabilidade, setProbabilidade] = useState(0)

  function verificaSuaMetade(){
    if (!pessoa1 || !pessoa2) return
    let probabilidade = Math.random() * 100
    setProbabilidade(Math.trunc(probabilidade))
  }

  return (
    <div className="probabilidadeAmor">
      <div className="card">
        <h1>Calculando</h1>
        <h2>a probabilidade para</h2> 
        <h1>para o amor...</h1>

      <div className="inputs">
        <div className="input">
          <label>Qual a sua inicial?</label>
          <input name="pessoa1" type="text" value={pessoa1} onChange={(event) => setPessoa1(event.target.value)}></input>  
        </div>
        <div className="input">
          <label>Qual a inicial do/da crush?</label>
          <input name="pessoa2" type="text" value={pessoa2} onChange={(event) => setPessoa2(event.target.value)}></input>            
        </div>
      </div>

        <button onClick={verificaSuaMetade}>Calcular a probabilidade...</button>

        {  
          probabilidade != 0? <label>A probabilidade é de {probabilidade}</label> : ''
        }
      </div>
    </div>
  )
}

export default SuaMetade
