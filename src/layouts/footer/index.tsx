import { SocialLink } from "@/shared/components";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="bg-dark-600">
      <div className="max-w-[1440px] m-auto py-10">
        <div className="flex items-center justify-center gap-4">
          <SocialLink
            props={{
              ariaLabel: "Botão do LinkedIn de Fernando Luppo",
              bgColor: "bg-primary",
              href: process.env.NEXT_PUBLIC_LINKEDIN_URL as string,
              icon: <FaLinkedinIn size={24} />,
              text: "Linkedin",
            }}
            key="Botão do LinkedIn de Fernando Luppo (footer)"
          />

          <SocialLink
            props={{
              ariaLabel: "Botão do GitHub de Fernando Luppo",
              bgColor: "bg-[#1A1A1A]",
              href: process.env.NEXT_PUBLIC_GITHUB_URL as string,
              icon: <FaGithub size={24} />,
              text: "GitHub",
            }}
            key="Botão do GitHub de Fernando Luppo (footer)"
          />
        </div>
        <p className="text-center mt-6">
          © 2024 FernandoLuppo - Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};
