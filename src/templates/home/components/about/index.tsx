import { Section } from "@/layouts";
import { Title } from "@/shared/components";

export const About = () => {
  return (
    <Section type={600} key={"about"} id="about">
      <Title label="Sobre" key="about-title" />

      <p className="max-w-[920px] m-auto text-center">
        Olá! Sou Fernando Luppo, desenvolvedor full-stack apaixonado por
        transformar ideias em soluções digitais completas e impactantes. Com
        ampla expertise em desenvolvimento web e mobile, projeto e implemento
        desde interfaces modernas e intuitivas até sistemas back-end robustos e
        APIs eficientes, garantindo sempre a melhor performance, código limpo e
        experiência do usuário. Meu objetivo vai além de simplesmente fazer
        funcionar - busco entregar produtos que superem expectativas através de
        soluções inovadoras, escaláveis e bem arquitetadas, combinando de forma
        harmoniosa tecnologia de ponta, criatividade e eficiência em cada etapa
        do desenvolvimento.
      </p>
    </Section>
  );
};
