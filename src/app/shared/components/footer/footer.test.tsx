import { render, screen } from "@testing-library/react"
import { Footer } from ".."

describe("<Footer />", () => {
  it("Footer element should be in the document", () => {
    render(<Footer />)

    const footerText = screen.getByText("©LuppoTW")

    expect(footerText).toBeInTheDocument()
  })
})
