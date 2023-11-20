import { PokemonsResponse, SimplePokemon } from "@/pokemons";
import { PokemosnGrid } from "@/pokemons/components/PokemosnGrid";



const getPokemons = async (limit: 20, offset: 0): Promise<SimplePokemon[]> => {
    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(res => res.json());
    // 
    const pokemons = data.results.map((pokemon: { url: string; name: any; }) => ({
        // EL non-null operator ! al final de id lo pongo porque estoy seguro de que la data va a venir
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name,
    }))

    // throw new Error("Este error no deberia suceder")
    return pokemons;

}

export default async function PokemonsPage() {

    const pokemons = await getPokemons(150);
    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Listado de Pokémons<small>estático</small></span>
            <PokemosnGrid pokemons={pokemons} />
        </div>
    );
}