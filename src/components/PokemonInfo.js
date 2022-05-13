const PokemonInfo = (pokemon) => {
  // TODO: Convert to neat table, and add more data, e.g forms
  return (
    <div>
    <h5 style={{ textTransform: "capitalize" }}>{pokemon.name}</h5>
    Type: {pokemon.type}
    </div>
  )
}

export default PokemonInfo
