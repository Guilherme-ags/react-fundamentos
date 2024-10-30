import { useState } from "react";
import Valor from "./Valor";

export default function Botoes(){
    const [nome, setNome] = useState('')    

    return (
        <div className="flex flex-col gap-5 bg-green-800 p-4 rounded-md m-2">
            <div className="flex gap-5">
                <button className="botao" onClick={() => setNome('Maria')}>Maria</button>
                <button className="botao" onClick={() => setNome('João')}>João</button>
                <button className="botao" onClick={() => setNome('Pedro')}>Pedro</button>
            </div>
            <Valor texto={nome}/>
        </div>
    )
}