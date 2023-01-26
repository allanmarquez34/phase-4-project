import React from "react"
import EstateCard from "./EstateCard"


function EstateSalesList({ estates }){

    return(
        <ul>
            {estates.map((estate) => (
                <EstateCard estate={estate} />
            ))}
        </ul>
    );
};

export default EstateSalesList