import { render, screen } from "@testing-library/react"
import { Introduction } from ".."

describe("<Introduction />", () => {
  it("Elements should be in the document", () => {
    render(<Introduction />)

    const greetings = screen.getByText("Ola meu nome é")
    const myName = screen.getByText("Fernando J. A. Luppo")
    const myProfession = screen.getByText("Full-Stack Developer")
    const text = screen.getByTestId("introduction-text")
    const photo = screen.getByAltText("Photo")
    const arrow = screen.getByTestId("introduction-arrow")

    expect(greetings).toBeInTheDocument()
    expect(myName).toBeInTheDocument()
    expect(myProfession).toBeInTheDocument()
    expect(text).toBeInTheDocument()
    expect(photo).toBeInTheDocument()
    expect(arrow).toBeInTheDocument()
  })
})
