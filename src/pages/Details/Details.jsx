import { useEffect, useState } from "react";

const Details = () => {
  const [pokemon, setPokemon] = useState();

  console.log("@@@", pokemon);
  const getCharmander = async () => {
    const charmanderResult = await fetch(
      "https://pokeapi.co/api/v2/pokemon/charmander",
    );

    const charmander = await charmanderResult.json();

    console.log("charmander: ", charmander);
    setPokemon(charmander);
  };

  useEffect(() => {
    getCharmander();
  }, []);

  if (pokemon === undefined) {
    return <h1>Loading....</h1>;
  }

  return (
    <>
      <h1>DETAILS {pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} />
    </>
  );
};

export default Details;
