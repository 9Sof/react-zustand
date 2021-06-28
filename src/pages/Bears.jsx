import React from 'react'
import { useStoreBear } from '../store/Store'
const Bears = () => {
    const { bears, AddBear, removeAllBears } = useStoreBear()
    return (
        <div>
            <h3>Bears : {bears}</h3>
            <button onClick={AddBear}>Add Bear</button>
            <button onClick={removeAllBears}>Remove All Bears</button>
        </div>
    )
}

export default Bears;