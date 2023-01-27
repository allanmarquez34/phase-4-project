import React, { useState } from "react";

function EstateCard({ estates }){

    const [isLoved, setIsLoved] = useState(true);

    function handleClick() {
        setIsLoved(!isLoved)
    }

    return(
        <li>
            <img src={estates.items[2].image}/>
            <h2>{estates.name}</h2>
            <h3>{estates.created_at}</h3>
            {isLoved ? (
            <button onClick={handleClick} className="primary">Unloved</button>
          ) : (
            <button>Loved</button>
          )}
        </li>
    );
};

export default EstateCard