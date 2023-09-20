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
      data-testid="header"
      className={`fixed top-0 w-full z-10 flex justify-between items-center px-24 py-5 max-lg:flex-col max-md:px-5 ${
        !isScrolling && !isMobile
          ? `bg-transparent`
          : `transition-all border-b-2 border-card-border bg-default max-lg:flex-col`
      }`}
    >
      <div
        className={`w-full flex justify-between items-center ${
          isMobile ? `z-10` : `z-0`
        }`}
      >
        <a href="#introduction" className="flex items-center gap-2">
          <BsCodeSlash
            size={50}
            data-testid="logo"
            className={`transition-all ${
              isMobile || isScrolling ? `text-white` : `text-default`
            }`}
          />
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
              <AiOutlineMenu
                size={30}
                className="text-white"
                data-testid="menu-mobile"
              />
            )}
          </button>
        </div>
      </div>

      <nav
        className={`transition-all duration-70000 max-lg:overflow-hidden max-lg:w-full
          max-lg:fixed max-lg:left-0 max-lg:top-0 max-lg:px-28 max-lg:bg-default max-md:px-10 ${
            isMobile
              ? `min-h-full pt-32 max-lg:opacity-100`
              : `py-0 max-lg:h-0 max-lg:opacity-0`
          }`}
      >
        <ul className={`flex gap-8 w-full max-lg:flex-col `}>
          <li className="transition-all lg:hover:scale-125">
            <a
              href="#introduction"
              className="text-xl font-lato text-white-85 hover:text-white hover:font-bold"
              onClick={() => {
                setIsMobile(false)
              }}
            >
              Introdução
            </a>
          </li>
          <li className="transition-all lg:hover:scale-125 ">
            <a
              href="#about"
              className="text-xl font-lato text-white-85 hover:text-white hover:font-bold"
              onClick={() => {
                setIsMobile(false)
              }}
            >
              Sobre
            </a>
          </li>
          <li className="transition-all lg:hover:scale-125">
            <a
              href="#technology"
              className="text-xl font-lato text-white-85 hover:text-white hover:font-bold"
              onClick={() => {
                setIsMobile(false)
              }}
            >
              Tecnologias
            </a>
          </li>
          <li className="transition-all lg:hover:scale-125">
            <a
              href="#projects"
              className="text-xl font-lato text-white-85 hover:text-white hover:font-bold"
              onClick={() => {
                setIsMobile(false)
              }}
            >
              Projetos
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
