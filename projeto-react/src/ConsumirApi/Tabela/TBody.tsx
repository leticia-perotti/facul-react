import { BotaoEditar } from "../Botoes/BotaoEditar"
import { BotaoExcluir } from "../Botoes/BotaoExcluir"

export function TBody({valores, cabecalho, editar, excluir}){
    return(
        valores && valores.length>0 && 
        <tbody>
            { valores.map( (item: any, index: number) => {
                return (
                    !!item && 
                    <tr key={index}>
                        { cabecalho.map( (h: any) => {
                            return (
                                <td key={h}>{item[h]}</td>
                            )
                        } )}
                        <td className="gap-2 d-md-flex">
                            <BotaoExcluir excluir={excluir} id={item.id}/>
                            <BotaoEditar editar={editar} id={item.id}/>
                        </td>
                        
                    </tr>
                )
            })}
        </tbody>
    )
}