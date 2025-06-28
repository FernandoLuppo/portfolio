import { SocialLink } from "@/shared/components";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

export const SocialButtons = () => {
  return (
    <ul className="flex items-center justify-center gap-4">
      <li>
        <SocialLink
          props={{
            ariaLabel: "Botão do LinkedIn de Fernando Luppo",
            bgColor: "bg-primary",
            href: process.env.NEXT_PUBLIC_LINKEDIN_URL as string,
            icon: <FaLinkedinIn size={24} />,
            text: "Linkedin",
          }}
          key="Botão do LinkedIn de Fernando Luppo"
        />
      </li>
      <li>
        <SocialLink
          props={{
            ariaLabel: "Botão do GitHub de Fernando Luppo",
            bgColor: "bg-[#1A1A1A]",
            href: process.env.NEXT_PUBLIC_GITHUB_URL as string,
            icon: <FaGithub size={24} />,
            text: "GitHub",
          }}
          key="Botão do GitHub de Fernando Luppo"
        />
      </li>
    </ul>
  );
};
