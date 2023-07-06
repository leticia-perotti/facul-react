import { TBody } from "./TBody"
import { THeader } from "./THeader";

function Listagem({itens, editar, excluir, itensCabecalho}) {
    
  const cabecalho = (itens && itens.length>0)  ? Object.keys(itens[0]) : [];

  return (    
    itens && itens.length >0 && <div className="container">
          <table className="table">
              <THeader cabecalho={cabecalho} itensCabecalho={itensCabecalho}/>
              <TBody valores={itens} cabecalho={cabecalho} editar={editar} excluir={excluir} />
          </table>
      </div>
  )
}

export default Listagem
