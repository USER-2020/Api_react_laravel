import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api/productsapi';

// Traer todos los productos
export const allProducts = () => 
    axios.get(`${baseUrl}`);

// Guardar Producto
export const saveProduct = (body) => 
    axios.post(`${baseUrl}`, body);

// Eliminar Producto 
export const deleteProduct = (id) => 
    axios.delete(`${baseUrl}/${id}`);

// Actualizar Producto
export const updateProduct = (id, body) =>
    axios.put(`${baseUrl}/${id}`, body);

//Obtener producto por Id
export const getProduct = (id) =>
    axios.get(`${baseUrl}/${id}`);