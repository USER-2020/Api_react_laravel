import React, { useEffect, useState } from 'react'
import Asignatura from './asignatura'
const Inicio =()=> {
  const[asignatura, setAsignatura] = useState([])
  useEffect(()=>{
    getAsignaturas()
  },[])
const getAsignaturas = async()=>{
  const res  = await axios.get('http://127.0.0.1:8000/api/asig/')
  setAsignatura(res.data)
  console.log(res)
}

return (
  <div>
    {
      asignatura.map(item => (
        <div key={item.id}>
          <Asignatura/>
        </div>
      ))
    }
  </div>
);
// export default function Inicio() {
//   return (
  
/* <div className="card">
  <div className="card-header">
    Featured
  </div>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    
    <table class="table table-hover">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        </tr>
        <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
        </tr>
        <tr>
        <th scope="row">3</th>
        <td colspan="2">Larry the Bird</td>
        <td>@twitter</td>
        </tr>
    </tbody>
    </table>
    <a href="#" classNameName="btn btn-primary">Go somewhere</a>
  </div>
</div> */
// }
  // )
}

export default Inicio;
