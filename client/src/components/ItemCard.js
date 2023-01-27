import React,{useState, useEffect} from "react"

function ItemCard(){
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch("/items")
        .then((r) => r.json())
        .then(setItems)
    },[])
    console.log(items)

    return(
        <ui>
            <img src={items.image} /> 
            <li>{items.title}</li>
            <li>{items.decription}</li>
            <li>{items.price}</li>
            <li>{items.avalibility}</li>
        </ui>
    )
}

export default ItemCard