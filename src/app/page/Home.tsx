import { Header } from "../shared/components"
import { AboutMe, Introduction } from "./components"

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className="w-full flex justify-center items-center flex-col">
        <Introduction />
        <AboutMe />
        {/* Technologies */}
        {/* Project */}
      </main>
      {/* Footer */}
    </>
  )
}
