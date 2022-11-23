import { useContext } from "react";
import { CartContext } from "../Carrito/Carrito";

const ShopPage = () => {

    const {cartItems} = useContext(CartContext)

    return (
        <div>
            <center>
                <hr />
                <h1>Pago aceptado</h1>
                <hr />
                <div>
                {cartItems.map((item, i) => (
                <article className="product-card" key={i}>
                    <center>
                        <h3>{item.title} x {item.amount}</h3>
                        <img src={item.imageUrl} className="product-card-img"  alt=""></img>
                    </center>         
                </article>
                ))}
                </div>
                <a className="btn btn-primary" href="/viewpdf">BOLETA</a>
                <div>
                <a type="button" className="btn btn-outline-danger" href="/cancelar">CANCELAR PEDIDO</a>
                </div>
                <hr />
            </center>
        </div>
    )
}

export default ShopPage;