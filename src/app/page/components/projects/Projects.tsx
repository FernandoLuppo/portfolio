import { ProjectCard } from "./components"
import { pokeDexText, streaming } from "./projectTexts/ProjectTexts"
import type { IWindowHeight } from "../../../shared/types"

export const Projects: React.FC<IWindowHeight> = ({ windowHeight }) => {
  return (
    <section
      id="projects"
      className="flex items-center flex-col py-16 bg-default min-h-[850px] w-full px-14 max-sm:px-8"
    >
      <div className="flex flex-col items-center">
        <h2 className="text-3xl text-center text-white ">Projetos</h2>
        <div className="w-10/12 h-[3px] rounded-full bg-primary mt-3"></div>
      </div>

      <div
        className={`${
          windowHeight >= 2050 && window.innerWidth > 1024
            ? `flex items-center justify-center gap-16 flex-wrap w-full mt-20 lg:animate-fade-in`
            : `${
                windowHeight >= 2900 && window.innerWidth <= 1024
                  ? `max-lg:animate-fade-in-mobile flex items-center justify-center gap-16 flex-wrap w-full mt-20`
                  : `hidden`
              }`
        } `}
      >
        <ProjectCard
          key="Streaming"
          title="Streaming"
          text={streaming}
          src="https://user-images.githubusercontent.com/95176596/222930476-31c3b3bb-f2d8-47eb-948d-9227403e7d1d.png"
          inProduction={false}
          link="https://github.com/FernandoLuppo/movie"
        />
        <ProjectCard
          key="PokeDex"
          title="PokeDex"
          text={pokeDexText}
          src="https://user-images.githubusercontent.com/95176596/266644611-73cdb878-924f-4df0-96af-7a4218695c1d.png"
          inProduction={false}
          link="https://github.com/FernandoLuppo/PokeDex"
        />
        <ProjectCard key="Clima" title="Clima" inProduction={true} />
      </div>
    </section>
  )
}
