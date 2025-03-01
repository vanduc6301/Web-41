import { Pokemon } from "../types/product";

type ProductCartProps = {
  data: Pokemon;
};

export default function PokemonCart({ data }: ProductCartProps) {
  return (
    <div className="cart">
      <div className="title">
        <div className="serialNumber">{data.serialNumber}</div>
        <h1 className="namePokemon">{data.namePokemon}</h1>
        <div className="type">
          <button className="type1">{data.type1}</button>
          <button className="type2">{data.type2}</button>
        </div>
      </div>
      <div className="image">
        <img src={data.image} alt={data.namePokemon} />
      </div>
    </div>
  );
}
