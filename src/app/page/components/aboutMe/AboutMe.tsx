import { AiFillGithub } from "react-icons/ai"
import { BiLogoLinkedin } from "react-icons/bi"
import type { IWindowHeight } from "../../../shared/types"

export const AboutMe: React.FC<IWindowHeight> = ({ windowHeight }) => {
  return (
    <section
      id="about"
      className="flex items-center justify-center bg-default min-h-[850px] w-full px-14 max-sm:px-8"
    >
      <div
        data-testid="aboutMe-card"
        className={`${
          windowHeight >= 350
            ? `block max-lg:animate-fade-in-mobile lg:animate-fade-in max-w-4xl px-12 py-10 bg-card rounded-3xl border-4 border-card-border shadow-card max-sm:px-8 max-sm:py-6 max-lg:my-[85px]`
            : `hidden`
        } `}
      >
        <p className="text-2xl text-white-85 mb-8">Quem Sou</p>
        <div className="flex items-baseline gap-5 mb-8 max-lg:flex-col">
          <h3 className="text-5xl text-white max-sm:text-3xl">
            Fernando Luppo
          </h3>
          <div className="w-4 h-1 mt-4 rounded-2xl self-center bg-white-85 max-lg:hidden"></div>
          <h4 className="text-3xl text-white-85 max-lg:text-xl max-lg:mt-[-20px]">
            Desenvolvedor Full-Stack
          </h4>
        </div>
        <p data-testid="aboutMe-text" className="text-lg mb-10 text-white-85">
          Tenho 21 anos e sou um entusiasta da programação e da tecnologia.
          Atualmente, faço faculdade de Engenharia de Software e tenho
          habilidades em programação orientada a objetos seguindo os princípios
          SOLID, testes e noções de linux. Também tenho noções de design de
          interface de usuário (UI) e experiência do usuário (UX). Estou sempre
          em busca de desafios emocionantes para aplicar minha paixão pela
          tecnologia e programação.
        </p>
        <div className="flex items-center justify-center gap-10 w-full max-sm:gap-6">
          <a href="https://github.com/FernandoLuppo">
            <AiFillGithub
              size={60}
              className="transition-all text-white max-sm:w-[50px] hover:scale-125"
            />
          </a>
          <a href="https://www.linkedin.com/in/fernando-luppo-331496203/">
            <BiLogoLinkedin
              size={60}
              className="transition-all text-white max-sm:w-[50px] hover:scale-125 hover:text-blue-500"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
