"use client";

import { NAV_OPTIONS } from "../../constants";
import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";
interface INav {
  setShowModal?: Dispatch<SetStateAction<boolean>>;
}

export const Nav = ({ setShowModal }: INav) => {
  const route = useRouter();

  const onHandleClick = (href: string) => {
    route.push(href);
    if (setShowModal) {
      setTimeout(() => {
        setShowModal(false);
      }, 300);
    }
  };

  return (
    <nav>
      <ul className="flex flex-col md:flex-row items-baseline md:items-center justify-center gap-4 text-2xl md:text-base">
        {NAV_OPTIONS.map(({ label, href }) => (
          <li key={label} className="group">
            <button
              className="hover:text-secondary transition scale-animation-hover cursor-pointer"
              onClick={() => onHandleClick(href)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
