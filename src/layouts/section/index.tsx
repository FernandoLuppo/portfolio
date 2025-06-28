import clsx from "clsx";

interface SectionProps {
  children: React.ReactNode;
  type: 800 | 600;
  id: string;
}

export const Section = ({ children, type, id }: SectionProps) => {
  return (
    <section
      id={id}
      className={clsx("w-full bg-dark-600 py-[96px] px-6", {
        "bg-dark-800": type === 800,
        "bg-dark-600": type === 600,
      })}
    >
      <div className="max-w-[1440px] m-auto">{children}</div>
    </section>
  );
};
