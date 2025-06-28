export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <section
      className="w-full bg-dark-800 pt-[24px] pb-[96px] md:py-[96px] px-6"
      id="introduction"
    >
      <div className="max-w-[1440px] m-auto pt-6 flex justify-center items-center gap-[60px] xl:gap-[117px]">
        {children}
      </div>
    </section>
  );
};
