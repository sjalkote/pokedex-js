import PropTypes from "prop-types";

const PokemonInfo = (pokemon) => {
  // TODO: Convert to neat table, and add more data, e.g forms
  return (
    <div>
      <h4 style={{ textTransform: "capitalize" }}>
        {pokemon.name} <i style={{ color: "gray" }}>#{pokemon.id}</i>
      </h4>
      <img src={pokemon.sprite} alt={pokemon.name + " sprite"} />
      <p style={{ textTransform: "capitalize" }}>Type: {pokemon.type}</p>
    </div>
  );
};

PokemonInfo.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default PokemonInfo;
