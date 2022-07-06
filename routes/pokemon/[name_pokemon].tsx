/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";

interface Poke{
  name: string;
  weight: number;
  location_area_encounters: string;
}

export const handler: Handlers<Poke | null> = {
  async GET(_,ctx){
    const {name_pokemon} = ctx.params;
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name_pokemon}`);
    if (resp.status === 404) {
      return ctx.render(null)
    }
    const poke: Poke = await resp.json();
    return ctx.render(poke);
  }
}

export default function PokemonPage({ data }: PageProps<Poke | null>) {
  if (!data) {
    return <h1>Pokemon not found</h1>;
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.weight}</p>
      <p>{data.location_area_encounters}</p>
    </div>
  );
}