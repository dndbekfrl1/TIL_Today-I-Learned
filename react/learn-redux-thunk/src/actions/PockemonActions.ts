import axios from "axios";
import {Dispatch} from "redux";
import { PokemonDispatchTypes,POKEMON_SUCCESS,POKEMON_FAIL,POKEMON_LOADING } from "./PockemonActionTypes";

export const GetPokemon = (pokemon:string)=>async (dispatch:Dispatch<PokemonDispatchTypes>) =>{
    try{
        dispatch({
            type:POKEMON_LOADING
        })

        const res = await axios.get(`http://pokeapi.co/api/v2/pokemon/${pokemon}`)
        dispatch({
            type:POKEMON_SUCCESS, 
            payload:res.data
        })
    }
    catch(e){
        dispatch({type:POKEMON_FAIL})

    }
}