import { useEffect, useState } from 'react'
import './ConsumirApi.css'
import axios from 'axios';
import api, { listProduto, postProduto, putProduto } from './api-service';
import Listagem from './Listagem';

function ConsumirApi() {
  const [nome, setNome] = useState("")
  const [valor, setValor] = useState(0)
  const [id, setId] = useState(0)
  const [produtos, setProdutos] = useState([])

  function salvar(){
    if(id == 0){
      postProduto(nome || "Sem nome", valor|| 0, id)
    }else{
      putProduto(nome || "Sem nome", valor|| 0, id)
      
    }

    setNome("")
    setId(0)
    setValor(0)

  }
  
  async function atualizaProdutos(){
    await api.get('/produto')
      .then((dat: any) => setProdutos(dat.data))
      console.log(produtos)
  }

  function excluir(id: number){
    api.delete(`/produto/${id}`).then( (result) => {
      //window.alert("Excluido com sucesso")
      atualizaProdutos();
  })
  }

  async function editar(id: number){
    await api.get(`/produto/${id}`)
      .then((dado: any) => {
        console.log(dado)
        setNome(dado.data.nome)
        setValor(dado.data.valor)
        setId(dado.data.id)
      });
  }

  return (
    <>
      <form className="container">
        <h1>Cadastrando de produtos</h1>
        <div className="mb-3">
          <label className="form-label">Nome do produto</label>
          <input type="text" className="form-control" id="nome" value={nome} aria-describedby="nome"  onChange={(event) => setNome(event.target.value)}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Valor do produto</label>
          <input type="number" className="form-control" id="valor" value={valor} aria-describedby="valor"  onChange={(event) => setValor(Number(event.target.value))}/>
        </div>

        <a className="btn btn-primary" onClick={salvar}>Submit</a>

        <Listagem produtos={produtos}/>


      </form>

      <div className='row'>
      {
        
        produtos?.map((dados: any) => {
          return(
            <div className="card-produto col-2">
              <label>Produto: {dados.nome}</label>
              <label>Valor: {dados.valor}</label>
              
              <button onClick={() => editar(dados['id'])} >Editar</button>
              <button  onClick={() => excluir(dados['id'])} >Excluir</button>
            </div>
           
          )

        })
      }
      </div>
    </>
  )
}

export default ConsumirApi
