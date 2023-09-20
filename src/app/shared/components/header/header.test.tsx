import { screen, render, fireEvent } from "@testing-library/react"
import { Header } from ".."

describe("<Header />", () => {
  describe("Should be in the document ", () => {
    it("Header's elements should be in the document", () => {
      render(<Header isScrolling={false} />)

      const logo = screen.getByTestId("logo")
      const logoText = screen.getByText("LuppoTW")
      const introduction = screen.getByText("Introdução")
      const about = screen.getByText("Sobre")
      const technologies = screen.getByText("Tecnologias")
      const projects = screen.getByText("Projetos")

      expect(logo).toBeInTheDocument()
      expect(logoText).toBeInTheDocument()
      expect(introduction).toBeInTheDocument()
      expect(about).toBeInTheDocument()
      expect(technologies).toBeInTheDocument()
      expect(projects).toBeInTheDocument()
    })

    it("Should appear the menu mobile when screen is under than 1024px", () => {
      Object.defineProperty(window, "innerWidth", { value: 1023 })

      render(<Header isScrolling={false} />)

      const menuMobile = screen.getByTestId("menu-mobile")

      expect(menuMobile).toBeInTheDocument()
    })
  })

  describe("Properties should work correctly", () => {
    it("Some styles should change when user not scrolling the page", () => {
      render(<Header isScrolling={false} />)

      const header = screen.getByTestId("header")
      const logo = screen.getByTestId("logo")

      expect(header.classList.contains("bg-transparent")).toBeTruthy()
      expect(logo.classList.contains("text-default")).toBeTruthy()
    })

    it("Some styles should change when user scrolling the page", () => {
      render(<Header isScrolling={true} />)

      const headerScrolling = screen.getByTestId("header")
      const logoScrolling = screen.getByTestId("logo")

      expect(headerScrolling.classList.contains("bg-default")).toBeTruthy()
      expect(logoScrolling.classList.contains("text-white")).toBeTruthy()
    })

    it("When mobile menu was clicked should appear the mobile navigate", () => {
      Object.defineProperty(window, "innerWidth", { value: 1023 })
      render(<Header isScrolling={false} />)

      const menuMobile = screen.getByTestId("menu-mobile")

      fireEvent.click(menuMobile)

      const introduction = screen.getByText("Introdução")
      const about = screen.getByText("Sobre")
      const technologies = screen.getByText("Tecnologias")
      const projects = screen.getByText("Projetos")

      expect(introduction).toBeInTheDocument()
      expect(about).toBeInTheDocument()
      expect(technologies).toBeInTheDocument()
      expect(projects).toBeInTheDocument()
    })
  })
})
