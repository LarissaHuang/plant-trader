import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { ImageThumb } from '../components/ImageThumb'

export const AddPlant = (props) => {
    const [text, setText] = useState('');

    const [amount, setAmount] = useState('');
    const { addPlant } = useContext(GlobalContext);

    const [image, setImage] = useState('');

    const handleUpload = e => {
        setImage(e.target.files[0])
    }


    const onSubmit = e => {

        console.log(image.dataURL);

        // const handleUpload = e => {
        //     setImage([e.target.files[0]])
        // }

        e.preventDefault();
        const newPlant = {
            id: Math.floor(Math.random() * 1000000000),
            text,
            amount,
            image
        }

        addPlant(newPlant)
    }
    return (
        <>
            <h3>Add new Plant</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label for="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />

                    </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} id="amount" placeholder="enter amount.." />

                    <input type="file" webkitdirectory name={image} accept=".jpg, .jpeg, .png" onChange={handleUpload} />

                    {/* <img alt="" src={image} /> */}



                    {/* {image && <ImageThumb alt="this" image={image} />} */}
                </div>
                <button className="btn">Add Plant</button>
            </form>
        </>
    )
}
