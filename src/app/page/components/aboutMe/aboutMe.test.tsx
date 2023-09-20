import { render, screen } from "@testing-library/react"
import { AboutMe } from ".."

describe("<AboutMe />", () => {
  it("Elements should be in the document", () => {
    render(<AboutMe windowHeight={350} />)

    const aboutMeCard = screen.getByTestId("aboutMe-card")
    const whoIAm = screen.getByText("Quem Sou")
    const myName = screen.getByText("Fernando Luppo")
    const myProfession = screen.getByText("Desenvolvedor Full-Stack")
    const text = screen.getByTestId("aboutMe-text")

    expect(aboutMeCard.classList.contains("hidden")).toBeFalsy()
    expect(whoIAm).toBeInTheDocument()
    expect(myName).toBeInTheDocument()
    expect(myProfession).toBeInTheDocument()
    expect(text).toBeInTheDocument()
  })

  it("Elements should not be visible in the document if windowHeight is lower than 350", () => {
    render(<AboutMe windowHeight={300} />)

    const aboutMeCard = screen.getByTestId("aboutMe-card")

    expect(aboutMeCard.classList.contains("hidden")).toBeTruthy()
  })
})
