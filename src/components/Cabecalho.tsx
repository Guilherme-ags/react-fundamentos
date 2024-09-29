interface CabecalhoProps {
    titulo: string
    subtitulo: string
    className?: string
}

export default function Cabecalho(props: CabecalhoProps){
    return (
        <div className={`
            flex flex-col justify-center 
            px-5 border-b boder-zinc-700 ${props.className ?? ''}
        `}>
                <h1 className={`
                    text-xl font-black
                `}>
                    {props.titulo}
                </h1>
                <h2 className={`
                    text-sm text-zinc-400
                `}>
                    {props.subtitulo}
                </h2>
        </div>
    )
}