import styled from "styled-components";

const Button = styled.button`
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
  border: 1px solid #80808052;
  color: black;
  background: #a6c6ff;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    background: #00009a;
    color: white;
  }
`;

type PokemonButtonProps = {
  text: string;
  onClick: () => void;
};
export const PokemonButton = ({ text, onClick }: PokemonButtonProps) => (
  <Button onClick={onClick}>{text}</Button>
);
