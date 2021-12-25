import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
// import { ImageThumb } from '../components/ImageThumb'

export const Plant = ({ plant }) => {
    const { deletePlant } = useContext(GlobalContext);

    return (
        <li>
            {plant.text}
            <button onClick={() => deletePlant(plant.id)} className="delete-btn">x</button>
            <img alt={plant.image.name} src={window.URL.createObjectURL(plant.image)} />
        </li>
    )
}