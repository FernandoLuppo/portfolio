import { fireEvent, render, screen } from "@testing-library/react"
import { Home } from "./Home"

describe("<Home />", () => {
  it("Header and Footer should be in the document", () => {
    render(<Home />)

    const header = screen.getByTestId("header")
    const footer = screen.getByText("©LuppoTW")

    expect(header).toBeInTheDocument()
    expect(footer).toBeInTheDocument()
  })

  it("Introduction should be visible in screen, the other should not", () => {
    render(<Home />)
    window.screenY = 0

    const introductionCard = screen.getByTestId("introduction-card")
    const aboutMeCard = screen.getByTestId("aboutMe-card")
    const technologiesCard = screen.getByTestId("technologies-card")
    const projectsCard = screen.getByTestId("projects-card")

    expect(introductionCard).toBeInTheDocument()
    expect(introductionCard.classList.contains("hidden")).toBeFalsy()

    expect(aboutMeCard.classList.contains("hidden")).toBeTruthy()
    expect(technologiesCard.classList.contains("hidden")).toBeTruthy()
    expect(projectsCard.classList.contains("hidden")).toBeTruthy()
  })

  it("Should be visible in the screen Introduction and AboutMe", () => {
    render(<Home />)
    fireEvent.scroll(window, { target: { scrollY: 350 } })

    const introductionCard = screen.getByTestId("introduction-card")
    const aboutMeCard = screen.getByTestId("aboutMe-card")
    const technologiesCard = screen.getByTestId("technologies-card")
    const projectsCard = screen.getByTestId("projects-card")

    expect(introductionCard.classList.contains("hidden")).toBeFalsy()
    expect(aboutMeCard.classList.contains("hidden")).toBeFalsy()

    expect(technologiesCard.classList.contains("hidden")).toBeTruthy()
    expect(projectsCard.classList.contains("hidden")).toBeTruthy()
  })

  it("Should be visible in the screen Introduction, AboutMe and Technologies", () => {
    render(<Home />)
    fireEvent.scroll(window, { target: { scrollY: 1200 } })

    const introductionCard = screen.getByTestId("introduction-card")
    const aboutMeCard = screen.getByTestId("aboutMe-card")
    const technologiesCard = screen.getByTestId("technologies-card")
    const projectsCard = screen.getByTestId("projects-card")

    expect(introductionCard.classList.contains("hidden")).toBeFalsy()
    expect(aboutMeCard.classList.contains("hidden")).toBeFalsy()
    expect(technologiesCard.classList.contains("hidden")).toBeFalsy()

    expect(projectsCard.classList.contains("hidden")).toBeTruthy()
  })

  it("All component should be visible", () => {
    Object.defineProperty(window, "innerWidth", { value: 1920 })
    render(<Home />)
    fireEvent.scroll(window, { target: { scrollY: 2050 } })

    const introductionCard = screen.getByTestId("introduction-card")
    const aboutMeCard = screen.getByTestId("aboutMe-card")
    const technologiesCard = screen.getByTestId("technologies-card")
    const projectsCard = screen.getByTestId("projects-card")

    expect(introductionCard.classList.contains("hidden")).toBeFalsy()
    expect(aboutMeCard.classList.contains("hidden")).toBeFalsy()
    expect(technologiesCard.classList.contains("hidden")).toBeFalsy()
    expect(projectsCard.classList.contains("hidden")).toBeFalsy()
  })

  it("Hidden class in Projects needs to appear in mobile", () => {
    Object.defineProperty(window, "innerWidth", { value: 600 })
    render(<Home />)
    fireEvent.scroll(window, { target: { scrollY: 2900 } })

    const projectsCard = screen.getByTestId("projects-card")

    expect(projectsCard.classList.contains("hidden")).toBeFalsy()
  })
})
