import { useCallback, useState } from "react"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { BsCodeSlash } from "react-icons/bs"

interface IProps {
  isScrolling: boolean
}

export const Header: React.FC<IProps> = ({ isScrolling }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  const handleClick = useCallback(() => {
    if (isMobile) {
      setIsMobile(false)
      return
    }
    setIsMobile(true)
  }, [isMobile])

  return (
    <header
      className={`fixed top-0 w-full z-10 flex justify-between px-24 py-5 max-lg:flex-col max-md:px-5 ${
        isMobile ? `flex-col bg-default` : `bg-transparent`
      }`}
    >
      <div
        className={`w-full flex justify-between items-center ${
          isMobile ? `z-10` : `z-0`
        }`}
      >
        <a href="#introduction" className="flex items-center gap-2">
          <BsCodeSlash size={50} />
          <h3 className="text-3xl font-lato font-semibold text-white">
            LuppoTW
          </h3>
        </a>

        <div className="hidden max-lg:block">
          <button
            onClick={handleClick}
            className="absolute right-[96px] top-9 max-md:right-[20px]"
          >
            {isMobile ? (
              <AiOutlineClose size={30} className="text-white" />
            ) : (
              <AiOutlineMenu size={30} className="text-white" />
            )}
          </button>
        </div>
      </div>

      <nav
        className={` transition-all duration-70000 max-lg:overflow-hidden max-lg:w-full max-lg:fixed max-lg:left-0 max-lg:top-0 max-lg:px-28 max-lg:bg-default max-md:px-10 ${
          isMobile
            ? `min-h-full pt-32 max-lg:opacity-100`
            : `py-0 h-0 max-lg:opacity-0`
        }`}
      >
        <ul className={`flex gap-8 w-full max-lg:flex-col `}>
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
