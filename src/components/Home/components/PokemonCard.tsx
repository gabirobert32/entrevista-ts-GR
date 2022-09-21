import styled from "styled-components";
import { Pokemon } from "../../../models/Pokemon";

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

const Name = styled.div`
  padding: 2em;
`;

type PokemoncardProps = {
  pokemon: Pokemon;
};
export const PokemonCard = ({ pokemon }: PokemoncardProps) => (
  <Card key={`pokemon-${pokemon.name}`}>
    <Name>{pokemon.name}</Name>
  </Card>
);
