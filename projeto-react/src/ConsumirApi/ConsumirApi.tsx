import { useEffect, useState } from 'react'
import './ConsumirApi.css'
import api from './api-service';
import Listagem from './Tabela/Listagem';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function ConsumirApi() {
  const [itens, setItens] = useState([])

  const [id, setId] = useState(0)
  const [entrada, setEntrada] = useState("")
  const [principal, setPrincipal] = useState("")
  const [sobremesa, setSobremesa] = useState("")
  const [bebida, setBebida] = useState("")
  const [valor, setValor] = useState(0)

  const itensCabecalho = ["Id", "Entrada", "Principal", "Sobremesa", "Bebida", "Valor"]

  function salvar(e: { preventDefault: () => void; }){
    e.preventDefault();

    let valorCardapio = {
      "id": id == 0? null : id,
      "entrada": entrada,
      "principal": principal,
      "sobremesa": sobremesa,
      "bebida": bebida,
      "valor": valor
    }
    if(id == 0){
      api.post('/cardapio', valorCardapio)
      .then(function (response) {
        atualizaItens()
        toast.success("Item cadastrado com sucesso!")
      })
      .catch(function (error) {
        toast.error("Erro ao cadastrar o item!")
      });
    }else{
      api.put(`/cardapio/${valorCardapio.id}`, valorCardapio)
      .then(function (response) {
        atualizaItens()
        toast.success("Item editado com sucesso!")
      })
      .catch(function (error) {
        toast.error("Erro ao editar o item!")
      });    
    }

    limparCadastro()
  }

  function limparCadastro(){
    setId(0)
    setEntrada("")
    setPrincipal("")
    setSobremesa("")
    setBebida("")
    setValor(0)
  }
  
  async function atualizaItens(){
    await api.get('/cardapio')
      .then((dat: any) => setItens(dat.data))
      console.log(itens)
  }

  function excluir(id: number){
    api.delete(`/cardapio/${id}`).then( (result) => {
      //window.alert("Excluido com sucesso")
      atualizaItens();
      toast.success("Item excluido com sucesso!")
  })
  }

  useEffect(() => {
    atualizaItens();
  }, []);

  async function editar(id: number){
    await api.get(`/cardapio/${id}`)
      .then((dado: any) => {
        console.log(dado)
        setId(dado.data.id)
        setEntrada(dado.data.entrada)
        setPrincipal(dado.data.principal)
        setSobremesa(dado.data.sobremesa)
        setBebida(dado.data.bebida)
        setValor(dado.data.valor)
      });
  }

  return (
    <div className="container">
      <form className="row" onSubmit={salvar}>
        <h1>Cadastrando cardápios do restaurante</h1>
        <div className="mb-3 col-6">
          <label className="form-label">Entrada</label>
          <input type="text" className="form-control" id="entrada" 
          value={entrada} aria-describedby="entrada" 
          onChange={(event) => setEntrada(event.target.value)}
          required
          />
        </div>

        <div className="mb-3 col-6">
          <label className="form-label">Principal</label>
          <input type="text" className="form-control" id="principal" 
          value={principal} aria-describedby="principal" required 
          onChange={(event) => setPrincipal(event.target.value)}/>
        </div>

        <div className="mb-3 col-4">
          <label className="form-label">Sobremesa</label>
          <input type="text" className="form-control" id="sobremesa" 
          value={sobremesa} aria-describedby="sobremesa" required 
          onChange={(event) => setSobremesa(event.target.value)}/>
        </div>

        <div className="mb-3 col-4">
          <label className="form-label">Bebida</label>
          <input type="text" className="form-control" id="bebida" 
          value={bebida} aria-describedby="bebida"  required
          onChange={(event) => setBebida(event.target.value)}/>
        </div>

        <div className="mb-3 col-4">
          <label className="form-label">Valor</label>
          <input type="number" className="form-control" id="valor" 
          value={valor} aria-describedby="valor"  onChange={(event) => setValor(Number(event.target.value))}
          required min="1" step="0.01"
          />
        </div>
        <div className="gap-2 d-md-flex justify-content-md-end ">
          <button type="submit" className="btn btn-success">Enviar</button>
        </div>
    
      </form>
      <div className="col-12 separacao"></div>
      <div className="gap-2 d-md-flex justify-content-md-end ">
          <button type="button" className="btn btn-warning" onClick={limparCadastro}>
            Cadastrar
          </button>

          <button type="button" className="btn btn-primary" onClick={atualizaItens}>
            Pesquisar
          </button>
        </div>

      <Listagem itens={itens} editar={editar} excluir={excluir} itensCabecalho={itensCabecalho}/>

      <ToastContainer />
    </div>
  )
}

export default ConsumirApi
