import React , {useContext}from "react";
import { CartContext } from "../Carrito/Carrito";
import styles from "./styles.module.scss";

export const ItemCart = ({ item }) => {
    /* Traemos del context las funciones para agregar y sacar productos del carrito */
    const { addItemToCart, deleteItemToCart } = useContext(CartContext);
  
    /* Desestructuramos el item para sacar solo la id */
    //const { amount } = item;
  
    return (
      <div className={styles.cartItem}>
        <img src={item.imageUrl} alt={item.title} />
        <div className={styles.dataContainer}>
          <div className={styles.left}>
            <p>{item.title}</p>
            <div className={styles.buttons}>
              <button onClick={() => deleteItemToCart(item)}>
                Quitar
              </button>
              <button onClick={() => addItemToCart(item)}>
                Agregar
              </button>
            </div>
          </div>
          <div className={styles.right}>
            <div>{item.amount}</div>
            <p>Total: ${item.amount * item.length}</p>
          </div>
        </div>
      </div>
    );
  };