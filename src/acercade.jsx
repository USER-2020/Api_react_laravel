import React from 'react'

export default function Acercade() {
  return (
    <div>
 

   
    <nav>
        <ul className="pagination">
        <li className="page-item"><a class="page-link" href="#">Previous</a></li>
        <li className="page-item"><a class="page-link" href="#">1</a></li>
        <li className="page-item"><a class="page-link" href="#">2</a></li>
        <li className="page-item"><a class="page-link" href="#">3</a></li>
        <li className="page-item"><a class="page-link" href="#">Next</a></li>
    </ul>
    </nav>
    
    <div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    </div>
    <div className="progress">
    <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <div className="progress">
    <div className="progress-bar" role="progressbar" style={{"width": "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <div className="progress">
    <div className="progress-bar" role="progressbar" style={{"width": "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <div className="progress">
    <div className="progress-bar" role="progressbar" style={{"width": "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <div className="progress">
    <div className="progress-bar" role="progressbar" style={{"width": "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  </div>  
  )
}
