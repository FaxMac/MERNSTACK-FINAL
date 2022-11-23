import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useEffect, useContext, useState } from "react";
import { CartContext } from "../Carrito/Carrito";
import { ItemCart } from "../ItemCart";
import { LoginButton } from "../Auth0/login";

const VerCarrito = () => {
  const {isAuthenticated} = useAuth0();
  const [productsLength, setProductsLength] = useState(0);

  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    setProductsLength(
      cartItems?.reduce((previous, current) => previous + current.amount, 0)
    );
  }, [cartItems]);

  const total = cartItems?.reduce(
    (previous, current) => previous + current.amount * current.length,
    0
  );

  return (
    <div>
        <div>
          {cartItems.length === 0 ? (
            <center>
            <h1>Tu carrito está vacio</h1>
            <a className="btn btn-danger" href="/productos">Agrega productos</a>
            
            </center>
          ) : (
            <div>
              {cartItems.map((item, i) => (
                <table className="table table-hover">
                    <tbody>
                        <tr className="table-success">
                            <ItemCart key={i} item={item} />
                        </tr>
                    </tbody>
                </table>
              ))}
            </div>
          )}
        <h4>Total productos: {productsLength}</h4>
          <h2>Total: ${total}</h2>
          <center>
          { isAuthenticated ? (
              <>
                <a className="btn btn-success" href="/registro">Pagar</a>
              </>
              ) : (
                <>
                <h3>Debes Ingresar para comprar: <LoginButton/></h3>
                </>
              )}
          </center>
        </div>
    </div>
  );
};

export default VerCarrito;