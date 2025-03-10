import Footer from "./components/Footer";
import Header from "./components/Header";
import PokemonCart from "./components/PokemonCard";
import pokemon from "./data.json";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="cart-list">
        <PokemonCart data={pokemon} />
        <PokemonCart data={pokemon} />
        <PokemonCart data={pokemon} />
        <PokemonCart data={pokemon} />
      </div>

      <Footer />
    </div>
  );
};

export default App;
