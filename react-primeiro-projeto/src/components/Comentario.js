import React from "react";
import './Comentario.css'

const Comentario = (props) => {
    

    return (
    <div className="Comentario">
        <h2>{props.nome}</h2>
        <p>{props.email}</p>
        <p>{props.children}</p>
        <p>{props.data.toString()}</p>
    </div>
    )
}

export default Comentario;