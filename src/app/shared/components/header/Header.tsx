import { BsCodeSlash } from "react-icons/bs"

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full z-10 flex justify-between items-center px-24 py-5">
      <a href="#introduction" className="flex items-center gap-2">
        <BsCodeSlash size={50} />
        <h3 className="text-3xl font-lato font-semibold text-white">LuppoTW</h3>
      </a>
      <nav>
        <ul className="flex items-center gap-8">
          <li>
            <a href="#introduction" className="text-xl font-lato text-white-85">
              Introdução
            </a>
          </li>
          <li>
            <a href="#about" className="text-xl font-lato text-white-85">
              Sobre
            </a>
          </li>
          <li>
            <a href="#technology" className="text-xl font-lato text-white-85">
              Tecnologias
            </a>
          </li>
          <li>
            <a href="#projects" className="text-xl font-lato text-white-85">
              Projetos
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
