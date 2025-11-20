import { ICard } from "./types";
import { Content, Date } from "./components";

export const Card = ({ item }: ICard) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1280;

  return (
    <div className="lg:flex lg:justify-center xl:grid xl:grid-cols-[280px_1fr] gap-10 w-full max-w-7xl mx-auto">
      {!isMobile && <Date item={item} />}
      <Content item={item} />
    </div>
  );
};
