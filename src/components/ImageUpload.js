import React, { useState } from 'react'
import { ImageThumb } from './ImageThumb'

const ImageUpload = (setImage) => {

    const [file, setFile] = useState('');

    const handleUpload = e => {
        setFile(e.target.files[0])
    }


    return (
        <div>
            <input type="file" onChange={handleUpload} />
            {file && <ImageThumb alt="this" image={file} />}
        </div>
    );

}
export { ImageUpload }