import { screen, render } from "@testing-library/react"
import { Technology } from ".."

describe("<Technology />", () => {
  it("Elements should be in the document", () => {
    render(<Technology label="TypeScript" src="typescript" />)

    const technologyImg = screen.getByAltText("TypeScript")
    const technologyText = screen.getByText("TypeScript")

    expect(technologyImg).toBeInTheDocument()
    expect(technologyText).toBeInTheDocument()
  })
})
