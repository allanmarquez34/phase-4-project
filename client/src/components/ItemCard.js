<<<<<<< HEAD
import React,{useState, useEffect} from "react"

function ItemCard(){
    const [items, setItems] = useState([])
=======
import React,{useState} from "react"

function ItemCard({item}){
    
    function handleClick(){
        
    }

    return(
       <li>
        <img src={item.image}/>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <h3>{item.price}</h3>
        <button></button>
       </li>
    )
>>>>>>> 69596e18e2d9b3e912e3cb5613f41ad2834b9d63

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