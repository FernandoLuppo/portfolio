import { ICard } from "../../types";

export const Date = ({ item }: ICard) => {
  return (
    <div className="items-baseline gap-2 justify-self-end hidden sm:flex">
      <div className="items-center wrap-anywhere hidden xl:flex">
        <div className="flex items-center w-fit p-2 bg-dark-600 text-gray-600 dark:text-gray-400">
          <span>{item.date}</span>
        </div>
        <svg width="40" height="40">
          <polygon points="0, 0, 40, 20, 0, 40" fill="#1c1f30" />
        </svg>
      </div>

      <div className="flex flex-col justify-center items-center h-full">
        <div className="h-4 w-4 bg-secondary rounded-full shadow-[0_0_10px_rgba(0,208,255,0.6)]"></div>
        <div className="w-[4px] h-full bg-gray"></div>
      </div>
    </div>
  );
};
