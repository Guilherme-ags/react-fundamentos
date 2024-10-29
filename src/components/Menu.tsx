import { Icon360View, IconBraces, IconBrandJavascript, IconCalculator, IconCode, IconFileCheck, IconForms, IconFunction, IconH1, IconHome, IconNumbers, IconSitemap } from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function Menu(){
    return (
        <div className={`
            flex flex-col justify-start w-72
            text-3xl p-2 gap-2
        `}>

            <span className="text-sm text-zinc-500 pl-3 pt-4">Estado</span>
            <MenuItem 
                icone={<IconCode />} 
                texto="Componente sem Estado" 
                url="/estado/sem" 
            />
            <MenuItem 
                icone={<IconCode />} 
                texto="Componente com Estado" 
                url="/estado/com" 
            />
            <MenuItem 
                icone={<IconNumbers />} 
                texto="Contador" 
                url="/estado/contador" 
            />
            <MenuItem 
                icone={<IconForms />} 
                texto="Campo de Texto" 
                url="/estado/campoTexto" 
            />
            <MenuItem 
                icone={<IconCalculator />} 
                texto="Calculadora" 
                url="/estado/calculadora" 
            />

            <span className="text-sm text-zinc-500 pl-3 pt-4">Fundamentos</span>
            <MenuItem 
                icone={<IconBraces />} 
                texto="JSX com JS" 
                url="/fundamentos/soma" 
            />
            <MenuItem 
                icone={<IconFunction />} 
                texto="JSX: Chamando Funções" 
                url="/fundamentos/funcoes" 
            />
            <MenuItem 
                icone={<IconFileCheck />} 
                texto="Página #1" 
                url="/fundamentos/pagina" 
            />
            <MenuItem 
                icone={<IconSitemap />} 
                texto="Página #2" 
                url="/pagina" 
            />

            <span className="text-sm text-zinc-500 pl-3 pt-4">Componentes</span>
            <MenuItem 
                icone={<IconCode />} 
                texto="Componente" 
                url="/componente/basico" 
            />
            <MenuItem 
                icone={<IconH1 />} 
                texto="Componente Titulo" 
                url="/componente/titulo" 
            />

            <MenuItem 
                icone={<IconBrandJavascript />} 
                texto="JS com JSX" 
                url="/componente/trecho" 
            />
        </div>
    )
}