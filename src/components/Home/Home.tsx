import axios from "axios";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { PokemonWrapper } from "../../models/Pokemon";

const Padding = styled.div`
  padding: 2em;
`;
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2em;
`;

const Name = styled.div`
  padding: 2em;
`;
const Button = styled.button`
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
  border: 1px solid #80808052;
  color: black;
  background: #6aa1ff;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    background: blue;
    color: white;
  }
`;
const Select = styled.select`
  padding: 10px;
  border: 1px solid #80808052;
  border-radius: 10px;
  margin: 10px;
  color: gray;
`;

const Card = styled.div`
  min-width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #8080803b;
  transition: 0.4s;
  margin: 10px;
  border-radius: 10px;
  &:hover {
    box-shadow: 3px 2px 5px 0 #8080803b;
  }
`;

const Home = () => {
  const [pokemonType, setPokemonType] = useState<string>("");
  const [pokemon, setPokemon] = useState<PokemonWrapper[]>();

  const URL = `https://pokeapi.co/api/v2/type/${pokemonType}`;

  const handleChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    setPokemonType(target.value);
  };

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
      <Select placeholder="Nombre de pokemon" onChange={handleChange}>
        <option value="">Seleccionar</option>
        <option value="normal">Normal</option>
        <option value="electric">Electic</option>
        <option value="water">Water</option>
        <option value="fire">Fire</option>
        <option value="ghost">Ghost</option>
      </Select>
      <Button onClick={getData}>Buscar</Button>

      {!!pokemon && (
        <FlexContainer>
          {pokemon.map(({ pokemon }: PokemonWrapper) => (
            <Card key={`pokemon-${pokemon.name}`}>
              <Name>{pokemon.name}</Name>
            </Card>
          ))}
        </FlexContainer>
      )}
    </Padding>
  );
};

export default Home;
