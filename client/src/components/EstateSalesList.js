import React from "react"
import EstateCard from "./EstateCard"


function EstateSalesList({ estates }){

    const mappedEstates =estates.map(oneEstate => {
        return <EstateCard key={oneEstate.id} estates={oneEstate} />
    })

    return(
        <ul>
            {mappedEstates}
        </ul>
    );
};

export default EstateSalesList