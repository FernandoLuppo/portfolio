import Link from "next/link";
import { NAV_OPTIONS } from "../../constants";

export const Nav = () => {
  return (
    <nav>
      <ul className="flex flex-col md:flex-row items-baseline md:items-center justify-center gap-4 text-2xl md:text-base">
        {NAV_OPTIONS.map(({ label, href }) => (
          <li key={label} className="group">
            <Link
              href={href}
              className="hover:text-secondary transition scale-animation-hover"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
