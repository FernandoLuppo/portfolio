import { ICard } from "./types";
import { Content, Date } from "./components";

export const Card = ({ item }: ICard) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  return (
    <div className="grid grid-cols-[280px_1fr] gap-10 w-full max-w-7xl mx-auto">
      {!isMobile && <Date item={item} />}
      <Content item={item} />
    </div>
  );
};

{
  /* <div className="grid grid-cols-[auto_4fr] lg:grid-cols-[1fr_4fr] gap-10 max-w-3xl mx-auto">
  {!isMobile && <Date item={item} />}
  <Content item={item} />
</div> */
}
