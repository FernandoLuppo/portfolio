import Image from "next/image";

interface ICard {
  item: {
    icon: string;
    title: string;
    subtitle: string;
    description: string;
  };
}

export const Card = ({ item }: ICard) => {
  return (
    <div className="md:border-2 md:border-secondary rounded-lg p-6 ">
      <div className="flex items-center gap-4 mb-6">
        <Image alt={item.title} src={item.icon} width={40} height={40} />
        <h4 className="text-2xl">{item.title}</h4>
      </div>

      <h5 className="mb-4">{item.subtitle}</h5>

      <p className="text-gray pb-8">{item.description}</p>
    </div>
  );
};
