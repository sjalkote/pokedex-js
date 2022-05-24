import PropTypes from "prop-types";

const PokemonInfo = (pokemon) => {
  // TODO: Add more data, e.g forms
  return (
    <div style={{ display: "table" }}>
      <h4 style={{ textTransform: "capitalize" }}>
        {pokemon.name} <i style={{ color: "gray" }}>#{pokemon.id}</i>
      </h4>
      <img src={pokemon.sprite} alt={pokemon.name + " sprite"} />
      <table>
        <tbody>
          <tr>
            <td className="b">Type </td>
            <td>
              {/* TODO: Add pokedex for types, use the `url` param in the types array if needed. */}
              {pokemon.type1.type.name +
                (pokemon.type2 != null ? ", " + pokemon.type2.type.name : "")}
            </td>
          </tr>
          <tr>
            <td className="b">Height</td>
            <td>{convertHeight(pokemon.height)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

PokemonInfo.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type1: PropTypes.object.isRequired,
  type2: PropTypes.object,
  height: PropTypes.number.isRequired,
};

// TODO: Make region specific formats (feet in US only)
/** Convert the decimeter value to feet & inches. */
var convertHeight = (height) => {
  let totalInches = height * 3.937;
  let feet = Math.floor(totalInches / 12);
  let inches = Math.round(totalInches % 12);
  return feet + "' " + inches + '"';
};

export default PokemonInfo;
