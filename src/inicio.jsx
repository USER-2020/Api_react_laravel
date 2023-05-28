import React, { useEffect, useState } from 'react'
import Asignatura from './asignatura'
import { allProducts, deleteProduct, getProduct } from './services/products';
import { 
  Card, 
  CardBody, 
  Form, 
  Modal,
  ModalBody,
  Table 
} from 'reactstrap';
import RegistroProducto from './registroProducto'
import Swal from 'sweetalert2';
import UpdateProducto from './updateProducto';

const Inicio =()=> {

  const[products, setProducts] = useState([]);
  const[modalViewRegister, setModalViewRegister] = useState(false);
  const[modalViewUpdate, setModalViewUpdate] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [productById, setProductById] = useState([]);
  
  


  const closeModalRegistro = () =>{
    setModalViewRegister(false);
  }

  const closeModalUpdate = () =>{
    setModalViewUpdate(false);
  }

  const deleteProducto = (id) =>{
    deleteProduct(id)
    .then(()=>{
      Swal.fire({
        icon: 'error',
        title: 'Producto Eliminado',
        confirmButtonColor: '#dc3545',
      });
      getAllProducts();
    })
  }

  const actualizarProducto = (id) =>{
    
    // getProductById();
    getProduct(id)
    .then((res)=>{
      console.log(res.data.producto);
      setProductById(res.data.producto);
      setModalViewUpdate(true);
    })
    .catch((err)=>console.log(err));

  
  }



const getAllProducts = () => {
  allProducts()
  .then((res)=>{
    console.log(res);
    setProducts(res.data.productos);
    console.log("todos los productos", res.data.productos);

  })
}

const refreshProductList = () => {
  getAllProducts();
};

useEffect(()=>{
  getAllProducts();
  
},[])


return (
  <div>
    <h1>Nuestros Productos</h1>

    <div className="btnRegistro" style={{display:'flex', flexDirection:'row', width:'100%'}}>
      <a href="#" onClick={() => setModalViewRegister(true)} 
      style={{width:'auto', textDecoration:'none', color:'white', backgroundColor:'#fc5241', padding:'10px', borderRadius:'32px', marginLeft:'10px'}}>Registro</a>
    </div>
    <Table>
      <thead>
      <tr>
        <th>
          #
        </th>
        <th>
          Nombre
        </th>
        <th>
          Descripcion
        </th>
        <th>
          Precio
        </th>
        <th>
          Talla
        </th>
        <th>
          Categoria
        </th>
        <th>
          
        </th>
        
      </tr>
    </thead>
    <tbody>
        {products.map((product)=>
          <tr>
            <th scope="row">
              {product.id}
            </th>
            <td>
              {product.nombre}
            </td>
            <td>
              {product.descripcion}
            </td>
            <td>
              {product.precio}
            </td>
            <td>
              {product.id_tallas}
            </td>
            <td>
              {product.id_categoria}
            </td>
            <td style={{display:'flex', flexDirection:'row', gap:'8px'}}>
              <a href="#" onClick={()=> actualizarProducto(product.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#297373" class="bi bi-pencil-square" viewBox="0 0 16 16">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
                </a>
                <a href="#" onClick={()=> deleteProducto(product.id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E40000" class="bi bi-x-square" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </a>
            </td>
          </tr>
        )}
    </tbody>
    </Table>
          <Modal
            className="modal-dialog-centered modal-lg"
            toggle={() => setModalViewRegister(false)}
            isOpen={modalViewRegister}
          >
            <ModalBody>
              <RegistroProducto closeModalRegistro={closeModalRegistro} refreshProductList={refreshProductList}/>
            </ModalBody>
          </Modal>
          <Modal
            className="modal-dialog-centered modal-lg"
            toggle={() => setModalViewUpdate(false)}
            isOpen={modalViewUpdate}
          >
            <ModalBody>
              <UpdateProducto closeModalUpdate={closeModalUpdate} refreshProductList={refreshProductList} productById={productById}/>
            </ModalBody>
          </Modal>
  </div>
);

}
export default Inicio;
