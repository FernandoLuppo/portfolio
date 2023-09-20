import { render, screen } from "@testing-library/react"
import { Projects } from ".."

describe("<Projects />", () => {
  it("Elements should be in the document", () => {
    render(<Projects windowHeight={2050} />)

    const sectionTitle = screen.getByText("Projetos")
    const streamingProjectTitle = screen.getByText("Streaming")
    const pokeDexProjectTitle = screen.getByText("PokeDex")

    expect(sectionTitle).toBeInTheDocument()
    expect(streamingProjectTitle).toBeInTheDocument()
    expect(pokeDexProjectTitle).toBeInTheDocument()
  })

  it("Projects section should be hidden if windowHeight is lower than 2050px", () => {
    render(<Projects windowHeight={2000} />)

    const projectsCard = screen.getByTestId("projects-card")

    expect(projectsCard.classList.contains("hidden")).toBeTruthy()
  })
})
