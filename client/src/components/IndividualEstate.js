<<<<<<< HEAD
import React from "react"
// import ItemCard from "./ItemCard"

function IndividualEstate(){


    return(
        <div>
            {/* <ItemCard/> */}
=======
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
>>>>>>> 69596e18e2d9b3e912e3cb5613f41ad2834b9d63
        </div>
    )
}

export default IndividualEstate