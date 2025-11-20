import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

export const CTA = () => {
  return (
    <div className="flex gap-4 items-center justify-center sm:justify-start">
      <div className="group">
        <Link
          href="/files/Fernando_Luppo.pdf"
          download="Curriculo_Fernando_Luppo.pdf"
          className="text-white bg-primary rounded-lg w-fit cursor-pointer shadow-default p-4 lg:p-6 text-lg lg:text-2xl scale-animation-hover"
        >
          Download CV
        </Link>
      </div>
      <div className="group">
        <a
          href={`https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-[#2E7D32] scale-animation-hover rounded-lg   cursor-pointer shadow-default p-4 lg:p-6 text-lg lg:text-2xl"
        >
          <span className="flex w-fit items-center gap-2">
            <FaWhatsapp />
            Contate-me
          </span>
        </a>
      </div>
    </div>
  );
};
