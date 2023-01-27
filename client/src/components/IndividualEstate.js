import React, { useEffect, useState } from "react"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom"

function IndividualEstate(){

    const {id} = useParams();

    const [estate, setEstate] = useState([])

    useEffect(() => {
        fetch(`/estate_sales/${id}`)
        .then((r) => r.json())
        .then((estate) => setEstate(estate))
    }, []);
    
    return(
        <div>
            <h1>{estate.name}</h1>
            <ItemList estate={estate}/>
        </div>
    )
}

export default IndividualEstate