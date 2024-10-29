import Pagina from "@/components/Pagina";
import { useState } from "react";

export default function PaginaCalculadora(){
    const [numero1, setNumero1] = useState(0)
    const [numero2, setNumero2] = useState(0)

    return (
        <Pagina titulo="Calculadora" subtitulo="Capítulo Estado">
            <div className="flex flex-col gap-5">
                <div className="flex gap-5">
                    <input 
                        type= "number"
                        value={numero1}
                        className="campo" 
                        onChange={e => setNumero1(+e.target.value)}
                        />
                    <input 
                        type= "number"
                        value={numero2}
                        className="campo" 
                        onChange={e => setNumero2(+e.target.value)}
                        />
                </div>
                <div className="flex flex-col">
                    <span>{numero1} + {numero2} = {numero1 + numero2}</span>
                    <span>{numero1} - {numero2} = {numero1 - numero2}</span>
                    <span>{numero1} * {numero2} = {numero1 * numero2}</span>
                    <span>{numero1} / {numero2} = {numero1 / numero2}</span>
                </div>
            </div>
        </Pagina>
    )
}