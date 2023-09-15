import { ProjectCard } from "./components"
import { pokeDexText, streaming } from "./projectTexts/ProjectTexts"

export const Projects: React.FC = () => {
  return (
    <section className="flex items-center py-16 justify-center bg-default min-h-[850px] w-full px-14 max-sm:px-8">
      <div>
        <h2></h2>
        <div className="w-10/12 h-[3px] rounded-full bg-primary mt-3"></div>
      </div>
      <div className="flex items-center justify-center gap-16 flex-wrap w-full">
        <ProjectCard
          key="Streaming"
          title="Streaming"
          text={streaming}
          video="/test"
          inProduction={false}
        />
        <ProjectCard
          key="PokeDex"
          title="PokeDex"
          text={pokeDexText}
          video="/test"
          inProduction={false}
        />
        <ProjectCard key="Clima" title="Clima" inProduction={true} />
      </div>
    </section>
  )
}
