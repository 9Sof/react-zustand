import React from 'react'
import { useStorePokemon } from '../store/Store'

const TablePokemon = () => {
    const { pokemon, filter, setFilter } = useStorePokemon()
    const LOG = () => {
        console.log(filter);
    }
    return (
        <div>
            <input onChange={(e) => setFilter(e.target.value, "AAA")}></input>
            <button onClick={LOG}>LOG</button>
            <table width="100%">
                <tbody>
                    {
                        pokemon.filter(({ name: { english } }) => (
                            english.toLowerCase().includes(filter.toLowerCase()))
                        )
                            .map(({ id, name: { english }, type, base: { HP } }) => (
                                <tr key={id}>
                                    <td>{english}</td>
                                    <td>{type.join(", ")}</td>
                                    <td>{HP}</td>
                                </tr>
                            ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TablePokemon
