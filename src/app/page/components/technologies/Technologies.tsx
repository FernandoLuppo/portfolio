import typescript from "../../../shared/images/typescript.svg"
import react from "../../../shared/images/react.svg"
import node from "../../../shared/images/node.svg"
import mongodb from "../../../shared/images/mongodb.svg"
import mysql from "../../../shared/images/mysql.svg"
import tailwind from "../../../shared/images/tailwind.svg"
import styledComponents from "../../../shared/images/styled-components.svg"
import html from "../../../shared/images/html.svg"
import css from "../../../shared/images/css.svg"
import javascript from "../../../shared/images/javascript.svg"
import git from "../../../shared/images/git.svg"
import linux from "../../../shared/images/linux.svg"
import windows from "../../../shared/images/windows.svg"
import github from "../../../shared/images/github.svg"
import bitbucket from "../../../shared/images/bitbucket.svg"
import vscode from "../../../shared/images/vscode.svg"
import figma from "../../../shared/images/figma.svg"
import { Technology } from "../../../shared/components"

export const Technologies: React.FC = () => {
  return (
    <section
      id="technology"
      className="flex items-center justify-center bg-primary min-h-[850px] w-full px-14 max-sm:px-8"
    >
      <div className="max-w-[1372px] px-[100px] py-16 bg-card rounded-3xl border-4 border-card-border shadow-card max-sm:px-8 max-sm:py-6 max-lg:my-[85px]">
        <div className="flex justify-center flex-col items-center">
          <h3 className="text-3xl text-center text-white max-sm:text-xl">
            Abaixo as tecnologias que tenho conhecimento
          </h3>
          <div className="w-10/12 h-[3px] rounded-full bg-primary mt-3"></div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10 mt-16 pb-4">
          <Technology key="TypeScript" src={typescript} label="TypeScript" />
          <Technology key="React" src={react} label="React" />
          <Technology key="Node" src={node} label="Node" />
          <Technology key="MongoDB" src={mongodb} label="MongoDB" />
          <Technology key="MySQL" src={mysql} label="MySQL" />
          <Technology key="TailWind" src={tailwind} label="TailWind" />
          <Technology
            key="Styled Components"
            src={styledComponents}
            label="Styled Components"
          />
          <Technology key="HTML" src={html} label="HTML" />
          <Technology key="CSS" src={css} label="CSS" />
          <Technology key="JavaScript" src={javascript} label="JavaScript" />
          <Technology key="Git" src={git} label="Git" />
          <Technology key="Linux" src={linux} label="Linux" />
          <Technology key="Windows" src={windows} label="Windows" />
          <Technology key="GitHub" src={github} label="GitHub" />
          <Technology key="Bitbucket" src={bitbucket} label="Bitbucket" />
          <Technology key="VSCode" src={vscode} label="VSCode" />
          <Technology key="Figma" src={figma} label="Figma" />
        </div>
      </div>
    </section>
  )
}
