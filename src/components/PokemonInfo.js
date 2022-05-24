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
            <td className="b">Abilities</td>
            <td style={{ whiteSpace: "pre" }}>
              {readAbilities(pokemon.abilities)}
            </td>
          </tr>
          <tr>
            <td className="b">Height</td>
            <td>{convertHeight(pokemon.height)}</td>
          </tr>
          <tr>
            <td className="b">Weight</td>
            <td>{convertWeight(pokemon.weight)}</td>
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
  abilities: PropTypes.array.isRequired,
  height: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
};

// TODO: Link to abilities, make a pokedex page for them
/** Turns the abilities JSON into a human-readable format. */
var readAbilities = (abilities) => {
  let abilityNames = [];
  console.log(abilities);
  for (let i = 0; i < 3; i++) {
    if (typeof abilities[i] === "undefined") {
      break;
    }
    console.log(abilities[i].ability.name ?? "");
    abilityNames.push(abilities[i].ability.name ?? "");
  }
  return (
    (abilityNames[0] ?? "") +
    (abilityNames[1] ? ", " + abilityNames[1] : "") +
    (abilityNames[2] ? ", \n" + abilityNames[2] + " (Hidden)" : "")
  );
};

// TODO: Make region specific formats (feet in US only)
/** Convert the decimeter value to feet & inches. */
var convertHeight = (height) => {
  let totalInches = height * 3.937;
  let feet = Math.floor(totalInches / 12);
  let inches = Math.round(totalInches % 12);
  return feet + "' " + inches + '"';
};

// TODO: Make region specific formats (pounds in US only)
/** Converts the hectogram value to pounds. */
var convertWeight = (weight) => {
  // If the weight in pounds is less than one, display in ounces.
  if (weight / 4.536 > 1) {
    // Round the value in pounds
    return Math.round(weight / 4.536) + " lbs.";
  } else {
    // Convert the value to ounces
    return Math.round(weight * 3.527) + " oz.";
  }
};

export default PokemonInfo;
