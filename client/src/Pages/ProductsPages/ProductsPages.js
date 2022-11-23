import { useContext, useState } from 'react';
import {Link} from 'react-router-dom';
import { CartContext } from '../Carrito/Carrito';

const ProductsPage = () => {

    const [products, setProducts] = useState([]);
    const {addItemToCart} = useContext(CartContext);

    const loadProducts = () =>{
        fetch('http://localhost:3030/api/products')
        .then(res => res.json())
        .then(allProducts => setProducts(allProducts))
    }


    loadProducts();

    return (
        <div>
            <center>
                <p>
                <h1>Menú Fukusuke</h1>
                </p>
            </center>
            
            {products.map((eachProduct, index) =>{
                return (
                    <article className="product-card" key={eachProduct._id}>
                        <center>
                        <h3>{eachProduct.title}</h3>
                        </center>
                        <Link to={`/detalles/${eachProduct._id}`}>
                            <img src={eachProduct.imageUrl} className="product-card-img"  alt=""></img>
                        </Link>
                        <div className="text-center p-3" >
                            <button className="btn btn-success" onClick={() => addItemToCart(eachProduct)}>Añadir al carrito</button>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}

export default ProductsPage;