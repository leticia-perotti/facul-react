export function THeader({cabecalho, itensCabecalho}){
    return (
        <thead>
            <tr>
            { cabecalho.map( (keys: any, index: number) => {
                return (
                    <th key={keys}>{itensCabecalho[index]}</th>
                )
            })}
            </tr>
        </thead>
    )
}