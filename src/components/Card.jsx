import React from "react";

const Card = (props) => {

    return(
        <li className="Card">
            <h1>Card</h1>
            <p>{props.id}</p>
            <p>{props.nome}</p>
            <p>{props.preco}</p>
            <p>{props.categoria}</p>
        </li>
    )

}

export default Card
