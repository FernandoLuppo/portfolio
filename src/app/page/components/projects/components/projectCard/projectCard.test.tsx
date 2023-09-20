import { screen, render } from "@testing-library/react"
import { ProjectCard } from ".."

describe("<ProjectCard />", () => {
  it("Should be in the document", () => {
    render(
      <ProjectCard inProduction={false} title="Test" text="A text of test" />
    )

    const projectTitle = screen.getByText("Test")
    const projectText = screen.getByText("A text of test")

    expect(projectTitle).toBeInTheDocument()
    expect(projectText).toBeInTheDocument()
  })

  it("Should show 'Em Produção'", () => {
    render(<ProjectCard inProduction={true} title="Test" />)

    const projectTitle = screen.getByText("Test")
    const projectInProduction = screen.getByText("Em Produção")

    expect(projectTitle).toBeInTheDocument()
    expect(projectInProduction).toBeInTheDocument()
  })
})
