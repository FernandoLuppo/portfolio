import { ICard } from "../../types";

export const Content = ({ item }: ICard) => {
  return (
    <div className="max-w-[870px]">
      <h3 className="text-[32px] mb-6">{item.position}</h3>
      <h4 className="text-2xl mb-6 flex flex-col items-baseline gap-2">
        {item.enterprise}
        <span className="block xl:hidden text-base text-gray">{item.date}</span>
      </h4>

      <p className="text-gray list-disc mb-4">{item.description}</p>

      <ul className="pl-6 flex flex-col lg:items-start gap-2">
        {item.list.map((item) => (
          <li key={item} className="text-gray list-disc">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
