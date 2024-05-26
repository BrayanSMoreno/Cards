import React from "react"

function VistaLenguaje({len}){
    return(

        <div>
                <h1>{len.nombre}</h1>
                <h2>{len.comentario}</h2>
                <img src= {len.image} alt= {len.image + "image"} />
        </div>
    )
}


export default VistaLenguaje;