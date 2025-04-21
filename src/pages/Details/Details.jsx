import { useEffect, useState } from "react";
import Input from "../../components/Input/Input.jsx";
import Button from "../../components/Button/Button.jsx";

const Details = () => {
  const [pokemon, setPokemon] = useState();
  const [searchValue, setSearchValue] = useState("charmander");
  const getPokemon = async () => {
    try {
      const pokemonResult = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${searchValue}`,
      );

      const poke = await pokemonResult.json();

      setPokemon(poke);
    } catch (error) {
      console.log("@@@@", error);
    }
  };

  console.log(pokemon);

  useEffect(() => {
    getPokemon();
  }, []);

  const onSearchChangeHandler = (valor) => {
    setSearchValue(valor);
  };

  const onSearchClickHandler = () => {
    getPokemon();
  };

  if (pokemon === undefined) {
    return <h1>Loading....</h1>;
  }

  return (
    <>
      <Input value={searchValue} onChange={onSearchChangeHandler} />
      <Button texto="Buscar Pokémon" onClick={onSearchClickHandler} />
      <h1>DETAILS {pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} />
    </>
  );
};

export default Details;
