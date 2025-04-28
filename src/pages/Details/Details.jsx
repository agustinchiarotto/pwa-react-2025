import { useEffect, useState } from "react";
import Input from "../../components/Input/Input.jsx";
import Button from "../../components/Button/Button.jsx";
import Titulo from "../../components/Titulo/Titulo.jsx";
import { useNavigate } from "react-router";
import { ROUTES } from "../../const/routes.js";

const Details = () => {
  const navigate = useNavigate();
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

  const onClickNavigateToHomeHandler = () => {
    navigate(ROUTES.home);
  };

  if (pokemon === undefined) {
    return <h1>Loading....</h1>;
  }

  return (
    <>
      <Button texto="Volver a Home" onClick={onClickNavigateToHomeHandler} />
      <Input value={searchValue} onChange={onSearchChangeHandler} />
      <Button texto="Buscar Pokémon" onClick={onSearchClickHandler} />
      <Titulo texto={`DETAILS ${pokemon.name}`} />
      <img src={pokemon.sprites.front_default} />
    </>
  );
};

export default Details;
