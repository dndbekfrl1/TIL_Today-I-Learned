import { combineReducers } from "redux";
import pokemonReducer from "./PokemonReducer";

const RootReducer = combineReducers({
    pokemonReducer
})

export default RootReducer