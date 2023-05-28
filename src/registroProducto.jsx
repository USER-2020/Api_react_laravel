import React, {useEffect, useState} from 'react';

import { Card, Col, Row, Button, FormGroup, Form, Input, InputGroupText, InputGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'; 
import { allProducts, saveProduct } from './services/products';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

function RegistroProducto({closeModalRegistro, refreshProductList}) {

    const {
        reset,
        formState: { errors },
      } = useForm();

    const [categorias, setCategorias] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState();
    const [nombre, setNombre ] =useState("");
    const [descripcion, setDescripcion ] =useState("");
    const [precio, setPrecio ] =useState("");
    const [talla, setTalla ] =useState([]);
    const [tallaSeleccionada, setTallaSeleccionada ] =useState();
    const [imagen, setImagen ] = useState("img/pngtree-product-releasebusinessmodernproductrelease--business-fl-png-image_1494036.jpg");
    const [loading, setLoading] = useState(false);


    const getAllCategorias = () => {
        allProducts()
        .then((res)=>{
            console.log(res.data.tallas);
            setTalla(res.data.tallas);
            console.log("Tallas =>>", talla);
            console.log(res.data.categorias);
            setCategorias(res.data.categorias);
            console.log("Categorias =>>", categorias);
        })
    }

    const limpiarCampos = () => {
        setNombre("");
        setDescripcion("");
        setCategorias("");
        setPrecio("");
        setTalla("");
        // setCellphone("");
      };

      const onSubmitProduct =(data)=>{
        setLoading(true);
        saveProduct(data)
        .then((res)=>{
            Swal.fire({
                icon: 'success',
                title: '¡Registro exitoso!',
                text: 'El registro ha sido completado exitosamente.',
                confirmButtonColor: '#0d6efd',
              });
            console.log(res);
            setLoading(false);
            closeModalRegistro();
            refreshProductList();
            // window.location.reload();
        })
        .catch((err) => {
            console.log(err);
            setLoading(false);
        });
        reset();
      }

      const handleSelectChangeCategoria = (e) => {
        const valorSeleccionado = parseInt(e.target.value);
        setCategoriaSeleccionada(valorSeleccionado);
        console.log(valorSeleccionado);
        // return valorSeleccionado;
        // Realizar otras acciones con el valor seleccionado
      };

      const handleSelectChangeTalla = (e) => {
        const valorSeleccionadoTalla = parseInt(e.target.value);
        setTallaSeleccionada(valorSeleccionadoTalla);
        console.log(valorSeleccionadoTalla);
        // return valorSeleccionadoTalla;
        // Realizar otras acciones con el valor seleccionado
      };

    const handleSubmitProduct = (event)=>{
        event.preventDefault();
        
        
    const data = {
        nombre : nombre,
        descripcion : descripcion,
        precio : precio,
        id_tallas : tallaSeleccionada,
        id_categoria : categoriaSeleccionada,
        img : imagen
    };

    console.log("Valores capturados ", data);

    

    onSubmitProduct(data);
    // limpiarCampos();
  };

    useEffect(()=>{
        getAllCategorias();
    },[])

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
              <h5 style={{ color: "#fc5241", marginBottom:"20px" }}>Registro de producto</h5>
            </div>
            <Card style={{border:'none'}}>
                <Form onSubmit={handleSubmitProduct}>
                    {/* Nombre de producto  */}
                    <FormGroup controlId = "formBasicNombre">
                            <Input addon={true}
                            name="nombre"
                            classNanme="form-control"
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

                        <Input addon={true}
                        name="talla"
                        className="form-control"
                        style={{
                            borderRadius: "50px",
                        }}
                        placeholder="Talla"
                        type='select'
                        value={tallaSeleccionada}
                        onChange={handleSelectChangeTalla}>
                            
                        
                            <option value="">Talla</option>
                            {talla.map((tal)=> (
                                <option value={tal.id}>{tal.referencia}</option>
                            ))}
                            
                        </Input>

                        <Input addon={true}
                        name="categoria"
                        className="form-control"
                        style={{
                            borderRadius: "50px",
                        }}
                        placeholder="Categoria"
                        type='select'
                        value={categoriaSeleccionada}
                        onChange={handleSelectChangeCategoria}
                            >
                        
                            <option value="">Categoria</option>
                            {categorias.map((cat)=>
                            <option value={cat.id}>{cat.name}</option>
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
                            Registrar
                        </Button>
                    </Form>
                </Card>
                </div>
            </Col>
        </Row>
    </>
  )

}

export default RegistroProducto
