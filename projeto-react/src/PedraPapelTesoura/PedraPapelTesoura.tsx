import { SetStateAction, useEffect, useState } from 'react'
import './PedraPapelTesoura.css'

function PedraPapelTesoura() {
  const [escolhaJogador, setEscolhaJogador] = useState('')
  const [resultado, setResultado] = useState('')

  const opcoes = ['pedra', 'papel', 'tesoura']

  function jogar(){
    let opcao = Math.random() * 3
    opcao = Math.trunc(opcao)
    
    let selecionada = opcoes[opcao]
    let resutado: string = ''

    if (selecionada == escolhaJogador){
      resutado = "Opção computador: " +selecionada + "- Deu empate!"
    }else{
      if(selecionada == 'pedra'){
        if (escolhaJogador == 'papel'){
          resutado = "Opção computador: " +selecionada + "- Você venceu!"
        }else if (escolhaJogador == 'tesoura'){
          resutado = "Opção computador: " +selecionada + "- Você perdeu!"
        }
      }else if (selecionada == 'papel'){
        if (escolhaJogador == 'tesoura'){
          resutado = "Opção computador: " +selecionada + "- Você venceu!"
        }else if (escolhaJogador == 'pedra'){
          resutado = "Opção computador: " +selecionada + "- Você perdeu!"
        }
      }else if (selecionada == 'tesoura'){
        if (escolhaJogador == 'pedra'){
          resutado = "Opção computador: " +selecionada + "- Você venceu!"
        }else if (escolhaJogador == 'papel'){
          resutado = "Opção computador: " +selecionada + "- Você perdeu!"
        }
      }
    }

    setResultado(resutado)

  }

  const onOptionChange = (e: any) => {
    setEscolhaJogador(e.target.value)
  }

  return (
    <div className="pedraPapelTesoura">
      <div className="card">
        <h1>Pedra, papel e tesoura</h1>

        <label>Selecione a sua opção:</label>
      <div className="inputs">

          <div className="opcao">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloudy" viewBox="0 0 16 16">
              <path d="M13.405 8.527a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 14.5H13a3 3 0 0 0 .405-5.973zM8.5 5.5a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1-.001 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 5.5z"/>
            </svg>
            <label htmlFor="escolhaJogador">Pedra</label>
            <input type="radio" value="pedra" name="escolhaJogador" id="pedra"
            onChange={onOptionChange}>
            </input> 
          </div>

          <div className="opcao">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark" viewBox="0 0 16 16">
              <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
            </svg>
            <label htmlFor="escolhaJogador">Papel</label>
            <input type="radio" value="papel" name="escolhaJogador" id="papel"
            onChange={onOptionChange}>
            </input> 
          </div>

          <div className="opcao">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-scissors" viewBox="0 0 16 16">
              <path d="M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226 11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61 3.5 3.5zm2.5 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zm7 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"/>
            </svg>
            <label htmlFor="escolhaJogador">Tesoura</label>
            <input type="radio" value="tesoura" name="escolhaJogador" id="tesoura"  
            onChange={onOptionChange}> 
            </input>  
          </div>       

        </div>

        <button onClick={jogar}>Jogar!</button>
        {
          resultado
        }
      </div>
    </div>
  )
}

export default PedraPapelTesoura
