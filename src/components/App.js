// create your App component here
import React, {useEffect, useState} from "react";

function App(){

    const [image, setImage] = useState(null)
    const API_URL = "https://dog.ceo/api/breeds/image/random"

    useEffect(() => {
        fetch(API_URL)
            .then(r => r.json())
            .then(data => setImage(data.message))
    }, [])

    if(!image) return <p>Loading...</p>

    return(
        <img src={image} alt="A Random Dog" />
    )
}

export default App