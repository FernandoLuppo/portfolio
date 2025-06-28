import {
  About,
  Experience,
  Introduction,
  MyServices,
  Skills,
} from "./components";

export const HomeTemplate = () => {
  return (
    <main>
      <Introduction />
      <About />
      <MyServices />
      <Skills />
      <Experience />
    </main>
  );
};
