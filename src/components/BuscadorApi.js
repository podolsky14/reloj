import { useEffect, useState } from "react";
import "../index.css"


export default function BuscadorApi() {
const[usuario, setUsuario] = useState([])
const [tablaUsuarios, setTablaUsuarios]= useState([]);
const[busqueda, setBusqueda] = useState([])

useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then(res=>{
        if(res.ok)
        return res.json()
        else
        throw (res)
      })
      .then(res=>{
        setUsuario(res)
        setTablaUsuarios(res);
    
      })
      .catch(res=>{
        setUsuario(null)
      })

  }, [])

 

  const filtrar=(terminoBusqueda)=>{
    var resultadosBusqueda= tablaUsuarios.filter((elemento)=>{
      if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ){
        return elemento;
      }
    });
    setUsuario(resultadosBusqueda);
  }

  const onChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }

  return (
    <>
<form>
<input value={busqueda} onChange={onChange}/>
<button>BUSCAR</button>
</form>


       <table className="table border border-primary">
             <thead>
               <tr>
                 <th >ID</th>
                 <th >Nombre</th>
                 <th >Teléfono</th>
                 <th >Correo</th>
               </tr>
             </thead>
    
             <tbody>
               {
               usuario.map((el)=>(
                 <tr key={el.id}>
                   <td>{el.id}</td>
                   <td>{el.name}</td>
                   <td>{el.phone}</td>
                   <td>{el.email}</td>
                 </tr>
               ))}
             </tbody>
    
           </table>
    
     
     
     
     
     
     </>



  )
}
