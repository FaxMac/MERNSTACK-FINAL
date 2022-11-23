import { createContext, useEffect, useState } from "react";

export const CartContext =  createContext()

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        try {
            const productosEnLocalStorage = localStorage.getItem("CartProducts");
            return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];
        } catch (error) {
            return [];
        }
    });
    useEffect(() => {
        localStorage.setItem("CartProducts", JSON.stringify(cartItems));
        console.log(cartItems);
    }, [cartItems]);

    const addItemToCart = (product) => {
        const inCart = cartItems.find(
            (productInCart) => productInCart._id === product._id
        );
        if(inCart){
            setCartItems(
                cartItems.map((productInCart) => {
                    if(productInCart._id === product._id) {
                        return{ ...inCart, amount: inCart.amount + 1};
                    }else return productInCart;
                })
            );
        }else {
            setCartItems([...cartItems, {...product, amount: 1}]);
        }
    };

        const deleteItemToCart = (product) => {
            const inCart = cartItems.find(
                (productInCart) => productInCart._id === product._id
            );
            if(inCart.amount === 1){
                setCartItems(
                    cartItems.filter(productInCart => productInCart._id !== product._id)
                );
                
            }else{
                setCartItems(
                    cartItems.map((productInCart) => {
                    if(productInCart._id === product._id){
                        return {...inCart, amount: inCart.amount - 1}
                    }else return productInCart;
                }));
            }
        };

        return (
            <CartContext.Provider value={{cartItems, addItemToCart, deleteItemToCart}}>
                {children}
            </CartContext.Provider>
        )

    };