import React, { useState } from "react";

function LovedItemCard({ lovedItems }){

    const [isLoved, setIsLoved] =useState(true)

    function handleClick() {
      setIsLoved(!isLoved)
    }

    return (
        <li>
          <img src={lovedItems.image} />
          <h4>{lovedItems.name}</h4>
          <p>Price: {lovedItems.price}</p>
          {isLoved ? (
            <button onClick={handleClick} className="primary">Loved</button>
          ) : (
            <button>Unloved</button>
          )}
        </li>
      );
};

export default LovedItemCard