import { CTA, Card, MySelfImage } from "./components";

export const Introduction = () => {
  return (
    <Card>
      <MySelfImage
        styles="hidden md:block w-[354px]"
        key="Desktop Myself image"
      />

      <div>
        <h1 className="text-2xl lg:text-[32px] text-center md:text-left">
          <span className="text-secondary">{`<h2>`}</span>
          <span>{`Fernando Luppo`}</span>
          <span className="text-secondary">{`</h2>`}</span>
        </h1>

        <h2 className="text-[32px] lg:text-[48px] mt-4 md:mt-0 text-center md:text-left">
          Desenvolvedor <br className="block md:hidden" />
          <span className="text-secondary">&#123;Full Stack&#125;</span>
          <br />
          Web & Mobile
        </h2>

        <MySelfImage
          styles="relative md:hidden my-8 flex justify-center items-center"
          key="Mobile Myself image"
        />

        <div className="max-w-[684px] mb-10 lg:mb-[56px]">
          <span className="text-secondary">{`<p>`}</span>
          <p className="ml-4 text-justify sm:text-left">
            Sou especialista em desenvolvimento web e mobile, criando soluções
            personalizadas com <span className="text-secondary">Next.js</span>,{" "}
            <span className="text-secondary">React</span>,{" "}
            <span className="text-secondary">React Native</span> e{" "}
            <span className="text-secondary">Node.js</span>. Entrego produtos
            modernos, eficientes e intuitivos, sempre focados em performance e
            ótima experiência do usuário.
          </p>
          <span className="text-secondary">{`</p>`}</span>
        </div>
        <CTA />
      </div>
    </Card>
  );
};
