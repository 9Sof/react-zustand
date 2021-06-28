import { useEffect } from 'react';
import TablePokemon from '../component/TablePokemon';
import { useStorePokemon } from '../store/Store'

const POKEMON_UEL = "https://gist.githubusercontent.com/jherr/23ae3f96cf5ac341c98cd9aa164d2fe3/raw/f8d792f5b2cf97eaaf9f0c2119918f333e348823/pokemon.json"

const Pokemon = () => {
    const { setPokemon } = useStorePokemon()

    useEffect(() => {
        fetch(POKEMON_UEL)
            .then(res => res.json())
            .then(pokemon => setPokemon(pokemon))
            .catch((err) => console.log(err))
    })
    return (
        <div>
            <TablePokemon />
        </div>
    )
}

export default Pokemon
