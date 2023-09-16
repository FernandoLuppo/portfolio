import { useEffect, useState } from "react"
import { Footer, Header } from "../shared/components"
import { AboutMe, Introduction, Projects, Technologies } from "./components"

export const Home: React.FC = () => {
  const [isScrolling, setIsScrolling] = useState<boolean>(false)

  useEffect(() => {
    const headerScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolling(true)
        return
      }
      setIsScrolling(false)
    }
    window.addEventListener("scroll", headerScroll)
    return () => window.removeEventListener("scroll", headerScroll)
  }, [isScrolling])

  return (
    <>
      <Header isScrolling={isScrolling} />
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
