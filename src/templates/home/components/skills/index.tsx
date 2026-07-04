import { Section } from "@/layouts";
import { Title } from "@/shared/components";
import { TECH_SKILL_LIST } from "./constants";

export const Skills = () => {
  return (
    <Section type={600} key="skills" id="skills">
      <Title label="Skills" key="skills-title" />

      <div className="flex flex-wrap justify-center items-baseline gap-x-8 gap-y-6">
        {TECH_SKILL_LIST.map(({ Icon, title, color }) => {
          return (
            <div
              key={title}
              className="text-center flex flex-col items-center"
              style={{ color }}
            >
              <Icon
                className="max-h-[50px] w-auto"
                style={{ fill: 'currentColor' }}
                aria-hidden="true"
              />
              <h3 className="text-2xl font-bold whitespace-pre-line text-white">
                {title.replace(" ", "\n")}
              </h3>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
