import Footer from "./components/Footer";
import Header from "./components/Header";
import PokemonCart from "./components/PokemonCart";

import { Pokemon } from "./types/product";

const data: Pokemon = {
  image:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  serialNumber: "# 001",
  namePokemon: "Bulbasaur",
  type1: "Grass",
  type2: "Poison",
};

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="cart-list">
        <PokemonCart data={data} />
        <PokemonCart data={data} />
        <PokemonCart data={data} />
        <PokemonCart data={data} />
        <PokemonCart data={data} />
        <PokemonCart data={data} />
        <PokemonCart data={data} />
        <PokemonCart data={data} />
        <PokemonCart data={data} />
        <PokemonCart data={data} />
        <PokemonCart data={data} />
        <PokemonCart data={data} />
      </div>

      <Footer />
    </div>
  );
};

export default App;
