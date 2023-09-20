import { render, screen } from "@testing-library/react"
import { Technologies } from ".."

describe("<Technologies />", () => {
  it("Should be in the document", () => {
    render(<Technologies windowHeight={1200} />)

    const cardTitle = screen.getByText("Tecnologias que tenho conhecimento")
    const typescript = screen.getByText("TypeScript")
    const react = screen.getByText("React")
    const node = screen.getByText("Node")
    const mongodb = screen.getByText("MongoDB")
    const mysql = screen.getByText("MySQL")
    const jest = screen.getByText("Jest")
    const tailwind = screen.getByText("TailWind")
    const styledComponents = screen.getByText("Styled Components")
    const html = screen.getByText("HTML")
    const css = screen.getByText("CSS")
    const javascript = screen.getByText("JavaScript")
    const git = screen.getByText("Git")
    const linux = screen.getByText("Linux")
    const windows = screen.getByText("Windows")
    const github = screen.getByText("GitHub")
    const bitbucket = screen.getByText("Bitbucket")
    const vscode = screen.getByText("VSCode")
    const figma = screen.getByText("Figma")

    expect(cardTitle).toBeInTheDocument()
    expect(typescript).toBeInTheDocument()
    expect(react).toBeInTheDocument()
    expect(node).toBeInTheDocument()
    expect(mongodb).toBeInTheDocument()
    expect(mysql).toBeInTheDocument()
    expect(jest).toBeInTheDocument()
    expect(tailwind).toBeInTheDocument()
    expect(styledComponents).toBeInTheDocument()
    expect(html).toBeInTheDocument()
    expect(css).toBeInTheDocument()
    expect(javascript).toBeInTheDocument()
    expect(git).toBeInTheDocument()
    expect(linux).toBeInTheDocument()
    expect(windows).toBeInTheDocument()
    expect(github).toBeInTheDocument()
    expect(bitbucket).toBeInTheDocument()
    expect(vscode).toBeInTheDocument()
    expect(figma).toBeInTheDocument()
  })

  it("Card should be hidden if windowHeight is lower than 1200px", () => {
    render(<Technologies windowHeight={1000} />)

    const technologiesCard = screen.getByTestId("technologies-card")

    expect(technologiesCard.classList.contains("hidden")).toBeTruthy()
  })
})
