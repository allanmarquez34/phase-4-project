import React, { useEffect, useState} from "react";
import ItemCard from "./ItemCard";


function ItemList({estate}){
    const [estateItems, setEstateItems] = useState([])

    useEffect(() => {
    fetch("/items")
    .then((r)=> r.json())
    .then((estateItems) => setEstateItems(estateItems));
    }, []);

    const anotherItemsArray = []

    const correctItems = estateItems.map((item) => {
        if (item.estate_sale_id === estate.id)
        anotherItemsArray.push(item)
    });

    const mappedItems = anotherItemsArray.map(oneItem => {
        return <ItemCard key={oneItem.id} item={oneItem} />
    })

    return (
        <ul>
            {mappedItems}
        </ul>
    );
}

export default ItemList