import clsx from "clsx";
import Image from "next/image";

export const MySelfImage = ({ styles }: { styles: string }) => {
  return (
    <>
      <div className={clsx("w-full md:w-[354px]", styles)}>
        <Image
          alt="Foto"
          src="/images/me.svg"
          width={354}
          height={1.0}
          loading="eager"
          placeholder="blur"
          blurDataURL="data:images/me.svg"
          priority
          className="rounded-lg shadow-default min-w-[300px]"
        />
      </div>
    </>
  );
};
