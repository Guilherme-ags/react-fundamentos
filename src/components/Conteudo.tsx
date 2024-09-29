interface ConteudoProps {
    children: any
}

export default function Conteudo(props: ConteudoProps){
    return (
        <div className={`
            flex items-start flex-1 p-4
            bg-zinc-900 text 3xl
            `}>
                {props.children}
            </div>
    )
}