import { ChangeEvent } from "react";
import styled from "styled-components";

const Select = styled.select`
  padding: 10px;
  border: 1px solid #80808052;
  border-radius: 10px;
  margin: 10px;
  color: gray;
`;
type PokemonSelectorProps = {
  options: string[];
  handleChange: ({ target }: ChangeEvent<HTMLSelectElement>) => void;
};
export const PokemonSelector = ({
  options,
  handleChange,
}: PokemonSelectorProps) => (
  <Select placeholder="Nombre de pokemon" onChange={handleChange}>
    <option value="">Seleccionar</option>
    {options.map((o: string) => (
      <option value={o}>{o}</option>
    ))}
  </Select>
);
