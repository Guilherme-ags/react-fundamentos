interface BotoesProps{
    alterarNome(nome: string): void
}

export default function Botoes(props: BotoesProps) {
    return (
        <div className="flex gap-5">
            <button onClick={() => props.alterarNome('Maria')} className="botao">Maria</button>
            <button onClick={() => props.alterarNome('João')} className="botao">João</button>
            <button onClick={() => props.alterarNome('Pedro')} className="botao">Pedro</button>
        </div>
    )
}