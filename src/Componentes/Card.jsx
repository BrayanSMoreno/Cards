import "./Card.css"

function Card({Titulo = "Titulo", Descripcion = "Descripcion"}){
    return (
   
        <div className="Card">
        <h2>{Titulo}</h2>
        <p>{Descripcion}</p>
          
        </div>
       
    )
}

export default Card;