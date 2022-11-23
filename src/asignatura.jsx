import React from "react";

const Asignatura = (props) => (
    <div className="card">
  <div className="card-header">
    ASIGNATURAS
  </div>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    
    <table className="table table-hover">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Credito</th>
        <th scope="col">Int_horaria</th>
        <th scope="col">Carrera_asociada</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <th scope="row">{props.id}</th>
        <td>{props.nombre}</td>
        <td>{props.cant_creditos}</td>
        <td>{props.intens_horaria}</td>
        <td>{props.intens_horaria}</td>
        <td>{props.crr_asociada}</td>
        </tr>
   </tbody>
    </table>
    <a href="#" classNameName="btn btn-primary">Go somewhere</a>
  </div>
</div> 
)

export default Asignatura;