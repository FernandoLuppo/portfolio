import { Footer, Header } from "../shared/components"
import { AboutMe, Introduction, Projects, Technologies } from "./components"

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className="w-full flex justify-center items-center flex-col">
        <Introduction />
        <AboutMe />
        <Technologies />
        <Projects />
      </main>
      <Footer />
    </>
  )
}
