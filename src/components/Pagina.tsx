import AreaLateral from "./AreaLateral";
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import Rodape from "./Rodape";

export default function Pagina(props: any){
    return (
        <div className={`
            flex h-screen
        `}>
            <AreaLateral />
            <div className={`
                flex flex-col flex-1
            `}>
                <Cabecalho
                    titulo={props.titulo}
                    subtitulo={props.subtitulo}
                    className="h-16 bg-zinc-800"
                />
                <Conteudo>
                    {props.children}
                </Conteudo>
                <Rodape
                    textoEsquerda="Feito com amor por Formação.Dev"
                    textoDireita={`Desenvolvido em ${new Date().getFullYear()}`}
                />
            </div>
        </div>
    )
}