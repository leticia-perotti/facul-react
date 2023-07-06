export function BotaoEditar({editar, id}){
    return(
        <button onClick={() => editar(id)} className="btn btn-primary">
            Editar
        </button>
    )
}