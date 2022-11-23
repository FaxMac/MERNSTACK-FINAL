import { useState, useContext } from 'react';
import {useParams} from 'react-router-dom';
import { CartContext } from '../Carrito/Carrito';

const ProductDetails = () => {
    const {addItemToCart} = useContext(CartContext);
    const {_product_id} = useParams()
    const [product, setProduct] = useState([])
    const loadProductDetail = () =>{
        fetch(`http://localhost:3030/api/products/details/${_product_id}`)
        .then(response => response.json())
        .then(product => setProduct(product))
    }
    loadProductDetail()
    return (
        <main>
            <div >
            <h1>Detalle de producto {product.title}</h1>
            </div>
            <center>
            <img src={product.imageUrl} className="img" alt="" width='50%'></img>
            <hr />
            <h3>{product.description}</h3>
            <hr/>
            <h5>Precio: {product.length}</h5>
            </center>
            <hr />
            <a type='button' className="btn btn-primary" href="/productos">Volver</a>
            <button className="btn btn-success" onClick={() => addItemToCart(product)}>Añadir al carrito</button>
            <p>{}</p>
        </main>
    )
}

export default ProductDetails;