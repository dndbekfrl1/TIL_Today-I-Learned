import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {RootStore} from "./Store"
import {GetPokemon} from "./actions/PockemonActions";

function App() {
  const dispatch  = useDispatch();
  const pokemonState = useSelector((state:RootStore)=>state.pokemonReducer.pokemon);
  const [pokemonName, setPokemonName] = useState("");
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=> setPokemonName(e.target.value);

  const handleSubmit=()=>dispatch(GetPokemon(pokemonName));
  
  console.log("states",pokemonState);

  return (
    <div className="App">
      test
      <input type="text" onChange = {handleChange}/>
      <button onClick={handleSubmit}>submit</button>
      <div>
        {pokemonState && (
          
          <div>
            {pokemonState.sprites.front_default}
            <img src={pokemonState.sprites.front_default}/>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
