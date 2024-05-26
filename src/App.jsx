
import './App.css'
import Card from './Componentes/Card'
import Lenguajes from './datos/Lenguajes'

function App() {

  const lenguajesList = Lenguajes.map((l) =>{
    return <Card Titulo= {l.nombre} Descripcion= {l.comentario} />
  });

  return (
   
      <div className='App'> 
      <h1>Montando componentes react utilizando vite</h1>
      <div className='container'>
      {lenguajesList}
      </div>
      </div>
     
  )
}

export default App
