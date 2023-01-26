import React, { useState } from "react";

function EstateCard({ estate }){

    // const [loved, setIsLoved] = useState(true);

    // const itemsArray = estate.items
    // console.log(itemsArray)

    return(
        <li>
            <img src={estate.item[0].image}/>
            <h4>{estate.name}</h4>
            <p></p>
        </li>
    );
};

export default EstateCard