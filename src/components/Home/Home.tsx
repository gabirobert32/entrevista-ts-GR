import axios from "axios";
import styled from "styled-components";
import { ChangeEvent, useState } from "react";
import { PokemonWrapper } from "../../models/Pokemon";
import { PokemonButton } from "./components/PokemonButton";
import { PokemonCard } from "./components/PokemonCard";
import { PokemonSelector } from "./components/PokemonSelector";

const options = ["electric", "water", "fire", "ghost"];

const Padding = styled.div`
  padding: 2em;
`;
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2em;
`;

const Home = () => {
  const [pokemonType, setPokemonType] = useState<string>("");
  const [pokemon, setPokemon] = useState<PokemonWrapper[]>();
  const URL = `https://pokeapi.co/api/v2/type/${pokemonType}`;

  const handleChange = ({ target }: ChangeEvent<HTMLSelectElement>) =>
    setPokemonType(target.value);

  const getData = async () => {
    try {
      const { data } = await axios.get(URL);
      setPokemon(data.pokemon);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Padding>
      <PokemonSelector options={options} handleChange={handleChange} />
      <PokemonButton onClick={getData} text="Buscar" />

      {!!pokemon && (
        <FlexContainer>
          {pokemon.map(({ pokemon }: PokemonWrapper, index: number) => (
            <PokemonCard key={index} pokemon={pokemon} />
          ))}
        </FlexContainer>
      )}
    </Padding>
  );
};

export default Home;
