import me from "../../../shared/assets/images/me.jpg"

import { IoIosArrowDown } from "react-icons/io"

export const Introduction: React.FC = () => {
  return (
    <section
      id="introduction"
      className="min-h-screen min-w-full flex justify-center items-center flex-col bg-introduction relative px-14 max-sm:px-8"
    >
      <div
        data-testid="introduction-card"
        className="max-lg:animate-fade-in-mobile lg:animate-fade-in flex justify-center items-center gap-24 max-lg:gap-12 max-lg:flex-col-reverse"
      >
        <div className="bg-card border-l-card-border px-8 py-7 rounded-3xl border-4 border-card-border shadow-card">
          <p className="font-rajdhani text-white-85 text-2xl mb-5 max-xl:text-xl">
            Ola meu nome é
          </p>
          <h1 className="lg:animate-write lg:w-full lg:overflow-hidden lg:whitespace-nowrap lg:border-white max-lg:border-none font-rajdhani text-white text-7xl mb-3 font-bold max-xl:text-5xl max-sm:text-4xl border-r-4  pr-2">
            Fernando J. A. Luppo
          </h1>
          <h2 className="font-rajdhani text-white-85 text-5xl mb-5 font-semibold max-xl:text-3xl max-sm:text-2xl">
            Full-Stack Developer
          </h2>

          <p
            data-testid="introduction-text"
            className="font-rajdhani text-white-85 text-2xl max-w-lg max-xl:text-xl"
          >
            Tenho 21 anos e sou apaixonado por criar soluções digitais
            inovadoras.
          </p>
        </div>

        <img
          src={me}
          alt="Photo"
          className="object-fill max-h-[330px] min-w-[330px] rounded-full border-4 border-card-border shadow-card max-xl:max-h-[288px] max-xl:min-w-[288px]"
        />
      </div>

      <a href="#about">
        <IoIosArrowDown
          size={50}
          className="animate-fade-in-bounce absolute bottom-0 mb-5 text-white max-lg:hidden"
          data-testid="introduction-arrow"
        />
      </a>
    </section>
  )
}
