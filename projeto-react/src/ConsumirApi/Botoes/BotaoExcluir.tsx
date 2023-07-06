export function BotaoExcluir({excluir, id}){
    function confirmarExcluir(){
        if(confirm("Tem certeza que deseja excluir o item?")){
            excluir(id)
        }
    }
    return(
        <button onClick={() => confirmarExcluir()} className="btn btn-danger">
            Excluir
        </button>
    )
}