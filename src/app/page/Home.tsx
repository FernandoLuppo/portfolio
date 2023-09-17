import { useEffect, useState } from "react"
import { Footer, Header } from "../shared/components"
import { AboutMe, Introduction, Projects, Technologies } from "./components"

export const Home: React.FC = () => {
  const [isScrolling, setIsScrolling] = useState<boolean>(false)
  const [windowHeight, setWindowHeight] = useState<number>(0)

  useEffect(() => {
    if (window.scrollY > 10) {
      setIsScrolling(true)
    } else {
      setIsScrolling(false)
    }

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

  useEffect(() => {
    const headerWindowHeight = () => {
      setWindowHeight(window.scrollY)
    }
    window.addEventListener("scroll", headerWindowHeight)
    return () => {
      window.removeEventListener("scroll", headerWindowHeight)
    }
  }, [windowHeight])

  return (
    <>
      <Header isScrolling={isScrolling} />
      <main className="w-full flex justify-center items-center flex-col">
        <Introduction />
        <AboutMe windowHeight={windowHeight} />
        <Technologies windowHeight={windowHeight} />
        <Projects windowHeight={windowHeight} />
      </main>
      <Footer />
    </>
  )
}
