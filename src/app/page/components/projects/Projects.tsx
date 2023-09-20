import { ProjectCard } from "./components"
import { pokeDexText, streaming } from "./projectTexts/ProjectTexts"
import pokeDexVideo from "../../../shared/assets/videos/PokeDex.mp4"
import StreamingVideo from "../../../shared/assets/videos/Streaming.mp4"

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
          videoId={StreamingVideo}
          inProduction={false}
          link="https://github.com/FernandoLuppo/movie"
        />
        <ProjectCard
          key="PokeDex"
          title="PokeDex"
          text={pokeDexText}
          videoId={pokeDexVideo}
          inProduction={false}
          link="https://github.com/FernandoLuppo/PokeDex"
        />
        <ProjectCard key="Clima" title="Clima" inProduction={true} />
      </div>
    </section>
  )
}
