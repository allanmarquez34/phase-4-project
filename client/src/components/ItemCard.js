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

}

export default ItemCard