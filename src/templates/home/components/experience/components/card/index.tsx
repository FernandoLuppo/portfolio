import { ICard } from "./types";
import { Content, Date } from "./components";

export const Card = ({ item }: ICard) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  return (
    <div className="grid grid-cols-[auto_4fr] lg:grid-cols-[1fr_4fr] gap-10">
      {!isMobile && <Date item={item} />}
      <Content item={item} />
    </div>
  );
};
