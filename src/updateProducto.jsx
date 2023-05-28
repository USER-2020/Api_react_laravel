import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Button, FormGroup, Form, Input, InputGroupText, InputGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { getProduct, updateProduct, allProducts } from './services/products';
import Swal from 'sweetalert2';

function UpdateProducto({  closeModalUpdate, refreshProductList, productById }) {


  const [categorias, setCategorias] = useState([]);
  const [talla, setTalla] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(productById.id_categoria || "");
  const [tallaSeleccionada, setTallaSeleccionada] = useState("");
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("img/pngtree-product-releasebusinessmodernproductrelease--business-fl-png-image_1494036.jpg");
  const [loading, setLoading] = useState(false);
  const [cargandoCategorias, setCargandoCategorias] = useState(true);
  const [cargandoTallas, setCargandoTallas] = useState(true);

  const prId = productById.id;

  const getAllCategoriasUpdate = () => {
    allProducts()
      .then((res) => {
        console.log(res.data.tallas);
        setTalla(res.data.tallas);
        console.log("Tallas =>>", talla);
        setCargandoTallas(false);
        console.log(res.data.categorias);
        setCategorias(res.data.categorias);
        console.log("Categorias =>>", categorias);
        setCargandoCategorias(false);
      })
      .catch((error) => {
        console.log(error);
        setCargandoCategorias(false);
        setCargandoTallas(false);
      });
  };

  const handleSelectChangeCategoria = (e) => {
    const valorSeleccionado = parseInt(e.target.value);
    setCategoriaSeleccionada(valorSeleccionado);
    console.log(valorSeleccionado);
    // Realizar otras acciones con el valor seleccionado
  };

  const handleSelectChangeTalla = (e) => {
    const valorSeleccionadoTalla = parseInt(e.target.value);
    setTallaSeleccionada(valorSeleccionadoTalla);
    console.log(valorSeleccionadoTalla);
    // Realizar otras acciones con el valor seleccionado
  };

  const handleSubmitProduct = (event)=>{
    event.preventDefault();
  
    
    const onSubmitProduct =(prId,data)=>{
      setLoading(true);
      updateProduct(prId, data)
      .then((res)=>{
          Swal.fire({
              icon: 'success',
              title: '¡Actualizacion exitosa!',
              text: 'El registro ha sido completado exitosamente.',
              confirmButtonColor: '#0d6efd',
            });
          console.log(res);
          setLoading(false);
          closeModalUpdate();
          refreshProductList();
          // window.location.reload();
      })
      .catch((err) => {
          console.log(err);
          setLoading(false);
      });
      reset();
    }
    
const data = {
    id:productById.id,
    nombre : nombre,
    descripcion : descripcion,
    precio : precio,
    id_tallas : tallaSeleccionada,
    id_categoria : categoriaSeleccionada,
    img : imagen
};

console.log("Valores capturados ", data);



onSubmitProduct(prId,data);
// limpiarCampos();
};

  useEffect(() => {
    // Establecer los valores iniciales de los campos del formulario
    setNombre(productById.nombre || "");
    setDescripcion(productById.descripcion || "");
    setPrecio(productById.precio || "");
    setCategoriaSeleccionada(productById.id_categoria || "");
    setTallaSeleccionada(productById.id_tallas || "");

    // Llamar a la función para obtener las categorías y tallas
    // getAllCategorias();
    getAllCategoriasUpdate();
    
  }, [productById]);

  return (
    <>
      <Row>
        <Col>
        <div style={{ paddingLeft: "2%", paddingRight: "2%" , marginBottom:'10px'}}>
                <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                >
              <h5 style={{ color: "#fc5241", marginBottom:"20px" }}>Actualizar producto</h5>
            </div>
            <Card style={{border:'none'}}>
              <Form onSubmit={handleSubmitProduct}>
                  {/* Nombre de producto  */}
                  <FormGroup controlId = "formBasicNombre">
                            <Input addon={true}
                            name="nombre"
                            className="form-control"
                            style={{
                                borderRadius: "50px",
                            }}
                            placeholder="Nombre de producto"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}

                            />
                    </FormGroup>

                    {/* Descripción de producto  */}
                    <FormGroup controlId = "formBasicDescripcion">
                            <Input addon={true}
                            name="descripcion"
                            className="form-control"
                            style={{
                                borderRadius: "50px",
                            }}
                            placeholder="Descripcion de producto"
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}

                            />
                    </FormGroup>

                    <FormGroup style={{display:'flex', flexDirection:'row', gap:'10px'}}>
                        
                        <Input addon={true}
                        name="precio"
                        className="form-control"
                        style={{
                            borderRadius: "50px",
                        }}
                        placeholder="Precio"
                        type='number'
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
  
                        />

                        <Input
                          addon={true}
                          name="categoria"
                          className="form-control"
                          style={{
                            borderRadius: "50px",
                          }}
                          placeholder="Categoria"
                          type="select"
                          value={categoriaSeleccionada}
                          onChange={handleSelectChangeCategoria}
                        >
                          <option value="">Categorias</option>
                          {cargandoCategorias ? (
                            <option disabled>Cargando categorías...</option>
                          ) : (
                            categorias.map((cat) => (
                              <option
                                key={cat.id}
                                value={cat.id}
                                
                              >
                                {cat.name}
                              </option>
                            ))
                          )}
                        </Input>

                        <Input
                          addon={true}
                          name="categoria"
                          className="form-control"
                          style={{
                            borderRadius: "50px",
                          }}
                          placeholder="Categoria"
                          type="select"
                          value={tallaSeleccionada}
                          onChange={handleSelectChangeTalla}
                        >
                          <option value="">Tallas</option>
                          {cargandoCategorias ? (
                            <option disabled>Cargando tallas...</option>
                          ) : (
                            talla.map((tal) => (
                              <option
                                key={tal.id}
                                value={tal.id}
                                
                              >
                                {tal.referencia}
                              </option>
                            ))
                          )}
                        </Input>
                    </FormGroup>
                      <Input addon={true}
                          name="img"
                          className="form-control"
                          style={{
                              borderRadius: "50px",
                          }}
                          value={imagen}
                          disabled
                        />

                        <Button
                        style={{
                            backgroundColor: "#fc5241",
                            borderColor: "#fc5241",
                            borderRadius: "50px",
                            marginTop: "10px"
                          }}
                            type='submit'
                                >
                            Actualizar
                        </Button>
              </Form>
            </Card>
          </div>
        </Col>
      </Row>
    </>
  )

}

export default UpdateProducto;
