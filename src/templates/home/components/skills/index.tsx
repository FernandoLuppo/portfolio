import { Section } from "@/layouts";
import { Title } from "@/shared/components";
import { TECH_SKILL_LIST } from "./constants";
import Image from "next/image";

export const Skills = () => {
  return (
    <Section type={600} key="skills" id="skills">
      <Title label="Skills" key="skills-title" />

      <div className="flex flex-wrap justify-center items-baseline gap-x-8 gap-y-6">
        {TECH_SKILL_LIST.map((item) => {
          const titleWithBreaks = item.title.split(" ").join("<br />");

          return (
            <div
              key={item.title}
              className="text-center flex flex-col items-center"
            >
              <Image
                src={item.icon}
                alt={item.title}
                height={50}
                width={50}
                className="max-h-[50px]"
              />
              <h3
                className="text-2xl font-bold"
                dangerouslySetInnerHTML={{ __html: titleWithBreaks }}
              />
            </div>
          );
        })}
      </div>
    </Section>
  );
};
