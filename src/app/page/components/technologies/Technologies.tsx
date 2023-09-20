import typescript from "../../../shared/assets/images/typescript.svg"
import react from "../../../shared/assets/images/react.svg"
import node from "../../../shared/assets/images/node.svg"
import mongodb from "../../../shared/assets/images/mongodb.svg"
import mysql from "../../../shared/assets/images/mysql.svg"
import jest from "../../../shared/assets/images/Jest.svg"
import tailwind from "../../../shared/assets/images/tailwind.svg"
import styledComponents from "../../../shared/assets/images/styled-components.svg"
import html from "../../../shared/assets/images/html.svg"
import css from "../../../shared/assets/images/css.svg"
import javascript from "../../../shared/assets/images/javascript.svg"
import git from "../../../shared/assets/images/git.svg"
import linux from "../../../shared/assets/images/linux.svg"
import windows from "../../../shared/assets/images/windows.svg"
import github from "../../../shared/assets/images/github.svg"
import bitbucket from "../../../shared/assets/images/bitbucket.svg"
import vscode from "../../../shared/assets/images/vscode.svg"
import figma from "../../../shared/assets/images/figma.svg"
import { Technology } from "../../../shared/components"
import type { IWindowHeight } from "../../../shared/types"

export const Technologies: React.FC<IWindowHeight> = ({ windowHeight }) => {
  console.log(windowHeight)

  return (
    <section
      id="technology"
      className="flex items-center justify-center bg-primary min-h-[850px] w-full px-14 max-sm:px-8"
    >
      <div
        className={`${
          windowHeight >= 1200
            ? `block max-lg:animate-fade-in-mobile lg:animate-fade-in max-w-[1372px] px-[100px] py-16 bg-card rounded-3xl border-4 border-card-border shadow-card max-sm:px-8 max-sm:py-6 max-lg:my-[85px]`
            : `hidden`
        } `}
      >
        <div className="flex justify-center flex-col items-center">
          <h2 className="text-3xl text-center text-white max-sm:text-xl">
            Abaixo as tecnologias que tenho conhecimento
          </h2>
          <div className="w-10/12 h-[3px] rounded-full bg-primary mt-3"></div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10 mt-16 pb-4">
          <Technology key="TypeScript" src={typescript} label="TypeScript" />
          <Technology key="React" src={react} label="React" />
          <Technology key="Node" src={node} label="Node" />
          <Technology key="MongoDB" src={mongodb} label="MongoDB" />
          <Technology key="MySQL" src={mysql} label="MySQL" />
          <Technology key="Jest" src={jest} label="Jest" />
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
