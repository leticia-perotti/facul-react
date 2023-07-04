import { useEffect, useState } from 'react'
import './ConsumirApi.css'
import axios from 'axios';
import { postProduto } from './api-service';

function Listagem(props: any) {
  
  const produto =props.lenght > 0 ? props : []

  return (
    <>
      <div className="container">
        {
          console.log(produto)
        }{
          console.log(props.lenght)
        }
        {
          produto?.map((dados: any) => {

            <label>Produto: {dados.nome}</label>

          })
        }
        
        
      </div>

    </>
  )
}

export default Listagem
