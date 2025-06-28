import Link from "next/link";

export const Logo = () => {
  return (
    <Link href={"#introduction"}>
      <h3 className="text-2xl">
        <span className="text-secondary">{`<`}</span>LuppoTW{" "}
        <span className="text-secondary">{`/>`}</span>
      </h3>
    </Link>
  );
};
