import Link from "next/link";

interface PokemonCardProps {
  name: string;
}

export function PokemonCard({ name }: PokemonCardProps) {
  return (
    <Link
      href={name}
      className="group rounded-lg border m-3 px-5 py-4 bg-gray-200 hover:bg-gray-300"
      key={name + "Card"}
    >
      <div></div>
      <h2 className={`md:text-2xl text-lg font-semibold`}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h2>
    </Link>
  );
}
