import { Icon360View, IconHome } from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function Menu(){
    return (
        <div className={`
            flex flex-col justify-start items-center w-52
            text-3xl p-2 gap-2
        `}>
            <MenuItem 
                icone={<IconHome />} 
                texto="Página #1" 
                url="/fundamentos/pagina" 
            />
            <MenuItem 
                icone={<Icon360View />} 
                texto="Página #2" 
                url="/pagina" 
            />
            <MenuItem 
                icone={<Icon360View />} 
                texto="Basico" 
                url="/componente/basico" 
            />
            <MenuItem 
                icone={<Icon360View />} 
                texto="Titulo" 
                url="/componente/titulo" 
            />
            <MenuItem 
                icone={<Icon360View />} 
                texto="Trecho" 
                url="/componente/trecho" 
            />
            <MenuItem 
                icone={<Icon360View />} 
                texto="FundamentosPagina" 
                url="/fundamentos/pagina" 
            />
            <MenuItem 
                icone={<Icon360View />} 
                texto="FundamentosSoma" 
                url="/fundamentos/soma" 
            />
        </div>
    )
}