import AreaLateral from "./AreaLateral";
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import Rodape from "./Rodape";

interface PaginaProps {
    titulo: string
    subtitulo: string
    children: any
}

export default function Pagina(PaginaProps: PaginaProps){
    return (
        <div className={`
            flex h-screen
        `}>
            <AreaLateral />
            <div className={`
                flex flex-col flex-1
            `}>
                <Cabecalho
                    titulo={PaginaProps.titulo}
                    subtitulo={PaginaProps.subtitulo}
                    className="h-16 bg-zinc-800"
                />
                <Conteudo>
                    {PaginaProps.children}
                </Conteudo>
                <Rodape
                    textoEsquerda="Feito com amor por Formação.Dev"
                    textoDireita={`Desenvolvido em ${new Date().getFullYear()}`}
                />
            </div>
        </div>
    )
}