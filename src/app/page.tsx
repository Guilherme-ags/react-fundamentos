import Pagina from "@/components/Pagina";
import { IconBrandReact } from "@tabler/icons-react";

export default function Home() {
  return (
    <Pagina 
      titulo= "Fundamentos React"
      subtitulo= "Bem vindo ao mundo do React"
    >
      <div className={`
          flex flex-col justify-center items-center
          w-full h-full text-zinc-500
        `}>
        <IconBrandReact size={200} stroke={1}/>
        <span className="font-black">Curso Fundamentos de React</span>
        <span className="text-sm">Aqui você vai aprender fundamentos sólidos da biblioteca React</span>
      </div>
    </Pagina>
  )
}
