"use client";
import { PokemonCard } from "./pokemon-card";
import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

interface PokemonGridProps {
  pokemonList: any;
}

export function PokemonGrid({ pokemonList }: PokemonGridProps) {
  const [searchText, setSearchText] = useState("");

  const searchFilter = (pokemonList: any) => {
    return pokemonList.filter((pokemon: any) =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const filteredPokemonList = searchFilter(pokemonList);

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-2xl py-6 text-center">
          Silahkan cari pokemon disini!
        </h3>
        <div className="grid w-full max-w-sm items-center gap-2">
          <Label htmlFor="pokemonName">Pokemon Nama</Label>
          <Input
            type="text"
            value={searchText}
            autoComplete="off"
            id="pokemonName"
            className="bg-gray-200"
            placeholder="cari disini"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <h3 className="text-3xl pt-12 pb-6 text-center">Koleksi Pokemon</h3>
      </div>

      <div className="mb-32 grid text-center grid-cols-2 md:mb-0 md:grid-cols-4">
        {filteredPokemonList.map((pokemon: any) => {
          return (
            <PokemonCard name={pokemon.name} key={pokemon.name + "Card"} />
          );
        })}
      </div>
    </>
  );
}
