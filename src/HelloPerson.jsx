import './HelloPerson.css';

function HelloPerson({nome, idade, foto, caracteristicas}) {

    return(
        <div className="container">
        {nome && 
        <p className="desc">
           <img 
           src={foto} 
           alt={nome} 
           width="120px"
           height="120px"
            />
        {nome} {idade}
        <button>Seguir</button>
        <span>{caracteristicas}</span> <a href='http://localhost:3000/' title='Mostrar mais'> Mostrar mais</a> </p> }  
        </div> 
    );
}
export default HelloPerson;

