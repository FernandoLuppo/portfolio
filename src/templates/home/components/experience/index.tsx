import { Section } from "@/layouts";
import { Title } from "@/shared/components";
import { EXPERIENCE_LIST } from "./constants";
import { Card } from "./components";

export const Experience = () => {
  return (
    <Section type={800} key="experience" id="experiences">
      <Title label="Experiência" key="experience-title" />

      <div className="flex flex-col justify-center items-center gap-12">
        {EXPERIENCE_LIST.map((item) => (
          <Card key={item.position} item={item} />
        ))}
      </div>
    </Section>
  );
};
