import { Pokemon } from "../types/Pokemon";
import { formatId, formatName } from "../utils/format";
function PokemonCard({ data }: { data: Pokemon }) {
  return (
    <div className={`cart cart--${data.types[0].type.name}`}>
      <div className="title">
        <div className="serialNumber">#{formatId(data.id)}</div>
        <h1 className="namePokemon">{formatName(data.name)}</h1>
        <div className="type">
          {data.types.map((item) => (
            <div key={item.type.name} className={`type type--${item.type.name}`}>
              {formatName(item.type.name)}
            </div>
          ))}
        </div>
      </div>
      <div className="image">
        <img src={data.sprites.front_default} alt={data.name} />
      </div>
    </div>
  );
}
export default PokemonCard;
