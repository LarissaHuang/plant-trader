import React, { useContext } from 'react';
import { Plant } from './Plant';
import { GlobalContext } from '../context/GlobalState';

export const Gallery = () => {
    const { plants } = useContext(GlobalContext);

    return (
        <ul>
            {plants.map(plant => (
                <Plant key={plant.id} plant={plant} />
            ))}
        </ul>
    )
}