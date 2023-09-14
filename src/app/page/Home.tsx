import { Header } from "../shared/components"
import { Introduction } from "./components/introduction/Introduction"

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className="w-full flex justify-center items-center">
        <Introduction />
        {/* About Me  */}
        {/* Technologies */}
        {/* Project */}
      </main>
      {/* Footer */}
    </>
  )
}
