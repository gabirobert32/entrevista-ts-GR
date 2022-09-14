import axios from 'axios'
import { useState } from 'react'
import styled from 'styled-components'
import "./Home.css";

const Padding = styled.div`
  padding: 2em;
`

const Home = () => {
  const [pokemons, setPokemons] = useState([])

  const [pokemon, setPokemon] = useState([])

  const URL = `https://pokeapi.co/api/v2/type/${pokemons}`

  const handleChange = (e: any) => {
    setPokemons(e.target.value)
  }

  const getData = (URL: string) => {
    axios
      .get(URL)
      .then((res) => {
        setPokemon(res.data.pokemon)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <Padding>
      <select placeholder="Nombre de pokemon" onChange={handleChange}>
        <option value="">Seleccionar</option>
        <option value="normal">Normal</option>
        <option value="electric">Electic</option>
        <option value="water">Water</option>
        <option value="fire">Fire</option>
        <option value="ghost">Ghost</option>
      </select>
      <button onClick={() => getData(URL)}>Buscar</button>

      {!!pokemon && (
        <div className="pokeContainer">
          {pokemon.map((p: any, index: number) => (
             <div className="pokeCard" key={index}>{p.pokemon.name}</div>
          ))}
        </div>
      )}
    </Padding>
  )
}

export default Home
