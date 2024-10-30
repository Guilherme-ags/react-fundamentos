import { useState } from "react"
import Botoes from "./Botoes"

export default function Valor(){
    const [nome, setNome] = useState('Teste')

    function alterar(nome: string){
        setNome(nome)
    }

    return (
        <div className="flex flex-col gap-5">
            <span className="text-8xl font-black">{nome}</span>
            <Botoes alterarNome={alterar}/>
        </div>
    )
}