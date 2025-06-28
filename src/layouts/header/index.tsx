import { Logo, MenuMobile, Nav, SocialButtons } from "./components";

export const Header = () => {
  return (
    <header className="bg-dark-800 w-full sticky top-0 z-10">
      <div className="max-w-[1440px] m-auto p-6 flex justify-between items-center">
        <Logo />

        <div className="hidden md:block">
          <Nav />
        </div>
        <div className="hidden md:block">
          <SocialButtons />
        </div>

        <MenuMobile />
      </div>
    </header>
  );
};
