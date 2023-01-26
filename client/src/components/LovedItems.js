import React from "react"
import LovedItemCard from "./LovedItemCard"

function LovedItems({ lovedItems }){

    const mappedLoves = lovedItems.map(oneLove => {
        return <LovedItemCard key={oneLove.id} lovedItems={oneLove} />
    });

    return(
        <ul>{mappedLoves}</ul>
    );
};

export default LovedItems